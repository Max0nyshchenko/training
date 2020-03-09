let strawberryCount = 2;

// while (strawberryCount <= 200) {
    // console.log('There\'are ' + strawberryCount + ' strawberry\'s');
    // strawberryCount++;
    
// }

function multipleFunc(multiplyer) {
    return function(x) {
        return x * multiplyer;
    }
}

let doubleMe = multipleFunc(2);
// document.write(doubleMe(10));

let pets = [
    {
        name: 'Meowsalot',
        species: 'cat',
        age: 2
    },
    {
        name: 'Barky',
        species: 'dog',
        age: 2
    },
    {
        name: 'Simon',
        species: 'cat',
        age: 1
    }
]

pets.push({name: 'Puppster', species: 'dog', age: 4});
console.log(pets);

let petsName = pets.map(onlyName);

function onlyName(x) {
    return x.name;
}
console.log(petsName);

let dogOnly = pets.filter(onlyDogs);

function onlyDogs(x) {
    return x.species == 'dog';
}

console.log(dogOnly);

function onlyBabies(x) {
    return x.age < 3;
}

let babesOnly = pets.filter(onlyBabies);
console.log(babesOnly);

let onlyYoungDogName = pets.filter(onlyDogs).filter(onlyBabies).map(onlyName);
console.log(onlyYoungDogName);

let johm = {
    firstName: 'John',
    lastName: 'Doe',
    drivingMet() {
        console.log(this.firstName + this.lastName + 'is driving a car')
    }
}

johm.drivingMet();

function breath() {
    console.log(this.firstName + ' ' + this.lastName + ' inhaled and exhaled.')
}

breath.call(johm);

document.addEventListener('click', function() {
    console.log('thx for clicking.');
});

