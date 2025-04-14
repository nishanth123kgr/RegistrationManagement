// Track current section and total sections
let currentSection = 1;
let currentSectionName = 'section1';
let totalSections = 3; // We have 5 sections in our form

let userData = {};

let projectExpoData = {};
let paperPresentationData = {};

let selectedEventsGlobal;

let isAddTeamMateFormActive = false;

let teamMateForm = `
                    <div class="teamMateForm">
                        <div class="form-group floating-label">
                            <input type="email" id="teamMateEmail" name="email" required placeholder="Team Mate Email">
                            <label for="teamMateEmail">Team Mate Email Address <span class="required">*</span></label>
                        </div>

                        <div class="form-group floating-label">
                            <input type="text" id="teamMateFullName" name="fullName" required placeholder=" ">
                            <label for="teamMateFullName">Team Mate Full Name<span class="required">*</span></label>
                        </div>

                        <div class="form-group floating-label">
                            <input type="text" id="teamMatePhoneNumber" name="phoneNumber" required placeholder=" ">
                            <label for="teamMatePhoneNumber">Team Mate Phone Number<span class="required">*</span></label>
                        </div>

                        <div class="form-group floating-label">
                            <input type="text" id="teamMateCollegeName" name="collegeName" required placeholder=" ">
                            <label for="teamMateCollegeName">Team Mate College Name<span class="required">*</span></label>
                        </div>

                        <div class="form-group">
                            <label for="projectType">Team Mate Food Preference <span class="required">*</span></label>
                            <div class="radioGroup">
                                <label>
                                    <input type="radio" id="veg" name="teamMateFood" value="Veg" class="team-member-input" required>
                                    Veg
                                </label><br>
                                <label>
                                    <input type="radio" id="nonVeg" name="teamMateFood" value="Non-Veg" class="team-member-input" required>
                                    Non-Veg
                                </label>
                            </div>
                        </div>
                    

                        <button type="button" class="next-btn" onclick="addTeamMember()">
                            Add
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 0 0-.301 1.575L6 16v.086a1.492 1.492 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.259-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>

                    `

const eventData = {
    "Lyric Detective": `<p>"A song’s meaning hides between the lines—only a true detective can find the clues."
Concept: This event challenges participants to find out the lyrics.</p>`,


    "Bioscope": `<p>"Every frame tells a story, but only the keenest eyes can see the missing piece."
Concept: Participants must analyze images, video clips, or visual elements to spot connections.</p>`,


    "Meme Creation": `<p>
    Memes have become the language of the internet, turning everyday moments into humor-packed, relatable content.
    Now, it's your turn to create the most hilarious, witty, or thought-provoking memes! Join our Meme Creation Event and showcase your creativity.
  </p>

  <h2>Topic:</h2>
  <p class="highlight">College Life</p>

  <h2>Rules:</h2>
  <ul>
    <li>Memes should be related to the given topic.</li>
    <li>Only individual participation is allowed.</li>
    <li>There will be only one round for this event.</li>
  </ul>

  <p>
    Get ready to bring your funniest college experiences to life through memes!
  </p>

  <p>
    Meme Creation should be submitted to the email id 
    <a href="mailto:techblitzaurct2025@gmail.com">techblitzaurct2025@gmail.com</a> 
    on or before <span class="highlight">13/04/2025 @9pm</span>.
  </p>`,


    "Video Editing & Photography": `<h2 >Video:</h2>
  <p><b>A Day in the Life</b></p>

  <h3 >Rules:</h3>
  <ul>
    <li>Participant must select a theme which are mentioned below.</li>
    <li>The time duration of the video <b>within 3 minutes</b>.</li>
    <li>Participants should avoid plagiarism.</li>
    <li>
      Video should be submitted to the email id 
      <a href="mailto:techblitzaurct2025@gmail.com" style="color: #0000EE;">techblitzaurct2025@gmail.com</a> 
      on or before <b>13/04/2025 @9pm</b>.
    </li>
    <li>Mail(Subject) should contain <b>Event name, Participant name, College name.</b></li>
    <li>The video must be in <b>landscape orientation</b>.</li>
  </ul>

  <h2 >Photography:</h2>
  <p>Capturing a photo that expresses emotions.</p>

  <h3 >Rules:</h3>
  <ul>
    <li>The participants can use <b>DSLR/Mobile Phones</b> (Use highest possible resolutions).</li>
    <li>Filters and <b>Editings</b> are not allowed.</li>
    <li>Participants should avoid plagiarism.</li>
    <li>
      Photography should be submitted to the email id 
      <a href="mailto:techblitzaurct2025@gmail.com" style="color: #0000EE;">techblitzaurct2025@gmail.com</a> 
      on or before <b>13/04/2025 @9pm</b>.
    </li>
    <li>Mail(Subject) should contain <b>Event name, Participant name, College name.</b></li>
    <li>Photograph should be submit only once with an appropriate description.</li>
  </ul>`,



    "Treasure Hunt": `<ul>
  <li>Unleash your team spirit, sharpen your mind, and get ready for an adventurous challenge across the campus.</li>
  <li>Team size: Minimum 4, Maximum 8 members.</li>
  <li>Only 5 teams can participate.</li>
  <li>No elimination rounds - all teams will take part in the main hunt.</li>
  <li>Each team will receive 10 clues hidden in different locations around the campus.</li>
  <li>Teams must solve each clue to move ahead.</li>
  <li>The first team to solve all clues and reach the final destination will be crowned the winner.</li>
  <li>Put your logic, teamwork, and speed to the test in this thrilling hunt. Let the adventure begin!</li>
</ul>`,



    "Paper Presentation": `<p>
    A paper presentation is a concise talk or lecture given by an individual or a group to present their research findings, ideas, or proposals on a specific topic.
  </p>

  <h3 >Topics:</h3>
  <ul>
    <li>Artificial intelligence</li>
    <li>Machine learning</li>
    <li>IoT</li>
    <li>Blockchain</li>
    <li>Cyber security</li>
    <li>Virtual reality</li>
    <li>Cryptocurrency</li>
    <li>Any other topic</li>
  </ul>

  <h3 >RULES:</h3>
  <ul>
    <li>Choose any one topic for Paper Presentation.</li>
    <li>Team should consist of Minimum 1 to Maximum 3 members.</li>
    <li>Only one round for presentation.</li>
    <li>Each team should present their topic within 5 to 7 minutes.</li>
  </ul>`,



    "Project Expo": `<p>Project Expo is an event where individuals and groups showcase their project.</p>

  <h3 >RULES:</h3>
  <ul>
    <li>Only one round for Project Expo.</li>
    <li>The team should consist of minimum 1 to maximum 3 members.</li>
    <li>Project demo video time limit is <b>upto 3 minutes</b>.</li>
    <li>
      Project demo should be submitted to the email id 
      <a href="mailto:techblitzaurct2025@gmail.com" style="color: #0000EE;">techblitzaurct2025@gmail.com</a> 
      on or before <b>13/04/2025 @9pm</b>.
    </li>
    <li>Mail(Subject) should contain <b>Event name, Participant name, College name.</b></li>
    <li>Each team should showcase their project within 5 to 10 minutes.</li>
  </ul>`,



    "Debugging": `"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."

This event is all about problem solving that is finding out error.`,



    "Prompt Engineering": ` <ul style="list-style-type: disc; padding-left: 20px;">
    <li><b>Round 1:</b> Generate stunning AI images based on the given theme.</li>
    <li><b>Round 2:</b> Craft the most concise and accurate AI-generated answers on a surprise topic.</li>
    <li><b>Round 3:</b> Create <b>Tamil lyrics</b> using AI and bring them to life with <b>SUNO AI</b> (lyrics will be judged, not the music).</li>
  </ul>
`,


    "Technical Connection": `<p>"Pixels to picture, picture to word. Connect the dots, and discover the tech term that's been hidden all along."
This event is all about connect the pictures and find out the tech term.</p>`,


}

