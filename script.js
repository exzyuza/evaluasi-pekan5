const yearElement = document.getElementById('tahun');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const menuButton = document.getElementById('btnPesan');
const menuSection = document.getElementById('menu');
if (menuButton && menuSection) {
    menuButton.addEventListener('click', () => {
        menuSection.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                ? 'auto'
                : 'smooth'
        });
    });
}




/*
====================================================================
Nama    : [Nama Kamu]
Tanggal : 2026-10-10
Tujuan  : Latihan JavaScript dasar tentang object, array, nested
          object/array, serta operator typeof pada tema "Kedai Senja".
====================================================================
*/

// ============================================================
// BAGIAN 1 - OBJECT kedai
// ============================================================
const kedai = {
  nama: "Kedai Senja",
  pemilik: "Bu Ratna",
  kota: "Jakarta",
  tahunBerdiri: 2020,
  sedangBuka: true,
  nomorWhatsApp: "081234567890", // string, bukan number (lihat jawaban no.1)
  website: null,                 // belum ada (lihat jawaban no.2)
  jamOperasional: {
    buka: "08:00",
    tutup: "22:00"
  }
};

// ============================================================
// BAGIAN 2 - ARRAY menu (6 object, 2+ kategori, 1 tidak tersedia)
// ============================================================
const menu = [
  { nama: "Kopi Senja",      kategori: "Minuman", harga: 25000, stok: 20, tersedia: true  },
  { nama: "Teh Rempah",      kategori: "Minuman", harga: 18000, stok: 15, tersedia: true  },
  { nama: "Cokelat Panas",   kategori: "Minuman", harga: 22000, stok: 10, tersedia: true  },
  { nama: "Croissant Butter",kategori: "Makanan", harga: 22000, stok: 8,  tersedia: true  },
  { nama: "Cheese Cake",     kategori: "Makanan", harga: 30000, stok: 5,  tersedia: true  },
  { nama: "Pie Apel Spesial",kategori: "Makanan", harga: 28000, stok: 0,  tersedia: false }
];

// ============================================================
// BAGIAN 3 - ARRAY transaksi (3 object)
// ============================================================
const transaksi = [
  {
    kode: "TRX-001",
    pelanggan: "Andi",
    sudahMember: false,
    uangBayar: 30000,
    catatan: "Kopi jangan terlalu manis",
    pesanan: [
      { indeksMenu: 0, jumlah: 1 } // Kopi Senja x1 = 25.000
    ]
  },
  {
    kode: "TRX-002",
    pelanggan: "Bunga",
    sudahMember: true,
    uangBayar: 100000,
    catatan: undefined, // belum ada catatan
    pesanan: [
      { indeksMenu: 4, jumlah: 2 }, // Cheese Cake x2 = 60.000
      { indeksMenu: 1, jumlah: 1 }  // Teh Rempah x1   = 18.000 -> total 78.000
    ]
  },
  {
    kode: "TRX-003",
    pelanggan: "Citra",
    sudahMember: true,
    uangBayar: 20000, // sengaja kurang (lihat Bagian 3 - verifikasi)
    catatan: undefined,
    pesanan: [
      { indeksMenu: 3, jumlah: 1 }, // Croissant x1 = 22.000
      { indeksMenu: 2, jumlah: 1 }  // Cokelat Panas x1 = 22.000 -> total 44.000
    ]
  }
];

/*
  Verifikasi uang (dihitung manual):
  - TRX-001 : total 25.000, bayar 30.000  -> CUKUP
  - TRX-002 : total 78.000, bayar 100.000 -> CUKUP
  - TRX-003 : total 44.000, bayar 20.000  -> KURANG
  Syarat "minimal 1 kurang & 2 cukup" sudah terpenuhi.
*/

// ============================================================
// BAGIAN 4 - Cetak ke console
// ============================================================
console.log("Nama kedai (dot):", kedai.nama);
console.log("Kota (bracket):", kedai["kota"]);
console.log("Jam tutup:", kedai.jamOperasional.tutup);
console.log("Menu pertama:", menu[0]);
console.log("Menu terakhir:", menu[menu.length - 1]);
console.log("Pelanggan transaksi kedua:", transaksi[1].pelanggan);
console.log(
  "Menu pada item kedua transaksi ketiga:",
  menu[transaksi[2].pesanan[1].indeksMenu].nama
);

