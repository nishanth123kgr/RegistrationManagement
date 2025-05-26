const userController = require('./userController');


exports.handlePaymentFormSubmission = async (req, res) => {

    const body = req.body;

    console.log(body);

    userController.createUser(body);

}
