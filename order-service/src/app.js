const express = require('express');
const app = express();
app.use(express.json());

// Order routes
app.get('/orders', (req, res) => res.send([{ id: 1, userId: 1, item: 'Laptop' }]));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
