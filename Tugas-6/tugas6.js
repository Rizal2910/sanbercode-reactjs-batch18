// Soal 1
//Luas
const luasLingkaran =(a, b)=>{
    let hasil= a * (b * b);
    return hasil;
}
console.log(luasLingkaran(1.12, 7))
//Keliling
const kelilingLingkaran=(c, d)=>{
    let jumlah= c * d;
    return jumlah;
}
console.log(kelilingLingkaran(3.14, 7))

// Soal 2
let kalimat1="saya";
let kalimat2="adalah";
let kalimat3="seorang";
let kalimat4="frontend";
let kalimat5="developer";

let theString= `${kalimat1} ${kalimat2} ${kalimat3} ${kalimat4} ${kalimat5}`
console.log(theString)

// Soal 3
const newFunction= function literal(firstName, lastName){
       return {
        firstName,lastName, 
        fullName: function(){ 
        console.log(firstName + " " + lastName)
        }
    }
}

newFunction("William", "Imoh").fullName()

//Soal 4
const newObject={
    firstName : "Harry",
    lastName : "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell : "Vimulus Renderus !!!"
}
const {firstName, lastName, destination, occupation, spell}= newObject
console.log(firstName, lastName, destination, occupation, spell)

// Soal 5
const west =["Will", "Chris", "Sam", "Holly"]
const east =["Gill", "Brian", "Noel", "Maggie"]
const combined=[...west,...east]
console.log(combined)