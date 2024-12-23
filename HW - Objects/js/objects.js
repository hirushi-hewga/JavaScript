// 1
const time = {
    hours:22,
    minutes:14,
    seconds:59,
    showDate() {
        console.log(`Time : ${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`)
    },
    writeDate() {
        document.write(`<p id="time">Time : ${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}<p>`)
    },
    incrementSecond() {
        this.seconds++
        if (this.seconds >= 60) {
            this.seconds = 0
            this.minutes++
            if (this.minutes >= 60) {
                this.minutes = 0
                this.hours++
                if (this.hours >= 24) {
                    this.hours = 0
                }
            }
        }
    },
    decrementSecond() {
        this.seconds--
        if (this.seconds < 0) {
            this.seconds = 59
            this.minutes--
            if (this.minutes < 0) {
                this.minutes = 59
                this.hours--
                if (this.hours < 0) {
                    this.hours = 23
                }
            }
        }
    }
}
time.writeDate()
time.showDate()
time.incrementSecond()
time.showDate()
time.decrementSecond()
time.showDate()



// 2
const car = {
    producer: "Toyota",
    model: "Camry",
    year: 2021,
    speed: 150,
    showInfo() {
        console.log(`Car :\nProducer : ${this.producer}\nModel : ${this.model}\nYear : ${this.year}\nSpeed : ${this.speed}`)
    },
    timeToTravel() {
        let distance = +prompt("Enter travel distance :")
        let travelTime = distance / (this.speed / 2)
        let totalTime = travelTime + (Math.floor(travelTime / 4))
        alert(totalTime + 'h')
        //for (let i = 0; i < distance; i++) {
        //    travelTime = i / (this.speed / 2)
        //}
    }
}
car.showInfo()
car.timeToTravel()