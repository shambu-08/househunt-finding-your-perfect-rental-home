const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/config');

dotenv.config();
connectDB(); // 🧠 Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('HouseHunt API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
