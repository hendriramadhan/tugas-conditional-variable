//conditional variable
const jamKerja = 30;

const Kerja = jamKerja > 40 ? "terlalu lama bekerja" : "sesuai pekerjaan";
console.log(Kerja);

const waktuBelajar = 120;

const kurang = waktuBelajar < 150 && "kurang waktu belajar"; //output harus true untuk menampilkan data
const lebih = waktuBelajar > 150 || "kelebihan waktu belajar"; //output harus false untuk menampilkan data
console.log(kurang);
console.log(lebih);

//map dan filter
const dataAnak = [
  {
    nama: "Hana",
    berat: 6,
  },
  {
    nama: "Bambang",
    berat: 7,
  },
  {
    nama: "Budi",
    berat: 7.5,
  },
  {
    nama: "Dinda",
    berat: 5.5,
  },
];

const listNama = dataAnak.map((anak) => anak.nama);
console.log(listNama);

const listBerat = dataAnak.filter((anak) => anak.berat <= 7);
console.log(listBerat);
