import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import { notFound, erroHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config()

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cookieParser());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>res.send('Server is ready'));
app.use(notFound);
app.use(erroHandler);

app.listen(PORT, ()=>console.log(`Server has started at port: ${PORT}`));

