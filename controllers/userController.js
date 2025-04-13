const supabase = require('@supabase/supabase-js')
const logger = require('../utils/logger')

exports.getAllUsers = (req, res) => {
    res.send('List of all users');
};

exports.createUser = async (userData) => {

    logger.info("Creating user in supabase");
    logger.info(JSON.stringify(userData));

    const supabaseCLient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_ANON_KEY);

    const user = {
        "p_name": userData["Full Name"],
        "p_email": userData.Email,
        "p_food": userData.Food,
        "p_college": userData["College name"],
        "p_upi_id": userData["UPI ID"],
        "p_transaction_id": userData["Transaction ID"],
        "p_phone": userData["Phone Number"]
    };
    logger.info("Data to be sent to supabase");
    logger.info(user);





    const { data,  error } = await supabaseCLient
        .rpc("createUser", user);

    if (error) {
        logger.error("Error creating user in supabase");
        logger.error(error);
        console.log("Error creating user in supabase");
        console.log(error);
    }
    else {
        console.log("returned data", data);
        
        
        logger.info("User created in supabase with ID: " + data[0].id);
        return data[0].id;
    }
};

exports.getUserDetailsAndEvents = async (email) => {
    logger.info("Fetching user details and events for email: " + email);
    const supabaseCLient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_ANON_KEY);

    // Fetch user details
    const { data: userData, error: userError } = await supabaseCLient
        .from('users')
        .select('*')
        .eq('email', email);

    if (userError) {
        logger.error("Error fetching user details for email: " + email);
        logger.error(userError);
        return { exists: false, userDetails: null, events: [] };
    }

    if (userData.length === 0) {
        logger.info("No user found with email: " + email);
        return { exists: false, userDetails: null, events: [] };
    }

    const user = userData[0];

    // Fetch events the user is part of
    const { data: eventsData, error: eventsError } = await supabaseCLient
        .from('participation')
        .select('event_name')
        .eq('user_id', user.id);

    if (eventsError) {
        logger.error("Error fetching events for user with email: " + email);
        logger.error(eventsError);
        return { exists: true, userDetails: user, events: [] };
    }

    const eventNames = eventsData.map(event => event.event_name);

    // Fetch transaction details for the user
    const { data: transactionData, error: transactionError } = await supabaseCLient
        .from('transactions')
        .select('*')
        .eq('user_id', user.id);

    if (transactionError) {
        logger.error("Error fetching transaction details for user with email: " + email);
        logger.error(transactionError);
    } else {
        logger.info("Transaction details fetched successfully for user with email: " + email);
        if (transactionData.length > 0) {
            let transaction = transactionData[0];
            user.transactionID = transaction.transaction_id;
            user.upiID = transaction.upi_id;
        } else {
            user.transactions = [];
        }
    }

    logger.info("User details and events fetched successfully for email: " + email);
    return {
        exists: true,
        userData: user,
        events: eventNames
    };
};
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
