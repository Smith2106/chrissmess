const form = document.querySelector('form');

function addMovies(e) {
    e.preventDefault(); // Prevent the form from submitting and automatically reloading the page.
    // Append movie entered in text input field to unordered list below the form.
    const flicksList = document.querySelector('#flicks');
    const textInput = e.target.movie;
    const newFlick = textInput.value;

    const newListItem = document.createElement('li');
    newListItem.textContent = newFlick;
    flicksList.appendChild(newListItem);

    e.target.reset();
}

form.addEventListener('submit', changeHeading);