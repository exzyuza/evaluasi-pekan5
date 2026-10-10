/*
====================================================================
Nama    : [Nama Kamu]
Tanggal : 2026-10-10
Branch  : docs/tebak-jelaskan
Tujuan  : Bagian 5 - Tebak, Eksperimen, dan Jelaskan.
          Setiap baris diberi TEBAKAN sebelum dijalankan,
          lalu HASIL ASLI setelah dijalankan.
====================================================================
*/

// ============================================================
// 5.1 TEBAK
// ============================================================

// 1. console.log(5 + "5");
// TEBAKAN : 55  (string "5" memaksa number 5 jadi string)
// HASIL   : "55" (string) → dicetak: 55
console.log(5 + "5");

// 2. console.log("10" - 4);
// TEBAKAN : 6  (operator - memaksa string "10" jadi number)
// HASIL   : 6 (number)
console.log("10" - 4);

// 3. console.log("10" * "2");
// TEBAKAN : 20  (operator * memaksa kedua string jadi number)
// HASIL   : 20 (number)
console.log("10" * "2");

// 4. console.log(typeof ("5" + 5));
// TEBAKAN : "string"  ("5" + 5 → "55", lalu typeof-nya string)
// HASIL   : "string"
console.log(typeof ("5" + 5));

// 5. console.log(9 % 4);
// TEBAKAN : 1  (9 ÷ 4 = 2 sisa 1)
// HASIL   : 1 (number)
console.log(9 % 4);

// 6. console.log((2 + 3) ** 2);
// TEBAKAN : 25  (5 pangkat 2)
// HASIL   : 25 (number)
console.log((2 + 3) ** 2);

// 7. console.log(10 / 4);
// TEBAKAN : 2.5  (JS pakai floating point, bukan pembagian bulat)
// HASIL   : 2.5 (number)
console.log(10 / 4);

// 8. console.log(1 / 0);
// TEBAKAN : Infinity
// HASIL   : Infinity (JS tidak error saat bagi nol, hasilnya Infinity)
console.log(1 / 0);

// 9. console.log("abc" * 2);
// TEBAKAN : NaN  (string non-numerik dikali number = Not a Number)
// HASIL   : NaN
console.log("abc" * 2);

// 10. console.log(typeof NaN);
// TEBAKAN : "number"  (NaN itu tipe number, meski namanya Not-a-Number)
// HASIL   : "number"
console.log(typeof NaN);

// 11. console.log((5 > 3 && 2 > 4) || 1 === 1);
// TEBAKAN : true
//   → (5 > 3 && 2 > 4) = (true && false) = false
//   → (1 === 1) = true
//   → false || true = true
// HASIL   : true
console.log((5 > 3 && 2 > 4) || 1 === 1);

// 12. console.log(!true || !false);
// TEBAKAN : true
//   → !true  = false
//   → !false = true
//   → false || true = true
// HASIL   : true
console.log(!true || !false);

// 13. console.log("5" == 5 && "5" !== 5);
// TEBAKAN : true
//   → "5" == 5   → true  (loose equality, konversi tipe dulu)
//   → "5" !== 5  → true  (strict inequality, tipe berbeda)
//   → true && true = true
// HASIL   : true
console.log("5" == 5 && "5" !== 5);

// 14. console.log(typeof [] === typeof {});
// TEBAKAN : true
//   → typeof [] = "object"
//   → typeof {} = "object"
//   → "object" === "object" = true
// HASIL   : true
console.log(typeof [] === typeof {});

// 15. console.log([10, 20, 30][1] + [10, 20, 30][2]);
// TEBAKAN : 50
//   → [10,20,30][1] = 20
//   → [10,20,30][2] = 30
//   → 20 + 30 = 50
// HASIL   : 50
console.log([10, 20, 30][1] + [10, 20, 30][2]);

// ============================================================
// 5.2 EKSPERIMEN TAMBAHAN (opsional, untuk memperkuat pemahaman)
// ============================================================

