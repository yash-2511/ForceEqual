import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes/userRoutes.js';

const app = express();
dotenv.config();
app.use(bodyParser.json());

const PORT = process.env.PORT || 7000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/forceEqual';

mongoose.connect(MONGO_URI).then(()=>{
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }   );
}).catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});
app.use('/api/user', router);
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});