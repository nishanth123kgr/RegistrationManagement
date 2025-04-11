const supabase = require('@supabase/supabase-js')
const logger = require('../utils/logger')

exports.getAllUsers = (req, res) => {
    res.send('List of all users');
};

exports.createUser = async (userData) => {

    logger.info("Creating user in supabase");
    logger.info(userData);

    const supabaseCLient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_ANON_KEY);

    const data = {
        "p_name" : userData["Full Name"],
        "p_email" : userData.Email,
        "p_food" : userData.Food,
        "p_college" : userData["College name"],
        "p_upi_id": userData["UPI ID"],
        "p_transaction_id": userData["Transaction ID"]
    };
    logger.info("Data to be sent to supabase");
    logger.info(data);



    

    const { error } = await supabaseCLient
        .rpc("createUser", data);

    if(error)
    {
        logger.error("Error creating user in supabase");
        logger.error(error);
        console.log("Error creating user in supabase");
        console.log(error);
    }
    else
    {
        logger.info("User created in supabase");
    }
};
