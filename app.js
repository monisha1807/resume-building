let styleCss = `/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f5f7fa;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Styles */
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1.5rem 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand h1 {
    font-size: 2.2rem;
    margin-bottom: 0.3rem;
    font-weight: 300;
}

.brand h1 i {
    margin-right: 10px;
}

.brand p {
    font-size: 1rem;
    opacity: 0.9;
}

.user-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.user-greeting {
    font-size: 1rem;
    opacity: 0.9;
}

.btn-logout {
    padding: 0.5rem 1rem;
    background: rgba(255,255,255,0.2);
    border: 1px solid rgba(255,255,255,0.3);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-logout:hover {
    background: rgba(255,255,255,0.3);
}

/* Main Content */
main {
    padding: 2rem 0;
}

/* Tab Navigation */
.tabs {
    display: flex;
    background: white;
    border-radius: 10px;
    margin-bottom: 2rem;
    box-shadow: 0 2px 15px rgba(0,0,0,0.08);
    overflow: hidden;
}

.tab-button {
    flex: 1;
    padding: 1rem;
    border: none;
    background: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    color: #666;
    transition: all 0.3s ease;
    border-bottom: 3px solid transparent;
}

.tab-button:hover {
    background: #f8f9fa;
    color: #333;
}

.tab-button.active {
    background: #667eea;
    color: white;
    border-bottom-color: #5a67d8;
}

/* Tab Content */
.tab-content {
    display: none;
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.08);
    margin-bottom: 2rem;
}

.tab-content.active {
    display: block;
}

.tab-content h2 {
    color: #667eea;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    font-weight: 600;
}

/* Form Styles */
.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #4a5568;
}

.form-group input,
.form-group textarea,
.form-group select {
    padding: 0.75rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    background: white;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group small {
    margin-top: 0.25rem;
    color: #718096;
    font-size: 0.875rem;
}

.form-group input[type="checkbox"] {
    width: auto;
    margin-right: 0.5rem;
}

/* Photo Upload Styles */
.photo-section {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    border-left: 4px solid #667eea;
}

.photo-upload-container {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.photo-preview {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #e2e8f0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.photo-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.photo-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #718096;
    font-size: 0.9rem;
}

.photo-placeholder i {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #cbd5e0;
}

.photo-controls {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.btn-photo {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #667eea;
    color: white;
}

.btn-photo:hover {
    background: #5a67d8;
    transform: translateY(-2px);
}

.btn-photo.remove {
    background: #e53e3e;
}

.btn-photo.remove:hover {
    background: #c53030;
}

.photo-controls small {
    color: #718096;
    font-size: 0.8rem;
}

/* Experience, Education, and Project Items */
.experience-item,
.education-item,
.project-item {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    border-left: 4px solid #667eea;
    position: relative;
}

/* Buttons */
.add-btn,
.remove-btn,
.btn-primary,
.btn-secondary,
.generate-qr-btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.add-btn,
.btn-primary {
    background: #667eea;
    color: white;
}

.add-btn:hover,
.btn-primary:hover {
    background: #5a67d8;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
    background: #e2e8f0;
    color: #4a5568;
}

.btn-secondary:hover {
    background: #cbd5e0;
    transform: translateY(-2px);
}

.remove-btn {
    background: #fed7d7;
    color: #e53e3e;
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
}

.remove-btn:hover {
    background: #feb2b2;
}

.generate-qr-btn {
    background: #48bb78;
    color: white;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
}

.generate-qr-btn:hover {
    background: #38a169;
}

/* Project QR Code Container */
.project-qr-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
}

.project-qr-code {
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    display: none;
}

.project-qr-code.visible {
    display: block;
}

/* Preview Actions */
.preview-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

/* Resume Output Styles */
.resume-output {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.08);
    min-height: 400px;
}

.resume-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 1.5rem;
    margin-bottom: 2rem;
    position: relative;
    background: linear-gradient(135deg, #0396FF 0%, #0D47A1 100%);
    color: white;
    padding: 40px;
    border-radius: 8px;
}

.resume-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #e2e8f0;
    flex-shrink: 0;
}

.resume-header-content {
    flex: 1;
}

.resume-header h1 {
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 0.5rem;
}

.resume-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    font-size: 0.9rem;
    color: #4a5568;
}

.resume-section {
    margin-bottom: 2rem;
}

.resume-section h2 {
    color: #0396FF;
    text-transform: uppercase;
    font-size: 1.2em;
    margin-bottom: 15px;
    border-bottom: 2px solid #0396FF;
    padding-bottom: 5px;
}

.resume-item {
    margin-bottom: 1.5rem;
}

.resume-item h3 {
    font-size: 1.1rem;
    color: #2d3748;
    margin-bottom: 0.25rem;
}

.resume-item .company,
.resume-item .institution {
    font-weight: 600;
    color: #4a5568;
}

.resume-item .date {
    color: #718096;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.resume-item .description {
    color: #4a5568;
    line-height: 1.6;
}

.resume-item .description ul {
    margin-left: 1rem;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.skill-category {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 6px;
    border-left: 3px solid #667eea;
}

.skill-category h4 {
    color: #2d3748;
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

.skill-list {
    color: #4a5568;
    font-size: 0.9rem;
    line-height: 1.4;
}

.project-qr {
    float: right;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
}

/* Add these new styles for the modern resume layout */
.modern-resume {
    background: white;
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.resume-header {
    position: relative;
    background: linear-gradient(135deg, #0396FF 0%, #0D47A1 100%);
    color: white;
    padding: 40px;
    border-radius: 8px;
    margin-bottom: 30px;
}

.profile-section {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 30px;
    align-items: center;
}

.profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.3);
    overflow: hidden;
}

.profile-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-info h1 {
    font-size: 2.5em;
    margin: 0 0 10px 0;
    text-transform: uppercase;
}

.resume-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
}

.resume-section {
    margin-bottom: 25px;
}

.resume-section h2 {
    color: #0396FF;
    text-transform: uppercase;
    font-size: 1.2em;
    margin-bottom: 15px;
    border-bottom: 2px solid #0396FF;
    padding-bottom: 5px;
}

.contact-info {
    list-style: none;
    padding: 0;
}

.contact-info li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #444;
}

.contact-info i {
    margin-right: 10px;
    color: #0396FF;
    width: 20px;
}

/* Project section with QR codes */
.project-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.project-qr {
    width: 100px;
    height: 100px;
    background: white;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
    
    .tabs {
        flex-direction: column;
    }
    
    .tab-button {
        border-bottom: 1px solid #e2e8f0;
        border-radius: 0;
    }
    
    .form-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .preview-actions {
        flex-direction: column;
    }
    
    .photo-upload-container {
        flex-direction: column;
        text-align: center;
    }
    
    .resume-header {
        flex-direction: column;
        text-align: center;
    }
    
    .remove-btn {
        position: static;
        margin-top: 1rem;
    }
    
    .project-qr-container {
        flex-direction: column;
        align-items: flex-start;
    }
}

@media (max-width: 480px) {
    header h1 {
        font-size: 2rem;
    }
    
    header p {
        font-size: 1rem;
    }
    
    .tab-content {
        padding: 1rem;
    }
}

/* Print Styles for Resume */
@media print {
    body {
        background: white;
    }
    
    .tabs,
    .preview-actions {
        display: none;
    }
    
    .resume-output {
        box-shadow: none;
        padding: 0;
    }
    
    .tab-content {
        box-shadow: none;
        padding: 0;
    }
}

/* Loading Animation */
.loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Scroll to Top Button */
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scroll-to-top:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(0,0,0,0.4);
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}

.scroll-to-top:active {
    transform: translateY(-1px);
}

@media (max-width: 768px) {
    .scroll-to-top {
        width: 45px;
        height: 45px;
        bottom: 20px;
        right: 20px;
        font-size: 16px;
    }
}`;



