const button = document.querySelector('button');

function changeHeading(e) {
    e.preventDefault();
    const heading = document.querySelector('.changingHeading');
    const textInput = document.querySelector('input');
    const newHeading = textInput.value;
    heading.textContent = newHeading;
}

button.addEventListener('click', changeHeading);