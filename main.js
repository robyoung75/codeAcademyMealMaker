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
        this._courses.appetizers = this.desserts;
    },
    
};

// console.log(menu); // logs { _courses: { appetizers: [], mains: [], desserts: [] } }
// console.log(menu._courses); // logs { appetizers: [], mains: [], desserts: [] }
// console.log(menu._courses.appetizers); // logs []

