// 1
//class Car {
//    constructor(producer, model, year, speed) {
//        this.producer = producer
//        this.model = model
//        this.year = year
//        this.speed = speed
//    }
//    showInfo() {
//        console.log(`Car :\nProducer : ${this.producer}\nModel : ${this.model}\nYear : ${this.year}\nSpeed : ${this.speed}`)
//    }
//    timeToTravel() {
//        let distance = +prompt("Enter travel distance :")
//        let travelTime = distance / (this.speed / 2)
//        let totalTime = travelTime + (Math.floor(travelTime / 4))
//        alert(totalTime + 'h')
//    }
//}
//const car = new Car("Toyota", "Camry", 2021, 150)
//car.showInfo()
//car.timeToTravel()



// 2
// class Fraction {
//     constructor(numerator, denominator) {
//         this.numerator = numerator
//         this.denominator = denominator
//     }
//     addition(fraction1, fraction2) {
//         for (let i = fraction1.denominator; i <= fraction1.denominator * fraction2.denominator; i++) {
//             if (i % fraction1.denominator == 0 && i % fraction2.denominator == 0) {
//                 console.log(`${fraction1.numerator}/${fraction1.denominator} + ${fraction2.numerator}/${fraction2.denominator} = ${i / fraction1.denominator * fraction1.numerator + i / fraction2.denominator * fraction2.numerator}/${i}`)
//                 return new Fraction(i / fraction1.denominator * fraction1.numerator + i / fraction2.denominator * fraction2.numerator, i)
//             }
//         }
//     }
//     subtraction(fraction1, fraction2) {
//         for (let i = fraction1.denominator; i <= fraction1.denominator * fraction2.denominator; i++) {
//             if (i % fraction1.denominator == 0 && i % fraction2.denominator == 0) {
//                 console.log(`${fraction1.numerator}/${fraction1.denominator} - ${fraction2.numerator}/${fraction2.denominator} = ${i / fraction1.denominator * fraction1.numerator - i / fraction2.denominator * fraction2.numerator}/${i}`)
//                 return new Fraction(i / fraction1.denominator * fraction1.numerator - i / fraction2.denominator * fraction2.numerator, i)
//             }
//         }
//     }
//     multiplication(fraction1, fraction2) {
//         console.log(`${fraction1.numerator}/${fraction1.denominator} * ${fraction2.numerator}/${fraction2.denominator} = ${fraction1.numerator * fraction2.numerator}/${fraction1.denominator * fraction2.denominator}`)
//         return new Fraction(fraction1.numerator * fraction2.numerator, fraction1.denominator * fraction2.denominator)
//     }
//     division(fraction1, fraction2) {
//         console.log(`${fraction1.numerator}/${fraction1.denominator} / ${fraction2.numerator}/${fraction2.denominator} = ${fraction1.numerator * fraction2.denominator}/${fraction1.denominator * fraction2.numerator}`)
//         return new Fraction(fraction1.numerator * fraction2.denominator, fraction1.denominator * fraction2.numerator)
//     }
//     reduction(fraction) {
//         for (let i = 2; i <= fraction.denominator / 2; i++) {
//             if (fraction.numerator % i == 0 && fraction.denominator % i == 0) {
//                 console.log(`${fraction.numerator}/${fraction.denominator} = ${fraction.numerator / i}/${fraction.denominator / i}`)
//                 return new Fraction(fraction.numerator / i, fraction.denominator / i)
//             }
//         }
//         console.log(`${fraction.numerator}/${fraction.denominator} = ${fraction.numerator}/${fraction.denominator}`)
//         return new Fraction(fraction.numerator, fraction.denominator)
//     }
// }
// const fraction1 = new Fraction(8,5)
// const fraction2 = new Fraction(3,10)
// fraction1.addition(fraction1, fraction2)
// fraction1.subtraction(fraction1, fraction2)
// const fraction3 = fraction1.multiplication(fraction1, fraction2)
// const fraction4 = fraction1.division(fraction1, fraction2)
// fraction1.reduction(fraction3)
// fraction1.reduction(fraction4)



// 3
// class Time {
//     constructor(hours, minutes, seconds) {
//         this.hours = hours
//         this.minutes = minutes
//         this.seconds = seconds
//     }
//     showDate() {
//         console.log(`Time : ${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`)
//     }
//     writeDate() {
//         document.write(`<p id="time">Time : ${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}<p>`)
//     }
//     addSeconds(numberOfSeconds) {
//         this.seconds += numberOfSeconds
//         this.minutes += (this.seconds - this.seconds % 60) / 60
//         this.seconds %= 60
//         this.hours += (this.minutes - this.minutes % 60) / 60
//         this.minutes %= 60
//         this.hours %= 24
//     }
//     addMinutes(numberOfMinutes) {
//         this.minutes += numberOfMinutes
//         this.hours += (this.minutes - this.minutes % 60) / 60
//         this.minutes %= 60
//         this.hours %= 24
//     }
//     addHours(numberOfHours) {
//         this.hours += numberOfHours
//         this.hours %= 24
//     }
// }
// const time = new Time(21,13,48)
// time.writeDate()
// time.addSeconds(650)
// time.writeDate()
// time.addMinutes(65)
// time.writeDate()
// time.addHours(6)
// time.writeDate()
// time.showDate()