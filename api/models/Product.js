import mongoose from 'mongoose'


const ReviewSchema = mongoose.Schema({
  name:{type:String, required:true},
  rating:{type:Number, required:true},
  comment:{type: String, required: true}
}, {
  timeStamps: true
})

const ProductSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true,
  },
  size:{
    type: Number,
    required: true,
    default:0
  },
  description:{
    type: String,
    required: true,
  },
  categroy:{
    type: String,
    required: true,
  },
  rating:{
    type: Number,
    required: true,
    default: 0
  },
  price:{
    type: Number,
    required: true,
    default: 0
  },
  numReviews:{
    type: Number,
    required: true,
    default: 0
  },
  countInStock:{
    type: Number,
    required: true,
    default: 0
  },
  reviews:[ReviewSchema]
}, {
  timeStamps: true
})

const Product = mongoose.model('Product', ProductSchema)

export default Product