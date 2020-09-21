// Get Element HTML nya
const Hari = document.getElementById('days');
const Jam = document.getElementById('hours');
const Menit = document.getElementById('minutes');
const Detik = document.getElementById('seconds');
const input = document.getElementById('input')
const button = document.getElementById('button');

// Tangkap tahun baru 2021
// const tahunBaru = input.value;

button.addEventListener('click', function(){
  setTimeout(hitungMundur, 1000);
  setInterval(hitungMundur, 1000);
});

function hitungMundur() {
  // tangkap tahun baru skrg
  const tahunBaruSekarang = new Date();
  // ubah format tahunBaru 
  const newTahunBaru = new Date(input.value);
  // get jarak tgl tahun baru dengan tgl srkg dgn milisecond
  const distance = new Date(newTahunBaru - tahunBaruSekarang) / 1000;

  // Dapat Hari = milisecond diubuah ke hari
  const hari = Math.floor(distance / 3600 / 24);
  const jam = Math.floor(distance / 3600 % 24);
  const menit = Math.floor(distance / 60) % 60;
  const detik = Math.floor(distance % 60);

  // DOM Manipulation
  Hari.innerHTML = hari;
  Jam.innerHTML = jam;
  Menit.innerHTML = format(menit);
  Detik.innerHTML = format(detik);

  console.log(`Tahun baru adalah : ${newTahunBaru}`)
  console.log(`Sekarang adalah : ${tahunBaruSekarang}`)
  console.log(`Jaraknya adalah : ${distance}`)
  console.log(`Hari adalah : ${hari}`)
  console.log(`Jam adalah : ${jam}`)
  console.log(`Menit adalah : ${menit}`)
  console.log(`Detik adalah : ${detik}`)
}

// setInterval(hitungMundur, 1000)

function format(num) {
  return num < 10 ? `0${num}` : num;
};

console.log('Hello World')

