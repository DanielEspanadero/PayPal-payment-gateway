import { Router } from 'express';

const router = Router();

router.get('/create-order', (req, res) => {
    res.send('Creating an order');
});

router.get('/capture-order', (req, res) => {
    res.send('Capturing order');
});

router.get('/cancel-order', (req, res) => {
    res.send('Canceling order');
});

export default router;