console.log("\n--- EKSPERIMEN TAMBAHAN ---");

// Mengapa 5 + "5" = "55" tapi "10" - 4 = 6?
// Karena operator + dipakai untuk DUA hal:
//   - penjumlahan angka (jika kedua operan number)
//   - penggabungan string (jika salah satu operan string)
// Sedangkan operator -, *, / hanya untuk matematika,
// jadi JS otomatis mengonversi string ke number.

// Perbedaan == vs ===
console.log('"5" == 5   :', "5" == 5);    // true  (loose)
console.log('"5" === 5  :', "5" === 5);   // false (strict, tipe beda)

// NaN tidak sama dengan NaN
console.log("NaN === NaN:", NaN === NaN); // false (unik!)

// Cara benar cek NaN:
console.log("isNaN(NaN):", isNaN(NaN));   // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true (lebih disarankan)

// Infinity × 0 = NaN (bukan 0!)
console.log("Infinity * 0:", Infinity * 0); // NaN

// ============================================================
// 5.2 EKSPERIMEN: var VS let
// ============================================================

console.log("\n--- 5.2 EKSPERIMEN var vs let ---");

// ------------------------------------------------------------
// KASUS 1: var bocor keluar blok, let tidak
// ------------------------------------------------------------
console.log("\n[Kasus 1] Scope blok");

{
    var pesanVar = "Saya dari var di dalam blok";
    let pesanLet = "Saya dari let di dalam blok";
    console.log("Di dalam blok - pesanVar :", pesanVar); // ✅ bisa diakses
    console.log("Di dalam blok - pesanLet :", pesanLet); // ✅ bisa diakses
}

console.log("Di luar blok - pesanVar :", pesanVar); // ✅ MASIH bisa diakses → BUKTI var bocor
// console.log("Di luar blok - pesanLet :", pesanLet);

/*
   HASIL ASLI (baris yang di-comment diaktifkan):
   ReferenceError: pesanLet is not defined
   → pesanLet hanya hidup di dalam blok { }, di luar blok tidak dikenali.
   → pesanVar tetap bisa dibaca karena `var` tidak mengenal block scope,
     hanya function scope.
*/

// ------------------------------------------------------------
// KASUS 2A: var boleh dideklarasikan dua kali (tanpa error)
// ------------------------------------------------------------
console.log("\n[Kasus 2A] Deklarasi ulang dengan var");

var nama = "Andi";
var nama = "Bunga";           // ✅ TIDAK error, nilai lama ditimpa
console.log("Setelah redeclare var:", nama); // "Bunga"

// ------------------------------------------------------------
// KASUS 2B: let tidak boleh dideklarasikan dua kali
// ------------------------------------------------------------
console.log("\n[Kasus 2B] Deklarasi ulang dengan let");

let kota = "Jakarta";
// let kota = "Bandung";   // ❌ SyntaxError jika diaktifkan

/*
   HASIL ASLI (baris di atas diaktifkan):
   SyntaxError: Identifier 'kota' has already been declared
   → `let` melarang deklarasi ulang variabel dengan nama yang sama
     di scope yang sama, untuk mencegah bug yang tidak disengaja.
*/

// ------------------------------------------------------------
// KASUS 2C: reassign (tanpa `let`) tetap boleh
// ------------------------------------------------------------
let kota2 = "Jakarta";
kota2 = "Bandung";            // ✅ reassign tanpa `let`, tidak error
console.log("Setelah reassign let:", kota2); // "Bandung"

// ------------------------------------------------------------
// KASUS 3 (bonus): perbedaan di loop dengan setTimeout
// ------------------------------------------------------------
console.log("\n[Kasus 3] Perbedaan var vs let di dalam loop");

console.log("Dengan var:");
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("  var i =", i), 0);
}
// Output: var i = 3, var i = 3, var i = 3
// Karena `var` hanya punya SATU binding `i` yang dipakai bersama.

