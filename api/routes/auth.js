import express from 'express'
import User from '../models/User.js'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'


const router = express.Router()

//Register a User
router.post('/register', async (req, res) =>{
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
  })

  try {
    const saveUser = await newUser.save()
    
    res.status(201).json(saveUser)
    console.log('User Created'.yellow.bold)

  } catch (error) {
    console.log(`Error Message: ${error.message}`.red.bold)
    res.status(500).json(error.message)
  }
})

//Login a User
router.post('/login', async (req, res) => {  
  const userEmail = req.body.email
  try {
    const user = await User.findOne({email: userEmail})

    !user && res.status(401).json({msg:"Invalid mail"})

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

    OriginalPassword !== req.body.password && res.status(401).json({msg:"Incorrect Password"})

    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin
    }, process.env.JWT_KEY, {expiresIn: "3d"})

    const {password, ...others} = user._doc
    res.status(201).json({others, accessToken})
    console.log('User Logged in'.green.bold)
  } catch (error) {
    console.log(`Error Message: ${error.message}`.red.bold)
    res.status(500).json(error.message)
  }
})

export default router