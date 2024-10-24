const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

function createGrid(squaresPerSide) {
  // Clear the previous grid
  container.innerHTML = '';

  // Calculate the size of each square
  const squareSize = 960 / squaresPerSide;

  // Create squares for the grid
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
  }
}

// Default grid size is 16x16
createGrid(16);

// Button to create a new grid
resetButton.addEventListener('click', () => {
  let squaresPerSide = prompt('Enter the number of squares per side (maximum 100):');
  squaresPerSide = parseInt(squaresPerSide);

  if (squaresPerSide > 0 && squaresPerSide <= 100) {
    createGrid(squaresPerSide);
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});
