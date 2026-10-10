Berikut isi lengkap README.md yang siap Anda copy-paste ke proyek Kedai Senja. Bagian yang perlu Anda ganti dengan data asli (nama, hash, output git) sudah saya beri tanda ← ganti dengan milikmu.

---

📄 File README.md

```markdown
# ☕ Kedai Senja

Proyek web sederhana bertema **Kedai Senja** — sebuah kedai kopi fiktif yang menjual kopi, teh, dan pastry. Proyek ini dibuat sebagai latihan Git, JavaScript dasar, dan kolaborasi tim menggunakan workflow branch + Pull Request.

---

## 📖 Deskripsi Singkat

Kedai Senja adalah aplikasi web statis yang menampilkan:
- Halaman beranda bertema senja (cokelat-oranye hangat)
- Daftar menu (minuman & makanan) dengan harga dan stok
- Data transaksi pelanggan (member & non-member)
- Eksperimen JavaScript: tipe data, operator, `var` vs `let`, dan merge conflict simulation

Proyek ini juga menjadi bahan latihan **Git workflow** — mulai dari branch, commit, merge, hingga menyelesaikan merge conflict dan membuat Pull Request.

---

## 🚀 Cara Menjalankan

### Prasyarat
- Browser modern (Chrome, Firefox, Edge, Safari)
- Git (untuk cloning)
- (Opsional) Node.js untuk menjalankan `script.js` di terminal

### Langkah-langkah

1. **Clone repository ini**
   ```bash
   git clone https://github.com/username/kedai-senja.git
   cd kedai-senja
   ```

2. **Buka di browser**
   ```bash
   # Windows
   start index.html

   # macOS
   open index.html

   # Linux
   xdg-open index.html
   ```

   Atau langsung klik dua kali file `index.html`.

3. **Lihat hasil JavaScript**
   - Buka file `index.html` di browser
   - Tekan `F12` → tab **Console** untuk melihat output `script.js` dan `eksperimen.js`

4. **(Opsional) Jalankan via Node.js**
   ```bash
   node script.js
   node eksperimen.js
   ```

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan |
|-----------|----------|
| **HTML5** | Struktur halaman (`index.html`, `eksperimen.html`) |
| **CSS3** | Tampilan tema senja (`style.css`) |
| **JavaScript (ES6+)** | Logika program (`script.js`, `eksperimen.js`) |
| **Git** | Version control & kolaborasi |
| **GitHub** | Hosting repository & Pull Request |

---

## 👤 Penulis

**Nama:** [MUHAMAD NIZZAR RAMADHAN] 
**Kelas / NIM:** [Kelas / 5443]   
**Email:** [ayyubisyafiq@gmail.com] 
**GitHub:** [exzyuza](ttps://github.com/exzyuza/evaluasi-pekan5/blob/main/.gitigbore) 

---

## 📊 Riwayat Git

### Hasil `git log --oneline --graph`

```
*   3f9a1c2 (HEAD -> main) merge: selesaikan konflik nama kedai antara main dan fitur/nama-kedai
|\
| * b7c8d9e feat: ubah nama kedai jadi 'Kedai Senja Baru'
* | e4f5g6h refactor: ubah nama kedai jadi 'Kedai Senja'
|/
* a1b2c3d feat: inisialisasi proyek Kedai Senja
* 9e8d7c6 docs: tambah README dan eksperimen JavaScript
* 5f4e3d2 style: tambah tema senja pada index.html
* 1a2b3c4 feat: buat halaman utama Kedai Senja
```

> **Catatan:** Ganti blok di atas dengan hasil asli dari terminalmu:
> ```bash
> git log --oneline --graph
> ```

**Penjelasan graph:**
- Baris `|\` dan `|/` menunjukkan **dua cabang menyatu** → bukti terjadinya merge (dan konflik).
- Commit `3f9a1c2` adalah **merge commit** hasil penyelesaian konflik Bagian 6.1.

---

## 🔍 Hasil `git blame index.html` untuk Baris `<title>`

Perintah yang dijalankan:
```bash
git blame index.html | grep "<title>"
```

**Output:**
```
755822a Agent host session ea1eb057-aa5b-46cb-ab66-4b563035a36b - turn 3 start
* ab4a298 Agent host session ea1eb057-aa5b-46cb-ab66-4b563035a36b - turn 2
* 379a567 Agent host session ea1eb057-aa5b-46cb-ab66-4b563035a36b - turn 2 start
* 8c44b9b Agent host session ea1eb057-aa5b-46cb-ab66-4b563035a36b - turn 1
* ae1547d Agent host session ea1eb057-aa5b-46cb-ab66-4b563035a36b - turn 1 start
* 0a7646d Agent host session ea1eb057-aa5b-46cb-ab66-4b563035a36b - baseline checkpoint
```

**Kesimpulan:**
- **Penulis:** [MUHAMAD NIZZAR RAMADHAN] 
- **Commit:** `a1b2c3d4` — `feat: MENGUBAH NAMA KEDAI SENJA` 
- **Tanggal:** 2026-10-10
- **Baris:** ke-6

Artinya, baris `<title>` pada `index.html` **terakhir diubah** oleh commit tersebut di atas.

---

## ❓ Jawaban Tiga Pertanyaan

### 1. Apa beda `git add` dan `git commit`?

`git add` dan `git commit` adalah dua tahap berbeda dalam menyimpan perubahan ke Git.

- **`git add`** — memindahkan perubahan dari *working directory* ke **staging area**. Ini seperti "menyiapkan barang" yang mau dikirim. Belum tersimpan permanen, masih bisa diubah atau dibatalkan dengan `git restore --staged`.
- **`git commit`** — menyimpan semua yang ada di staging area menjadi **satu snapshot permanen** di riwayat repository, lengkap dengan pesan, penulis, dan timestamp.

**Analogi:** `git add` = memasukkan barang ke kardus. `git commit` = menyegel kardus dan memberi label. Kalau belum `add`, `commit` tidak akan menyertakan file tersebut.

Contoh alur:
```bash
echo "console.log('halo');" > app.js
git add app.js          # file masuk staging
git commit -m "feat: tambah app.js"   # file tersimpan permanen
```

---

### 2. Kenapa konflik terjadi pada Bagian 6.1, dan bagaimana kamu menyelesaikannya?

**Penyebab konflik:** Dua branch mengubah **baris yang sama** dengan isi berbeda.

- Branch `main` mengubah baris 1 `script.js` menjadi `const namaKedai = "Kedai Senja";`
- Branch `fitur/nama-kedai` mengubah baris 1 yang sama menjadi `const namaKedai = "Kedai Senja Baru";`

Saat `git merge fitur/nama-kedai` dijalankan dari `main`, Git tidak bisa menebak mana yang benar → muncul:
```
CONFLICT (content): Merge conflict in script.js
```

**Cara menyelesaikannya:**

1. Jalankan `git status` untuk melihat file yang konflik.
2. Buka `script.js`, akan terlihat marker:
   ```
   <<<<<<< HEAD
   const namaKedai = "Kedai Senja";
   =======
   const namaKedai = "Kedai Senja Baru";
   >>>>>>> fitur/nama-kedai
   ```
3. Edit file secara manual — hapus semua marker, dan tulis **versi final** yang disepakati tim (kami pilih: simpan keduanya, dengan `"Kedai Senja Baru"` sebagai nama utama).
4. `git add script.js` untuk menandai konflik sudah selesai.
5. `git commit -m "merge: selesaikan konflik nama kedai..."` untuk membuat **merge commit**.
6. Verifikasi dengan `git log --graph --oneline --all` — akan terlihat cabang menyatu.

**Pelajaran:** Konflik bukan error, melainkan momen di mana Git meminta **manusia** memutuskan integrasi yang benar.

---

### 3. Apa beda `fork` dan `clone`? Apa gunanya Pull Request?

**`fork` vs `clone`:**

| Aspek | `fork` | `clone` |
|-------|--------|---------|
| Lokasi | Di **server** (GitHub/GitLab) | Di **komputer lokal** |
| Hasil | Salinan repo di akun kita sendiri | Salinan repo di folder lokal |
| Hubungan dengan repo asli | Punya **remote tambahan** (`upstream`) | Hanya `origin` milik repo itu |
| Izin | Bisa meski tidak punya akses tulis | Perlu izin akses ke repo |
| Kegunaan | Kontribusi ke proyek **open source** | Mengerjakan proyek yang sudah kita punya aksesnya |

**Singkat:**
- `fork` = "menduplikasi repo orang lain ke akunku di GitHub", supaya bisa mengubahnya bebas.
- `clone` = "mengunduh repo ke komputer", supaya bisa dikerjakan secara lokal.

Alur kontribusi open source biasanya: **fork → clone → edit → push → Pull Request**.

**Apa gunanya Pull Request (PR)?**

Pull Request adalah **permintaan resmi untuk menggabungkan** perubahan dari satu branch/fork ke branch utama (misalnya `main`). Gunanya:

1. **Review kode** — tim bisa membaca, mengomentari, dan memberi masukan sebelum kode masuk.
2. **Diskusi & dokumentasi** — percakapan tersimpan rapi terkait commit.
3. **CI/CD otomatis** — bisa dijalankan tes otomatis, linting, atau build sebelum merge.
4. **Jejak audit** — siapa yang menyetujui, kapan, dan apa perubahannya, semua tercatat.
5. **Kontrol kualitas** — mencegah kode bermasalah langsung masuk ke `main`.

Tanpa PR, siapa pun bisa `git push` langsung ke `main` → risiko bug, konflik, dan kode tidak teruji masuk produksi. PR adalah "gerbang" yang membuat kolaborasi tim tetap aman.

---

## 📁 Struktur Proyek

```
kedai-senja/
├── index.html          # Halaman utama
├── style.css           # Tema senja
├── script.js           # Logika kedai (menu, transaksi)
├── eksperimen.html     # Halaman eksperimen JS
├── eksperimen.js       # Eksperimen var/let, tebak-jelaskan
└── README.md           # File ini
```

---

## 📜 Lisensi

Proyek ini dibuat untuk keperluan **pembelajaran**. Bebas digunakan dan dimodifikasi.

---

*Terakhir diperbarui: 2026-10-10*
```

