const supabase = require('@supabase/supabase-js')
const logger = require('../utils/logger')
const userController = require('./userController');

exports.showRegisterForm = (req, res) => {
    res.render('registrationForm');
}


// exports.handleRegistrationFormSubmission = async (req, res) => {
//     const body = req.body;

//     logger.info("Handling registration form submission");
//     logger.info(JSON.stringify(body));

//     const supabaseCLient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_ANON_KEY);

//     const events = body.events;
//     const leadID = await userController.getUserIDByEmail(body.email);


//     for (let i = 0; i < events.length; i++) {
//         const event = events[i];

//         const teamData = {
//             "lead": leadID,

//         }        

//         let { data, error } = await supabaseCLient.from('team').insert(
//             teamData
//         ).select();

//         if(error) {
//             logger.error("Error inserting into teams table");
//             logger.error(JSON.stringify(error));
//             console.log("Error inserting into teams table");
//             console.log(JSON.stringify(error));
//             res.status(500).json({
//                 message: 'Error Creating the Team, contact the support',
//                 success: false,
//             });
//         }
//         const teamID = data[0].id;

//         const {error: registrationError} = await supabaseCLient.from('registrations').insert({
//             "team_id": teamID,
//             "event": event.name,
//             "extra_data": event.extraData
//         });

//         if(registrationError) {
//             logger.error("Error inserting into registrations table");
//             logger.error(JSON.stringify(registrationError));
//             console.log("Error inserting into registrations table");
//             console.log(JSON.stringify(registrationError));
//             res.status(500).json({
//                 message: 'Error Creating the Team, contact the support',
//                 success: false,
//             });
//         }


//         event.members.forEach(async memberID => {
//             let user_id = await userController.getUserIDByEmail(memberID);
//             const {error} = await supabaseCLient.from('team_members').insert({
//                 "team_id": teamID,
//                 "user_id": user_id
//             });

//             if(error) {
//                 logger.error("Error inserting into team_members table");
//                 logger.error(JSON.stringify(error));
//                 console.log("Error inserting into team_members table");
//                 console.log(JSON.stringify(error));
//                 res.status(500).json({
//                     message: 'Error Creating the Team, contact the support',
//                     success: false,
//                 });
//             }

//             const {error: participationError} = await supabaseCLient.from('participation').insert({
//                 "team_id": teamID,
//                 "user_id": user_id,
//                 "event_name": event.name
//             });

//             if(participationError) {
//                 logger.error("Error inserting into participation table");
//                 logger.error(JSON.stringify(participationError));
//                 console.log("Error inserting into participation table");
//                 console.log(JSON.stringify(participationError));
//                 res.status(500).json({
//                     message: 'Error Creating the Team, contact the support',
//                     success: false,
//                 });
//             }

//         });
//         console.log(data);
//     }


//     res.json({
//         message: 'Form submitted successfully',
//         success: true,
//     });
// }

exports.handleRegistrationFormSubmission = async (req, res) => {
    const body = req.body;

    logger.info("Handling registration form submission");
    logger.info(JSON.stringify(body));


    const supabaseCLient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_ANON_KEY);

    let lead = body.lead;

    const user = {
        "p_name": lead.fullName,
        "p_email": lead.email,
        "p_food": lead.foodPreference,
        "p_college": lead.collegeName,
        "p_upi_id": lead.upiID,
        "p_transaction_id": lead.transactionID,
        "p_phone": parseInt(lead.phoneNumber)
    };

    console.log(user)

    logger.info("Data to be sent to supabase");
    logger.info(JSON.stringify(user));



    const { data: userID, error: userError } = await supabaseCLient
        .rpc("create_or_get_user", user);
    if (userError) {
        logger.error("Error creating user in supabase");
        logger.error(userError);
        console.log("Error creating user in supabase");
        console.log(userError);
        return res.status(500).json({
            message: 'Error Creating the User, contact the support',
            success: false,
        });
    }

    const leadID = userID;

    const events = body.events;

    const teamMates = body.teamMates;

    for (let event of events) {
        const eventName = event.name;
        const extraData = event.extraData;

        const teamData = {
            "lead": leadID,
        }

        let { data: teamDataResponse, error: teamError } = await supabaseCLient
            .from('team')
            .insert(
                teamData
            ).select();


        if (teamError) {
            logger.error("Error inserting into teams table");
            logger.error(JSON.stringify(teamError));
            console.log("Error inserting into teams table");
            console.log(JSON.stringify(teamError));
            return res.status(500).json({
                message: 'Error Creating the Team, contact the support',
                success: false,
            });
        } 

        const teamID = teamDataResponse[0].id;

        const { error: registrationError } = await supabaseCLient
            .from('registrations')
            .insert({
                "team_id": teamID,
                "event": eventName,
                "extra_data": extraData
            });

        if (registrationError) {
            logger.error("Error inserting into registrations table");
            logger.error(JSON.stringify(registrationError));
            console.log("Error inserting into registrations table");
            console.log(JSON.stringify(registrationError));
            return res.status(500).json({
                message: 'Error Creating the Team, contact the support',
                success: false,
            });
        }

        const {error: participationError} = await supabaseCLient
            .from('participation')
            .insert({
                "team_id": teamID,
                "user_id": leadID,
                "event_name": eventName
            });
        if (participationError) {
            logger.error("Error inserting into participation table");
            logger.error(JSON.stringify(participationError));
            console.log("Error inserting into participation table");
            console.log(JSON.stringify(participationError));
            return res.status(500).json({
                message: 'Error Creating the Team, contact the support',
                success: false,
            });
        }
        


        for (let member of event.team) {
            let { data: userID, error: userError } = await supabaseCLient.rpc("create_or_get_user", {
                "p_name": teamMates[member].fullName,
                "p_email": teamMates[member].email,
                "p_food": teamMates[member].foodPreference,
                "p_college": teamMates[member].collegeName,
                "p_upi_id": teamMates[member].upiID,
                "p_transaction_id": teamMates[member].transactionID,
                "p_phone": parseInt(teamMates[member].phoneNumber)
            });

            if (userError) {
                logger.error("Error creating user in supabase");
                logger.error(userError);
                console.log("Error creating user in supabase");
                console.log(userError);
                return res.status(500).json({
                    message: 'Error Creating the User, contact the support',
                    success: false,
                });
            }

            const { error: memberError } = await supabaseCLient
                .from('team_members')
                .insert({
                    "team_id": teamID,
                    "user_id": userID
                });
            if (memberError) {
                logger.error("Error inserting into team_members table");
                logger.error(JSON.stringify(memberError));
                console.log("Error inserting into team_members table");
                console.log(JSON.stringify(memberError));
                return res.status(500).json({
                    message: 'Error Creating the Team, contact the support',
                    success: false,
                });
            }

            const { error: participationError } = await supabaseCLient
                .from('participation')
                .insert({
                    "team_id": teamID,
                    "user_id": userID,
                    "event_name": eventName
                });
            if (participationError) {
                logger.error("Error inserting into participation table");
                logger.error(JSON.stringify(participationError));
                console.log("Error inserting into participation table");
                console.log(JSON.stringify(participationError));
                return res.status(500).json({
                    message: 'Error Creating the Team, contact the support',
                    success: false,
                });
            }
        }
    }



    res.json({
        message: 'Form submitted successfully',
        success: true,
    });
}
