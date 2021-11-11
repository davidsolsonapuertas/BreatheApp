const express = require('express');
const PORT = 5001;
const app = express();
const routers = require('./routers');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/api', routers.userRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
