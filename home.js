// Home page functionality
let currentUser = null;

// Modal functionality
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('signupModal').style.display = 'none';
}

function showSignup() {
    document.getElementById('signupModal').style.display = 'block';
    document.getElementById('loginModal').style.display = 'none';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function switchToSignup() {
    closeModal('loginModal');
    showSignup();
}

function switchToLogin() {
    closeModal('signupModal');
    showLogin();
}

function showForgotPassword() {
    alert('Forgot password functionality would be implemented here');
}

function showDemo() {
    // Redirect to the main resume builder
    window.location.href = 'index.html';
}

function createResume() {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
        // User is logged in, redirect to resume builder
        window.location.href = 'index.html';
    } else {
        // User not logged in, show signup modal
        showSignup();
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
}

// Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    // Login form handler
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Simple validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Mock authentication - in real app, this would call a backend API
        const users = JSON.parse(localStorage.getItem('resumeBuilderUsers') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            if (rememberMe) {
                localStorage.setItem('rememberUser', JSON.stringify(user));
            }
            
            alert('Login successful! Redirecting to resume builder...');
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1000);
        } else {
            alert('Invalid email or password');
        }
    });
    
    // Signup form handler
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;
        
        // Validation
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }
        
        if (!agreeTerms) {
            alert('Please agree to the Terms of Service and Privacy Policy');
            return;
        }
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('resumeBuilderUsers') || '[]');
        if (users.find(u => u.email === email)) {
            alert('An account with this email already exists');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            password: password, // In real app, this would be hashed
            createdAt: new Date().toISOString(),
            resumes: []
        };
        
        users.push(newUser);
        localStorage.setItem('resumeBuilderUsers', JSON.stringify(users));
        
        currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        alert('Account created successfully! Redirecting to resume builder...');
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);
    });
    
    // Check if user is already logged in
    const rememberedUser = localStorage.getItem('rememberUser');
    const sessionUser = localStorage.getItem('currentUser');
    
    if (rememberedUser || sessionUser) {
        currentUser = JSON.parse(rememberedUser || sessionUser);
        // Could auto-redirect to resume builder or show different UI
    }
});

// Animation for hero section
document.addEventListener('DOMContentLoaded', function() {
    // Animate feature items on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
    
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

// CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .feature-card {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}
