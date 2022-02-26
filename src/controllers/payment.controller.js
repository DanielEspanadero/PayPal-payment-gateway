export const createOrder = (req, res) => { 
    res.send('Creating order');
};

export const captureOrder = (req, res) => {
    res.send('Capturing an order');
};

export const cancelOrder = (req, res) => {
    res.send('Cancel an order');
};