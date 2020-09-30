// Soal 1 
// Jawaban { saya Senang belajar JAVASCRIPT } 
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var upper = kataKeempat.toUpperCase();
var upper_1 = kataKedua.replace("senang","Senang");
console.log(kataPertama,upper_1, kataKetiga, upper);


// Soal 2
// Jawaban { 12 }
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
 
var strInt_1 = parseInt(kataPertama);
var strInt_2 = parseInt(kataKedua);
var strInt_3 = parseInt(kataKetiga);
var strInt_4 = parseInt(kataKeempat);
console.log(strInt_1 + strInt_2 + strInt_3 + strInt_4);


// Soal 3
// Jawaban { Kata Pertama : wah
//           Kata Kedua : javascript 
//           Kata Ketiga : itu
//           Kata Keempat : keren
//           Kata Kelima : sekali }
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0,3);
var kataKedua = kalimat.substring(4,14);
var kataKetiga = kalimat.substring(15,18);
var kataKeempat = kalimat.substring(19,24);
var kataKelima = kalimat.substring(25,31);

console.log('Kata Pertama: '+ kataPertama);
console.log('Kata Kedua: '+ kataKedua);
console.log('Kata Ketiga: '+ kataKetiga);
console.log('Kata Keempat: '+ kataKeempat);
console.log('Kata Kelima: '+ kataKelima);


// Soal 4
// Jawaban { C }
var nilai = 69;

if(nilai>=80){
    console.log("A")
}else if(nilai>=70 && nilai<80){
    console.log("B")
}else if(nilai>=60 && nilai<70){
    console.log("C")
}else if(nilai>=50 && nilai<60){
    console.log("D")
}else if(nilai<50){
    console.log("E")
}


// Soal 5
// Jawaban { 29 oktober 1999 }
var bulan = 10;
var tanggal = 29;
var tahun = 1999;

switch(bulan){
    case 1 : bulan="januari"; break;
    case 2 : bulan="februari"; break;
    case 3 : bulan="maret"; break;
    case 4 : bulan="april"; break;
    case 5 : bulan="mei"; break;
    case 6 : bulan="juni"; break;
    case 7 : bulan="juli"; break;
    case 8 : bulan="agustus"; break;
    case 9 : bulan="september"; break;
    case 10 : bulan="oktober"; break;
    case 11 : bulan="november"; break;
    case 12 : bulan="desember"; break;
}
console.log(tanggal+" "+bulan+" "+tahun);
