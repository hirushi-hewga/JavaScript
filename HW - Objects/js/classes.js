
class Car {
    //model
    //year
    //color
    //_speed
    constructor(model, year, color) {
        this.model = model
        this.year = year
        this.color = color
        this._speed = 0;
    }
    set speed(value) {
        if (value > 0)
            this._speed = value
        else
            this._speed = 0
    }
    get miles() {
        return this._speed * 0.613
    }
    paint(newColor) {
        this.color = newColor
    }
    //setSpeed(value) {
    //    if (value > 0)
    //        this.speed = value
    //    else
    //        this.speed = 0
    //}
    print() {
        console.log(`Car :
            ${this.model}
            ${this.year}
            ${this.color}
            ${this._speed} km/h`)
    }
}

const car = new Car("Toyota", 2021, "red", 100)
//car.setSpeed(150)
car.speed = 230
console.log(`Miles = ${car.miles.toFixed(1)}`)
car.paint("grey")
//car.model = "Toyota"
//car.year = 2021
//car.color = "red"
//car.speed = 100
car.print()

class PoliceCar extends Car {
    constructor(model,year,color,volume) {
        super(model,year,color)
        this.volume = volume
    }
    beep() {
        console.log("Stop!!!! Beep.....beep....beeep...... Volume :" + 
            this.volume)
    }
    print() {
        super.print()
        console.log(`Volume : ${this.volume}`)
    }
}

const policeCar = new PoliceCar("Skoda", 2018, "White", 1000)
policeCar.speed = 300
policeCar.print()
policeCar.beep()