// Global variables
let resumeData = {
    personal: {},
    experience: [],
    education: [],
    skills: {},
    projects: [],
    photo: null
};

let currentUser = null;

// Tab functionality
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// User management
function checkAuth() {
    // Get current user from localStorage
    currentUser = localStorage.getItem('currentUser');
    
    // If no user is logged in, redirect to login page
    // if (!currentUser) {
    //     window.location.href = 'index.html';
    //     return;
    // }

    // Load saved resume data if it exists
    loadUserResume();
}

function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('rememberUser');
    window.location.href = 'index.html';
}

function loadUserResume() {
    const savedResume = localStorage.getItem(`resume_${currentUser.id}`);
    if (savedResume) {
        resumeData = JSON.parse(savedResume);
        populateFormFields();
    }
}

function saveResume(buttonElement) {
    if (!currentUser) return;
    
    collectFormData();
    localStorage.setItem(`resume_${currentUser.id}`, JSON.stringify(resumeData));
    
    // Show success message
    const btn = buttonElement || event?.target;
    if (btn) {
        const originalText = btn.textContent;
        btn.textContent = 'Saved ✓';
        btn.style.background = '#38a169';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    } else {
        alert('Resume saved successfully!');
    }
}

// Experience management
function addExperience() {
    const container = document.getElementById('experience-container');
    const experienceItem = document.createElement('div');
    experienceItem.className = 'experience-item';
    experienceItem.innerHTML = `
        <div class="form-grid">
            <div class="form-group">
                <label>Job Title *</label>
                <input type="text" class="job-title" required>
            </div>
            <div class="form-group">
                <label>Company *</label>
                <input type="text" class="company" required>
            </div>
            <div class="form-group">
                <label>Start Date</label>
                <input type="month" class="start-date">
            </div>
            <div class="form-group">
                <label>End Date</label>
                <input type="month" class="end-date">
                <label><input type="checkbox" class="current-job"> Current Position</label>
            </div>
        </div>
        <div class="form-group">
            <label>Responsibilities & Achievements</label>
            <textarea class="job-description" rows="4" placeholder="• Describe your key responsibilities and achievements&#10;• Use bullet points for better ATS compatibility&#10;• Include quantifiable results where possible"></textarea>
        </div>
        <button type="button" class="remove-btn" onclick="removeExperience(this)">Remove</button>
    `;
    container.appendChild(experienceItem);
}