---

📌 Cara Mengisi Data Asli

Setelah copy-paste di atas, jalankan perintah ini di Git Bash dan ganti bagian yang bertanda ← ganti:

1. Ambil riwayat graph

```bash
git log --oneline --graph
```

Copy output-nya, ganti blok di bagian 📊 Riwayat Git.

2. Ambil git blame baris <title>

```bash
git blame index.html | grep "<title>"
```

Output-nya seperti:

```
a1b2c3d4 (Nama Kamu 2026-10-10 10:15:23 +0700 6)     <title>Kedai Senja - Kopi & Cerita</title>
```

Copy persis, lalu tulis kesimpulan siapa penulis & commit-nya.

3. Ganti data penulis

Cari bagian:

```markdown
**Nama:** [MUHAMAD NIZZAR RAMADHAN] ← 
```

Ganti dengan nama, kelas/NIM, email, dan username GitHub-mu.

---

✅ Checklist Sebelum Commit

□ Judul, deskripsi, cara menjalankan, teknologi, penulis sudah terisi
□ Output git log --oneline --graph asli dari terminal (bukan contoh)
□ Output git blame index.html untuk <title> asli dari terminal
□ Siapa & commit apa yang terakhir mengubah <title> sudah dijelaskan
□ 3 pertanyaan sudah dijawab dengan bahasa sendiri (bukan copy-paste)
□ Struktur folder sesuai kondisi nyata proyek

🚀 Commit README ke Git

```bash
git add README.md
git commit -m "docs: tambah README lengkap dengan riwayat Git dan jawaban pertanyaan"

git push origin main
```
