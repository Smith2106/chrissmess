const button = document.querySelector('button');

function changeHeading() {
    const heading = document.querySelector('h1');
    heading.textContent = 'No Longer Chrissmess';
}

button.addEventListener('click', changeHeading);