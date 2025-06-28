import express from 'express';
import cors from 'cors';
import productRoutes from './routes/products.js';

const app = express();
app.use(cors());
app.use('/api/products', productRoutes);

app.listen(3000, () => console.log('Backend ready at http://localhost:3000'));
