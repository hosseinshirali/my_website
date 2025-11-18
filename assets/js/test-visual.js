// test-visual.js
// Simple script to show a message and change the box color for testing JS loading.

window.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('test-box');
    if (box) {
        box.style.background = '#ff006e';
        box.textContent = 'JS Loaded! This is from test-visual.js';
        box.style.color = '#fff';
        box.style.transition = 'background 0.5s';
    } else {
        // If the box is not found, log for debugging
        console.warn('test-box element not found!');
    }
});