console.log("typeof kedai.tahunBerdiri  :", typeof kedai.tahunBerdiri);   // number
console.log("typeof kedai.sedangBuka   :", typeof kedai.sedangBuka);    // boolean
console.log("typeof kedai.website      :", typeof kedai.website);       // object (null)
console.log("typeof kedai.jamOperasional:", typeof kedai.jamOperasional); // object
console.log("typeof menu               :", typeof menu);                // object (array = object)
console.log("typeof transaksi[0].catatan:", typeof transaksi[0].catatan); // string

// ============================================================
// BAGIAN 5 - Variabel tanpa nilai
// ============================================================
let catatanKasir;
console.log("catatanKasir:", catatanKasir); // undefined


/* ============================================================
   JAWABAN PERTANYAAN
   ============================================================

   1. Kenapa nomorWhatsApp disimpan sebagai string, bukan number?
      Karena nomor telepon/WhatsApp bukan nilai untuk dihitung,
      melainkan identitas. Jika disimpan sebagai number, angka 0
      di depan akan hilang (mis. "0812..." -> 812...). String juga
      lebih aman untuk nomor panjang agar tidak kena limit presisi
      Number, dan bisa memuat karakter seperti "+", "-", atau spasi.

   2. Kenapa website diisi null, sedangkan catatanKasir dibiarkan
      tanpa nilai?
      - `website: null` artinya "nilainya memang belum ada / kosong,
        tapi disengaja". Ini menandakan field tersebut sengaja
        dikosongkan oleh programmer.
      - `catatanKasir` tanpa nilai artinya "belum diinisialisasi",
        nilainya `undefined` dan belum pernah diberi nilai sama
        sekali. Perbedaan ini penting: null = kosong yang disengaja,
        undefined = belum didefinisikan.

   3. Jika menu berisi 6 item, apa hasil menu[6]? Kenapa?
      Hasilnya `undefined`. Karena indeks array dimulai dari 0,
      sehingga 6 item menempati indeks 0..5. Indeks 6 berada di
      luar jangkauan (out of bounds), dan JavaScript mengembalikan
      `undefined` untuk elemen yang tidak ada.

   4. Apa hasil typeof menu? Kenapa hasilnya begitu?
      Hasilnya `"object"`. Di JavaScript, array sebenarnya adalah
      tipe khusus dari object (array adalah objek dengan properti
      `length` dan indeks numerik). Karena itu `typeof []` bernilai
      `"object"`, bukan `"array"`. Untuk mengecek array secara
      akurat, gunakan `Array.isArray(menu)`.

   5. Kenapa menu dibuat sebagai array, sedangkan kedai sebagai object?
      - `menu` adalah kumpulan banyak item yang sejenis dan
        berurutan, sehingga cocok disimpan sebagai array (bisa
        diakses lewat indeks, di-loop, ditambah/hapus item).
      - `kedai` adalah satu entitas tunggal dengan banyak
        properti bernama (nama, pemilik, kota, dst). Object cocok
        untuk merepresentasikan satu "benda" dengan atribut
        berlabel, bukan urutan.
   ============================================================ */

// Ringkasan typeof:
// typeof kedai.tahunBerdiri   -> "number"
// typeof kedai.sedangBuka     -> "boolean"
// typeof kedai.website        -> "object" (karena null)
// typeof kedai.jamOperasional -> "object"
// typeof menu                 -> "object" (array = object)
// typeof transaksi[0].catatan -> "string"

// Bagian 6 - Variabel, operator, dan perhitungan transaksi
let namaKedai = "Kedai Senja";
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
let jumlahRoti = "2";
let transaksiSelesai = 0;
const diskon = 10000;

// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + Number(jumlahRoti);

// Subtotal. Seharusnya: 84000
let subtotal = HARGA_KOPI * jumlahKopi + HARGA_ROTI * Number(jumlahRoti);

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
let pajak = (subtotal - diskon) * TARIF_PAJAK;

// Total bayar. Seharusnya: 82140
let totalBayar = subtotal - diskon + pajak;

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
let uangCukup = uangBayar >= totalBayar;

// Kembalian. Seharusnya: 17860
let kembalian = uangCukup ? uangBayar - totalBayar : 0;

// Jumlah item genap? Seharusnya: false
let itemGenap = jumlahItem % 2 === 0;

// Transaksi selesai bertambah 1. Seharusnya: 1
transaksiSelesai += 1;

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
namaKedai = "Kedai Senja Baru";

console.log(
  namaKedai,
  jumlahItem,
  subtotal,
  pajak,
  totalBayar,
  uangCukup,
  kembalian,
  itemGenap,
  transaksiSelesai
);