console.log("Dengan let:");
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("  let j =", j), 0);
}
// Output: let j = 0, let j = 1, let j = 2
// Karena `let` membuat binding BARU di setiap iterasi.

// ------------------------------------------------------------
// KASUS 4 (bonus): hoisting var vs let (TDZ)
// ------------------------------------------------------------
console.log("\n[Kasus 4] Hoisting");

console.log("var sebelum deklarasi:", hoistedVar); // ✅ undefined (di-hoist, belum diisi)
var hoistedVar = "nilai var";

// console.log("let sebelum deklarasi:", hoistedLet); // ❌ ReferenceError
// let hoistedLet = "nilai let";

/*
   HASIL ASLI (baris let di atas diaktifkan):
   ReferenceError: Cannot access 'hoistedLet' before initialization
   → `let` juga di-hoist, tapi TIDAK diinisialisasi. Ada "Temporal Dead Zone"
     (TDZ), yaitu rentang waktu antara hoisting dan deklarasi di mana variabel
     belum boleh diakses.
*/


// ============================================================
// 5.3 JELASKAN
// ============================================================

/* ============================================================
   1. Kenapa `5 + "5"` dan `"10" - 4` hasilnya berbeda jenis?
   ============================================================
   Karena operator + punya DUA fungsi berbeda di JavaScript:

   a) Penjumlahan angka   → jika kedua operan number
   b) Penggabungan string → jika salah satu operan string

   Aturan +: jika salah satu operan string, JS akan memaksa
   (coerce) operan lain menjadi string, lalu menggabungkan.
       5 + "5"  →  "5" + "5"  →  "55"  (string)

   Sedangkan operator -, *, /, % hanya punya SATU fungsi:
   aritmetika. Karena itu JS otomatis mengonversi operan string
   ke number sebelum menghitung.
       "10" - 4  →  10 - 4  →  6  (number)

   Jadi bedanya: `+` memilih mode berdasarkan tipe operan,
   sedangkan `-` selalu memaksa mode matematika.
   ============================================================ */

/* ============================================================
   2. `typeof NaN` hasilnya "number". Apa artinya NaN, dan
      kenapa tipenya number?
   ============================================================
   NaN = "Not a Number", tapi hasilnya justru tipe number.

   NaN dipakai sebagai hasil operasi matematika yang TIDAK valid:
       "abc" * 2    → NaN
       0 / 0        → NaN
       Math.sqrt(-1)→ NaN
       Infinity - Infinity → NaN

   Kenapa tipe number? Karena NaN muncul dari operasi yang
   SEHARUSNYA menghasilkan number (perkalian, pembagian, akar).
   Kalau tipenya bukan number, kita tidak bisa membedakan mana
   hasil yang "angka valid" dan mana yang "angka tidak valid".

   Analogi: nilai ujian yang kosong tetap dicatat di kolom nilai
   (kolom number), isinya saja yang "kosong/NaN".

   Catatan penting:
       NaN === NaN     → false  (NaN tidak sama dengan dirinya)
       Number.isNaN(NaN) → true  (cara benar mengecek NaN)
   ============================================================ */

/* ============================================================
   3. Urutan evaluasi `5 > 3 && 2 > 4 || 1 === 1` langkah demi langkah
   ============================================================
   Ekspresi : 5 > 3 && 2 > 4 || 1 === 1
   Prioritas: perbandingan (>, ===) > && > ||

   Langkah:
   1) 5 > 3        → true     (perbandingan kiri pertama)
   2) 2 > 4        → false    (perbandingan kiri kedua)
   3) 1 === 1      → true     (perbandingan kanan)

   Ekspresi jadi: true && false || true

   4) true && false → false   (&& lebih tinggi dari ||)
      Ekspresi jadi: false || true

   5) false || true → true    (|| dievaluasi terakhir)

   HASIL AKHIR: true

   Untuk lebih jelas, tambahkan tanda kurung eksplisit:
       ((5 > 3) && (2 > 4)) || (1 === 1)
       = (true && false) || true
       = false || true
       = true
   ============================================================ */

