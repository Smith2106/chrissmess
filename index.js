class App {
    constructor() {
        const form = document.querySelector('form');
        form.addEventListener('submit', e => {
            e.preventDefault();
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); // Prevent the form from submitting and automatically reloading the page.
        
        const flicksList = document.querySelector('#flicks');
        const flick = {};
        const form = e.target;
    
        this.getItemProps(flick, form);
        const item = this.renderItem(flick);
        flicksList.appendChild(item);
    
        e.target.reset();
        e.target.movie.focus();
    }
    
    getItemProps(flick, form) {
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
        const item = document.createElement('li');
        item.classList.add('flick');
        const properties = Object.keys(flick);
        properties.forEach(property => {
            const span = this.renderProperty(property, flick[property]);
            !property.toLowerCase().includes('color') ? item.appendChild(span) : '';
        });
    
        this.setColors(flick.backColor, flick.textColor, item);
    
        return item;
    }
    
    
    setColors(backColor, textColor, item) {
        item.style.backgroundColor = backColor;
        item.style.color = textColor;
        item.style.border = `2px ${textColor} solid`;
    }
}

new App();