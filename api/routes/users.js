import express from 'express'

import { 
  verifyToken, 
  verifyTokenAndAuthorization
} from '../middleware/verification.js'


const router = express.Router()


// Update user
// router.put('/:id', verifyTokenAndAuthorization, (req,res) => {
//   if(req.body.password){
//     req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
//   }
// })

export default router