let teamMates = [];

function addTeamMember() {
    if (!validateTeamMateForm()) {
        return;
    }


    const email = document.getElementById('teamMateEmail').value;

    console.log(email, userData.email);


    if (email === userData.email) {
        showToast('You cannot add yourself as a team member.');
        return;
    }


    const fullName = document.getElementById('teamMateFullName').value;
    const collegeName = document.getElementById('teamMateCollegeName').value;
    const phoneNumber = document.getElementById('teamMatePhoneNumber').value;

    const foodPreference = document.querySelector('input[name="teamMateFood"]:checked').value;

    let isAlreadyAdded = false;

    const teamMemberSection = document.getElementById("section" + currentSection).querySelector('.team-member-section');

    currentSectionName = document.querySelector('.active').getAttribute('data-eventName');

    console.log(teamMates);



    // Check if the email already exists in the teamMates array
    for (const mate of teamMates) {
        if (mate.email === email) {
            // Email found, now check if already added for this event
            if (mate.events.includes(currentSectionName)) {
                showToast(`You have already added ${email} as a team member for ${currentSectionName}.`);
                isAlreadyAdded = true;
            } else {
                addTeamMateCard(email);
                mate.events.push(currentSectionName);
                teamMemberSection.innerHTML = ``;
                isAddTeamMateFormActive = false;
            }
            return; // Exit after handling the existing teammate
        }
    }

    // If email not found in the array, add as new
    addTeamMateCard(email);

    teamMates.push({
        email,
        fullName,
        collegeName,
        phoneNumber,
        foodPreference,
        events: [currentSectionName]
    });

    console.log(teamMates);


    teamMemberSection.innerHTML = ``;


    isAddTeamMateFormActive = false;






}

let confirmPage = (num) => ` <section class="form-section" id="section${num}">
                    <div class="section-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"
                                fill="currentColor" />
                        </svg>
                    </div>
                    <h2>Confirmation</h2>

                    <div class="confirmation-box">
                        <div class="confirmation-header">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
                                    fill="currentColor" />
                            </svg>
                            <h3>Registration Summary</h3>
                        </div>
                        <div class="qr-container">
                            <img src="img/qr-code.png" alt="qr" class="confirmation-image" width="80%" >
                            <p><strong>Scan the QR code to make payment.</strong></p>
                        </div>
                        <p>Please review your information before submitting:</p>
                        <div id="summaryDetails" class="summary-details">
                            <!-- Will be populated with form data -->
                            <div class="summary-loading">
                                <div class="loading-spinner"></div>
                                <p>Loading summary...</p>
                            </div>
                        </div>

                        <div class="form-group checkbox-confirm">
                            <input type="checkbox" id="confirmInfo" name="confirmInfo" required>
                            <label for="confirmInfo">I confirm that all the information provided is correct and I agree
                                to follow the event rules.</label>
                        </div>
                    </div>

                    <div class="button-container">
                        <button type="button" class="back-btn" onclick="prevSection(${num})">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
                                    fill="currentColor" />
                            </svg>
                            Back
                        </button>
                        <button type="submit" class="submit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    fill="currentColor" />
                            </svg>
                            Submit Registration
                        </button>
                    </div>
                </section>`

function createSectionsForEvents() {

    let selectedEvents = document.querySelectorAll('input[name="events"]:checked');

    selectedEventsGlobal = selectedEvents;

    resetSections();


    let sectionNum = 4, eventNum = 1;

    for (const event of selectedEvents) {

        let sectionTemplate = `<section class="form-section" id="section${sectionNum}" data-eventName="${event.value}">
                    <div class="section-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 0 0-.301 1.575L6 16v.086a1.492 1.492 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.259-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                                fill="currentColor" />
                        </svg>
                    </div>
                    <h2>Event ${eventNum} Details</h2>
                    <div id="eventDetails${eventNum}" class="eventDetailsContent">
                        <!-- This will be populated dynamically based on event selection -->
                        <h2>${event.value}</h2>
                        <div class="event-details">
                        ${eventData[event.value]}
                        </div>
                        
                        
                    </div>

                    <div class="button-container">
                        <button type="button" class="back-btn" onclick="prevSection(${sectionNum})">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
                                    fill="currentColor" />
                            </svg>
                            Back
                        </button>
                        <button type="button" class="next-btn" onclick="nextSection(${sectionNum})">
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                                    fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </section>`;

        if (!document.getElementById('section' + sectionNum)) {
            document.getElementById('registrationForm').innerHTML += sectionTemplate;

        }

        sectionNum++;
        eventNum++;



    }

    let submitBtn = document.querySelector('.submit-btn');


    if (!submitBtn) {
        document.getElementById('registrationForm').innerHTML += confirmPage(sectionNum);
        submitBtn = document.querySelector('.submit-btn');
        submitBtn.addEventListener('click', doSubmit);
    }


    totalSections = sectionNum;





}


