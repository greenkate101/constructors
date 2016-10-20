
function Animal () {
	this.hunger = 100; 
}

Animal.prototype.says = "...";

Animal.prototype.speak = function () {
	return this.says;
}

Animal.prototype.eat = function (food) {
	if (food instanceof Animal && this.eats.indexOf('animal') > -1) {
		if (this.hunger > 0) {
			this.hunger -= (100 - food.hunger)
		} else {
			this.hunger = 0;
		}
		} else if (typeof food === 'string') {
			if (this.eats.indexOf(food) > -1) {
				if (this.hunger > 0) {
					this.hunger -= 10;
				} else {
					this.hunger = 0;
				}		
			} else {
				this.hunger = 100;
			}
		}
	}
function Dog () {
	Animal.call(this);
	this.says = 'woof';
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.eats = ['plant', 'animal'];


var charlotte = new Dog(); 

console.log(charlotte);


function Cat () {
	Animal.call(this);
	this.says= 'meow';
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.eat = ['animal'];

var howard = new Cat();

console.log(howard);

function Snail () {
	Animal.call(this);
}

Snail.prototype = Object.create(Animal.prototype);
Snail.prototype.eats = ['plant', 'fungus', 'algae'];

var nelly = new Snail();

console.log(nelly);

nelly.eat('plant');
nelly.eat('fungus');
charlotte.eat(howard);
charlotte.eat(nelly);

console.log(charlotte.hunger);
console.log(charlotte.speak());
console.log(howard.speak());

console.assert(nelly.speak() === '...');
console.assert(charlotte.speak() === 'woof');

console.assert(Animal.prototype.eats = ['plants', 'fungus', 'algae', 'animal'] || Animal);
console.assert(Dog.prototype.eats = Cat); 

