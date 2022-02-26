import express from 'express';
import paymentRouter from './routes/payment.routes';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(paymentRouter);

app.listen(3000);
console.log('server on port', 3000);