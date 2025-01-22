const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON request body
app.post('/user', (req, res) => {
  console.log(req.body); // req.body is now correctly populated
  res.send('User created');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});