// Code Academy Meal Maker

const menu = { //menu object
    _courses: { // _courses object, property of menu.
        appetizers: [], // property or key of _courses object.
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
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
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the total price is ${totalPrice}`;
    },
};

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