// Function to navigate to next section
async function nextSection(sectionNum) {
    // Validate current section before proceeding
    if (!(await validateSection(sectionNum))) {
        return false;
    }



    // Hide current section
    document.getElementById(`section${sectionNum}`).classList.remove('active');

    // Show next section
    currentSection = sectionNum + 1;
    if (currentSection === 4) {
        createSectionsForEvents();



        // currentSectionName = selectedEvents[0].value;
        // updateEventDetailsSection(1);
    }
    document.getElementById(`section${currentSection}`).classList.add('active');

    // Update progress bar
    updateProgress();


    if (currentSectionName === "Project Expo") {
        const projectTitle = document.getElementById('projectTitle')?.value || 'N/A';
        const projectDescription = document.getElementById('projectDescription')?.value || 'N/A';
        const projectType = document.querySelector('input[name="projectType"]:checked')?.value || 'N/A';

        projectExpoData = {
            projectTitle: projectTitle,
            projectDescription: projectDescription,
            projectType: projectType
        }
    }

    if (currentSectionName === "Paper Presentation") {
        const abstract = document.getElementById('abstract');
        paperPresentationData = {
            abstract: abstract.value
        }
    }


    currentSectionName = document.querySelector('.active').getAttribute('data-eventName');

    const target = document.getElementById('section' + currentSection)?.querySelector('.eventDetailsContent');
    if (target && target.querySelectorAll('.event-team-details').length === 0) {
        target.innerHTML += handleTeamData();
    }



    // If moving to team details section, update its content based on event selection
    // if (currentSection === 5) {
    //     currentSectionName = selectedEvents[1].value;
    //     if (selectedEvents.length > 1) {
    //         updateEventDetailsSection(2);
    //     }

    // }




    // If moving to confirmation section, populate summary
    if (currentSection === totalSections && totalSections != 3) {
        populateSummary();
    }

    // Scroll to top of form
    window.scrollTo(0, document.querySelector('.form-header').offsetTop);

    return true;
}

function resetSections() {
    for(let sectionNum = 4; sectionNum <= totalSections; sectionNum++){
        let section = document.getElementById(`section${sectionNum}`);
        if (section) {
            section.remove();
        }
    }
    totalSections = 3;
    updateProgress();
}

// Function to go back to previous section
function prevSection(sectionNum) {
    // if (sectionNum === totalSections) {
    //     location.reload();
    //     return;
    // }
    // Hide current section
    document.getElementById(`section${sectionNum}`).classList.remove('active');

    // Show previous section
    currentSection = sectionNum - 1;
    document.getElementById(`section${currentSection}`).classList.add('active');
    currentSectionName = document.querySelector('.active').getAttribute('data-eventName');

    // Update progress bar
    updateProgress();

    // Scroll to top of form
    window.scrollTo(0, document.querySelector('.form-header').offsetTop);
}

// Update progress bar
function updateProgress() {
    const progressPercentage = (currentSection / totalSections) * 100;
    document.getElementById('progressBar').style.width = `${progressPercentage}%`;
    document.getElementById('sectionIndicator').textContent = `Section ${currentSection} of ${totalSections}`;

    if (document.querySelector('.teamMateForm')) {
        document.querySelector('.teamMateForm').remove();
        isAddTeamMateFormActive = false;

    }
}

