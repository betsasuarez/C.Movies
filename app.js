
const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/movies', movieRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

