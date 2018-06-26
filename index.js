const form = document.querySelector('form');

const addMovies = function(e) {
    e.preventDefault(); // Prevent the form from submitting and automatically reloading the page.
    // Append movie entered in text input field to unordered list below the form.
    const flicksList = document.querySelector('#flicks');
    const itemObj = {};
    const form = e.target;

    getItemProps(itemObj, form);

    const item = createItem(itemObj);
    
    flicksList.appendChild(item);

    e.target.reset();
    e.target.movie.focus();
}

const getItemProps = function(itemObj, form) {
    itemObj.movie = form.movie.value;
    itemObj.year = form.year.value;
    itemObj.backColor = form.backColor.value;
    itemObj.textColor = form.textColor.value;
    itemObj.rating = form.rating.value;
}

const createItem = function(itemObj) {
    const item = document.createElement('li');
    const textItems = createText(itemObj.movie, itemObj.year, itemObj.rating);
    textItems.forEach(textItem => item.appendChild(textItem));

    setColors(itemObj.backColor, itemObj.textColor, item);

    return item;
}

const createText = function(movie, year, rating) {
    const movieItem = document.createElement('span');
    const yearItem = document.createElement('span');
    const ratingItem = document.createElement('span');

    movieItem.textContent = `${movie} `;
    yearItem.textContent = `(${year}) `;
    ratingItem.textContent = rating;

    movieItem.classList.add('movie');
    yearItem.classList.add('year');
    ratingItem.classList.add('rating');

    return [movieItem, yearItem, ratingItem];
}

const setColors = function(backColor, textColor, item) {
    item.style.backgroundColor = backColor;
    item.style.color = textColor;
    item.style.border = `2px ${textColor} solid`;
}

form.addEventListener('submit', addMovies);