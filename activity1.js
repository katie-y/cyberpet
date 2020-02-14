// version 1

// class Cars {
//     constructor(reg){
//         this._reg = reg;
//         this._hours = 0;
//         this._charge = 0.00;
//     }
//     get reg(){
//         return this._charge;
//     }
//     get hours(){
//         return this._hours;
//     }
//     increaseHours() {
//         this._hours++;
//     }
//     get charge (){
//         return this._hours * 1.50;
//     }
// }

// const pay = (reg,hours) =>{
//     let car = new Cars(reg);
//     for (let i = 0; i < hours; i++){
//         car.increaseHours();
//     }
//     console.log(`You need to pay £${car.charge} for ${car.hours} hours`);
// }

// pay("carOne",5);

// let credits = 10;

// class Staff extends Cars {
//     constructor(reg,staffNum){
//         super(reg);
//         this._reg = reg;
//         this._staffNum = staffNum;
//     }
//     get staffNum(){
//         return this._staffNum;
//     }
// }

//version 2

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

const pay = (reg,hours,staffNum) =>{
    let car = new Cars(reg);
    for (let i = 0; i < hours; i++){
        car.increaseHours();
    }
    if (staffNum == reg.staffNum && reg.credit > car.charge){
        reg._credit -= car.charge;
        return `Credit used to pay £${car.charge} for ${car.hours} hours. Credit balance now £${reg.credit}`;
    }
    else if (staffNum == reg.staffNum && reg.credit < car.charge){
        return `Not enough credit to pay £${car.charge}`;
    }
    else{
    return `You need to pay £${car.charge} for ${car.hours} hours.`;
    }
}

class Staff extends Cars {
    constructor(reg,staffNum){
        super(reg);
        this._staffNum = staffNum;
        this._credit = 0;
    }
    get staffNum(){
        return this._staffNum;
    }
    get credit(){
        return this._credit;
    }
    addCredit(){
        this._credit++;
    }
}


const PR18QU = new Staff("PR18QU",1234,0);
console.log(PR18QU);
PR18QU.addCredit();
PR18QU.addCredit();
PR18QU.addCredit();
PR18QU.addCredit();
PR18QU.addCredit();
console.log(PR18QU.credit);

console.log(pay(PR18QU,2,1234));

console.log(PR18QU.staffNum);
console.log(pay(PR18QU,4,1234));