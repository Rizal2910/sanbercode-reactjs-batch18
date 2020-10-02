// Soal 1
function halo(){
    return "Halo Sanbers !";
}
console.log(halo());

// Soal 2
function kalikan(num1, num2){
    return num1*num2;
}
var num1= 12;
var num2= 4;
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// Soal 3
function introduce(name, age, address, hobby){
   return "Nama saya " + name + ", umur saya " + age + " tahun, " + "alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby+"!"

   
}
var name = "Jhon";
var age = 30;
var address = "jalan belum jadi";
var hobby = "Gaming";

var perkenalan  = introduce(name, age, address, hobby);
console.log(perkenalan);
// nama saya jhon

// Soal 4
var arrayDaftarPeserta = ["Asep","laki-laki","baca buku",1992]
var person ={
    Nama : arrayDaftarPeserta[0],
    Jenis_Kelamin : arrayDaftarPeserta[1],
    Hobi :arrayDaftarPeserta[2],
    Tahun_Lahir : arrayDaftarPeserta[3]
}
console.log(person)

// Soal 5
var buah =[{ nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000},
           { nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000},
           { nama: "Semongko", warna: "Hijau & Merah","ada bijinya": "ada", harga: 10000},
           { nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000}]

           console.log(buah[0]);

// Soal 6
var dataFilm=[]
function film(nama, durasi, genre, tahun){
    dataFilm.push({nama: "Spongebob", durasi: "1 jam", genre: "animation", tahun: "2020"})
    dataFilm.push({nama: "Naruto", durasi: "2 jam", genre: "animation", tahun: "2020"})
}
film("nama", "durasi", "genre", "tahun");
console.log(dataFilm)








