const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/db');
const router = require('./routes/user')

const app = express();

connectDb();
const port = process.env.PORT || 3020;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});