function showUserCheckModal(title = "Verifying Account", message = "Checking if user already exists in our system...") {
    // Create the modal elementSutherland
    const modal = document.createElement('div');
    modal.className = 'checking-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="spinner-container">
                <div class="spinner"></div>
            </div>
            <h2>${title}</h2>
            <p>${message}</p>
        </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .checking-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease-out;
        }
        
        .modal-content {
            background-color: white;
            border-radius: 12px;
            padding: 2rem;
            text-align: center;
            max-width: 90%;
            width: 400px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .spinner-container {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-left-color: #3b82f6;
            animation: spin 1s linear infinite;
        }
        
        .modal-content h2 {
            color: #3b82f6;
            margin-bottom: 1rem;
        }
        
        .modal-content p {
            color: #64748b;
            margin-bottom: 0.5rem;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `;

    // Add to document
    document.head.appendChild(style);
    document.body.appendChild(modal);

    // Function to close the modal
    function closeModal() {
        // Fade out animation
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.3s ease';

        setTimeout(() => {
            modal.remove();
        }, 300);
    }

    // Return the closeModal function so it can be called when needed
    return closeModal;
}

async function isUserExists(email) {
    const closeModal = showUserCheckModal();
    const req = await fetch('/api/user/exists', {
        body: JSON.stringify({ email }), method: 'POST', headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await req.json();
    closeModal();

    return { exists: data.exists, userData: data.userData };
}

function validateTeamMateForm() {
    const requiredFields = ['teamMateEmail', 'teamMateFullName', 'teamMateCollegeName', 'teamMatePhoneNumber'];
    for (const field of requiredFields) {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            showToast(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
            input.focus();
            return false;
        }

        // Validate email format
        if (field === 'teamMateEmail' && !validateEmail(input.value)) {
            showToast('Please enter a valid email address.');
            input.focus();
            return false;
        }

        // Validate phone number
        if (field === 'teamMatePhoneNumber' && !validatePhone(input.value)) {
            showToast('Please enter a valid 10-digit phone number.');
            input.focus();
            return false;
        }
    }
    return true;
}

async function checkEmailExists(input) {
    const email = input.value;
    if (email) {
        const closeModal = showUserCheckModal();
        const req = await fetch('/api/user/get', {
            body: JSON.stringify({ email }), method: 'POST', headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await req.json();
        console.log(data);

        closeModal();
        if (data.exists) {
            // Determine if the input belongs to the main user or a teammate
            if (input.id === 'email') {
                // Update main user fields
                document.getElementById('fullName').value = data.userData.name;
                document.getElementById('fullName').disabled = true;
                document.getElementById('collegeName').value = data.userData.college;
                document.getElementById('collegeName').disabled = true;
                document.getElementById('phoneNumber').value = data.userData.phone;
                document.getElementById('phoneNumber').disabled = true;
                document.querySelector(`input[name="food"][value="${data.userData.food}"]`).checked = true;
                document.querySelectorAll('input[name="food"]').forEach(input => input.disabled = true);



                // Update userData object
                userData = {
                    email: data.userData.email,
                    fullName: data.userData.name,
                    collegeName: data.userData.college,
                    phoneNumber: data.userData.phone,
                    foodPreference: data.userData.food,
                    upiID: data.userData.upiID,
                    transactionID: data.userData.transactionID
                };

                // Disable team events this user is already part of
                const userEvents = data.events || [];
                const eventCheckboxes = document.querySelectorAll('input[name="events"]');
                eventCheckboxes.forEach(checkbox => {

                    checkbox.disabled = false;

                    if (userEvents.includes(checkbox.value)) {
                        checkbox.disabled = true;
                        checkbox.parentElement.classList.add('disabled-event'); // Optional: Add a visual indicator
                    }
                });
            } else if (input.id === 'teamMateEmail') {
                // validate if user already registered for the event
                const userEvents = data.events || [];
                if (userEvents.includes(currentSectionName)) {
                    showToast(`This user is already registered for ${currentSectionName}.`);
                    input.value = '';
                    return;
                }


                // Update teammate fields
                document.getElementById('teamMateFullName').value = data.userData.name;
                document.getElementById('teamMateFullName').disabled = true;
                document.getElementById('teamMateCollegeName').value = data.userData.college;
                document.getElementById('teamMateCollegeName').disabled = true;
                document.getElementById('teamMatePhoneNumber').value = data.userData.phone;
                document.getElementById('teamMatePhoneNumber').disabled = true;
                document.querySelector(`input[name="teamMateFood"][value="${data.userData.food}"]`).checked = true;
                document.querySelectorAll('input[name="teamMateFood"]').forEach(input => input.disabled = true);


                // Update teamMates array if the teammate already exists
                const existingMate = teamMates.find(mate => mate.email === email);
                if (existingMate) {
                    existingMate.fullName = data.userData.name;
                    existingMate.collegeName = data.userData.college;
                    existingMate.phoneNumber = data.userData.phone;
                    existingMate.foodPreference = data.userData.food;
                    existingMate.upiID = data.userData.upiID;
                    existingMate.transactionID = data.userData.transactionID;

                }
                else {
                    // Add new teammate to the teamMates array
                    teamMates.push({
                        email: data.userData.email,
                        fullName: data.userData.name,
                        collegeName: data.userData.college,
                        phoneNumber: data.userData.phone,
                        foodPreference: data.userData.food,
                        upiID: data.userData.upiID,
                        transactionID: data.userData.transactionID,
                        events: []
                    });
                }
            }
        }
        else
        {
            // Reset fields if email doesn't exist
            if (input.id === 'email') {
                document.getElementById('fullName').value = '';
                document.getElementById('collegeName').value = '';
                document.getElementById('phoneNumber').value = '';
                document.querySelectorAll('input[name="food"]').forEach(input => input.disabled = false);

                document.querySelectorAll('input[name="events"]').forEach(input => {
                    input.disabled = false;
                    input.parentElement.classList.remove('disabled-event'); // Remove visual indicator
                }
                );

                userData = {};


                teamMates = [];


                document.getElementById('fullName').disabled = false;
                document.getElementById('collegeName').disabled = false;
                document.getElementById('phoneNumber').disabled = false;

                resetSections();

                
            } else if (input.id === 'teamMateEmail') {
                document.getElementById('teamMateFullName').value = '';
                document.getElementById('teamMateCollegeName').value = '';
                document.getElementById('teamMatePhoneNumber').value = '';
                document.querySelectorAll('input[name="teamMateFood"]').forEach(input => input.disabled = false);

                document.getElementById('teamMateFullName').disabled = false;
                document.getElementById('teamMateCollegeName').disabled = false;
                document.getElementById('teamMatePhoneNumber').disabled = false;
            }
        }
    }
}

let emailInput = document.getElementById('email');
let teamMateEmailInput = null;

if (emailInput) {
    emailInput.addEventListener('blur', function () {
        checkEmailExists(this);
    });
}

document.addEventListener('input', function (event) {
    if (event.target && (event.target.id === 'teamMateEmail' || event.target.id === 'email')) {
        if (event.target.id === 'teamMateEmail' && event.target !== teamMateEmailInput) {
            if (teamMateEmailInput) {
                teamMateEmailInput.removeEventListener('blur', handleTeamMateEmailBlur);
            }
            teamMateEmailInput = event.target;
            teamMateEmailInput.addEventListener('blur', handleTeamMateEmailBlur);
        } else if (event.target.id === 'email' && event.target !== emailInput) {
            if (emailInput) {
                emailInput.removeEventListener('blur', handleEmailBlur);
            }
            emailInput = event.target;
            emailInput.addEventListener('blur', handleEmailBlur);
        }
    }
});

function handleTeamMateEmailBlur() {
    checkEmailExists(this);
}

function handleEmailBlur() {
    checkEmailExists(this);
}


// Validate section before proceeding
async function validateSection(sectionNum) {
    // Section 1 is just information, no validation needed
    if (sectionNum === 1) return true;

    // Validate Basic Information section
    if (sectionNum === 2) {

        const requiredFields = ['email', 'fullName', 'collegeName', 'phoneNumber'];
        for (const field of requiredFields) {
            const input = document.getElementById(field);
            if (!input.value.trim()) {
                showToast(`SutherlandPlease fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
                input.focus();
                return false;
            }

            // Validate email format
            if (field === 'email' && !validateEmail(input.value)) {
                showToast('Please enter a valid email address.');
                input.focus();
                return false;
            }

            // Validate phone number
            if (field === 'phoneNumber' && !validatePhone(input.value)) {
                showToast('Please enter a valid 10-digit phone number.');
                input.focus();
                return false;
            }
        }

        // Validate Food preference it is an radio
        const foodPreference = document.querySelector('input[name="food"]:checked');
        if (!foodPreference) {
            showToast('Please select a food preference.');
            return false;
        }

        if (Object.keys(userData).length === 0) {
            userData = {
                email: document.getElementById('email').value,
                fullName: document.getElementById('fullName').value,
                collegeName: document.getElementById('collegeName').value,
                phoneNumber: document.getElementById('phoneNumber').value,
                foodPreference: document.querySelector('input[name="food"]:checked').value
            }
        }



        // Check User Exists
        // if (await isUserExists(userData.email)) {

        // }

        return true;
    }

    // Validate Event Selection section
    if (sectionNum === 3) {
        const selectedEvents = document.querySelectorAll('input[name="events"]:checked');
        if (selectedEvents.length === 0) {
            showToast('Please select at least one event to participate in.');
            return false;
        }

        // if (selectedEvents.length > 4) {
        //     showToast('You can only participate in a maximum of two events.');
        //     return false;
        // }


        // const { techCount, nonTechCount } = getEventSelectedCount(selectedEvents);

        // if (techCount > 2 || (techCount === 1 && nonTechCount > 1) || nonTechCount > 1) {
        //     showToast('You can only participate in either two technical events OR one technical and one non-technical event.');
        //     return false;
        // }

        return true;
    }


    currentSectionName = document.querySelector('.active').getAttribute('data-eventName');

    // Validate Team Details section
    const projectExpo = currentSectionName === "Project Expo";
    const paperPresentation = currentSectionName === "Paper Presentation";



    if (paperPresentation || projectExpo) {
        const teamMemberInputs = document.getElementById(`section${sectionNum}`).querySelectorAll('.team-member-input');

        for (const input of teamMemberInputs) {
            if (input.required && !input.value.trim()) {
                showToast('Please fill in all required details.');
                input.focus();
                return false;
            }
        }
    }


    // Check if abstract is provided for Paper Presentation
    if (paperPresentation) {
        const abstract = document.getElementById('abstract');
        if (abstract && !abstract.value.trim()) {
            showToast('Please provide an abstract for Paper Presentation.');
            abstract.focus();
            return false;
        }
    }

    if (projectExpo) {
        const radioGroup = document.querySelectorAll('input[name="projectType"]');
        let selected = false;
        for (const radio of radioGroup) {
            if (radio.checked) {
                selected = true;
                break;
            }
        }
        if (!selected) {
            showToast('Please select a project type for Project Expo.');
            return false;
        }
    }


    // Validate Confirmation section
    if (sectionNum === totalSections) {

        const upiIDInput = document.getElementById('upiID');
        const transactionIDInput = document.getElementById('transactionID');

        if (upiIDInput && transactionIDInput) {
            const upiID = document.getElementById('upiID').value;
            const transactionID = document.getElementById('transactionID').value;
            const { upiID: isUPIValid, transactionID: isTxnValid } = validateUPIAndTransactionID(upiID, transactionID);
            if (!isUPIValid) {
                showToast('Please enter a valid UPI ID.');
                document.getElementById('upiID').focus();
                return false;
            }
            if (!isTxnValid) {
                showToast('Please enter a valid Transaction ID.');
                document.getElementById('transactionID').focus();
                return false;
            }
            userData['upiID'] = upiID;
            userData['transactionID'] = transactionID;
        }
        for (let i = 0; i < teamMates.length; i++) {
            if (!teamMates[i].upiID || !teamMates[i].transactionID) {
                let teamMateUpiID = document.getElementById(`upiID${i + 1}`).value;
                let teamMateTransactionID = document.getElementById(`transactionID${i + 1}`).value;

                const { upiID: isUPIValid, transactionID: isTxnValid } = validateUPIAndTransactionID(teamMateUpiID, teamMateTransactionID);
                if (!isUPIValid) {
                    showToast('Please enter a valid UPI ID for team member.');
                    document.getElementById(`upiID${i + 1}`).focus();
                    return false;
                }

                if (!isTxnValid) {
                    showToast('Please enter a valid Transaction ID for team member.');
                    document.getElementById(`transactionID${i + 1}`).focus();
                    return false;
                }
                teamMates[i]['upiID'] = teamMateUpiID;
                teamMates[i]['transactionID'] = teamMateTransactionID;
            }
        }





        const confirmCheckbox = document.getElementById('confirmInfo');
        if (!confirmCheckbox.checked) {
            showToast('Please confirm that all information is correct before submitting.');
            confirmCheckbox.focus();
            return false;
        }





        return true;
    }

    return true;
}