function removeExperience(button) {
    button.parentElement.remove();
}

// Education management
function addEducation() {
    const container = document.getElementById('education-container');
    const educationItem = document.createElement('div');
    educationItem.className = 'education-item';
    educationItem.innerHTML = `
        <div class="form-grid">
            <div class="form-group">
                <label>Degree *</label>
                <input type="text" class="degree" required>
            </div>
            <div class="form-group">
                <label>Institution *</label>
                <input type="text" class="institution" required>
            </div>
            <div class="form-group">
                <label>Graduation Year</label>
                <input type="number" class="graduation-year" min="1900" max="2030">
            </div>
            <div class="form-group">
                <label>GPA (Optional)</label>
                <input type="text" class="gpa" placeholder="3.5/4.0">
            </div>
        </div>
        <button type="button" class="remove-btn" onclick="removeEducation(this)">Remove</button>
    `;
    container.appendChild(educationItem);
}

function removeEducation(button) {
    button.parentElement.remove();
}

// Project management
function addProject() {
    const container = document.getElementById('projects-container');
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';
    projectItem.innerHTML = `
        <div class="form-grid">
            <div class="form-group">
                <label>Project Name *</label>
                <input type="text" class="project-name" required>
            </div>
            <div class="form-group">
                <label>Technologies Used</label>
                <input type="text" class="project-tech" placeholder="e.g., React, Node.js, MongoDB">
            </div>
        </div>
        <div class="form-group">
            <label>Project Description</label>
            <textarea class="project-description" rows="3" placeholder="Describe the project, your role, and key achievements"></textarea>
        </div>
        <div class="form-grid">
            <div class="form-group">
                <label>Project Link/URL</label>
                <input type="url" class="project-link" placeholder="https://github.com/user/project or https://project-demo.com">
            </div>
            <div class="form-group">
                <label>Upload Project Document (PDF)</label>
                <input type="file" class="project-file" accept=".pdf">
                <small>Upload project documentation, presentation, or report</small>
            </div>
        </div>
        <div class="project-qr-container">
            <canvas class="project-qr-code" width="100" height="100"></canvas>
            <button type="button" class="generate-qr-btn" onclick="generateProjectQR(this)">Generate QR Code</button>
        </div>
        <button type="button" class="remove-btn" onclick="removeProject(this)">Remove</button>
    `;
    container.appendChild(projectItem);
}

function removeProject(button) {
    button.parentElement.remove();
}

// QR Code generation for projects
async function generateProjectQR(button) {
    const projectItem = button.closest('.project-item');
    const projectName = projectItem.querySelector('.project-name').value;
    const projectLink = projectItem.querySelector('.project-link').value;

    if (!projectName || !projectLink) {
        alert('Please enter both project name and link before generating QR code');
        return;
    }

    // Generate QR code
    const qr = qrcode(0, 'L');
    qr.addData(projectLink);
    qr.make();

    // Display QR code on canvas
    const canvas = projectItem.querySelector('.project-qr-code');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const img = new Image();
    img.src = qr.createDataURL();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.classList.add('visible'); // Add class to mark QR as generated
    };
}

