let inputAngka = document.getElementById("input-field");
let inputPangkat = document.getElementById("input-field2");
let outputAngka = document.getElementById("output-field");
let outputPangkat = document.getElementById("output-field2");

function keyEnter(event) {
  if (event.key === "Enter") {
    klik();
  }
}

function klik() {
  if (inputAngka.value !== "" && inputPangkat.value !== "") {
    var a = parseFloat(inputAngka.value);
    var n = parseFloat(inputPangkat.value);

    // Menghitung turunan fungsi
    var pangkat = n - 1;
    var angka = a * n;
    var hasil = angka + "x^" + pangkat;

    outputAngka.value = hasil;

    // Cara menghitung turunan fungsi (Calculation)
    outputPangkat.value = "f(x) = " + a + " . " + n + " x^(" + n + "-1)";

    // Menghapus input field
    inputAngka.value = "";
    inputPangkat.value = "";
  } else {
    alert("Angka dan pangkat tidak boleh kosong!");
  }
}
