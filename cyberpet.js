class Cyberpet {
    constructor(name){
        this._name = name;
        this._hunger = 0;
        this._thirst = 0;
        this._tired = 0;
        this._happiness = 100;
    }
    get name(){
        return this._name;
    }
    get hunger(){
        return this._hunger;
    }
    get thirst(){
        return this._thirst;
    }
    get happiness(){
        return this._happiness;
    }
    feed(){
        if (this._hunger > 0){
            this._hunger = Math.floor(0);
            for (let i = 0; i < 5 && this._happiness < 100; i++){
            this._happiness ++;
            }
            alert `Eating...`;
        }
        else {
            alert `Already full`;
        }
    }
    drink(){
        if (this._thirst > 0){
        this._thirst = Math.floor(0);
        alert `Drinking...`;
        }
        else {
            alert `Not thirsty`;
        }
    }
    playGame(){
        if (this._tired < 50){
            for (let i = 0; i < 50 && this._happiness < 100; i++){
                this._happiness ++;
            }
            for (let i = 0; i < 30 && this._tired < 100; i++){
                this._tired ++;
            }
            for (let i = 0; i < 20 && this._hunger < 100; i++){
                this._hunger ++;
            }
        alert `Yay! I like this game`
        }
        else {
            alert `I don't feel like playing right now`
        }
    }
    sleep(){
        if (this._tired > 0){
        this._tired = Math.floor(0);
        alert `...zzz`
        }
        else {
            alert `I'm not tired!`
        }
    }
    pet(){
        for (let i = 0; i < 5 && this._happiness < 100; i++){
            this._happiness ++;
        }
        alert `:)`
    }
}

class Dog extends Cyberpet {
    constructor(name,lovesWalks){
        super(name);
        this._lovesWalks = lovesWalks;
    }
    get lovesWalks(){
        return this._lovesWalks;
    }
    walk(){
        this._happiness+=50;
        this._tired+=30;
        this._hunger+=20;
        this._thirst+=10;
    }
}

class Cat extends Cyberpet {
    constructor(name){
        super(name);
    }
    purrs(){
        this._happiness+=50
    }
}

class Dragon extends Cyberpet {
    constructor(name){
        super(name);
        this._fireAbility = 100;
    }
    createsFire(){
        if (this._fireAbility > 49 && this._tired < 49){
            this._fireAbility = Math.floor(0);
            for (let i = 0; i < 100 && this._happiness < 100; i++){
                this._happiness ++;
            }
            for (let i = 0; i < 30 && this._hunger <100; i++){
                this._hunger ++;
            }
            for (let i = 0; i < 30 && this._tired <100; i++){
                this._tired ++;
            }
            alert `I love fire!`
        }
        else {
            alert `Not right now`
        }
    }
    rest(){
        this._fireAbility+=50;
        this._tired-=50
    }
    status(){
        alert (`Name: ${this._name}, Hunger: ${this.hunger}, Thirst: ${this.thirst}, Tiredness: ${this._tired}, Happiness: ${this._happiness}, Fire Ability: ${this._fireAbility}`)
    }
}


const toothless = new Dragon("Toothless");

let stats = () =>{
    if (toothless._tired < 100){
        toothless._tired++;
    }
    if (toothless._hunger < 100){
        toothless._hunger++;
    }
    if (toothless._thirst < 100){
        toothless._thirst++;
    }
    if (toothless._hunger > 80 && toothless.happiness > 0 || toothless._thirst > 80 && toothless.happiness > 0 || toothless._tired > 80 && toothless.happiness > 0){
        toothless._happiness--;
    }
}

setInterval(stats, 1000);