// Helper function to convert file to data URL
function convertFileToDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Collect form data
function collectFormData() {
    // Personal information
    resumeData.personal = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        linkedin: document.getElementById('linkedin').value,
        github: document.getElementById('github').value,
        summary: document.getElementById('summary').value
    };
    
    // Experience
    resumeData.experience = [];
    document.querySelectorAll('.experience-item').forEach(item => {
        const currentJob = item.querySelector('.current-job').checked;
        resumeData.experience.push({
            jobTitle: item.querySelector('.job-title').value,
            company: item.querySelector('.company').value,
            startDate: item.querySelector('.start-date').value,
            endDate: currentJob ? 'Present' : item.querySelector('.end-date').value,
            description: item.querySelector('.job-description').value,
            isCurrent: currentJob
        });
    });
    
    // Education
    resumeData.education = [];
    document.querySelectorAll('.education-item').forEach(item => {
        resumeData.education.push({
            degree: item.querySelector('.degree').value,
            institution: item.querySelector('.institution').value,
            graduationYear: item.querySelector('.graduation-year').value,
            gpa: item.querySelector('.gpa').value
        });
    });
    
    // Skills
    resumeData.skills = {
        technical: document.getElementById('technical-skills').value,
        soft: document.getElementById('soft-skills').value,
        certifications: document.getElementById('certifications').value
    };
    
    // Projects
    resumeData.projects = [];
    document.querySelectorAll('.project-item').forEach(item => {
        const canvas = item.querySelector('.project-qr-code');
        const hasQR = canvas.classList.contains('visible');
        
        resumeData.projects.push({
            name: item.querySelector('.project-name').value,
            technologies: item.querySelector('.project-tech').value,
            description: item.querySelector('.project-description').value,
            link: item.querySelector('.project-link').value,
            hasQRCode: hasQR,
            qrCodeDataURL: hasQR ? canvas.toDataURL() : null
        });
    });
}

async function getInlineHTML() {
     const response = styleCss;
    const cssText = await response;

    const resume = document.getElementById('resume-preview').cloneNode(true);

    const style = document.createElement('style');
    style.innerHTML = cssText;

    const wrapper = document.createElement('div');
    wrapper.appendChild(style);
    wrapper.appendChild(resume);

    return wrapper.innerHTML;
}

function buildProfilePhoto(className = "profile-photo") {
    if (!resumeData.photo) return "";

    return `
        <div class="${className}">
            <img src="${resumeData.photo}" alt="Profile Photo">
        </div>
    `;
}


function buildModernTemplate() {
    return `
    <div class="template modern-template">
        <div class="modern-header">
              ${buildProfilePhoto("modern-photo")}
             <div>
                <h1>${resumeData.personal.fullName || ""}</h1>
                <p>
                    ${resumeData.personal.email || ""} 
                    ${resumeData.personal.phone ? " | " + resumeData.personal.phone : ""}
                    ${resumeData.personal.linkedin ? " | Linkedin Profile: " + resumeData.personal.linkedin : ""}
                </p>
            </div>
        </div>

        ${buildSummary()}
        ${buildExperience()}
        ${buildEducation()}
        ${buildSkills()}
        ${buildProjects()}
    </div>
    `;
}



function buildSidebarTemplate() {
    return `
    <div class="template sidebar-template">
        <div class="sidebar-left">
            ${buildProfilePhoto("sidebar-photo")}

            <h2>${resumeData.personal.fullName || ""}</h2>
            <p>${resumeData.personal.email || ""}</p>
            <p>${resumeData.personal.phone || ""}</p>
            <p>${resumeData.personal.linkedin  ||""}
            
            <h3>Skills</h3>
            <p>${resumeData.skills?.technical || ""}</p>

            <h3>Certifications</h3>
            <p>${resumeData.skills?.certifications || ""}</p>
        </div>

        <div class="sidebar-right">
            ${buildSummary()}
            ${buildExperience()}
            ${buildEducation()}
            ${buildProjects()}
        </div>
    </div>
    `;
}

