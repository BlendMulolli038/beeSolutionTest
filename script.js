// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.step-card, .feature-card, .service-card, .blog-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements with starting styles
document.querySelectorAll('.step-card, .feature-card, .service-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Quote form submission
document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    alert('Thank you for your request! We will contact you with a quote soon.');
    this.reset();
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('quoteModal'));
    modal.hide();
});

// Event listeners
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


// New Reliable Chat Widget JS
document.addEventListener('DOMContentLoaded', function() {
  const chatButton = document.getElementById('chatButton');
  const chatPopup = document.getElementById('chatPopup');
  const closeChat = document.getElementById('closeChat');
  const questions = document.querySelectorAll('.faq-question');
  
  // Toggle chat popup
  chatButton.addEventListener('click', function() {
    chatPopup.classList.toggle('show');
  });
  
  // Close chat popup
  closeChat.addEventListener('click', function() {
    chatPopup.classList.remove('show');
  });
  
  // Toggle FAQ answers
  questions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      answer.classList.toggle('show');
    });
  });
  
  // Close when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#chatWidget') && !e.target.closest('.chat-popup')) {
      chatPopup.classList.remove('show');
    }
  });
});

// Enhanced Service Cards Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Service cards hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Initialize hover content position
        const hoverContent = card.querySelector('.service-hover-content');
        if (hoverContent) {
            hoverContent.style.transform = 'translateY(20px)';
        }
        
        // Mouse enter effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            
            if (hoverContent) {
                hoverContent.style.opacity = '1';
                hoverContent.style.transform = 'translateY(0)';
            }
        });
        
        // Mouse leave effect
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            
            if (hoverContent) {
                hoverContent.style.opacity = '0';
                hoverContent.style.transform = 'translateY(20px)';
            }
        });
    });
    
    // Click handler for service cards
    document.querySelectorAll('.service-card .btn-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // You can add specific behavior for each service button here
            const serviceTitle = this.closest('.service-card').querySelector('h3').textContent;
            console.log(`Service selected: ${serviceTitle}`);
            
            // Example: Show a modal or navigate to a specific page
            // window.location.href = '/services/' + serviceTitle.toLowerCase().replace(/\s+/g, '-');
        });
    });
});
