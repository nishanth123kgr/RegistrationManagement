const supabase = require('@supabase/supabase-js')
const logger = require('../utils/logger')

exports.getAllUsers = (req, res) => {
    res.send('List of all users');
};

exports.createUser = async (userData) => {

    logger.info("Creating user in supabase");
    logger.info(JSON.stringify(userData));

    const supabaseCLient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_ANON_KEY);

    const data = {
        "p_name": userData["Full Name"],
        "p_email": userData.Email,
        "p_food": userData.Food,
        "p_college": userData["College name"],
        "p_upi_id": userData["UPI ID"],
        "p_transaction_id": userData["Transaction ID"],
        "p_phone": userData["Phone Number"]
    };
    logger.info("Data to be sent to supabase");
    logger.info(data);





    const { error } = await supabaseCLient
        .rpc("createUser", data);

    if (error) {
        logger.error("Error creating user in supabase");
        logger.error(error);
        console.log("Error creating user in supabase");
        console.log(error);
    }
    else {
        logger.info("User created in supabase");
    }
};

exports.isUserExistsWithEmail = async (email) => {
    logger.info("Checking if user exists with email: " + email);
    const supabaseCLient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_ANON_KEY);

    const { data, error } = await supabaseCLient
        .from('users')
        .select('*')
        .eq('email', email);

    if (error) {
        logger.error("Error checking if user exists with email: " + email);
        logger.error(error);
        return false;
    }

    if (data.length > 0) {
        logger.info("User exists with email: " + email);
        return true;
    } else {
        logger.info("User does not exist with email: " + email);
        return false;
    }
}
exports.getUserByEmail = async (email) => {
    logger.info("Getting user by email: " + email);
    const supabaseCLient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_ANON_KEY);

    const { data, error } = await supabaseCLient
        .from('users')
        .select('*')
        .eq('email', email);

    if (error) {
        logger.error("Error getting user by email: " + email);
        logger.error(error);
        return null;
    }

    if (data.length > 0) {
        logger.info("User found with email: " + email);
        return data[0];
    } else {
        logger.info("User not found with email: " + email);
        return null;
    }
}

exports.getUserIDByEmail = async (email) => {
    // Use the getUserByEmail function to get the user object
    const user = await this.getUserByEmail(email);
    // If the user exists, return the user ID    
    if (user) {
        return user.id;
    } else {
        return null;
    }
}
