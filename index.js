class Transport {
    constructor(price, brand, image) {
        this.price = price;
        this.brand = brand;
        this.image = image;
        this.type = null;

    }
    getInfo() {
        return {
            type: this.type,
            brand: this.brand,
            image: this.image,
        }
    }
    getPrice() {
        return this.price;
    }
}

class Car extends Transport {
    constructor(price, brand, image, doors) {
        super(price, brand, image);
        this.type = 'car';
        this.doors = doors;
    }
    getDoorsCount() {
        return this.doors;
    }
}

class Bike extends Transport {
    constructor(price, brand, image, maxSpeed) {
        super(price, brand, image);
        this.type = 'bike';
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return this.maxSpeed;
    }
}

let arrayCars = [];
let arrayBikes = [];

for (el of data) {
    if (el.type === 'car') arrayCars.push(new Car(el.price, el.brand, el.image, el.doors));
    if (el.type === 'bike') arrayBikes.push(new Bike(el.price, el.brand, el.image, el.maxSpeed));
}

function renderElement(el, extraInfo, parent) {
    const container = document.createElement('div');
    container.classList.add('container');

    const image = document.createElement('img');
    image.src = el.getInfo().image;
    image.classList.add('img');
    container.appendChild(image);

    const description = document.createElement('p');
    description.innerText = `${el.getInfo().brand}\nPrice: ${el.getPrice()}$`;
    container.appendChild(description);

    const extra = document.createElement('span');
    if (extraInfo === 'doors') extra.textContent = `Doors: ${el.getDoorsCount()}`;
    if (extraInfo === 'speed') extra.textContent = `Speed: ${el.getMaxSpeed()} km/h`;
    description.appendChild(extra);

    parent.appendChild(container);
}

arrayCars.forEach(el => renderElement(el, 'doors', document.getElementById('cars')));
arrayBikes.forEach(el => renderElement(el, 'speed', document.getElementById('bikes')));