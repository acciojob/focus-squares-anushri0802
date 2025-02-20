// Select the squares by their IDs
const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const square3 = document.getElementById('square3');

// Function to change colors
function changeColors(activeSquare) {
    const squares = [square1, square2, square3];
    
    // Loop through all squares and change the color of the ones not active
    squares.forEach(square => {
        if (square !== activeSquare) {
            square.style.backgroundColor = '#6F4E37'; // Coffee color
        } else {
            square.style.backgroundColor = '#E6E6FA'; // Lavender color
        }
    });
}

// Add event listeners to each square to change colors on mouseover
square1.addEventListener('mouseover', function() {
    changeColors(square1);
});

square2.addEventListener('mouseover', function() {
    changeColors(square2);
});

square3.addEventListener('mouseover', function() {
    changeColors(square3);
});

// Optional: Reset colors when the mouse leaves any square
const resetColors = () => {
    square1.style.backgroundColor = '#E6E6FA'; // Reset to lavender
    square2.style.backgroundColor = '#E6E6FA'; // Reset to lavender
    square3.style.backgroundColor = '#E6E6FA'; // Reset to lavender
};

square1.addEventListener('mouseout', resetColors);
square2.addEventListener('mouseout', resetColors);
square3.addEventListener('mouseout', resetColors);