/* ============================================================
   4. `typeof []` hasilnya "object". Bagaimana membedakan array
      dari object biasa di kodemu?
   ============================================================
   Di JavaScript, array adalah subtype khusus dari object, jadi
   typeof tidak bisa membedakan keduanya. Cara yang benar:

   a) Array.isArray(nilai)   ← paling direkomendasikan (ES5+)
        Array.isArray([1,2,3])  → true
        Array.isArray({a:1})    → false

   b) nilai instanceof Array  ← bisa, tapi gagal untuk array
      yang dibuat di iframe / realm JS lain.

   c) Cek properti khusus:
        nilai.length !== undefined && typeof nilai.push === "function"
      Kurang aman karena object bisa meniru struktur ini.

   Kesimpulan: SELALU gunakan `Array.isArray()` untuk mengecek
   apakah sesuatu itu array.

   Contoh di eksperimen.js:
       console.log(Array.isArray(menu));    // true
       console.log(Array.isArray(kedai));   // false
   ============================================================ */

/* ============================================================
   5. Dari kode `let hasil = 5 + 10;` lalu `console.log(hasil * 2);`
      sebutkan semua statement dan expression, beserta nilainya.
   ============================================================
   Statement (pernyataan utuh, diakhiri `;`):
   A) let hasil = 5 + 10;
   B) console.log(hasil * 2);

   Expression (potongan yang menghasilkan nilai):
   A) 5 + 10          → 15
      (seluruh `5 + 10` adalah expression, hasilnya disimpan ke `hasil`)
   
   B) hasil           → 15     (membaca nilai variabel)
      hasil * 2       → 30     (mengalikan)
      console.log(...)→ undefined (console.log mengembalikan undefined)
      hasil * 2 di dalam console.log juga expression (nilai 30).

   Ringkas:
   Expression        Nilai
   ---------------   -----
   5 + 10            15
   hasil             15
   hasil * 2         30
   console.log(...)  undefined (efek samping: mencetak 30)

   Perbedaan statement vs expression:
   - Expression menghasilkan nilai; bisa dipakai di tempat yang
     butuh nilai, mis. argumen fungsi atau sisi kanan `=`.
   - Statement adalah instruksi lengkap; tidak selalu
     menghasilkan nilai yang bisa dipakai langsung.
       `let x = 5;`     → statement (deklarasi)
       `5`              → expression (nilainya 5)
       `x = 5`          → expression juga (nilainya 5), tapi
                          sering dipakai sebagai statement.
   ============================================================ */

/* ============================================================
   6. eksperimen.js dijalankan di mana dan oleh apa? Apa bedanya
      dengan Node.js? Kenapa modul ini pakai let & const, bukan var?
   ============================================================
   Di mana: di BROWSER (Chrome/Firefox/Edge), dipanggil lewat
   tag <script src="eksperimen.js"></script> di eksperimen.html.
   Yang menjalankan: JavaScript Engine di browser
   (V8 di Chrome, SpiderMonkey di Firefox, JavaScriptCore di Safari).

   Perbedaan dengan Node.js:
   ---------------------------------------------
   Aspek        | Browser              | Node.js
   ---------------------------------------------
   Engine       | V8/SpiderMonkey/dll  | V8 (Chrome)
   Objek global | window / globalThis  | global / globalThis
   DOM          | Ada (document, dll)  | TIDAK ada
   console.log  | Ada (DevTools)       | Ada (terminal)
   Cara jalan   | buka .html / auto    | `node file.js`
   Modul        | <script>, import     | require / import
   File API     | FileReader, fetch    | fs, path, dll
   ---------------------------------------------

   Meski berbeda "rumah", keduanya menjalankan JavaScript yang
   sama (ECMAScript), jadi sintaks let/const/function sama.

   Kenapa pakai let & const, bukan var?
   a) `var` tidak mengenal block scope → mudah bocor keluar blok
      dan menimbulkan bug sulit dilacak.
   b) `var` boleh dideklarasikan ulang → error ketik tidak terdeteksi.
   c) `const` memberi keamanan: nilai tidak sengaja tertimpa
      akan error (fail fast), sehingga bug cepat ketahuan.
   d) `let` & `const` punya Temporal Dead Zone → penggunaan
      sebelum deklarasi langsung error, bukan `undefined` yang
      membingungkan.
   e) Best practice modern (ES6+, 2015): const dulu, let jika
      perlu diubah, var hanya untuk kode legacy.
   ============================================================ */

