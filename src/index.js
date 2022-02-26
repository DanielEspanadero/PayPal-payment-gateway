import express from 'express';
import paymentRouter from './routes/payment.routes';

const app = express();

app.use(paymentRouter);

app.listen(3000);
console.log('server on port', 3000);