function buildCreativeTemplate() {
    return `
    <div class="template creative-template">
        <div class="creative-header">
            ${buildProfilePhoto("creative-photo")}
            <h1>${resumeData.personal.fullName || ""}</h1>
            <span>Email: ${resumeData.personal.email || ""}</span>
            <span>Phone: ${resumeData.personal.phone || ""}</span>
            <span>Linkedin: ${resumeData.personal.linkedin || ""}</span>
            <span>Location: ${resumeData.personal.location || ""}</span>
        </div>

        <div class="creative-section">
            ${buildSummary()}
        </div>

        <div class="creative-section highlight">
            ${buildProjects()}
        </div>

        ${buildExperience()}
        ${buildEducation()}
        ${buildSkills()}
    </div>
    `;
}

function buildATSTemplate() {
    return `
    <div class="template ats-template">

        ${buildProfilePhoto("ats-photo")}

        <h1>${resumeData.personal.fullName || ""}</h1>
        <p>
            ${resumeData.personal.email || ""} 
            ${resumeData.personal.phone ? " | " + resumeData.personal.phone : ""}
            ${resumeData.personal.linkedin ? " | " + resumeData.personal.linkedin : ""}
            ${resumeData.personal.location ? " | " + resumeData.personal.location : ""}
        </p>

        <hr/>

        ${buildSummary()}
        ${buildExperience()}
        ${buildEducation()}
        ${buildSkills()}
        ${buildProjects()}
    </div>
    `;
}

function buildSummary() {
    if (!resumeData.personal.summary) return "";
    return `
        <h2>Professional Summary</h2>
        <p>${resumeData.personal.summary}</p>
    `;
}
function buildExperience() {
    if (!resumeData.experience || resumeData.experience.length === 0)
        return "";

    let html = `<h2>Professional Experience</h2>`;

    resumeData.experience.forEach(exp => {
        if (!exp.jobTitle && !exp.company) return;

        const startDate = exp.startDate
            ? new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
            : "";

        const endDate = exp.endDate === "Present"
            ? "Present"
            : (exp.endDate
                ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                : "");

        html += `
            <div class="resume-item">
                <h3>${exp.jobTitle || ""}</h3>
                <div class="company">${exp.company || ""}</div>
                ${startDate || endDate ? `<div class="date">${startDate}${startDate && endDate ? " - " : ""}${endDate}</div>` : ""}
                ${exp.description ? `<div class="description">${formatDescription(exp.description)}</div>` : ""}
            </div>
        `;
    });

    return html;
}
function buildEducation() {
    if (!resumeData.education || resumeData.education.length === 0)
        return "";

    let html = `<h2>Education</h2>`;

    resumeData.education.forEach(edu => {
        if (!edu.degree && !edu.institution) return;

        html += `
            <div class="resume-item">
                <h3>${edu.degree || ""}</h3>
                <div class="institution">${edu.institution || ""}</div>
                ${edu.graduationYear ? `<div class="date">${edu.graduationYear}</div>` : ""}
                ${edu.gpa ? `<div class="description">GPA: ${edu.gpa}</div>` : ""}
            </div>
        `;
    });

    return html;
}
function buildSkills() {
    if (!resumeData.skills)
        return "";

    const { technical, soft, certifications } = resumeData.skills;

    if (!technical && !soft && !certifications)
        return "";

    let html = `<h2>Skills & Certifications</h2>`;

    if (technical) {
        html += `
            <div class="resume-item">
                <strong>Technical Skills:</strong>
                <div>${technical}</div>
            </div>
        `;
    }

    if (soft) {
        html += `
            <div class="resume-item">
                <strong>Soft Skills:</strong>
                <div>${soft}</div>
            </div>
        `;
    }

    if (certifications) {
        html += `
            <div class="resume-item">
                <strong>Certifications:</strong>
                <div>${certifications}</div>
            </div>
        `;
    }

    return html;
}
function buildProjects() {
    if (!resumeData.projects || resumeData.projects.length === 0)
        return "";

    let html = `<h2>Projects</h2>`;

    resumeData.projects.forEach(project => {
        if (!project.name) return;

        html += `
            <div class="resume-item">
                <h3>${project.name}</h3>
                ${project.description ? `<div class="description">${project.description}</div>` : ""}
                ${project.technologies ? `<div><strong>Technologies:</strong> ${project.technologies}</div>` : ""}
                ${project.hasQRCode ? 
                    `<img src="${project.qrCodeDataURL}" class="project-qr" width="80">`
                    : ""}
            </div>
        `;
    });

    return html;
}
function formatDescription(text) {
    if (!text) return "";

    const lines = text.split('\n').filter(line => line.trim() !== "");

    if (lines.length === 0) return text;

    return `<ul>` +
        lines.map(line => `<li>${line}</li>`).join("") +
        `</ul>`;
}


