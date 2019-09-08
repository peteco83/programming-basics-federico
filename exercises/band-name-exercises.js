newBand("baNaNa", "PeUgeot");

function newBand(fruit, car) {

    const capitalizeFruit = function () {
        return fruit[0].toUpperCase() + fruit.substring(1).toLowerCase();
    };

    const capitalizeCar = function () {
        return car[0].toUpperCase() + car.substring(1).toLowerCase();
    };

    return `${capitalizeFruit()} ${capitalizeCar()}`;

}

console.log(`The name of our rockband is ${newBand("baNaNa", "PeUgeot")}`);