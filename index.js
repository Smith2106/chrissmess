const button = document.querySelector('button');

function changeHeading(e) {
    e.preventDefault(); // Prevent the form from submitting and automatically reloading the page.
    // Select heading and text input and change the heading to the value of the text input.
    const heading = document.querySelector('.changingHeading');
    const textInput = document.querySelector('input');
    const newHeading = textInput.value;
    heading.textContent = newHeading;
}

button.addEventListener('click', changeHeading);