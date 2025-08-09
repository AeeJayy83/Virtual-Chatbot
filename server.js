require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require("path")
const app = express();
const port = 5500;

// API route to get Gemini data
app.get('/api/gemini-data', async (req, res) => {
  try {
    const response = await axios.get(process.env.GEMINI_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from Gemini');
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});