// mengambil objek dokumen html untuk dimanipulasi
const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const hitung1 = document.getElementById("hitung1");
const hasil1 = document.getElementById("hasil1");

// fungsi untuk menghitung luas segitiga
hitung1.addEventListener("click", function () {
  let a = alas.value;
  let t = tinggi.value;
  let l = 0.5 * parseFloat(a) * parseFloat(t);

  // validasi jika input kosong
  if (a == [] && t == []) {
    hasil1.innerHTML =
      "<p style=color:red> *Nilai Alas dan Tinggi tidak boleh kosong!</p>";
  } else if (a == []) {
    hasil1.innerHTML =
      "<p style=color:red> *Nilai Alas tidak boleh kosong!</p>";
  } else if (t == []) {
    hasil1.innerHTML =
      "<p style=color:red> *Nilai Tinggi tidak boleh kosong!</p>";
  } else {
    // tampilkan hasil luas segitiga jika input tidak kosong
    hasil1.innerHTML = `L = 1/2 x Alas x Tinggi<br> L = 1/2 x ${a} x ${t}<br> L = ${l}`;
  }
});

// fungsi untuk mereset hasil dari kalkulator luas segitiga
let reset1 = document.getElementById("reset1");
reset1.addEventListener("click", function () {
  alas.value = "";
  tinggi.value = "";
  hasil1.innerHTML = "";
});

// mengambil objek dokumen html untuk dimanipulasi
const sisi1 = document.getElementById("sisi1");
const sisi2 = document.getElementById("sisi2");
const sisi3 = document.getElementById("sisi3");
const hitung2 = document.getElementById("hitung2");
const hasil2 = document.getElementById("hasil2");

// fungsi untuk menghitung keliling segitiga
hitung2.addEventListener("click", function () {
  let s1 = sisi1.value;
  let s2 = sisi2.value;
  let s3 = sisi3.value;
  // menggunakan fungsi parseFloat untuk menghindari "bug concat" javascript
  let k = parseFloat(s1) + parseFloat(s2) + parseFloat(s3);

  // validasi jika input kosong
  if (s1 == [] && s2 == [] && s3 == []) {
    hasil2.innerHTML =
      "<p style=color:red> *Nilai Semua Sisi tidak boleh kosong!</p>";
  } else if (s1 == [] && s3 == []) {
    hasil2.innerHTML =
      "<p style=color:red> *Nilai Sisi Pertama dan Ketiga tidak boleh kosong!</p>";
  } else if (s2 == [] && s3 == []) {
    hasil2.innerHTML =
      "<p style=color:red> *Nilai Sisi Kedua dan Ketiga tidak boleh kosong!</p>";
  } else if (s1 == [] && s2 == []) {
    hasil2.innerHTML =
      "<p style=color:red> *Nilai Sisi Pertama dan Kedua tidak boleh kosong!</p>";
  } else if (s1 == []) {
    hasil2.innerHTML =
      "<p style=color:red> *Nilai Sisi Pertama tidak boleh kosong!</p>";
  } else if (s2 == []) {
    hasil2.innerHTML =
      "<p style=color:red> *Nilai Sisi Kedua tidak boleh kosong!</p>";
  } else if (s3 == []) {
    hasil2.innerHTML =
      "<p style=color:red> *Nilai Sisi Ketiga tidak boleh kosong!</p>";
  } else {
    // tampilkan hasil keliling segitiga jika input tidak kosong
    hasil2.innerHTML = `K = Sisi 1 + Sisi 2 + Sisi 3<br> K = ${s1} + ${s2} + ${s3} <br> K = ${k}`;
  }
});

// fungsi untuk mereset hasil dari kalkulator keliling segitiga
let reset2 = document.getElementById("reset2");
reset2.addEventListener("click", function () {
  sisi1.value = "";
  sisi2.value = "";
  sisi3.value = "";
  hasil2.innerHTML = "";
});