// Generate resume preview
function generatePreview() {
    collectFormData();
    
    const theme = document.getElementById("resumeTheme").value;
    const previewContainer = document.getElementById("resume-preview");

    let resumeHTML = "";

    if (theme === "modern") {
        resumeHTML = buildModernTemplate();
    } 
    else if (theme === "sidebar") {
        resumeHTML = buildSidebarTemplate();
    }
    else if (theme === "creative") {
        resumeHTML = buildCreativeTemplate();
    }
    else if (theme === "ats") {
        resumeHTML = buildATSTemplate();
    }

    // let resumeHTML = `
    //     <div class="resume-template ${selectedTheme}
    //         <div class="resume-header">
    //             ${resumeData.photo ? `<img src="${resumeData.photo}" alt="Profile Photo" class="resume-photo">` : ''}
    //             <div class="resume-header-content">
    //                 <h1>${resumeData.personal.fullName || 'Your Name'}</h1>
    //                 <div class="resume-contact">
    //                     ${resumeData.personal.email ? `<span><i class="fas fa-envelope"></i> ${resumeData.personal.email}</span>` : ''}
    //                     ${resumeData.personal.phone ? `<span><i class="fas fa-phone"></i> ${resumeData.personal.phone}</span>` : ''}
    //                     ${resumeData.personal.location ? `<span><i class="fas fa-map-marker-alt"></i> ${resumeData.personal.location}</span>` : ''}
    //                     ${resumeData.personal.linkedin ? `<span><i class="fab fa-linkedin"></i> LinkedIn</span>` : ''}
    //                     ${resumeData.personal.github ? `<span><i class="fab fa-github"></i> GitHub</span>` : ''}
    //                 </div>

    //             </div>
    //         </div>
    //     </div>
    // `;
    
    // // Professional Summary
    // if (resumeData.personal.summary) {
    //     resumeHTML += `
    //         <div class="resume-section">
    //             <h2>Professional Summary</h2>
    //             <p>${resumeData.personal.summary}</p>
    //         </div>
    //     `;
    // }
    
    // // Experience
    // if (resumeData.experience.length > 0) {
    //     resumeHTML += `<div class="resume-section"><h2>Professional Experience</h2>`;
    //     resumeData.experience.forEach(exp => {
    //         if (exp.jobTitle || exp.company) {
    //             const startDate = exp.startDate ? new Date(exp.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : '';
    //             const endDate = exp.endDate === 'Present' ? 'Present' : (exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : '');
                
    //             resumeHTML += `
    //                 <div class="resume-item">
    //                     <h3>${exp.jobTitle}</h3>
    //                     <div class="company">${exp.company}</div>
    //                     ${startDate || endDate ? `<div class="date">${startDate}${startDate && endDate ? ' - ' : ''}${endDate}</div>` : ''}
    //                     ${exp.description ? `<div class="description">${formatDescription(exp.description)}</div>` : ''}
    //                 </div>
    //             `;
    //         }
    //     });
    //     resumeHTML += `</div>`;
    // }
    
    // // Education
    // if (resumeData.education.length > 0) {
    //     resumeHTML += `<div class="resume-section"><h2>Education</h2>`;
    //     resumeData.education.forEach(edu => {
    //         if (edu.degree || edu.institution) {
    //             resumeHTML += `
    //                 <div class="resume-item">
    //                     <h3>${edu.degree}</h3>
    //                     <div class="institution">${edu.institution}</div>
    //                     ${edu.graduationYear ? `<div class="date">${edu.graduationYear}</div>` : ''}
    //                     ${edu.gpa ? `<div class="description">GPA: ${edu.gpa}</div>` : ''}
    //                 </div>
    //             `;
    //         }
    //     });
    //     resumeHTML += `</div>`;
    // }
    
    // // Skills
    // const hasSkills = resumeData.skills.technical || resumeData.skills.soft || resumeData.skills.certifications;
    // if (hasSkills) {
    //     resumeHTML += `<div class="resume-section"><h2>Skills & Certifications</h2><div class="skills-grid">`;
        
    //     if (resumeData.skills.technical) {
    //         resumeHTML += `
    //             <div class="skill-category">
    //                 <h4>Technical Skills</h4>
    //                 <div class="skill-list">${resumeData.skills.technical}</div>
    //             </div>
    //         `;
    //     }
        
    //     if (resumeData.skills.soft) {
    //         resumeHTML += `
    //             <div class="skill-category">
    //                 <h4>Soft Skills</h4>
    //                 <div class="skill-list">${resumeData.skills.soft}</div>
    //             </div>
    //         `;
    //     }
        
    //     if (resumeData.skills.certifications) {
    //         resumeHTML += `
    //             <div class="skill-category">
    //                 <h4>Certifications</h4>
    //                 <div class="skill-list">${resumeData.skills.certifications}</div>
    //             </div>
    //         `;
    //     }
        
    //     resumeHTML += `</div></div>`;
    // }
    
    // // Projects
    // if (resumeData.projects.length > 0) {
    //     resumeHTML += `<div class="resume-section"><h2>Projects</h2>`;
    //     resumeData.projects.forEach(project => {
    //         if (project.name) {
    //             resumeHTML += `
    //                 <div class="resume-item">
    //                     <div class="project-header">
    //                         <h3>${project.name}</h3>
    //                         ${project.hasQRCode ? 
    //                             `<img src="${project.qrCodeDataURL}" alt="Project QR Code" class="project-qr" width="80" height="80">` 
    //                             : ''}
    //                     </div>
    //                 </div>
    //             `;
    //         }
    //     });
    //     resumeHTML += `</div>`;
    // }
    
    previewContainer.innerHTML = resumeHTML;
}

