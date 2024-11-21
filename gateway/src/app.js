const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// Gateway routes
app.get('/', async (req, res) => {
 
  res.send("gateway is active");
});
app.get('/users', async (req, res) => {
  const response = await axios.get('http://user-service:3001/users');
  res.send(response.data);
});

app.get('/orders', async (req, res) => {
  const response = await axios.get('http://order-service:3002/orders');
  res.send(response.data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
