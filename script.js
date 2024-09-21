// function to create the grid
let createGrid = (userInput) => {
    delGrid();
    for(let i=0; i < userInput * userInput; i++){
        const div = document.createElement('div');
        div.classList.add('item'); // adds 'item' class for the new div
        // div.textContent = i;

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




