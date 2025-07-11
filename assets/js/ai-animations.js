// AI-themed animations and enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js directly for better visibility
    if (window.particlesJS) {
        window.particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#3a86ff", "#8338ec"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 1,
                        "color": "#3a86ff"
                    }
                },
                "opacity": {
                    "value": 0.8,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#3a86ff",
                    "opacity": 0.7,
                    "width": 1.5
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "bounce",
                    "bounce": true,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
        
        // Add a console message to verify initialization
        console.log("Particles.js initialized for neural network effect");
    } else {
        console.error("Particles.js not loaded!");
    }

    // Add typewriter effect to the intro text
    if (document.querySelector('#intro p')) {
        const introText = document.querySelector('#intro p');
        const originalText = introText.textContent;
        introText.textContent = '';
        
        let i = 0;
        const typeEffect = setInterval(() => {
            if (i < originalText.length) {
                introText.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeEffect);
            }
        }, 30);
    }
    
    // Add smooth scrolling to nav links
    document.querySelectorAll('#header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Existing click handler already manages this
            // This is just for additional effects
            
            // Add a subtle ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('nav-ripple');
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Enhance skill section with progress indicators
    document.querySelectorAll('#skills ul li').forEach(skill => {
        // Add a subtle animation when skills come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('skill-visible');
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(skill);
    });
    
    // Add floating effect to publication items
    document.querySelectorAll('#publications ul li').forEach((pub, index) => {
        pub.style.animationDelay = `${index * 0.1}s`;
        pub.classList.add('publication-item');
    });
    
    // Add pulse animation to contact icons
    document.querySelectorAll('#contact .icons a').forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
        icon.classList.add('pulse-icon');
    });
    
    // Add hover effect to all articles
    document.querySelectorAll('article').forEach(article => {
        article.addEventListener('mouseenter', function() {
            this.classList.add('article-hover');
        });
        
        article.addEventListener('mouseleave', function() {
            this.classList.remove('article-hover');
        });
    });
    
    // Add dynamic 3D tilt effect to the header
    const header = document.querySelector('#header');
    if (header) {
        header.addEventListener('mousemove', function(e) {
            const rect = header.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleY = (x - centerX) / 30;
            const angleX = (y - centerY) / -30;
            
            header.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        header.addEventListener('mouseleave', function() {
            header.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
    
    // Initialize custom cursor if on desktop
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.classList.add('ai-cursor');
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
        
        // Change cursor style on interactive elements
        document.querySelectorAll('a, button, .icons li').forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-active');
            });
            
            item.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-active');
            });
        });
    }
    
    // Add AI-related background animation to the main wrapper
    const wrapper = document.querySelector('#wrapper');
    if (wrapper) {
        wrapper.classList.add('ai-background');
    }
});
