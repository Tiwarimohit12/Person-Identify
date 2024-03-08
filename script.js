// Define variables
let presentCount = 0;

// Get DOM elements
const countDisplay = document.getElementById('count');
const markPresentBtn = document.getElementById('markPresentBtn');

// Event listener for marking present
markPresentBtn.addEventListener('click', () => {
    // Increment presentCount
    presentCount++;
    // Update countDisplay text
    countDisplay.textContent = presentCount;
});
