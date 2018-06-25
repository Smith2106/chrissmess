const button = document.querySelector('button');

function changeHeading() {
    const heading = document.querySelector('.changingHeading');
    heading.textContent = 'Nobody knows';
}

button.addEventListener('click', changeHeading);