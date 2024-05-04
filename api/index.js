import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'

const app = express();

app.listen(3000, ()=>{
    console.log('Server is listing on 3000!!')
})

mongoose.connect('mongodb://localhost:27017/Blog')
.then(()=> {
    console.log('MongoDb is connected')
})
.catch((err)=>{
    console.log(err)
})

app.use('/api/user', userRoutes);