class App {
    constructor() {
        const form = document.querySelector('form');
        this.allMovies = [];
        this.flicksList = document.querySelector('#flicks');
        form.addEventListener('submit', e => {
            e.preventDefault();
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); // Prevent the form from submitting and automatically reloading the page.
        // Get flicks list and form.
        const flick = {};
        const form = e.target;
        // Set the properties of the flick object and add flicks to movies array
        this.getItemProps(flick, form);
        this.allMovies.push(flick);
        // Render the properties in the item and render the item in the flicks list on the page
        const item = this.renderItem(flick);
        this.flicksList.appendChild(item);

        console.log(flick.rating);
        if (flick.rating.includes(':(')) this.angry(item);
    
        // Reset the form and reset focus to first field.
        e.target.reset();
        e.target.movie.focus();
    }

    handleDelete(flick, e) {
        const item = e.target.closest('.flick');
        this.flicksList.removeChild(item);
        this.allMovies.splice(this.allMovies.indexOf(flick), 1);
    }

    handleFavorite(flick, e) {
        // Toggle the favorite class
        const item = e.target.closest('.flick');
        flick.favorite = item.classList.toggle('favorite');
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

    renderProperties(flick) {
        const div = document.createElement('div');
        div.classList.add('movieInfo');
        // Render the properties in the list element that aren't colors.
        const properties = Object.keys(flick);
        properties
            .filter(property => !property.toLowerCase().includes('color') && !property.includes('favorite'))
            .forEach(property => {
                const span = this.renderProperty(property, flick[property]);
                div.appendChild(span);
        });

        return div;
    }
    
    renderItem(flick) {
        // Create item list element
        const item = document.createElement('li');
        item.classList.add('flick');
        item.appendChild(this.renderProperties(flick));
    
        this.setColors(flick.backColor, flick.textColor, item);

        const div = document.createElement('div');
        div.classList.add('buttons');
        // Create delete and favorite button and have it handle deletion and favorite of elements
        const delButton = this.renderButton('del-btn', '<i class="far fa-trash-alt" title="delete item"></i>');
        const favButton = this.renderButton('fav-btn', '<i class="fas fa-star" title="toggle favorite"></i>');
        
        div.appendChild(delButton);
        div.appendChild(favButton);
        item.appendChild(div);
        delButton.addEventListener('click', e => this.handleDelete(flick, e));
        favButton.addEventListener('click', e => this.handleFavorite(flick, e));
    
        return item;
    }

    renderButton(value, icon) {
        const button = document.createElement('button');
        button.classList.add(value);
        button.innerHTML = icon;
        return button;
    }
    
    setColors(backColor, textColor, item) {
        item.style.backgroundColor = backColor;
        item.style.color = textColor;
        item.style.border = `2px ${textColor} solid`;
    }

    angry(item) {
        setTimeout(() => item.classList.add('angry'), 500);
    }
}

const app = new App();

const pressed = [];
  const secretCode = 'thor';
  window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
      console.log('DING DING!');
      cornify_add();
    }
  });