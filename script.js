// 1. DATA NASKAH (Dengan Penambahan URL Gambar Dummy)
const ceritaPertanian = [
    {
        babak: 1,
        variabel: "X1",
        judul: "Babak 1: Hujan di Bulan yang Salah",
        pembuka: "Langit gelap sejak pagi. Kamu berdiri di pinggir kebun percobaan pertamamu. Hujan datang terlalu cepat. Terlalu deras. Bibit yang kamu tanam seminggu lalu… hilang, hanyut, tak tersisa.",
        aksi: [
            {
                // NANTI GANTI URL INI DENGAN RENDER BLENDER-MU (Babak 1 Aksi 1)
                gambar: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHw0fHxtdWRkeSUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNTk3Mnww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Air menggenang. Tanah berubah lumpur. Kamu menatap kosong ke arah lahan yang hancur.",
                opsi: [
                    { teks: "Menghela napas panjang. 'Udah… ini terlalu ribet buat gue.'", skor: 1 },
                    { teks: "Mengusap wajah dengan kasar. 'Sial... kayaknya gue salah pilih jalan.'", skor: 2 },
                    { teks: "Mengedikkan bahu. 'Ya udah, gagal ya gagal.'", skor: 3 },
                    { teks: "Berjongkok, mengecek aliran genangan air. 'Oke… kenapa airnya numpuk di sini?'", skor: 4 },
                    { teks: "Tersenyum tipis. 'Menarik… selalu ada harga mahal buat pelajaran pertama.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 1 Aksi 2
                gambar: "https://images.unsplash.com/photo-1592982537447-6f296b0bd5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxvbGQlMjBmYXJtZXJ8ZW58MHx8fHwxNzE1MDA2MDIyfDA&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Hujan mulai reda, menyisakan genangan air di mana-mana. Seorang bapak tua, petani lahan sebelah lewat. 'Baru mulai, ya?' katanya santai.",
                opsi: [
                    { teks: "'Iya... tapi kayaknya saya nggak lanjut Pak'", skor: 1 },
                    { teks: "'Hehe iya Pak capek juga yaa... nggak kebayang harus ulang.'", skor: 2 },
                    { teks: "'Iya Pak, masih mikir-mikir lagi ini mau lanjut apa nggak.'", skor: 3 },
                    { teks: "'Iya Pak. Mau coba lagi nanti, tapi harus lebih siap antisipasi.'", skor: 4 },
                    { teks: "'Iya Pak. Biasanya bapak kalau ngadepin cuaca tiba-tiba gini, triknya gimana?'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 1 Aksi 3
                gambar: "https://images.unsplash.com/photo-1470434767139-71af9eb52924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxuaWdodCUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNjA1OHww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Bapak tua itu berlalu, dan malam pun turun. Kamu duduk sendirian di teras. Keputusan itu ada di depanmu.",
                opsi: [
                    { teks: "Kemasi barang. Cari jalur karir yang lebih pasti besok pagi.", skor: 1 },
                    { teks: "Tinggalkan dulu kebun ini. Nanti kembali lagi kalau mood sudah lebih baik.", skor: 2 },
                    { teks: "Tidur saja dulu. Besok pagi baru lihat lagi situasinya.", skor: 3 },
                    { teks: "Buka laptop, mulai rencanakan ulang sistem drainase air dari sekarang.", skor: 4 },
                    { teks: "Catat kerugian hari ini sebagai 'data riset', dan siap eksekusi ulang besok pagi.", skor: 5 }
                ]
            }
        ],
        transisi: {
            gambarTransisi: "https://images.unsplash.com/photo-1505934333218-8feea099bbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxqb3VybmFsfGVufDB8fHx8MTcxNTAwNjA5MXww&ixlib=rb-4.0.3&q=80&w=800",
            rendah: "Tanah itu terasa asing, bahkan sedikit menolakmu. Kamu mundur sejenak, bukan karena lemah, tapi karena kamu belum siap.",
            sedang: "Kamu berdiri di antara ragu dan harap. Belum yakin ini jalanmu, tapi ada sesuatu yang menahanmu.",
            tinggi: "Hujan itu bukan akhir. Musim ini mungkin mengalahkanmu, tapi ia justru memicu api yang baru."
        }
    }
];

// VARIABEL STATE
let indexBabakSaatIni = 0;
let indexAksiSaatIni = 0;
let skorSementara = [];
let dataVariabel = { X1: 0, X2: 0, X3: 0, X4: 0, X5: 0, X6: 0, X7: 0, X8: 0, X9: 0, X10: 0, X11: 0 };

// FUNGSI UNTUK MERENDER UI
const judulBabakUI = document.getElementById("judul-babak");
const teksCeritaUI = document.getElementById("teks-cerita");
const optionsAreaUI = document.getElementById("options-area");
const sceneImageUI = document.getElementById("scene-image"); // Mengambil elemen gambar

function renderPertanyaan() {
    let babakAktif = ceritaPertanian[indexBabakSaatIni];
    let aksiAktif = babakAktif.aksi[indexAksiSaatIni];

    // Mengganti Gambar sesuai Aksi
    sceneImageUI.src = aksiAktif.gambar;

    if (indexAksiSaatIni === 0) {
        judulBabakUI.innerText = babakAktif.judul;
        teksCeritaUI.innerText = babakAktif.pembuka + "\n\n" + aksiAktif.teksAksi;
    } else {
        teksCeritaUI.innerText = aksiAktif.teksAksi;
    }

    optionsAreaUI.innerHTML = "";
    aksiAktif.opsi.forEach(pilihan => {
        let btn = document.createElement("button");
        btn.innerText = pilihan.teks;
        btn.classList.add("btn-opsi");
        btn.onclick = () => prosesPilihan(pilihan.skor);
        optionsAreaUI.appendChild(btn);
    });
}

function prosesPilihan(skor) {
    skorSementara.push(skor);

    if (indexAksiSaatIni < 2) {
        indexAksiSaatIni++;
        renderPertanyaan();
    } else {
        let rataRata = (skorSementara[0] + skorSementara[1] + skorSementara[2]) / 3;
        dataVariabel[ceritaPertanian[indexBabakSaatIni].variabel] = rataRata;

        let teksTransisi = "";
        if (rataRata < 2.5) teksTransisi = ceritaPertanian[indexBabakSaatIni].transisi.rendah;
        else if (rataRata <= 3.5) teksTransisi = ceritaPertanian[indexBabakSaatIni].transisi.sedang;
        else teksTransisi = ceritaPertanian[indexBabakSaatIni].transisi.tinggi;

        tampilkanTransisi(teksTransisi);
    }
}

function tampilkanTransisi(teks) {
    let babakAktif = ceritaPertanian[indexBabakSaatIni];
    sceneImageUI.src = babakAktif.transisi.gambarTransisi; // Gambar untuk layar transisi
    
    judulBabakUI.innerText = "Jurnal Perjalanan...";
    teksCeritaUI.innerText = teks;
    optionsAreaUI.innerHTML = "";

    let btnLanjut = document.createElement("button");
    btnLanjut.innerText = "Lanjutkan Perjalanan ➔";
    btnLanjut.classList.add("btn-opsi");
    btnLanjut.style.backgroundColor = "#c67a3f"; // Tombol warna oranye biar beda
    btnLanjut.style.color = "#fff";
    btnLanjut.onclick = () => lanjutKeBabakBerikutnya();
    optionsAreaUI.appendChild(btnLanjut);
}

function lanjutKeBabakBerikutnya() {
    skorSementara = [];
    indexAksiSaatIni = 0;
    indexBabakSaatIni++;

    if (indexBabakSaatIni < ceritaPertanian.length) {
        renderPertanyaan();
    } else {
        // GONG / HASIL AKHIR
        sceneImageUI.src = "https://images.unsplash.com/photo-1595841696650-6e42b262a66e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxhZ3JpY3VsdHVyZXxlbnwwfHx8fDE3MTUwMDYxMTR8MA&ixlib=rb-4.0.3&q=80&w=800";
        judulBabakUI.innerText = "Panggilan Karirmu";
        teksCeritaUI.innerText = "Menghitung data menggunakan algoritma...";
        optionsAreaUI.innerHTML = "";
        
        setTimeout(() => {
            teksCeritaUI.innerText = "Berdasarkan jejakmu, kamu adalah: \n\n✨ THE AGROECOLOGY CHAMPION ✨";
        }, 1500);
    }
}

// MULAI
renderPertanyaan();