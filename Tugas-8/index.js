// di index.js
var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

// Tulis code untuk memanggil function readBooks di sini
var waktuBaru = 10000;

readBooks(waktuBaru, books[0], (waktuSisa) => {
  readBooks(waktuSisa, books[1], (waktuSisa2) => {
    readBooks(waktuSisa2, books[2], (waktuSisa3) => {
      readBooks(waktuSisa3, books[2], (waktuSisa4) => {});
    });
  });
});