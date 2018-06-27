class App {
    constructor() {
        const form = document.querySelector('form');
        this.allMovies = [];
        form.addEventListener('submit', e => {
            e.preventDefault();
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); // Prevent the form from submitting and automatically reloading the page.
        // Get flicks list and form.
        const flicksList = document.querySelector('#flicks');
        const flick = {};
        const form = e.target;
        // Set the properties of the flick object and add flicks to movies array
        this.getItemProps(flick, form);
        this.allMovies.push(flick);
        // Render the properties in the item and render the item in the flicks list on the page
        const item = this.renderItem(flick);
        flicksList.appendChild(item);
    
        // Reset the form and reset focus to first field.
        e.target.reset();
        e.target.movie.focus();
    }

    handleDelete(item, flick) {
        const flicksList = document.querySelector('#flicks');
        flicksList.removeChild(item);
        this.allMovies.splice(this.allMovies.findIndex(movie => movie.name === flick.name), 1);
    }

    handleFavorite(item, flick) {
        if (item.classList.contains('favorite')) {
            item.classList.remove('favorite');
            this.allMovies[this.allMovies.findIndex(movie => movie.name === flick.name)].favorite = false;
        }
        else {
            item.classList.add('favorite');
            this.allMovies[this.allMovies.findIndex(movie => movie.name === flick.name)].favorite = true;
        }
    }
    
    getItemProps(flick, form) {
        flick.favorite = false;
        flick.movie = form.movie.value;
        flick.year = form.year.value;
        flick.backColor = form.backColor.value;
        flick.textColor = form.textColor.value;
        flick.rating = form.rating.value;
    }
    
    renderProperty(name, value) {
        const span = document.createElement('span');
        span.textContent = value;
        span.classList.add(name);
        return span;
    }
    
    renderItem(flick) {
        // Create item list element
        const item = document.createElement('li');
        item.classList.add('flick');
        // Render the properties in the list element that aren't colors.
        const properties = Object.keys(flick);
        properties
            .filter(property => !property.toLowerCase().includes('color') && !property.includes('favorite'))
            .forEach(property => {
                const span = this.renderProperty(property, flick[property]);
                item.appendChild(span);
        });
    
        this.setColors(flick.backColor, flick.textColor, item);
        // Create delete and favorite button and have it handle deletion and favorite of elements
        const delButton = this.renderButton('Delete', 'del-btn');
        const favButton = this.renderButton('Favorite ★', 'fav-btn')
        item.appendChild(delButton);
        item.appendChild(favButton);
        delButton.addEventListener('click', () => this.handleDelete(item, flick));
        favButton.addEventListener('click', () => this.handleFavorite(item, flick));
    
        return item;
    }

    renderButton(name, value) {
        const button = document.createElement('button');
        button.textContent = name;
        button.classList.add(value);
        return button;
    }
    
    setColors(backColor, textColor, item) {
        item.style.backgroundColor = backColor;
        item.style.color = textColor;
        item.style.border = `2px ${textColor} solid`;
    }
}

new App();