function validateUPIAndTransactionID(upiID, transactionID) {
    // UPI ID regex: alphanumeric (with . or _) + @bankname
    const upiRegex = /^[\w.\-]{2,256}@[a-zA-Z]{2,64}$/;

    // Transaction ID regex: exactly 12 digits
    const txnRegex = /^\d{12}$/;

    const isUPIValid = upiRegex.test(upiID);
    const isTxnValid = txnRegex.test(transactionID);

    return {
        upiID: isUPIValid,
        transactionID: isTxnValid
    };
}


function getEventSelectedCount(selectedEvents) {
    let techCount = 0;
    let nonTechCount = 0;


    // Check if the selection follows the rules (two technical or one technical and one non-technical)
    const technicalEvents = ['Paper Presentation', 'Project Expo', 'Debugging', 'Technical Connection', 'Prompt Engineering'];
    const nonTechnicalEvents = ['Meme Creation', 'Video Editing & Photography', 'Treasure Hunt', 'Lyric Detective', 'Bioscope'];

    selectedEvents.forEach(event => {
        if (technicalEvents.includes(event.value)) {
            techCount++;
        } else if (nonTechnicalEvents.includes(event.value)) {
            nonTechCount++;
        }
    });

    return { techCount, nonTechCount };
}


// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone validation
function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
}

