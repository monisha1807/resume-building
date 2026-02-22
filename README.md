# ResumeBulder

# Resume Builder

A modern, professional resume builder web application with ATS optimization, photo support, QR code generation for project portfolios, multiple templates and multiple export formats.

## 🌟 New Features

### 🏠 Landing Page & Authentication
- **Professional Home Page**: Modern landing page with feature highlights
- **User Registration**: Secure signup with email and password
- **User Login**: Remember me functionality and session management
- **Personal Dashboard**: User-specific resume storage and management

### 📸 Photo Support
- **Professional Headshots**: Upload and display profile photos
- **Smart Cropping**: Automatic circular cropping for professional appearance
- **File Validation**: Supports JPG/PNG with 5MB size limit
- **Easy Management**: One-click photo removal and replacement

## Features

### 🎯 ATS Optimization
- Clean, professional formatting optimized for Applicant Tracking Systems
- Proper heading structure and keyword-friendly layout
- Export options in both HTML and PDF formats

### 📱 Responsive Design
- Mobile-friendly interface
- Modern, intuitive user experience
- Progressive web app capabilities

### 🔧 Core Functionality
- **Personal Information**: Contact details, professional summary
- **Work Experience**: Multiple positions with date ranges and achievements
- **Education**: Academic background with GPA support
- **Skills**: Technical skills, soft skills, and certifications
- **Projects**: Portfolio projects with descriptions and technology stacks

### 📲 QR Code Integration
- Generate QR codes for project portfolios
- Support for both project links and PDF uploads
- Embedded QR codes in final resume for easy portfolio access
- Scan QR codes to view project documentation, presentations, or live demos

  🎨 Choose Your Template

Users can select from multiple professionally designed resume templates to match their personal style and career needs. Each template is structured to highlight key information clearly and effectively. Switching between templates is simple, allowing users to preview different designs before finalizing their resume.

### 💾 Smart Features
- User authentication and personal resume storage
- Photo upload with automatic optimization
- Auto-save functionality (every 30 seconds)
- Real-time preview generation
- mulitiple templates are available to design your resume
- Multiple export formats (PDF, HTML, Word)
- File upload support for project documentation

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Quick Start
1. **Launch the Application**
   - Open `home.html` in your web browser for the full experience
   - Or open `index.html` directly for immediate access

2. **Create Your Account (Recommended)**
   - Sign up with your name, email, and password
   - Your resumes will be saved to your personal account

3. **Build Your Resume**
   - Upload a professional photo (optional)
   - Fill in your personal information
   - Add work experience, education, and skills
   - Include projects with QR code generation
   - choose a template
   - Preview and download in your preferred format

### Usage

#### 1. Getting Started
- Visit the home page (`home.html`) for the best experience
- Create an account to save your progress
- Or jump directly into the resume builder (`index.html`)

#### 2. Personal Information & Photo
- Upload a professional headshot (JPG/PNG, max 5MB)
- Fill in your contact information and professional summary
- Photos are automatically cropped to circular format

#### 3. Work Experience
Add your work history with:
- Job titles and company names
- Employment dates (with "Current Position" option)
- Detailed descriptions of responsibilities and achievements

#### 3. Education
Include your academic background:
- Degrees and institutions
- Graduation years
- GPA (optional)

#### 4. Skills
List your:
- Technical skills
- Soft skills
- Professional certifications

#### 5. Projects
Showcase your portfolio projects:
- Project names and descriptions
- Technologies used
- Project links or upload PDF documentation
- Generate QR codes for easy access

#### 6. Preview & Export
- Generate a real-time preview of your resume
- Download as PDF, HTML, or Word document
- QR codes are automatically included for projects
- Save your resume to your account for future editing

## QR Code Feature

The QR code functionality allows recruiters and hiring managers to quickly access your project portfolios:

1. **For Project Links**: QR codes link directly to live demos or repositories
2. **For PDF Uploads**: QR codes contain the uploaded project documentation
3. **Mobile-Friendly**: Easy scanning with any smartphone camera

## File Structure

```
resume-builder/
├── home.html               # Landing page with authentication
├── index.html              # Main resume builder application
├── assets/
│   ├── css/
│   │   ├── home.css        # Home page styling
│   │   └── style.css       # Resume builder styling
│   └── js/
│       ├── home.js         # Home page functionality
│       └── app.js          # Resume builder logic
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## Technical Details

### Dependencies
- **Font Awesome**: Icons for professional appearance
- **QRCode.js**: QR code generation library
- **jsPDF**: PDF generation and export
- **HTML5 Canvas**: QR code rendering

### Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Features Implementation
- **Responsive Grid**: CSS Grid and Flexbox for layout
- **Form Management**: Dynamic addition/removal of sections
- **File Handling**: FileReader API for PDF uploads
- **Local Storage**: Auto-save functionality
- **Canvas Rendering**: QR code generation and display

## ATS Optimization Features

### Layout Optimization
- Clean, linear structure
- Consistent heading hierarchy
- Standard section names
- Proper date formatting

### Content Guidelines
- Bullet-point formatting for achievements
- Action verb recommendations
- Quantifiable results emphasis
- Industry keyword integration

### Export Quality
- High-resolution PDF output
- Proper font embedding
- Consistent formatting across platforms
- Print-friendly design

## Development

### Local Development
1. Open `index.html` in a web browser
2. Use browser developer tools for debugging
3. Modify CSS/JavaScript files as needed

### Customization Options
- Color scheme modification in `style.css`
- Additional form fields in `index.html`
- Enhanced functionality in `app.js`

## Troubleshooting

### Common Issues
1. **QR codes not generating**: Ensure you have an active internet connection
2. **PDF download issues**: Check browser pop-up settings
3. **Auto-save not working**: Verify localStorage is enabled

### Browser Support
If experiencing issues, try:
1. Clearing browser cache
2. Disabling ad blockers
3. Using an updated browser version

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review browser console for errors
3. Ensure all files are properly loaded

---


**Note**: This is a client-side application that runs entirely in your browser. Your data is stored locally and not transmitted to any external servers, ensuring privacy and security.

