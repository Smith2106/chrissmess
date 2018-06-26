const form = document.querySelector('form');

const addMovies = function(e) {
    e.preventDefault(); // Prevent the form from submitting and automatically reloading the page.
    // Append movie entered in text input field to unordered list below the form.
    const flicksList = document.querySelector('#flicks');
    const movie = e.target.movie.value;
    const year = e.target.year.value;

    const item = createItem(movie, year);
    
    flicksList.appendChild(item);

    e.target.reset();
    e.target.movie.focus();
}



const createItem = function(movie, year) {
    const item = document.createElement('li');
    const movieItem = document.createElement('span');
    const yearItem = document.createElement('span');

    movieItem.textContent = `${movie} `;
    yearItem.textContent = `(${year})`;

    movieItem.classList.add('movie');
    yearItem.classList.add('year');

    item.appendChild(movieItem);
    item.appendChild(yearItem);

    return item;
}

form.addEventListener('submit', addMovies);