// Update Event Details section based on event selection
function updateEventDetailsSection(eventNum) {
    const eventOneDetails = document.getElementById('eventDetails' + eventNum);
    const selectedEvent = document.querySelectorAll('input[name="events"]:checked');
    const eventName = selectedEvent ? selectedEvent[eventNum - 1].value : '';

    eventOneDetails.parentElement.setAttribute("data-eventName", eventName);

    const eventDescription = eventData[eventName] || '';
    eventOneDetails.innerHTML = `
        <h2>${eventName}</h2>
        <div class="event-details">
        ${eventDescription}
        </div>
        ${handleTeamData(eventName)}
    `;
}

function addSuggestion(element) {
    currentSectionName = document.querySelector('.active').getAttribute('data-eventName');
    const email = element.querySelector('.member-email').textContent;
    for (let mate of teamMates) {
        if (mate.email === email) {
            if (!mate.events.includes(currentSectionName)) {
                const teamMatesCountForEvent = teamMates.filter(mate => mate.events.includes(currentSectionName)).length;
                if (teamMatesCountForEvent >= 2) {
                    showToast('You have already added the maximum number of team members for this event.');
                    return;
                }
                mate.events.push(currentSectionName);
                addTeamMateCard(email);
            }
            else {
                showToast(`${email} is already added for this event.`);
            }
        }
    }
}


function handleTeamData() {
    let html = '';

    let teamMateSuggestions = '';

    console.log(teamMates);


    for (const mate of teamMates) {
        if (!mate.events.includes(currentSectionName)) {
            teamMateSuggestions += `
                                <button class="member-card member-card-suggestion" onclick="addSuggestion(this)">
                                    <span class="member-email">${mate.email}</span>
                                    <div class="member-close-btn" ">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#333333" version="1.1" id="Capa_1" width="10px" height="10px" viewBox="0 0 45.402 45.402" xml:space="preserve">
                                            <g>
                                                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141   c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27   c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435   c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                                            </g>
                                        </svg>
                                    </div>
                                </button>
            `;
        }
    }

    if (currentSectionName === "Paper Presentation") {
        html += `
            <div class="event-team-details">
                <div class="form-group">
                    <label for="abstract">Abstract <span class="required">*</span></label>
                    <textarea id="abstract" name="abstract" rows="5" class="team-member-input" required></textarea>
                </div>
                
                <h4>Additional Team Members</h4>
                <p>You are already registered as the first member.</p>
                
                <div class="team-mates-list">

                    <div class="team-mate-card-suggestions">
                    ${teamMateSuggestions}
                    </div>
                    
                </div>

                <button type="button" class="next-btn" onclick="addTeamMemberForm()" style="margin-bottom: 1rem;">
                            Add Team Member
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 0 0-.301 1.575L6 16v.086a1.492 1.492 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.259-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="currentColor"></path>
                        </svg>
                        </button>

                <div class="team-member-section">
                </div>
            </div>
        `;
    }

    if (currentSectionName === "Project Expo") {
        html += `
            <div class="event-team-details">
                
                <div class="form-group floating-label">
                    <input type="text" id="projectTitle" name="projectTitle" class="team-member-input" required placeholder=" ">
                    <label for="projectTitle">Project Title <span class="required">*</span></label>
                </div>
                
                <div class="form-group">
                    <label for="projectDescription">Project Description <span class="required">*</span></label>
                    <textarea id="projectDescription" name="projectDescription" rows="5" class="team-member-input" required></textarea>
                </div>

                <div class="form-group">
                    <label for="projectType">Project Type <span class="required">*</span></label>
                    <div class="radioGroup">
                        <label>
                            <input type="radio" id="hardware" name="projectType" value="Hardware" class="team-member-input" required>
                            Hardware
                        </label><br>
                        <label>
                            <input type="radio" id="software" name="projectType" value="Software" class="team-member-input" required>
                            Software
                        </label>
                    </div>
                </div>

                
                <div class="section-info">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm11 7h2v2h-2V7zm0 4h2v6h-2v-6z" fill="currentColor"/></svg>
                    <p>Remember to submit your demo to techblitzaurct2025@gmail.com by 13-04-2025.</p>
                </div>
                
                <h4>Additional Team Member</h4>
                <p>You are already registered as the first member.</p>

                <div class="team-mates-list">

                    <div class="team-mate-card-suggestions">
                        ${teamMateSuggestions}
                    </div>
                    
                </div>

                <button type="button" class="next-btn" onclick="addTeamMemberForm()" style="margin-bottom: 1rem;">
                            Add Team Member
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 0 0-.301 1.575L6 16v.086a1.492 1.492 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.259-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="currentColor"></path>
                        </svg>
                        </button>

                <div class="team-member-section">
                </div>
            </div>
        `;
    }

    return html;
}


function addTeamMateCard(email) {
    const teamMatesList = document.getElementById('section' + currentSection).querySelector('.team-mates-list');
    teamMatesList.innerHTML += `<div class="member-card" id="emailCard">
                                    <span class="member-email">${email}</span>
                                    <button class="member-close-btn" onclick="removeCard(this.parentElement)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#ffffff"/>
                                        </svg>
                                    </button>
                                </div>`;

}





function removeCard(element) {
    currentSectionName = document.querySelector('.active').getAttribute('data-eventName');
    for (const mate of teamMates) {
        if (mate.email === element.querySelector('.member-email').innerText) {
            const index = mate.events.indexOf(currentSectionName);
            if (index > -1) {
                mate.events.splice(index, 1);
            }
            if (mate.events.length === 0) {
                const mateIndex = teamMates.indexOf(mate);
                if (mateIndex > -1) {
                    teamMates.splice(mateIndex, 1);
                }
            }
        }
    }
    console.log(teamMates);

    element.remove();
}


