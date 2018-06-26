const form = document.querySelector('form');

function changeHeading(e) {
    e.preventDefault(); // Prevent the form from submitting and automatically reloading the page.
    // Select heading and text input and change the heading to the value of the text input.
    const heading = document.querySelector('.changingHeading');
    const textInput = e.target.answer;
    const newHeading = textInput.value;
    heading.textContent = newHeading;
}

form.addEventListener('submit', changeHeading);