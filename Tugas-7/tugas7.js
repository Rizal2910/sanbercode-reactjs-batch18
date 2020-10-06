// Soal 1

//release 0
class Animal {
    constructor(name, legs, cold_blooded){
        this.nama = name
        this.kaki = legs
        this.blood = cold_blooded
    }
    get name(){
        return this.nama;
    }
    get legs(){
        return this.kaki;
    }
    get cold_blooded(){
        return this.blood;
    }
    // Code class di sini
}
 
var sheep = new Animal("shaun", 4, "false");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//release 1
class Ape extends Animal{
    constructor(name){
        super(name);
        this._name = name;
        this.suara = "Auoo";
    
    }
    get name(){
        return this._name
    }
    set name(x){
        return (this._name=x)
    }
    yell(){
        console.log(this.suara)
    } 
 
}
class Frog extends Animal{
    constructor(name){
        super(name);
        this._name = name;
        this.sound = "hop hop";
    }
    get name(){
        return this._name
    }
    set name(x){
        return (this._name=x)
    }
    jump(){
        console.log(this.sound)
    } 
 
}

 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

// Soal 2
class Clock{
    constructor({template}){
        this._template= template
        this.timer
    }
    render(){
        let date = new Date();

        let hours = date.getHours();
        if(hours < 10)hours = '0' + hours;

        let mins = date.getMinutes();
        if(mins < 10)mins ='0'+mins;

        let secs= date.getSeconds();
        if(secs< 10)secs='0'+secs;

        let output = this._template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs)
        console.log(output)
    }
    stop(){
        clearInterval(this.timer)
    }
    start(){
        this.render()
        this.timer= setInterval(()=>this.render(),1000)
    }
}


let clock = new Clock({template: "h:m:s"});
clock.start();