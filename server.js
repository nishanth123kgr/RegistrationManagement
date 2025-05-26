const express = require('express');
const app = express();
const logger = require('./utils/logger');

require('dotenv').config();

const cors = require('cors');

corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? 
        [
            'https://registration-management-mnkyyztg3-nishanth123kgrs-projects.vercel.app',
            'https://register.bluu.in',
            'https://bluu.in',
            'https://www.bluu.in'
        ] : 
        ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static('static'))

app.set('view engine', 'ejs');



const userRoutes = require('./routes/userRoutes');
const paymentRoute = require('./routes/paymentRoutes');
const registrationFormRouter = require('./routes/registrationFormRouter');


app.use('/api/user', userRoutes);
app.use('/api/payment', paymentRoute);
app.use('/register', registrationFormRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server Started and Running on port ${PORT}`);
    console.log(`Server Started and Running on port ${PORT}`)
});
