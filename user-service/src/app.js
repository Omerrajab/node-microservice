const express = require('express');
const app = express();
app.use(express.json());

// User routes
app.get('/users', (req, res) => res.send([{ id: 1, name: 'John Doe' }]));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
