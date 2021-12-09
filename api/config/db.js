import mongoose from 'mongoose'

const connectDB =  async()=> {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }) 

    console.log(`MongoDb connected: ${conn.connection.host.green.bold}`)
  } catch (error) {
    console.log(`Error message: ${error.message}`)
    process.exit(1)
  }
}
export default connectDB