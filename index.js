const form = document.querySelector('form');

function changeHeading(e) {
    e.preventDefault(); // Prevent the form from submitting and automatically reloading the page.
    // Select heading and text input and change the heading to the value of the text input.
    const flicksList = document.querySelector('#flicks');
    const textInput = e.target.movie;
    const newFlick = textInput.value;
    flicksList.innerHTML += `<li>${newFlick}</li>`;
    e.target.reset();
}

form.addEventListener('submit', changeHeading);