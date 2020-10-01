//Soal 1
var love = 2;
    console.log("LOOPING PERTAMA");
    while(love <= 20 ){
        console.log(love + " - I love coding");
        love+=2; 
    }

var cinta = 20;
    console.log("LOOPING KEDUA");
    while(cinta>=2){
        console.log(cinta+ " - I will become a frontend developer");
        cinta-=2;
    }


// Soal 2
for(var angka = 1; angka<=20; angka++){
    if(angka%2==0){
        console.log(angka + " - Berkualitas");
    }else if(angka%3==0 && angka%3 ==0){
        console.log(angka + "- I love Coding");
    }else{
      console.log(angka + " - Santai");
    }
      
}
      

    
// Soal 3
for(var i=1; i<7; i++){
    console.log("#".repeat(i));
  }
  
// Soal 4
var kalimat = "saya senang belajar javascript";
var a = kalimat.split([" "]);
console.log(a);

//Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for(i=0; i<daftarBuah.length; i++){
    console.log(daftarBuah[i])
}




