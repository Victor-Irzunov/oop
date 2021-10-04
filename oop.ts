//>сокрытие
class Rectangle {
	private _width;
	private _height;
	constructor(w, h) {
		this._width = w
		this._height = h
	}

	public get width() {
		return this._width
	}

	public set width(value) {
		if (value <= 0) this._width = 1
		else this._width = value
	}

	calcArea() {
		this._height = 9
		return this._width * this._height
	}

	calcPerimeter() {
		return (this._height + this._width) * 2
	}


}

const rect = new Rectangle(5, 5)
rect.width = 10
// console.log("🚀  _ file: OOP.ts _ line 34 _ rect.calcArea()", rect.calcArea())
// console.log(rect)


//tsc -t es5 OOP.ts
//node OOP.js

//>полиморфизм
//параметрический (истинный)


class Person {
	private _firstName;
	private _lastName;
	private _age;

	constructor(firstName, lastName, age) {
		this._firstName = firstName
		this._lastName = lastName
		this._age = age
	}

	public greeting() {
		console.log(`Привет я человек и меня зовут ${this._firstName}`)
	}
	public get fullName() {
		return `Фамилия ${this._lastName} Имя - ${this._lastName}`
	}
}

class Employee extends Person {
	private _series;
	private _number;

	constructor(firstName, lastName, age, series, number) {
		super(firstName, lastName, age)
		this._series = series
		this._number = number
	}
	public greeting() {
		// console.log(`Привет я работник и меня зовут ${this._firstName}`)
	}
}


class Developer extends Employee {
	private _level

	constructor(firstName, lastName, age, series, number, level) {
		super(firstName, lastName, age, series, number)
		this._level = level
	}
	public greeting() {
		// console.log(`Привет я программист и меня зовут ${this._firstName}`)
	}
}

const developer = new Developer('Pipo', 'Irzunov', 32, 'MC', 2549876, 'junior')
const employee = new Employee('Gogi', 'Irzunov', 32, 'MC', 2549876)
const person = new Person('Victor', 'Irzunov', 32)
// console.log('---', developer)

// developer.greeting()
// employee.greeting()
// person.greeting()

const personList: Person[] = [developer, employee, person]

function f1(personList: Person[]) {
	for (let i = 0; i < personList.length; i++) {
		let person = personList[i]
		person.greeting()
	}
}

f1(personList)

//>композития 
// class Engine {
// 	drive() {
// 		console.log(`Двигатель работает`)
// 	}
// }
// class Wheel {
// 	drive() {
// 		console.log(`колеса крутятся`)
// 	}
// }
// class Car {
// 	engine: Engine
// 	wheels: Wheel[]

// 	constructor() {
// 		//Композиция
// 		console.log('--->', this.wheels)
// 		console.log('=====>', this.engine)
// 		this.engine = new Engine()
// 		this.wheels.push(new Wheel())
// 		this.wheels.push(new Wheel())
// 		this.wheels.push(new Wheel())
// 		this.wheels.push(new Wheel())
// 	}
// 	//Делегирование
// 	drive() {
// 		this.engine.drive()
// 		for (let i = 0; i < this.wheels.length; i++){
// 			this.wheels[i].drive()
// 		}
// 	}
// }

// const car1 = new Car()
// car1.drive()
//>агрегация

class Engine {
	drive() {
		console.log(`Двигатель работает`)
	}
}
class Wheel {
	drive() {
		console.log(`колеса крутятся`)
	}
}

class Fresh {

}

class Flat {
	fresh: Fresh

	constructor(fresh) {
		this.fresh = fresh
	}
}

class Car {
	engine: Engine
	wheels: Wheel[]
	fresh: Fresh

	constructor(fresh) {
		//Агрегация
		this.fresh = fresh
		//Композиция
		console.log('--->', this.wheels)
		console.log('=====>', this.engine)
		this.engine = new Engine()
		this.wheels.push(new Wheel())
		this.wheels.push(new Wheel())
		this.wheels.push(new Wheel())
		this.wheels.push(new Wheel())
	}
	//Делегирование
	drive() {
		this.engine.drive()
		for (let i = 0; i < this.wheels.length; i++) {
			this.wheels[i].drive()
		}
	}
}

const car = new Car('apple')
car.drive()