async function downloadWordResume() {
    generatePreview();

    const inlineHTML = await getInlineHTML();

    const wordContent = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office"
          xmlns:w="urn:schemas-microsoft-com:office:word"
          xmlns="http://www.w3.org/TR/REC-html40">
    <head><meta charset="utf-8"></head>
    <body>
        ${inlineHTML}
    </body>
    </html>`;

    const blob = new Blob([wordContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${resumeData.personal.fullName}_Resume.doc`;
    a.click();
    URL.revokeObjectURL(url);
}

function downloadPDFResume() {
    generatePreview();

    const element = document.getElementById('resume-preview');

    document.body.classList.add('pdf-export');

    html2pdf().set({
        margin: [5, 10, 10, 10], 
        filename: `${resumeData.personal.fullName}_Resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    }).from(element).save().then(() => {
        document.body.classList.remove('pdf-export');
    });
}



// Format description with bullet points
function formatDescription(description) {
    if (!description) return '';
    
    const lines = description.split('\n').filter(line => line.trim());
    if (lines.some(line => line.trim().startsWith('•') || line.trim().startsWith('-'))) {
        const listItems = lines.map(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
                return `<li>${trimmed.substring(1).trim()}</li>`;
            }
            return `<li>${trimmed}</li>`;
        }).join('');
        return `<ul>${listItems}</ul>`;
    }
    
    return description.replace(/\n/g, '<br>');
}

// Download functionality
function downloadResume(format) {
    collectFormData();
    
    if (!resumeData.personal.fullName) {
        alert('Please fill in at least your name before downloading.');
        return;
    }
    
    if (format === 'html') {
        downloadHTMLResume();
    } else if (format === 'pdf') {
        downloadPDFResume();
    } else if (format === 'docx') {
        downloadWordResume();
    }
}

// Alternative PDF download using print-to-PDF approach
function downloadPDFAlternative() {
    generatePreview();
    
    // Create a new window with the resume content
    const printWindow = window.open('', '_blank');
    const resumeContent = document.getElementById('resume-preview').innerHTML;
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>${resumeData.personal.fullName} - Resume</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                .resume-header { border-bottom: 2px solid #ccc; padding-bottom: 10px; margin-bottom: 20px; }
                .resume-photo { width: 100px; height: 100px; border-radius: 50%; float: right; }
                .resume-section { margin-bottom: 20px; }
                .resume-section h2 { color: #333; border-bottom: 1px solid #ccc; }
                @media print { body { margin: 0; } }
            </style>
        </head>
        <body>
            ${resumeContent}
            <script>
                window.onload = function() {
                    window.print();
                    setTimeout(function() { window.close(); }, 1000);
                }
            </script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
}

async function downloadHTMLResume() {
    generatePreview();

    const resumeContent = document.getElementById('resume-preview').outerHTML;
  const inlineHTML = await getInlineHTML();
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>${resumeData.personal.fullName} - Resume</title>
        <style>${document.querySelector('style').innerHTML}</style>
    </head>
    <body>${inlineHTML}</body>
    </html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${resumeData.personal.fullName}_Resume.html`;
    a.click();
}



// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    checkAuth();
    
    // Handle URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    
    // If tab parameter is specified, open that tab
    if (tabParam && document.getElementById(tabParam)) {
        // Find the corresponding tab button and click it
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            if (button.textContent.toLowerCase().includes(tabParam.toLowerCase()) || 
                button.onclick.toString().includes(tabParam)) {
                setTimeout(() => button.click(), 100);
            }
        });
        
        // For preview tab specifically
        if (tabParam === 'preview') {
            setTimeout(() => {
                const previewTab = document.querySelector('[onclick*="preview"]');
                if (previewTab) previewTab.click();
            }, 100);
        }
    }
    
    // Photo upload handler
    document.getElementById('photoInput').addEventListener('change', handlePhotoUpload);
    
    // Handle current job checkbox
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('current-job')) {
            const endDateInput = e.target.closest('.form-group').querySelector('.end-date');
            if (e.target.checked) {
                endDateInput.disabled = true;
                endDateInput.value = '';
            } else {
                endDateInput.disabled = false;
            }
        }
    });
    
    // Auto-save to localStorage
    setInterval(() => {
        if (currentUser) {
            saveResume();
        }
    }, 30000);
    
    // Scroll to top functionality
    window.addEventListener('scroll', function() {
        const scrollButton = document.getElementById('scrollToTop');
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});

