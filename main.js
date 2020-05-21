// Code Academy Meal Maker

const menu = { //menu object
    _courses: { // _courses object, property of menu.
        appetizers: [], // property or key and value of _courses object. Empty array.
        mains: [],
        desserts: [],
    },
    get appetizers() { // getter function returns the value of appetizers to _courses.appetizers
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) { // setter function, sets this._courses.appetizers to this.appetizers, the paramenter of the setter function
        this._courses.appetizers = this.appetizers;
    },
    set mains(mains) {
        this._courses.mains = this.mains;
    },
    set desserts(desserts) {
        this._courses.desserts = this.desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) { // addDishToCourse() which will be used to add a new dish to the specified course on the menu.
        const dish = {  // addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish); // The method should then push this dish object into the appropriate array in your menu‘s _courses object based on what courseName was passed in..
    },
    getRandomDishFromCourse(courseName) {  // function allows us to get a random dish from a course on the menu, which will be necessary for generating a random meal.
        const dishes = this._courses[courseName]; //Retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes.
        const randomIndex = Math.floor(Math.random() * dishes.length); // Generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array)
        return dishes[randomIndex];
    },
    generateRandomMeal() { // The function should create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the total price is ${totalPrice}`;
    },
};

/* Now that we’ve finished our menu, object, let’s use it to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. 
Add at least 3 dishes to each course (or more if you like!). */
menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'cheese', 9.00);
menu.addDishToCourse('appetizers', 'wings', 13.00);

menu.addDishToCourse('mains', 'steak', 53.00);
menu.addDishToCourse('mains', 'fish', 36.00);
menu.addDishToCourse('mains', 'pork', 47.00);

menu.addDishToCourse('desserts', 'pie', 8.00);
menu.addDishToCourse('desserts', 'cake', 7.00);
menu.addDishToCourse('desserts', 'ice cream', 5.00);

const meal = menu.generateRandomMeal();
console.log(meal);

// console.log(menu); // logs { _courses: { appetizers: [], mains: [], desserts: [] } }
// console.log(menu._courses); // logs { appetizers: [], mains: [], desserts: [] }
// console.log(menu._courses.appetizers); // logs []


