document.addEventListener('DOMContentLoaded', function() {
  if (window.particlesJS) {
    window.particlesJS('particles-js', { // Corrected ID
      "particles": {
        "number": {
          "value": 150,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#ffffff", "#3a86ff", "#8ecae6"]
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2.5,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#3a86ff",
          "opacity": 0.15,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.5,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "bubble": {
            "distance": 250,
            "size": 4,
            "duration": 2,
            "opacity": 0.8
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    });
    console.log("AI Universe background initialized.");
  }
});