// Populate form fields with saved data
function populateFormFields() {
    // Personal info
    if (resumeData.personal) {
        document.getElementById('fullName').value = resumeData.personal.fullName || '';
        document.getElementById('email').value = resumeData.personal.email || '';
        document.getElementById('phone').value = resumeData.personal.phone || '';
        document.getElementById('location').value = resumeData.personal.location || '';
        document.getElementById('linkedin').value = resumeData.personal.linkedin || '';
        document.getElementById('github').value = resumeData.personal.github || '';
        document.getElementById('summary').value = resumeData.personal.summary || '';
    }
    
    // Photo
    if (resumeData.photo) {
        const photoPreview = document.getElementById('photoPreview');
        const placeholder = document.querySelector('.photo-placeholder');
        const removeBtn = document.getElementById('removePhotoBtn');
        
        photoPreview.src = resumeData.photo;
        photoPreview.style.display = 'block';
        placeholder.style.display = 'none';
        removeBtn.style.display = 'inline-flex';
    }
    
    // Skills
    if (resumeData.skills) {
        document.getElementById('technical-skills').value = resumeData.skills.technical || '';
        document.getElementById('soft-skills').value = resumeData.skills.soft || '';
        document.getElementById('certifications').value = resumeData.skills.certifications || '';
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function generateProjectsHTML(projects) {
    let html = '<div class="projects-section">';
    html += '<h3>Projects</h3>';
    
    projects.forEach(project => {
        if (project.name) {
            html += '<div class="project-entry">';
            html += `<h4>${project.name}</h4>`;
            // Only include the QR code canvas, not the link
            if (project.qrCode) {
                html += `<div class="project-qr">${project.qrCode.outerHTML}</div>`;
            }
            html += '</div>';
        }
    });
    
    html += '</div>';
    return html;
}

function collectProjectData() {
    const projects = [];
    document.querySelectorAll('.project-item').forEach(item => {
        const project = {
            name: item.querySelector('.project-name').value,
            qrCode: item.querySelector('.project-qr-code')
        };
        if (project.name) {
            projects.push(project);
        }
    });
    return projects;
}

// Photo management
function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validate file
    if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const photoPreview = document.getElementById('photoPreview');
        const placeholder = document.querySelector('.photo-placeholder');
        const removeBtn = document.getElementById('removePhotoBtn');
        
        photoPreview.src = e.target.result;
        photoPreview.style.display = 'block';
        placeholder.style.display = 'none';
        removeBtn.style.display = 'inline-flex';
        
        // Store photo data
        resumeData.photo = e.target.result;
    };
    reader.readAsDataURL(file);
}

function removePhoto() {
    const photoPreview = document.getElementById('photoPreview');
    const placeholder = document.querySelector('.photo-placeholder');
    const removeBtn = document.getElementById('removePhotoBtn');
    const photoInput = document.getElementById('photoInput');
    
    photoPreview.style.display = 'none';
    placeholder.style.display = 'flex';
    removeBtn.style.display = 'none';
    photoInput.value = '';
    
    resumeData.photo = null;
}