function addTeamMemberForm() {
    if (!isAddTeamMateFormActive) {
        currentSectionName = document.querySelector('.active').getAttribute('data-eventName')
        const teamMatesCountForEvent = teamMates.filter(mate => mate.events.includes(currentSectionName)).length;
        if (teamMatesCountForEvent >= 2) {
            showToast('You have already added the maximum number of team members for this event.');
            return;
        }
        const teamMemberSection = document.getElementById("section" + currentSection).querySelector('.team-member-section');
        teamMemberSection.innerHTML += teamMateForm;
        isAddTeamMateFormActive = true;

    }

}




// Update Team Details section based on event selection
function updateTeamDetailsSection() {
    const paperPresentation = document.getElementById('paperPresentation').checked;
    const projectExpo = document.getElementById('projectExpo').checked;
    const teamDetailsContent = document.getElementById('teamDetailsContent');

    // Clear previous content
    teamDetailsContent.innerHTML = '';

    if (!paperPresentation && !projectExpo) {
        teamDetailsContent.innerHTML = `
            <div class="placeholder-message">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm11 7h2v2h-2V7zm0 4h2v6h-2v-6z" fill="currentColor"/></svg>
                <p>You haven't selected Paper Presentation or Project Expo, so no team details are required.</p>
            </div>
        `;
        return;
    }

    let html = '';

    if (paperPresentation) {
        html += `
            <div class="event-team-details">
                <h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" fill="currentColor"/></svg>
                    Paper Presentation Team (Max 3 members)
                </h3>
                <p>Please provide details for your team members:</p>
                
                <div class="form-group">
                    <label for="abstract">Abstract <span class="required">*</span></label>
                    <textarea id="abstract" name="abstract" rows="5" class="team-member-input" required></textarea>
                </div>
                
                <h4>Additional Team Members</h4>
                <p>You are already registered as the first member.</p>
                
                <div class="form-group floating-label">
                    <input type="text" id="member2Name" name="member2Name" class="team-member-input" placeholder=" ">
                    <label for="member2Name">Member 2 Name</label>
                </div>
                
                <div class="form-group floating-label">
                    <input type="email" id="member2Email" name="member2Email" class="team-member-input" placeholder=" ">
                    <label for="member2Email">Member 2 Email</label>
                </div>
                
                <div class="form-group floating-label">
                    <input type="text" id="member3Name" name="member3Name" class="team-member-input" placeholder=" ">
                    <label for="member3Name">Member 3 Name</label>
                </div>
                
                <div class="form-group floating-label">
                    <input type="email" id="member3Email" name="member3Email" class="team-member-input" placeholder=" ">
                    <label for="member3Email">Member 3 Email</label>
                </div>
            </div>
        `;
    }

    if (projectExpo) {
        html += `
            <div class="event-team-details">
                <h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z" fill="currentColor"/></svg>
                    Project Expo Team (Max 2 members)
                </h3>
                <p>Please provide details for your team members:</p>
                
                <div class="form-group floating-label">
                    <input type="text" id="projectTitle" name="projectTitle" class="team-member-input" required placeholder=" ">
                    <label for="projectTitle">Project Title <span class="required">*</span></label>
                </div>
                
                <div class="form-group">
                    <label for="projectDescription">Project Description <span class="required">*</span></label>
                    <textarea id="projectDescription" name="projectDescription" rows="5" class="team-member-input" required></textarea>
                </div>
                
                <div class="section-info">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm11 7h2v2h-2V7zm0 4h2v6h-2v-6z" fill="currentColor"/></svg>
                    <p>Remember to submit your demo to techblitzaurct2025@gmail.com by 13-04-2025.</p>
                </div>
                
                <h4>Additional Team Member</h4>
                <p>You are already registered as the first member.</p>
                
                <div class="form-group floating-label">
                    <input type="text" id="projectMember2Name" name="projectMember2Name" class="team-member-input" placeholder=" ">
                    <label for="projectMember2Name">Member 2 Name</label>
                </div>
                
                <div class="form-group floating-label">
                    <input type="email" id="projectMember2Email" name="projectMember2Email" class="team-member-input" placeholder=" ">
                    <label for="projectMember2Email">Member 2 Email</label>
                </div>
            </div>
        `;
    }

    teamDetailsContent.innerHTML = html;
}

// Populate summary in confirmation section
function populateSummary() {
    const summaryDetails = document.getElementById('summaryDetails');
    const email = userData.email;
    const name = userData.fullName;
    const food = userData.foodPreference;
    const mobile = userData.phoneNumber;


    // Get selected events
    const selectedEvents = Array.from(selectedEventsGlobal)
        .map(event => event.value);

    let summaryHTML = `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Food Preference:</strong> ${food}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
    `;

    console.log(userData);
    console.log(teamMates);


    if (!userData.upiID || !userData.transactionID) {
        summaryHTML += `
            <div class="form-group floating-label">
                <input type="text" id="transactionID" name="transactionID" required placeholder=" ">
                <label for="transactionID">Transaction ID<span class="required">*</span></label>
            </div>

            <div class="form-group floating-label">
                <input type="text" id="upiID" name="upiID" required placeholder=" ">
                <label for="upiID">UPI ID<span class="required">*</span></label>
            </div>
        `;
    }

    summaryHTML += `
        <p><strong>Selected Events:</strong> ${selectedEvents.join(', ')}</p>
    `;


    if (selectedEvents.includes("Paper Presentation")) {
        let members = [];

        for (const mate of teamMates) {
            if (mate.events.includes("Paper Presentation")) {
                members.push(mate.email);
            }
        }

        summaryHTML += `
            <p><strong>Paper Presentation Team:</strong></p>
            <ul>
                <li>Team Members Mail: ${email} (you), ${members.join(', ')}</li>
                <li>Abstract: Submitted</li>
            </ul>
        `;
    }

    if (selectedEvents.includes("Project Expo")) {

        let members = [];

        for (const mate of teamMates) {
            if (mate.events.includes("Project Expo")) {
                members.push(mate.email);
            }
        }

        summaryHTML += `
            <p><strong>Project Expo Team:</strong></p>
            <ul>
                <li>Project Title: ${projectExpoData.projectTitle}</li>
                <li>Project Description: ${projectExpoData.projectDescription}</li>
                <li>Project Type: ${projectExpoData.projectType}</li>
                <li>Team Members Mail: ${email} (you), ${members.join(', ')}</li>
                <li>Demo Submission: Required by 13-04-2025</li>
            </ul>
        `;
    }

    if (teamMates.length > 0) {
        let teamMemberDetails = '';
        for (let i = 0; i < teamMates.length; i++) {

            const mate = teamMates[i];
            const email = mate.email;
            const name = mate.fullName;
            const food = mate.foodPreference;
            const mobile = mate.phoneNumber;

            teamMemberDetails += `
            <p><strong>Member ${i + 1}:</strong></p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Food Preference:</strong> ${food}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            `;

            if (!mate.upiID || !mate.transactionID) {
                teamMemberDetails += `
                <div class="form-group floating-label">
                    <input type="text" id="transactionID${i + 1}" name="transactionID${i + 1}" required placeholder=" ">
                    <label for="transactionID${i + 1}">Member ${i + 1} Transaction ID<span class="required">*</span></label>
                </div>

                <div class="form-group floating-label">
                    <input type="text" id="upiID${i + 1}" name="upiID${i + 1}" required placeholder=" ">
                    <label for="upiID${i + 1}">Member ${i + 1} UPI ID<span class="required">*</span></label>
                </div>
                `;
            }


        }

        summaryHTML += `
        <p><strong>Team Members Details:</strong></p>
        ${teamMemberDetails}
        `;
    }

    summaryDetails.innerHTML = summaryHTML;
}

