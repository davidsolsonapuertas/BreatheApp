const express = require('express');
const app = express();
const routers = require('./routers');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/api', routers.userRouter);

app.use(express.static('public'));

// define the first route
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

// start the server listening for requests
app.listen(3000, () => console.log('Server is running...'));
