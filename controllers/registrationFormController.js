const supabase = require('@supabase/supabase-js')
const logger = require('../utils/logger')
const userController = require('./userController');

exports.showRegisterForm = (req, res) => {
    res.render('registrationForm');
}


exports.handleRegistrationFormSubmission = async (req, res) => {
    const body = req.body;

    logger.info("Handling registration form submission");
    logger.info(JSON.stringify(body));

    const supabaseCLient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_ANON_KEY);

    const events = body.events;
    const leadID = await userController.getUserIDByEmail(body.email);


    for (let i = 0; i < events.length; i++) {
        const event = events[i];

        const teamData = {
            "lead": leadID,

        }        

        let { data, error } = await supabaseCLient.from('team').insert(
            teamData
        ).select();
        
        if(error) {
            logger.error("Error inserting into teams table");
            logger.error(JSON.stringify(error));
            console.log("Error inserting into teams table");
            console.log(JSON.stringify(error));
            res.status(500).json({
                message: 'Error Creating the Team, contact the support',
                success: false,
            });
        }
        const teamID = data[0].id;

        const {error: registrationError} = await supabaseCLient.from('registrations').insert({
            "team_id": teamID,
            "event": event.name,
            "extra_data": event.extraData
        });

        if(registrationError) {
            logger.error("Error inserting into registrations table");
            logger.error(JSON.stringify(registrationError));
            console.log("Error inserting into registrations table");
            console.log(JSON.stringify(registrationError));
            res.status(500).json({
                message: 'Error Creating the Team, contact the support',
                success: false,
            });
        }


        event.members.forEach(async memberID => {
            let user_id = await userController.getUserIDByEmail(memberID);
            const {error} = await supabaseCLient.from('team_members').insert({
                "team_id": teamID,
                "user_id": user_id
            });

            if(error) {
                logger.error("Error inserting into team_members table");
                logger.error(JSON.stringify(error));
                console.log("Error inserting into team_members table");
                console.log(JSON.stringify(error));
                res.status(500).json({
                    message: 'Error Creating the Team, contact the support',
                    success: false,
                });
            }

            const {error: participationError} = await supabaseCLient.from('participation').insert({
                "team_id": teamID,
                "user_id": user_id,
                "event_name": event.name
            });

            if(participationError) {
                logger.error("Error inserting into participation table");
                logger.error(JSON.stringify(participationError));
                console.log("Error inserting into participation table");
                console.log(JSON.stringify(participationError));
                res.status(500).json({
                    message: 'Error Creating the Team, contact the support',
                    success: false,
                });
            }
            
        });
        console.log(data);
    }


    res.json({
        message: 'Form submitted successfully',
        success: true,
    });
}