// Toast notification system
function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <div class="toast-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" fill="currentColor"/></svg>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .toast-notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #1e293b;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            z-index: 1000;
            animation: slideUp 0.3s ease-out forwards, fadeOut 0.5s ease-out 3s forwards;
            max-width: 90%;
        }
        
        .toast-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .toast-content svg {
            color: #f43f5e;
            flex-shrink: 0;
        }
        
        @keyframes slideUp {
            from {
                transform: translate(-50%, 100%);
                opacity: 0;
            }
            to {
                transform: translate(-50%, 0);
                opacity: 1;
            }
        }
        
        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
                visibility: hidden;
            }
        }
    `;

    // Add to document
    document.head.appendChild(style);
    document.body.appendChild(toast);

    // Remove after 3.5 seconds
    setTimeout(() => {
        toast.remove();
    }, 3500);
}



// Form submission
async function doSubmit(e) {
    e.preventDefault();

    if (!(await validateSection(totalSections))) {
        return;
    }

    // Gather form data
    const data = {};

    data.lead = userData;

    data.events = [];

    for (const event of selectedEventsGlobal) {
        let eventData = {
            name: event.value,
            team: []
        };
        for (const mate of teamMates) {
            if ((event.value === 'Project Expo' || event.value === 'Paper Presentation') && mate.events.includes(event.value)) {
                eventData.team.push(mate.email);
            }
        }
        if (event.value === 'Project Expo') {
            eventData.extraData = projectExpoData;

        }
        if (event.value === 'Paper Presentation') {
            eventData.extraData = paperPresentationData;
        }
        data.events.push(eventData);
    }

    data.teamMates = {};
    for (const mate of teamMates) {
        data.teamMates[mate.email] = mate;
    }

    console.log(data);



    const closeModal = showUserCheckModal(title = "Registration in Progress", message = "Please wait while we process your registration.");

    let req = await fetch('/register', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })



    let res = await req.json();

    closeModal();
    if (!res.success) {
        console.log(res);

        showToast(res.message);
        return;
    }
    else {

        // Create success modal
        const modal = document.createElement('div');
        modal.className = 'success-modal';
        modal.innerHTML = `
        <div class="modal-content">
            <div class="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="currentColor"/></svg>
            </div>
            <h2>Registration Successful!</h2>
            <p>Thank you for registering for Tech Blitz 2025. We've sent a confirmation email with all the details.</p>
            <button class="modal-close-btn">Close</button>
        </div>
    `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
        .success-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease-out;
        }
        
        .modal-content {
            background-color: white;
            border-radius: 12px;
            padding: 2rem;
            text-align: center;
            max-width: 90%;
            width: 400px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            animation: scaleIn 0.3s ease-out;
        }
        
        .success-icon {
            width: 80px;
            height: 80px;
            background-color: #10b981;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
        }
        
        .success-icon svg {
            color: white;
        }
        
        .modal-content h2 {
            color: #10b981;
            margin-bottom: 1rem;
        }
        
        .modal-content p {
            color: #64748b;
            margin-bottom: 1.5rem;
        }
        
        .modal-close-btn {
            background-color: #10b981;
            color: white;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .modal-close-btn:hover {
            background-color: #059669;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        @keyframes scaleIn {
            from {
                transform: scale(0.9);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }Event 2 is not selected.
        }
    `;

        // Add to document
        document.head.appendChild(style);
        document.body.appendChild(modal);

        // Close modal on button click
        modal.querySelector('.modal-close-btn').addEventListener('click', function () {
            modal.remove();
            location.reload();
        });
    }
}

// Initialize event listeners for checkbox validation
document.querySelectorAll('input[name="events"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const selectedEvents = document.querySelectorAll('input[name="events"]:checked');

        let { techCount, nonTechCount } = getEventSelectedCount(selectedEvents);
        // Check if the selection follows the rules (two technical or one technical and one non-technical)

        // if (selectedEvents.length > 2 || techCount > 2 || (techCount === 1 && nonTechCount > 1) || nonTechCount > 1) {
        //     showToast('You can only participate in either two technical events OR one technical and one non-technical event.');
        //     this.checked = false;
        // }

        // if (selectedEvents.length > 4) {
        //     // showToast('You can only select a maximum of two events.');

        //     this.checked = false;
        // }
    });
});

// Initialize the form
document.addEventListener('DOMContentLoaded', function () {
    // Make sure first section is active
    document.getElementById('section1').classList.add('active');
    updateProgress();
});