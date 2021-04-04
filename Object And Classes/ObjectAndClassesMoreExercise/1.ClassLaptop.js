// Create a class Laptop that has the following properties:
// info – object that contains:
// producer – string
// age – number
// brand – string
// isOn – boolean (false by default)
// turnOn – function that sets the isOn variable to true
// turnOff – function that sets the isOn variable to false
// showInfo – function that returns the producer, age and brand as json
// quality – number (every time the laptop is turned on/off the quality decreases by 1)
// getter price – number (800 – {age * 2} + (quality * 0.5)) 
// The constructor should receive the info as an object and the quality


class Laptop {
    constructor(info, quality, isOn, turnOn, turnOff, showInfo, ) {
      this.info = {producer : info, age : +info, brand : info }
      this.quality = quality
      this.isOn = false
      this.turnOn =  () => { return  this.isOn = true, this.quality-- }
      this.turnOff = () => { return  this.isOn = false, this.quality-- }
      this.showInfo = function(){ return JSON.stringify(info) }     
    }
  
    get price (){
      return  (800 - this.info.producer.age * 2 + ( this.quality * 0.5)) 
    }
  }