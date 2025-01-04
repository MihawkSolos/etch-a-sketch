// function to create the grid
let createGrid = (userInput) => {
    delGrid();
    
    // Set the container size dynamically based on user input
    const containerWidth = userInput * 30; // 20px per item
    const containerHeight = userInput * 30; // 20px per item

    // Set the container's width and height
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;

    // Update the container's grid layout
    container.style.gridTemplateColumns = `repeat(${userInput}, 30px)`;
    container.style.gridTemplateRows = `repeat(${userInput}, 30px)`;

    // Create the divs for the grid
    for (let i = 0; i < userInput * userInput; i++) {
        const div = document.createElement('div');
        div.classList.add('item');

        // Add mouseover event listener for random background color
        div.addEventListener('mouseover', () => {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)},
             ${Math.floor(Math.random() * 256)},
              ${Math.floor(Math.random() * 256)})`;

            div.style.backgroundColor = randomColor;
        });

        container.appendChild(div);
    }
};



// function to delete grid
let delGrid = () => {
    const container = document.querySelector('.container');
    const items = container.querySelectorAll('.item');

    items.forEach(item => {
        item.remove();
    })
};

// btn container that has all the square divs within
const container = document.querySelector('.container');

// create the default 16 * 16 grid
createGrid(16);

// button that asks for user input on size of new grid
const gridBtn = document.querySelector('.gridBtn');

gridBtn.addEventListener('click', () => {
    let userInput = prompt('Enter the number of squares per side. (0-100)')

    if(userInput < 0 || userInput >100){
        userInput = 0;
        alert('Invaid! Choose a number within the range (0-100).')
    } else {
        createGrid(userInput);
    }
});




