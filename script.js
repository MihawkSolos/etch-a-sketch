// btn container that has all the square divs within
const container = document.querySelector('.container');

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

    // create and call delGrid function.
    // create and call createGrid function.

});

// function to create the grid
let createGrid = (userInput) => {
    for(let i=0; i < userInput * userInput; i++){
        const div = document.createElement('div');
        div.classList.add('item'); // adds 'item' class for the new div
        div.textContent = i;
        container.appendChild(div);
    }
}


