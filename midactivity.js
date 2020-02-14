class Cars {
    constructor(reg){
        this._reg = reg;
        this._hours = 0;
        this._charge = 0.00;
    }
    get reg(){
        return this._charge;
    }
    get hours(){
        return this._hours;
    }
    increaseHours() {
        this._hours++;
    }
    get charge (){
        return this._hours * 1.50;
    }
}

const pay = (reg,hours) =>{
    let car = new Cars(reg);
    for (let i = 0; i < hours; i++){
        car.increaseHours();
    }
    console.log(`You need to pay £${car.charge} for ${car.hours} hours`);
}

pay("carOne",5);