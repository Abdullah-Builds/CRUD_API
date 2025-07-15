import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json())
app.use('/users',userRoutes)



// MongoDB URI (replace with yours from Atlas)
const CONNECTION_URL = 'mongodb+srv://Nodedb:Nodedb@nodeapi.rt2vhe6.mongodb.net/?retryWrites=true&w=majority&appName=NodeAPI';

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.error('Connection error:', error.message));





// app.get('/',(req,res)=>{
//     console.log('[TEST]!')
//     res.send('Hello From HomePage')
// });


