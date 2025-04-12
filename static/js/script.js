// Track current section and total sections
let currentSection = 1;
let currentSectionName = 'section1';
const totalSections = 6; // We have 5 sections in our form

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

  <p style="font-style: italic;">*Laptop is mandatory.</p>`,


    "Technical Connection": `<p>"Pixels to picture, picture to word. Connect the dots, and discover the tech term that's been hidden all along."
This event is all about connect the pictures and find out the tech term.</p>`,


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
    document.getElementById(`section${currentSection}`).classList.add('active');

    // Update progress bar
    updateProgress();
    const selectedEvents = document.querySelectorAll('input[name="events"]:checked');

    if (currentSection === 4) {

        currentSectionName = selectedEvents[0].value;
        updateEventDetailsSection(1);
    }

    // If moving to team details section, update its content based on event selection
    if (currentSection === 5) {
        currentSectionName = selectedEvents[1].value;
        if (selectedEvents.length > 1) {
            updateEventDetailsSection(2);
        }

    }

    // If moving to confirmation section, populate summary
    if (currentSection === 6) {
        populateSummary();
    }

    // Scroll to top of form
    window.scrollTo(0, document.querySelector('.form-header').offsetTop);

    return true;
}

// Function to go back to previous section
function prevSection(sectionNum) {
    // Hide current section
    document.getElementById(`section${sectionNum}`).classList.remove('active');

    // Show previous section
    currentSection = sectionNum - 1;
    document.getElementById(`section${currentSection}`).classList.add('active');

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
}

function showUserCheckModal() {
    // Create the modal element
    const modal = document.createElement('div');
    modal.className = 'checking-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="spinner-container">
                <div class="spinner"></div>
            </div>
            <h2>Verifying Account</h2>
            <p>Checking if user already exists in our system...</p>
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

    return data.exists;
}

// Validate section before proceeding
async function validateSection(sectionNum) {
    // Section 1 is just information, no validation needed
    if (sectionNum === 1) return true;

    // Validate Basic Information section
    if (sectionNum === 2) {
        const field = ['email'];

        const input = document.getElementById(field);
        if (!input.value.trim()) {
            showToast(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
            input.focus();
            return false;
        }

        // Validate email format
        if (field === 'email' && !validateEmail(input.value)) {
            showToast('Please enter a valid email address.');
            input.focus();
            return false;
        }

        // Check User Exists



        if (!(await isUserExists(input.value))) {
            showToast('User does not exist. Please register in the <a href="https://forms.gle/RetUchxwvY8uNbG4A">user registration form</a>.');
            return false;
        }

        return true;
    }

    // Validate Event Selection section
    if (sectionNum === 3) {
        const selectedEvents = document.querySelectorAll('input[name="events"]:checked');
        if (selectedEvents.length === 0) {
            showToast('Please select at least one event to participate in.');
            return false;
        }

        if (selectedEvents.length > 2) {
            showToast('You can only participate in a maximum of two events.');
            return false;
        }


        // const { techCount, nonTechCount } = getEventSelectedCount(selectedEvents);

        // if (techCount > 2 || (techCount === 1 && nonTechCount > 1) || nonTechCount > 1) {
        //     showToast('You can only participate in either two technical events OR one technical and one non-technical event.');
        //     return false;
        // }

        return true;
    }

    // Validate Team Details section
    if (sectionNum === 5 || sectionNum === 4) {
        // Check if Paper Presentation or Project Expo is selected
        const paperPresentation = document.getElementById('paperPresentation').checked;
        const projectExpo = document.getElementById('projectExpo').checked;

        if (paperPresentation || projectExpo) {
            const teamMemberInputs = document.getElementById(`section${sectionNum}`).querySelectorAll('.team-member-input');

            for (const input of teamMemberInputs) {
                if (input.required && !input.value.trim()) {
                    showToast('Please fill in all required details.');
                    input.focus();
                    return false;
                }
                if (input.type === 'email' && input.value.trim()) {
                    if (!validateEmail(input.value)) {
                        showToast('Please enter a valid email address.');
                        input.focus();
                        return false;
                    }
                    else {
                        if (!(await isUserExists(input.value))) {
                            showToast('User does not exist. Please register in the <a href="https://forms.gle/RetUchxwvY8uNbG4A">user registration form</a>.');
                            input.focus();
                            return false;
                        }
                    }
                }
            }

            // Check if abstract is provided for Paper Presentation
            if (paperPresentation && currentSectionName === "Paper Presentation") {
                const abstract = document.getElementById('abstract');
                if (abstract && !abstract.value.trim()) {
                    showToast('Please provide an abstract for Paper Presentation.');
                    abstract.focus();
                    return false;
                }
            }

            if (projectExpo && currentSectionName === "Project Expo") {
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
        }

        return true;
    }

    // Validate Confirmation section
    if (sectionNum === 6) {
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
    const eventDescription = eventData[eventName] || '';
    eventOneDetails.innerHTML = `
        <h2>${eventName}</h2>
        <div class="event-team-details">
        ${eventDescription}
        </div>
        ${handleTeamData(eventName)}
    `;
}

function handleTeamData(event) {
    let html = '';

    if (event === "Paper Presentation") {
        html += `
            <div class="event-team-details">
                <div class="form-group">
                    <label for="abstract">Abstract <span class="required">*</span></label>
                    <textarea id="abstract" name="abstract" rows="5" class="team-member-input" required></textarea>
                </div>
                
                <h4>Additional Team Members</h4>
                <p>You are already registered as the first member.</p>
                
                <div class="form-group floating-label">
                    <input type="email" id="member2Email" name="member2Email" class="team-member-input" placeholder=" ">
                    <label for="member2Email">Member 2 Email</label>
                </div>
                
                <div class="form-group floating-label">
                    <input type="email" id="member3Email" name="member3Email" class="team-member-input" placeholder=" ">
                    <label for="member3Email">Member 3 Email</label>
                </div>
            </div>
        `;
    }

    if (event === "Project Expo") {
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
                
                <div class="form-group floating-label">
                    <input type="email" id="projectMember2Email" name="projectMember2Email" class="team-member-input" placeholder=" ">
                    <label for="projectMember2Email">Member 2 Email</label>
                </div>
            </div>
        `;
    }

    return html;
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
    const email = document.getElementById('email').value;


    // Get selected events
    const selectedEvents = Array.from(document.querySelectorAll('input[name="events"]:checked'))
        .map(event => event.value);

    let summaryHTML = `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Selected Events:</strong> ${selectedEvents.join(', ')}</p>
    `;

    // Add team details if applicable
    const paperPresentation = document.getElementById('paperPresentation').checked;
    const projectExpo = document.getElementById('projectExpo').checked;

    if (paperPresentation) {
        const member2Email = document.getElementById('member2Email')?.value || 'None';
        const member3Email = document.getElementById('member3Email')?.value || 'None';

        summaryHTML += `
            <p><strong>Paper Presentation Team:</strong></p>
            <ul>
                <li>Team Members Mail: ${email} (you), ${member2Email}, ${member3Email}</li>
                <li>Abstract: Submitted</li>
            </ul>
        `;
    }

    if (projectExpo) {
        const projectTitle = document.getElementById('projectTitle')?.value || 'N/A';
        const projectMember2Email = document.getElementById('projectMember2Email')?.value || 'None';
        const projectDescription = document.getElementById('projectDescription')?.value || 'N/A';
        const projectType = document.querySelector('input[name="projectType"]:checked')?.value || 'N/A';

        summaryHTML += `
            <p><strong>Project Expo Team:</strong></p>
            <ul>
                <li>Project Title: ${projectTitle}</li>
                <li>Project Description: ${projectDescription}</li>
                <li>Project Type: ${projectType}</li>
                <li>Team Members Mail: ${email} (you), ${projectMember2Email}</li>
                <li>Demo Submission: Required by 13-04-2025</li>
            </ul>
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
document.getElementById('registrationForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!validateSection(5)) {
        return;
    }

    // Gather form data
    const data = {};

    const email = document.getElementById('email').value;


    // Get selected events
    const selectedEvents = Array.from(document.querySelectorAll('input[name="events"]:checked'))
        .map(event => event.value);

    data.email = email;
    data.events = [];
    for (let i = 0; i < selectedEvents.length; i++) {
        let eventData = {};
        eventData.name = selectedEvents[i];
        eventData.members = [];
        eventData.members.push(email);

        if (selectedEvents[i] === "Paper Presentation") {
            abstract = document.getElementById('abstract').value;


            member2Email = document.getElementById('member2Email').value;
            member3Email = document.getElementById('member3Email').value;

            if (member2Email) {
                eventData.members.push(member2Email);
            }
            if (member3Email) {
                eventData.members.push(member3Email);
            }

            eventData.extraData = {
                abstract: abstract,
            };


        }
        else if (selectedEvents[i] === "Project Expo") {
            projectTitle = document.getElementById('projectTitle').value;
            projectDescription = document.getElementById('projectDescription').value;
            projectType = document.querySelector('input[name="projectType"]:checked').value;
            projectMember2Email = document.getElementById('projectMember2Email').value;

            if (projectMember2Email) {
                eventData.members.push(projectMember2Email);
            }

            eventData.extraData = {
                projectTitle: projectTitle,
                projectDescription: projectDescription,
                projectType: projectType,
            };

        }


        data.events.push(eventData);
    }

    console.log(data);

    let req = await fetch('/register', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })

    let res = await req.json();
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

            // Reset form and go back to first section
            document.getElementById(`section${currentSection}`).classList.remove('active');
            currentSection = 1;
            document.getElementById(`section${currentSection}`).classList.add('active');
            updateProgress();

            // Reset the form
            document.getElementById('registrationForm').reset();
        });
    }
});

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

        if (selectedEvents.length > 2) {
            // showToast('You can only select a maximum of two events.');
            this.checked = false;
        }
    });
});

// Initialize the form
document.addEventListener('DOMContentLoaded', function () {
    // Make sure first section is active
    document.getElementById('section1').classList.add('active');
    updateProgress();
});