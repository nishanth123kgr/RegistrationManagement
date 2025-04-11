const express = require('express');
const app = express();
const logger = require('./utils/logger');

require('dotenv').config();


const userRoutes = require('./routes/userRoutes');
const paymentRoute = require('./routes/paymentRoutes');

app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/payment', paymentRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`)
});