/* ============================================================
   7. Apa hasil eksperimen var dan let milikmu? Jelaskan.
   ============================================================
   a) Scope blok
      - `var pesanVar` di dalam { } → masih bisa dibaca di luar.
      - `let pesanLet` di dalam { } → ReferenceError di luar.
      Kesimpulan: `var` = function-scoped (bocor dari blok),
                  `let` = block-scoped.

   b) Deklarasi ulang
      - `var nama` dua kali → tidak error, nilai ditimpa.
      - `let kota` dua kali → SyntaxError: Identifier 'kota'
        has already been declared.
      Kesimpulan: `var` mengizinkan redeclare, `let` melarang.

   c) Reassign (bonus)
      - `let kota2 = "Jakarta"; kota2 = "Bandung";` → OK.
      Kesimpulan: `let` boleh di-reassign, hanya dilarang
      redeclare dengan `let` di baris baru.

   d) Loop + setTimeout
      - `var i` → semua callback mencetak 3 (satu binding bersama).
      - `let j` → callback mencetak 0, 1, 2 (binding baru per iterasi).
      Kesimpulan: `let` di loop menciptakan scope baru tiap iterasi.

   e) Hoisting / TDZ
      - `var` sebelum deklarasi → undefined.
      - `let` sebelum deklarasi → ReferenceError (TDZ).
   ============================================================ */

/* ============================================================
   8. Contoh nyata bug karena `var` bocor / redeclare di program besar
   ============================================================
   Contoh 1 - Bug loop async di aplikasi kasir Kedai Senja:

       // ❌ Buggy pakai var
       const pesanan = ["Kopi", "Teh", "Roti"];
       for (var i = 0; i < pesanan.length; i++) {
           setTimeout(() => {
               console.log("Pesanan ke-" + (i+1) + ": " + pesanan[i]);
           }, 100);
       }
       // Semua callback mencetak "Pesanan ke-4: undefined"
       // karena `i` sudah bernilai 3 saat callback dijalankan.

       // ✅ Fix pakai let
       for (let i = 0; i < pesanan.length; i++) {
           setTimeout(() => console.log(`Pesanan ke-${i+1}: ${pesanan[i]}`), 100);
       }
       // Setiap iterasi punya `i` sendiri → output benar.

   Contoh 2 - Redeklarasi tidak sengaja:

       var totalBelanja = 100000;
       // ... 200 baris kemudian ...
       var totalBelanja = 0;   // programmer baru kira ini variabel baru!
       // Uang pelanggan hilang tanpa error sama sekali.

   Contoh 3 - Bocor dari blok if:

       if (pembayaranBerhasil) {
           var status = "LUNAS";
       }
       console.log(status);    // "LUNAS" walau di luar blok
       // Kalau `pembayaranBerhasil` false → status = undefined,
       // tapi kodenya tetap bisa diakses tanpa error → bug tersembunyi.

   Kesimpulan: `var` = "bebas tanpa pengaman". `let`/`const` = ada
   pengaman yang menangkap bug LEBIH AWAL (fail fast).
   ============================================================ */