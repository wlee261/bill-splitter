const express = require('express');
const billRoutes = require('./src/bills/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.use('/api/v1/bills', billRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
