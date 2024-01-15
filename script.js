function createGrid() {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    const squareSize = Math.min(screenHeight, screenWidth) / 10; 
    const fontSize = squareSize / 1.5; 

    const rows = Math.ceil(screenHeight / squareSize);
    const columns = Math.ceil(screenWidth / squareSize);

    const gridContainer = document.getElementById('grid-container');

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const randomNumber = Math.floor(Math.random() * 10);

            const square = document.createElement('div');
            square.className = 'square number';
            square.innerText = randomNumber;

            const positionX = col * squareSize;
            const positionY = row * squareSize;

            square.style.left = `${positionX}px`;
            square.style.top = `${positionY}px`;
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.fontSize = `${fontSize}px`;

            gridContainer.appendChild(square);
        }
    }
}

const gridContainer = document.createElement('div');
gridContainer.id = 'grid-container';
document.body.appendChild(gridContainer);

setInterval(createGrid, 300); 
