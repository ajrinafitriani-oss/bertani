// 1. DATA NASKAH (Dengan Penambahan URL Gambar Dummy)
const ceritaPertanian = [
    {
        babak: 1,
        variabel: "X1",
        tipeKalkulasi: "rata-rata",
        judul: "Hujan di Bulan yang Salah",
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
    },
    {
        babak: 2,
        variabel: "X2",
        tipeKalkulasi: "rata-rata",
        judul: "Harga yang Tak Pernah Kamu Lihat",
        pembuka: "Beberapa hari kemudian... Kamu ikut ke pasar subuh bersama petani sekitar. Sayur-sayur segar ditumpuk begitu saja di atas terpal. Harganya hancur. Terlalu murah untuk keringat yang dikeluarkan berminggu-minggu di bawah terik matahari.",
        aksi: [
            {
                // NANTI GANTI URL INI DENGAN RENDER BLENDER-MU (Babak 1 Aksi 1)
                gambar: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHw0fHxtdWRkeSUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNTk3Mnww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Di tengah hiruk-pikuk lapak, seseorang di sebelahmu berbisik getir, “Kasian ya, yang untung mah bukan mereka.",
                opsi: [
                    { teks: "'Ya begitulah hukum pasarnya.'", skor: 1 },
                    { teks: "'Kasihan sih... tapi gue juga nggak bisa ngapa-ngapain.'", skor: 2 },
                    { teks: "'Aneh juga ya, kok bisa jomplang banget harganya.'", skor: 3 },
                    { teks: "'Bentar, kenapa rantai pasoknya bisa seburuk ini?'", skor: 4 },
                    { teks: "'Ini nggak adil. Pasti ada sistem yang bisa memotong jalur tengkulak ini.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 2 Aksi 2
                gambar: "https://images.unsplash.com/photo-1592982537447-6f296b0bd5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxvbGQlMjBmYXJtZXJ8ZW58MHx8fHwxNzE1MDA2MDIyfDA&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Matahari mulai naik. Lapak mulai sepi, tapi sayur masih sisa banyak. Seorang petani yang kelelahan menatap tumpukan sawinya dan berkata pasrah: “Kalau nggak dijual murah sekarang, ya busuk di jalan.",
                opsi: [
                    { teks: "'Menunduk, merasa situasi ini terlalu besar untuk kamu campuri.'", skor: 1 },
                    { teks: "'Mengangguk pelan, menyerap realitas pahit ini tanpa berkata-kata.'", skor: 2 },
                    { teks: "'Bergumam setuju, walau otakmu merasa ada yang salah dengan siklus ini.'", skor: 3 },
                    { teks: "'Mendekat dan mulai menanyakan ke mana biasanya sisa sayur ini dibuang.'", skor: 4 },
                    { teks: "'Otakmu berputar cepat, memikirkan ide produk olahan agar sayur sisa ini tetap punya nilai jual.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 2 Aksi 3
                gambar: "https://images.unsplash.com/photo-1470434767139-71af9eb52924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxuaWdodCUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNjA1OHww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Malamnya, di kamarmu, wajah lelah petani tadi terus berputar di kepala.",
                opsi: [
                    { teks: "Mengusir pikiran itu cepat-cepat. 'Itu urusan pemerintah, bukan urusan gue.'", skor: 1 },
                    { teks: "Merasa simpati sebentar, lalu lanjut scroll media sosial untuk menenangkan pikiran.", skor: 2 },
                    { teks: "'Pengen bantu sih, tapi gue harus mulai dari mana ya?'", skor: 3 },
                    { teks: "Buka browser, mulai riset kecil-kecilan tentang masalah rantai distribusi pertanian lokal.", skor: 4 },
                    { teks: "Mencoret-coret ide di buku catatan: 'Misi #1: Bikin jalur distribusi langsung dari kebun ke warga.'", skor: 5 }
                ]
            }
        ],
        transisi: {
            gambarTransisi: "https://images.unsplash.com/photo-1505934333218-8feea099bbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxqb3VybmFsfGVufDB8fHx8MTcxNTAwNjA5MXww&ixlib=rb-4.0.3&q=80&w=800",
            rendah: "Kamu melihat ketidakadilan itu, tapi belum merasa terikat. Realitas keras ini terasa terlalu jauh dari jangkauan hidupmu yang sekarang.",
            sedang: "Ada yang mengganggu pikiranmu malam ini. Kamu belum tahu harus melakukan apa, tapi diam-diam, kamu mulai peduli.",
            tinggi: "Masalah ini mendadak terasa sangat personal. Saat orang lain hanya melihat sayur yang layu, kamu mulai melihat dirimu sendiri sebagai bagian dari jalan keluarnya."
        }
    },
    {
        babak: 3,
        variabel: "X3",
        tipeKalkulasi: "rata-rata",
        judul: "Tanah yang Lelah",
        pembuka: "Kamu berdiri menatap hamparan lahan di desa tetangga. Kering, retak, dan sunyi. Pemandangan ini sangat kontras dengan hijaunya bayanganmu tentang alam.",
        aksi: [
            {
                // NANTI GANTI URL INI DENGAN RENDER BLENDER-MU (Babak 1 Aksi 1)
                gambar: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHw0fHxtdWRkeSUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNTk3Mnww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Seseorang di sampingmu menendang pelan tanah yang berdebu. 'Padahal dulu subur banget... coba lihat keadaannya sekarang,' ucapnya getir.",
                opsi: [
                    { teks: "Mengangkat bahu. 'Ya, namanya juga alam, pasti ada masa subur dan masa matinya.'", skor: 1 },
                    { teks: "Menghela napas. 'Sayang banget ya, padahal potensinya masih ada kalau dirawat.'", skor: 2 },
                    { teks: "Mengamati retakan tanah lebih dekat. 'Kira-kira kenapa bisa separah ini rusaknya?'", skor: 3 },
                    { teks: "Mengambil segenggam tanah kering. 'Apa ini gara-gara cara bertaninya yang terlalu dipaksakan kemarin?'", skor: 4 },
                    { teks: "Mengedarkan pandangan ke sekeliling. 'Ini pasti bukan cuma salah tanahnya. Ada siklus ekosistem besar yang terputus di sini.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 3 Aksi 2
                gambar: "https://images.unsplash.com/photo-1592982537447-6f296b0bd5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxvbGQlMjBmYXJtZXJ8ZW58MHx8fHwxNzE1MDA2MDIyfDA&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Berjalan lebih jauh, kamu melihat dua lahan percontohan yang bersebelahan. Satu memakai cara lama yang lambat tapi alami, satu lagi disiram bahan kimiawi pekat demi mengejar target panen kilat.",
                opsi: [
                    { teks: "Mengangguk ke arah lahan kimia. 'Biar bagaimanapun, yang penting cepat panen supaya modal muter.'", skor: 1 },
                    { teks: "Fokus ke lahan kimia. 'Ujung-ujungnya kan hasil akhirnya yang dihitung pasar.'", skor: 2 },
                    { teks: "Melirik keduanya bergantian. 'Nggak bisa dicari titik tengahnya aja? Campuran biar cepat tapi lumayan aman.'", skor: 3 },
                    { teks: "Fokus ke lahan alami. 'Harusnya kita bisa balik ke metode yang lebih ramah lingkungan.'", skor: 4 },
                    { teks: "Menatap lahan alami lekat-lekat. 'Ini bukan cuma soal panen besok pagi, tapi apa tanah ini masih bisa ditanami cucu kita nanti.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 3 Aksi 3
                gambar: "https://images.unsplash.com/photo-1470434767139-71af9eb52924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxuaWdodCUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNjA1OHww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Pemilik lahan akhirnya menawarimu sepetak tanah kosong untuk digarap bulan ini. Kamu harus segera menentukan metode pendekatanmu.",
                opsi: [
                    { teks: "Beli pupuk kimia berdosis tinggi. 'Gue butuh lihat hasil yang instan.'", skor: 1 },
                    { teks: "Ikuti saja cara praktis kebanyakan petani di sini agar tidak repot.", skor: 2 },
                    { teks: "Mencampur cara kimia dengan sedikit kompos. 'Cari jalan aman aja.'", skor: 3 },
                    { teks: "Merancang jadwal metode organik yang berkelanjutan, meski butuh kesabaran ekstra.", skor: 4 },
                    { teks: "Memprioritaskan perbaikan ekosistem tanah jangka panjang, meskipun itu berarti menunda masa panen pertamamu.", skor: 5 }
                ]
            }
        ],
        transisi: {
            gambarTransisi: "https://images.unsplash.com/photo-1505934333218-8feea099bbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxqb3VybmFsfGVufDB8fHx8MTcxNTAwNjA5MXww&ixlib=rb-4.0.3&q=80&w=800",
            rendah: "Bagimu saat ini, alam adalah alat produksi. Fokus utamanya adalah bagaimana tanah ini bisa bertahan dan memberikan hasil yang nyata hari ini.",
            sedang: "Kamu berdiri di persimpangan, mulai melihat hubungan samar antara ambisi manusia dan kelelahan alam.",
            tinggi: "Kamu tidak lagi melihat sepetak tanah, melainkan sesuatu yang jauh lebih besar: sebuah sistem ekologi yang saling bernapas, dan kamu memilih berdiri sebagai penjaganya."
        }
    },
    {
        babak: 4,
        variabel: "X4",
        tipeKalkulasi: "rata-rata",
        judul: "Pencarian Jatidiri",
        pembuka: "Setelah beberapa waktu mengamati, kamu mulai melihat pola. Masalah di lapangan ternyata bukan sekadar keluhan kosong. Kadang… itu adalah sebuah celah.",
        aksi: [
            {
                // NANTI GANTI URL INI DENGAN RENDER BLENDER-MU (Babak 4 Aksi 1)
                gambar: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHw0fHxtdWRkeSUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNTk3Mnww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Sore itu di sebuah kafe urban yang ramai, kamu melihat menu 'Healthy Bowl' seharga puluhan ribu menggunakan sayuran impor. Padahal, kamu tahu persis petani lokal membuang sayur kualitas serupa kemarin karena tidak laku.",
                opsi: [
                    { teks: "Lanjut meminum kopimu. 'Ya udah, hukum pasarnya memang begitu.'", skor: 1 },
                    { teks: "Menggeleng pelan. 'Sayang banget sih, tapi mau gimana lagi.'", skor: 2 },
                    { teks: "Memperhatikan piring pesanan orang lain. 'Menarik juga ya gap harganya bisa sejauh ini.'", skor: 3 },
                    { teks: "Duduk tegak. 'Gila, ini peluang. Harusnya sayur lokal kita bisa masuk ke pasar premium.'", skor: 4 },
                    { teks: "Mengeluarkan ponsel dengan antusias. 'Gue harus bangun sistem buat ngejembatanin ketimpangan ini.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 4 Aksi 2
                gambar: "https://images.unsplash.com/photo-1592982537447-6f296b0bd5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxvbGQlMjBmYXJtZXJ8ZW58MHx8fHwxNzE1MDA2MDIyfDA&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Kamu menceritakan kegelisahan itu ke temanmu di seberang meja. Dia menanggapi santai, 'Kalau menurut lo petani lokal bisa tembus kafe ini, ya coba aja lo yang mulai jembatanin.'",
                opsi: [
                    { teks: "Tertawa sumbang. 'Ah ribet. Nggak segampang itu.'", skor: 1 },
                    { teks: "Bersandar ke kursi. 'Nanti aja deh, gue belum kepikiran.'", skor: 2 },
                    { teks: "Mengangguk pelan. 'Boleh juga ide lo, tapi gue pikir-pikir dulu.'", skor: 3 },
                    { teks: "Menyesap kopi cepat-cepat. 'Mungkin gue bisa mulai pitching kecil-kecilan ke satu kafe dulu.'", skor: 4 },
                    { teks: "Menatap temanmu tajam. 'Lo mau join nggak? Gue mau eksekusi idenya mulai besok.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 4 Aksi 3
                gambar: "https://images.unsplash.com/photo-1470434767139-71af9eb52924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxuaWdodCUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNjA1OHww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Malam harinya di kamar, ide-ide liar mulai berdesakan di kepalamu. Kamu membuka buku catatan kosong di atas meja kerjamu.",
                opsi: [
                    { teks: "Menatapnya sebentar, lalu menutupnya lagi. 'Nggak usah ngadi-ngadi deh gue.'", skor: 1 },
                    { teks: "Menulis satu ide singkat, lalu menyimpannya untuk entah kapan.", skor: 2 },
                    { teks: "Mencoret-coret ide kasarnya, mengisi halaman dengan wacana.", skor: 3 },
                    { teks: "Mulai membuat mind-map, merancang rencana bisnis dan target market.", skor: 4 },
                    { teks: "Membuka laptop, langsung mem-breakdown langkah operasional paling konkret yang harus dilakukan esok pagi.", skor: 5 }
                ]
            }
        ],
        transisi: {
            gambarTransisi: "https://images.unsplash.com/photo-1505934333218-8feea099bbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxqb3VybmFsfGVufDB8fHx8MTcxNTAwNjA5MXww&ixlib=rb-4.0.3&q=80&w=800",
            rendah: "Peluang emas lewat begitu saja di depan matamu. Kamu melihatnya, namun beban untuk mengejarnya terasa terlalu berat.",
            sedang: "Percikan itu mulai ada. Sebuah ketertarikan mulai tumbuh, meski belum cukup kuat untuk memaksamu berlari menembus ketidakpastian.",
            tinggi: "Di balik krisis rantai pasok, insting kreatormu menyala terang. Kamu melihat kemungkinan, dan yang terpenting: kamu bukan tipe orang yang berhenti hanya pada sekadar wacana."
        }
    },
    {
        babak: 5,
        variabel: "X5",
        tipeKalkulasi: "rata-rata",
        judul: "Suara di Dalam Dirimu",
        pembuka: "Ide perombakan rantai pasokmu rupanya diam-diam menyebar. Kini, di sebuah ruangan kecil milik komunitas, belasan orang duduk menunggumu dengan raut wajah penuh harap.",
        aksi: [
            {
                // NANTI GANTI URL INI DENGAN RENDER BLENDER-MU (Babak 5 Aksi 1)
                gambar: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHw0fHxtdWRkeSUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNTk3Mnww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Salah satu perwakilan komunitas menepuk pundakmu. 'Gimana kalau kamu aja yang presentasi dan pegang kendali proyek percobaan ini minggu depan?'",
                opsi: [
                    { teks: "Mundur selangkah, mengangkat tangan. 'Waduh, langsung nolak deh gue. Takut banget gagal.'", skor: 1 },
                    { teks: "Menggigit bibir cemas. 'Mau sih... tapi deg-degan banget, takut mengecewakan.'", skor: 2 },
                    { teks: "Tersenyum gugup. 'Coba aja deh, sambil belajar pelan-pelan.'", skor: 3 },
                    { teks: "Mengangguk mantap. 'Oke, gue cukup yakin bisa handle ini.'", skor: 4 },
                    { teks: "Menjabat tangannya erat. 'Siap! Ini momen yang gue tunggu buat nunjukin bukti.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 5 Aksi 2
                gambar: "https://images.unsplash.com/photo-1592982537447-6f296b0bd5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxvbGQlMjBmYXJtZXJ8ZW58MHx8fHwxNzE1MDA2MDIyfDA&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Satu minggu berlalu cepat. Kini kamu berdiri di depan, ditatap oleh audiens yang hening menunggu kata pertamamu. Saat kamu mulai berbicara...",
                opsi: [
                    { teks: "Suaramu terdengar bergetar dan sangat pelan.", skor: 1 },
                    { teks: "Kamu membaca teks dengan terbata-bata, nyaris tanpa melihat ke audiens.", skor: 2 },
                    { teks: "Kamu mengatur napas, mulai berbicara lumayan lancar walau masih terasa kaku.", skor: 3 },
                    { teks: "Posturmu tegak, kamu menjelaskan dengan artikulasi jelas dan sangat percaya diri.", skor: 4 },
                    { teks: "Kamu tersenyum lebar, bergerak luwes menguasai ruangan, dan benar-benar menikmati sorotan itu.", skor: 5 }
                ]
            },
            {
                // Gambar Babak 5 Aksi 3
                gambar: "https://images.unsplash.com/photo-1470434767139-71af9eb52924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxuaWdodCUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNjA1OHww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Presentasi selesai, suara tepuk tangan menggema meriah di ruangan. Saat mereka menatap kagum ke arahmu, suara di dalam kepalamu berbisik:
",
                opsi: [
                    { teks: "'Gila, kapok gue. Ini panggung bukan buat gue.'", skor: 1 },
                    { teks: "'Masih banyak kurangnya, gue jadi ngerasa nggak pantes dipuji gitu.'", skor: 2 },
                    { teks: "'Not bad lah... lumayan buat pemula kayak gue.'", skor: 3 },
                    { teks: "'Bisa banget ini, tinggal dikembangin dikit lagi eksekusinya.'", skor: 4 },
                    { teks: "'Gue berhasil memukau mereka. Ini baru langkah pemanasan.''", skor: 5 }
                ]
            }
        ],
        transisi: {
            gambarTransisi: "https://images.unsplash.com/photo-1505934333218-8feea099bbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxqb3VybmFsfGVufDB8fHx8MTcxNTAwNjA5MXww&ixlib=rb-4.0.3&q=80&w=800",
            rendah: "Kamu masih sering mempertanyakan suaramu sendiri, bahkan di saat dunia siap untuk mendengarkan. Zona nyaman mengunci langkahmu rapat-rapat.",
            sedang: "Kamu memberanikan diri mengambil langkah pertama keluar dari bayang-bayang, meski langkah itu masih terasa gamang.",
            tinggi: "Kepercayaan dirimu menyala bagai nyala suar di tengah kegelapan. Kamu meyakini satu hal penting: kamu punya kapasitas yang sangat cukup untuk memimpin perubahan ini."
        }
    },
    {
        babak: 6,
        variabel: "X6",
        tipeKalkulasi: "dominan",
        judul: "Ritme yang Kamu Pilih",
        pembuka: "Proyek impianmu akhirnya berjalan. Hari-harimu kini memiliki ritme yang baru. Pagi di kebun, merawat tanah dan berteman dengan embun; siang di depan layar laptop, mengolah data panen, menyusun strategi distribusi, dan merapikan barisan angka.",
        aksi: [
            {
                // NANTI GANTI URL INI DENGAN RENDER BLENDER-MU (Babak 6 Aksi 1)
                //gambar: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHw0fHxtdWRkeSUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNTk3Mnww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Suatu sore di teras basecamp, mentormu menyodorkan segelas kopi dan bertanya santai, 'Kalau kamu punya kendali penuh atas proyek ini, kamu mau lebih banyak menghabiskan waktu di mana?'",
                opsi: [
                    { teks: "Menatap layar laptop yang menyala. 'Menyendiri di ruangan yang tenang, Pak. Menyusun pola dan strategi tanpa gangguan.'", skor: 1 },
                    { teks: "Memandang hamparan kebun di kejauhan. 'Turun ke tanah berlumpur, Pak. Cari tahu masalahnya langsung pakai tangan sendiri.'", skor: 2 },
                    { teks: "Tersenyum santai. 'Gantian aja, Pak. Pagi berkeringat di lapangan, sorenya rapiin data sambil ngopi di kafe.'", skor: 3 }
                ]
            },
            {
                // Gambar Babak 6 Aksi 2
                //gambar: "https://images.unsplash.com/photo-1592982537447-6f296b0bd5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxvbGQlMjBmYXJtZXJ8ZW58MHx8fHwxNzE1MDA2MDIyfDA&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Keesokan harinya, dua masalah muncul bersamaan. Laporan data logistik bulan lalu berantakan dan butuh dianalisis ulang, sementara pipa irigasi di sektor utara tiba-tiba bocor. Kamu hanya bisa menangani satu hal lebih dulu.",
                opsi: [
                    { teks: "Membuka spreadsheet. Memilih tenggelam dalam baris data yang rumit namun sepenuhnya bisa kamu kontrol dari meja.", skor: 1 },
                    { teks: "Mengambil kotak perkakas. Berlari ke sektor utara, membiarkan tanganmu kotor memperbaiki pipa di bawah terik matahari.", skor: 2 },
                    { teks: "Membawa tabletmu ke lapangan. Mengecek pipa sebentar untuk memandu tim, lalu duduk di bawah pohon untuk membalas email darurat.", skor: 3 }
                ]
            },
            {
                // Gambar Babak 6 Aksi 3
                //gambar: "https://images.unsplash.com/photo-1470434767139-71af9eb52924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxuaWdodCUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNjA1OHww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Malam beranjak larut. Pekerjaan hari itu akhirnya selesai. Sambil merebahkan tubuh yang kelelahan di kasur, kamu merenungkan hari yang baru saja berlalu.",
                opsi: [
                    { teks: "'Gue bener-bener butuh stabilitas ruangan yang rapi biar otak gue bisa kerja maksimal.'", skor: 1 },
                    { teks: "'Lelah fisik hari ini memuaskan banget. Gue ngerasa bener-bener 'hidup' kalau lagi di lapangan.''", skor: 2 },
                    { teks: "'Hari yang asyik. Gue gampang bosen kalau disuruh milih salah satu, mending dinamis gini.'", skor: 3 }
                ]
            }
        ],
        transisi: {
            //gambarTransisi: "https://images.unsplash.com/photo-1505934333218-8feea099bbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxqb3VybmFsfGVufDB8fHx8MTcxNTAwNjA5MXww&ixlib=rb-4.0.3&q=80&w=800",
            rendah: "Kamu menemukan kedamaian dalam ruang yang bisa kamu kendalikan. Bagimu, perubahan besar selalu dimulai dari perencanaan yang presisi di balik layar.",
            sedang: "Kamu adalah denyut nadi lapangan. Kamu tidak bisa dipisahkan dari tanah, matahari, dan pekerjaan nyata yang membuat tanganmu kotor.",
            tinggi: "Kamu hidup di antara dua dunia. Kemampuan adaptasimu adalah senjata utamamu, kamu bisa sama tajamnya, baik di ruang rapat maupun di tengah kebun berlumpur."
        }
    },
    {
        babak: 7,
        variabel: "X7",
        tipeKalkulasi: "dominan",
        judul: "Bahasa Tanah yang Baru",
        pembuka: "Hama tiba-tiba menyerang sebagian lahanmu. Daripada memakai pestisida keras yang merusak tanah, kamu memutuskan untuk belajar metode tanam pendamping, sebuah cara menanam dua jenis tanaman berdampingan agar saling melindungi secara alami. Ini hal yang benar-benar baru buatmu.",
        aksi: [
            {
                // NANTI GANTI URL INI DENGAN RENDER BLENDER-MU (Babak 7 Aksi 1)
                //gambar: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHw0fHxtdWRkeSUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNTk3Mnww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Kamu punya waktu seminggu sebelum hama menyebar makin luas. Apa langkah pertamamu untuk memahami metode ini?",
                opsi: [
                    { teks: "Duduk di teras, membuka buku panduan ekologi dan artikel jurnal. 'Gue harus paham dulu sifat biologis setiap tanaman sebelum benihnya masuk ke tanah.'", skor: 1 },
                    { teks: "Langsung membawa cangkul ke bedengan. Menyebar beberapa jenis benih berdampingan. 'Teori kadang beda sama di lapangan. Mending gue tanam dulu, nanti kelihatan mana yang cocok.'", skor: 2 },
                    { teks: "Berjalan ke saung desa sebelah, membawa kopi, dan duduk bersama petani-petani lokal. 'Pak, kalau sawi biasanya akur ditanam bareng apa ya biar ulatnya kabur?'", skor: 3 }
                ]
            },
            {
                // Gambar Babak 7 Aksi 2
               // gambar: "https://images.unsplash.com/photo-1592982537447-6f296b0bd5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxvbGQlMjBmYXJtZXJ8ZW58MHx8fHwxNzE1MDA2MDIyfDA&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Seminggu kemudian, eksperimenmu menunjukkan hasil yang campur aduk. Sebagian lahan aman, tapi di pojok utara, daun-daun masih habis dimakan ulat.",
                opsi: [
                    { teks: "Kembali membuka buku catatan, mengecek ulang teori jarak tanam dan rasio kebutuhan cahaya matahari yang mungkin kamu lewatkan.", skor: 1 },
                    { teks: "Langsung mencabut tanaman yang rusak, memindahkan sisa benih ke posisi baru, dan terus melakukan trial & error sampai ulatnya pergi.", skor: 2 },
                    { teks: "Memetik daun yang berlubang, membawanya ke forum warga atau grup chat petani, lalu bertanya: 'Ada yang pernah ngalamin hama ulat masih tembus padahal udah dikelilingi kemangi?'", skor: 3 }
                ]
            },
            {
                // Gambar Babak 7 Aksi 3
                //gambar: "https://images.unsplash.com/photo-1470434767139-71af9eb52924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxuaWdodCUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNjA1OHww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Setelah berhari-hari berjibaku, lahanmu akhirnya kembali hijau dan bebas dari serangan hama. Menyadari bagaimana kamu memecahkan masalah ini, kamu bergumam:",
                opsi: [
                    { teks: "'Gue beneran nggak bisa jalan kalau nggak paham konsep 'kenapa'-nya dari dasar teori.'", skor: 1 },
                    { teks: "'Pelajaran paling nempel di otak gue ya dari kesalahan langsung waktu tangan gue kotor.'", skor: 2 },
                    { teks: "'Sumpah, ngobrol sama orang yang udah ngalamin langsung itu bener-bener jalan pintas terbaik'", skor: 3 }
                ]
            }
        ],
        transisi: {
            //gambarTransisi: "https://images.unsplash.com/photo-1505934333218-8feea099bbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxqb3VybmFsfGVufDB8fHx8MTcxNTAwNjA5MXww&ixlib=rb-4.0.3&q=80&w=800",
            rendah: "Kamu membangun pemahamanmu seperti merakit blueprint: dari fondasi teori yang rapi, perlahan, hingga kerangka logikamu berdiri tanpa celah.",
            sedang: "Kamu belajar lewat tangan yang bergerak dan keberanian mengambil risiko. Kegagalan langsung di lapangan adalah satu-satunya guru yang kamu dengarkan.",
            tinggi: "Kamu menolak terjebak dalam masalah sendirian. Bagimu, sudut pandang dan pengalaman orang lain adalah perpustakaan paling berharga untuk dijelajahi."
        }
    },
    {
        babak: 8,
        variabel: "X8",
        tipeKalkulasi: "rata-rata",
        judul: "Kebutuhan Otonomi Menurutmu",
        pembuka: "Proyekmu mulai menarik perhatian. Sebuah institusi pertanian besar bersedia memberi dukungan dana, namun dengan satu syarat mutlak: kamu harus tunduk pada Prosedur Operasional Standar (SOP) mereka yang tebal, kaku, dan sudah dipakai sejak puluhan tahun lalu.",
        aksi: [
            {
                // NANTI GANTI URL INI DENGAN RENDER BLENDER-MU (Babak 8 Aksi 1)
                //gambar: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHw0fHxtdWRkeSUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNTk3Mnww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Saat rapat perdana, sang koordinator menaruh tumpukan map tebal di depanmu. 'Ini cara yang selalu berhasil di institusi kami. Ikuti saja tanpa perlu banyak bertanya,' ucapnya tegas.",
                opsi: [
                    { teks: "Mengangguk patuh. 'Baik, Pak. Saya rasa lebih aman kalau saya ikuti persis seperti panduan ini.'", skor: 1 },
                    { teks: "Menarik map itu mendekat. 'Oke, gue ikutin dulu aja deh biar proses cairnya gampang.'", skor: 2 },
                    { teks: "Membuka halamannya perlahan. 'Saya pelajari dulu, Pak. Mungkin di lapangan nanti bisa disesuaikan sedikit.'", skor: 3 },
                    { teks: "Mengetuk-ngetuk jari di meja. 'SOP ini bagus, Pak, tapi saya mau modifikasi beberapa poin agar lebih relevan dengan kondisi sekarang.'", skor: 4 },
                    { teks: "Menatap matanya tajam. 'Maaf, Pak. Saya punya visi sendiri, dan diikat oleh aturan lama ini justru akan membunuh inovasi proyek saya.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 8 Aksi 2
               // gambar: "https://images.unsplash.com/photo-1592982537447-6f296b0bd5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxvbGQlMjBmYXJtZXJ8ZW58MHx8fHwxNzE1MDA2MDIyfDA&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Bulan pertama eksekusi dimulai. Di lapangan, cuaca mendadak ekstrem dan jadwal panen terancam mundur. Kondisi ini sama sekali tidak ada di dalam buku panduan SOP institusi tersebut.",
                opsi: [
                    { teks: "Langsung menelepon atasan, menunggu instruksi rinci langkah demi langkah dari mereka.", skor: 1 },
                    { teks: "Sedikit panik, membaca ulang SOP berkali-kali berharap ada celah yang terlewat.", skor: 2 },
                    { teks: "Melakukan penyesuaian kecil di batas aman, lalu buru-buru mengirim laporan darurat.", skor: 3 },
                    { teks: "Mengambil keputusan sendiri di lapangan. Menyusun rencana mitigasi darurat tanpa menunggu persetujuan pusat.", skor: 4 },
                    { teks: "Merombak total seluruh jadwal dan strategi hari itu juga. 'Aturan dibuat untuk situasi normal, sekarang gue yang pegang kendali penuh.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 8 Aksi 3
                //gambar: "https://images.unsplash.com/photo-1470434767139-71af9eb52924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxuaWdodCUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNjA1OHww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Malam harinya, setelah masalah di lapangan berhasil diredam, kamu duduk menatap map SOP tebal itu dan merenung:",
                opsi: [
                    { teks: "'Jujur, gue butuh banget struktur. Kebebasan di saat krisis kayak gini malah bikin gue stres.'", skor: 1 },
                    { teks: "'Punya panduan dari orang yang lebih senior itu penting banget buat gue.'", skor: 2 },
                    { teks: "'Idealnya sih ada panduan umum, tapi tetep dikasih ruang buat napas sedikit.'", skor: 3 },
                    { teks: "'Gue kerja paling maksimal kalau dikasih kepercayaan buat nyelesaiin masalah pakai cara gue sendiri.'", skor: 4 },
                    { teks: "'Kebebasan penuh itu energi gue. Nggak ada yang lebih nyebelin dari mikromanajemen'", skor: 5 }
                ]
            }
        ],
        transisi: {
            //gambarTransisi: "https://images.unsplash.com/photo-1505934333218-8feea099bbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxqb3VybmFsfGVufDB8fHx8MTcxNTAwNjA5MXww&ixlib=rb-4.0.3&q=80&w=800",
            rendah: "Kamu berkembang pesat di dalam pagar struktur yang jelas. Bagimu, peta jalan yang sudah teruji adalah jaminan yang memberimu ketenangan.",
            sedang: "Kamu berdiri di tengah-tengah: tidak sepenuhnya buta terhadap aturan, namun tak juga mau terlalu diatur. Kamu adalah sang pencari titik keseimbangan.",
            tinggi: "Darah pemberontak yang otonom mengalir deras di nadimu. Kamu menolak berjalan di atas jejak sepatu orang lain, memilih menjadi kapten penuh atas kapalmu sendiri."
        }
    },
    {
        babak: 9,
        variabel: "X9",
        tipeKalkulasi: "rata-rata",
        judul: "Langit dan Layar",
        pembuka: "Sebuah paket besar berbentuk koper hitam tiba di basecamp. Isinya adalah hibah berupa agricultural drone berteknologi sensor inframerah dan perangkat Internet of Things (IoT). Tujuannya untuk memantau kesehatan daun dan kelembapan tanah secara otomatis.",
        aksi: [
            {
                // NANTI GANTI URL INI DENGAN RENDER BLENDER-MU (Babak 9 Aksi 1)
                //gambar: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHw0fHxtdWRkeSUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNTk3Mnww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Koper dibuka, menampilkan badan drone kokoh dan deretan sensor sirkuit rumit. Apa reaksi internalmu saat melihat benda ini diletakkan di atas mejamu?",
                opsi: [
                    { teks: "Mengernyitkan dahi. 'Makin ribet aja. Bertani itu soal nyentuh tanah, bukan megang remote.'", skor: 1 },
                    { teks: "Menutup kopernya kembali. 'Disimpen dulu deh, buat sekarang kayaknya belum terlalu butuh.'", skor: 2 },
                    { teks: "Mengamati sensornya dengan rasa penasaran. 'Boleh juga dicoba, asalkan setup-nya nggak bikin pusing.'", skor: 3 },
                    { teks: "Mengeluarkan drone dari koper perlahan. 'Wah, gue harus buru-buru baca manualnya. Pengen banget langsung tes terbang'", skor: 4 },
                    { teks: "Mata berbinar antusias. 'Ini dia kepingan puzzle efisiensi yang selama ini gue cari! Selamat datang di pertanian masa depan.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 9 Aksi 2
                gambar: "https://images.unsplash.com/photo-1592982537447-6f296b0bd5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxvbGQlMjBmYXJtZXJ8ZW58MHx8fHwxNzE1MDA2MDIyfDA&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Saat uji coba pertama, layar kontrol mendadak memunculkan kode error merah. Sinyal sensor tanah di lahan tidak bisa terhubung dengan sistem pusat.",
                opsi: [
                    { teks: "Tertawa sumbang. 'Ah ribet. Nggak segampang itu.'", skor: 1 },
                    { teks: "Bersandar ke kursi. 'Nanti aja deh, gue belum kepikiran.'", skor: 2 },
                    { teks: "Mengangguk pelan. 'Boleh juga ide lo, tapi gue pikir-pikir dulu.'", skor: 3 },
                    { teks: "Menyesap kopi cepat-cepat. 'Mungkin gue bisa mulai pitching kecil-kecilan ke satu kafe dulu.'", skor: 4 },
                    { teks: "Menatap temanmu tajam. 'Lo mau join nggak? Gue mau eksekusi idenya mulai besok.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 9 Aksi 3
                gambar: "https://images.unsplash.com/photo-1470434767139-71af9eb52924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxuaWdodCUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNjA1OHww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Malam harinya di kamar, ide-ide liar mulai berdesakan di kepalamu. Kamu membuka buku catatan kosong di atas meja kerjamu.",
                opsi: [
                    { teks: "Menatapnya sebentar, lalu menutupnya lagi. 'Nggak usah ngadi-ngadi deh gue.'", skor: 1 },
                    { teks: "Menulis satu ide singkat, lalu menyimpannya untuk entah kapan.", skor: 2 },
                    { teks: "Mencoret-coret ide kasarnya, mengisi halaman dengan wacana.", skor: 3 },
                    { teks: "Mulai membuat mind-map, merancang rencana bisnis dan target market.", skor: 4 },
                    { teks: "Membuka laptop, langsung mem-breakdown langkah operasional paling konkret yang harus dilakukan esok pagi.", skor: 5 }
                ]
            }
        ],
        transisi: {
            gambarTransisi: "https://images.unsplash.com/photo-1505934333218-8feea099bbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxqb3VybmFsfGVufDB8fHx8MTcxNTAwNjA5MXww&ixlib=rb-4.0.3&q=80&w=800",
            rendah: "Peluang emas lewat begitu saja di depan matamu. Kamu melihatnya, namun beban untuk mengejarnya terasa terlalu berat.",
            sedang: "Percikan itu mulai ada. Sebuah ketertarikan mulai tumbuh, meski belum cukup kuat untuk memaksamu berlari menembus ketidakpastian.",
            tinggi: "Di balik krisis rantai pasok, insting kreatormu menyala terang. Kamu melihat kemungkinan, dan yang terpenting: kamu bukan tipe orang yang berhenti hanya pada sekadar wacana."
        }
    },
    {
        babak: 10,
        variabel: "X10",
        tipeKalkulasi: "rata-rata",
        judul: "Pencarian Jatidiri",
        pembuka: "Setelah beberapa waktu mengamati, kamu mulai melihat pola. Masalah di lapangan ternyata bukan sekadar keluhan kosong. Kadang… itu adalah sebuah celah.",
        aksi: [
            {
                // NANTI GANTI URL INI DENGAN RENDER BLENDER-MU (Babak 10 Aksi 1)
                gambar: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHw0fHxtdWRkeSUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNTk3Mnww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Sore itu di sebuah kafe urban yang ramai, kamu melihat menu "Healthy Bowl" seharga puluhan ribu menggunakan sayuran impor. Padahal, kamu tahu persis petani lokal membuang sayur kualitas serupa kemarin karena tidak laku.",
                opsi: [
                    { teks: "Lanjut meminum kopimu. 'Ya udah, hukum pasarnya memang begitu.'", skor: 1 },
                    { teks: "Menggeleng pelan. 'Sayang banget sih, tapi mau gimana lagi.'", skor: 2 },
                    { teks: "Memperhatikan piring pesanan orang lain. 'Menarik juga ya gap harganya bisa sejauh ini.'", skor: 3 },
                    { teks: "Duduk tegak. 'Gila, ini peluang. Harusnya sayur lokal kita bisa masuk ke pasar premium.'", skor: 4 },
                    { teks: "Mengeluarkan ponsel dengan antusias. 'Gue harus bangun sistem buat ngejembatanin ketimpangan ini.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 10 Aksi 2
                gambar: "https://images.unsplash.com/photo-1592982537447-6f296b0bd5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxvbGQlMjBmYXJtZXJ8ZW58MHx8fHwxNzE1MDA2MDIyfDA&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Kamu menceritakan kegelisahan itu ke temanmu di seberang meja. Dia menanggapi santai, 'Kalau menurut lo petani lokal bisa tembus kafe ini, ya coba aja lo yang mulai jembatanin.'",
                opsi: [
                    { teks: "Tertawa sumbang. 'Ah ribet. Nggak segampang itu.'", skor: 1 },
                    { teks: "Bersandar ke kursi. 'Nanti aja deh, gue belum kepikiran.'", skor: 2 },
                    { teks: "Mengangguk pelan. 'Boleh juga ide lo, tapi gue pikir-pikir dulu.'", skor: 3 },
                    { teks: "Menyesap kopi cepat-cepat. 'Mungkin gue bisa mulai pitching kecil-kecilan ke satu kafe dulu.'", skor: 4 },
                    { teks: "Menatap temanmu tajam. 'Lo mau join nggak? Gue mau eksekusi idenya mulai besok.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 10 Aksi 3
                gambar: "https://images.unsplash.com/photo-1470434767139-71af9eb52924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxuaWdodCUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNjA1OHww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Malam harinya di kamar, ide-ide liar mulai berdesakan di kepalamu. Kamu membuka buku catatan kosong di atas meja kerjamu.",
                opsi: [
                    { teks: "Menatapnya sebentar, lalu menutupnya lagi. 'Nggak usah ngadi-ngadi deh gue.'", skor: 1 },
                    { teks: "Menulis satu ide singkat, lalu menyimpannya untuk entah kapan.", skor: 2 },
                    { teks: "Mencoret-coret ide kasarnya, mengisi halaman dengan wacana.", skor: 3 },
                    { teks: "Mulai membuat mind-map, merancang rencana bisnis dan target market.", skor: 4 },
                    { teks: "Membuka laptop, langsung mem-breakdown langkah operasional paling konkret yang harus dilakukan esok pagi.", skor: 5 }
                ]
            }
        ],
        transisi: {
            gambarTransisi: "https://images.unsplash.com/photo-1505934333218-8feea099bbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxqb3VybmFsfGVufDB8fHx8MTcxNTAwNjA5MXww&ixlib=rb-4.0.3&q=80&w=800",
            rendah: "Peluang emas lewat begitu saja di depan matamu. Kamu melihatnya, namun beban untuk mengejarnya terasa terlalu berat.",
            sedang: "Percikan itu mulai ada. Sebuah ketertarikan mulai tumbuh, meski belum cukup kuat untuk memaksamu berlari menembus ketidakpastian.",
            tinggi: "Di balik krisis rantai pasok, insting kreatormu menyala terang. Kamu melihat kemungkinan, dan yang terpenting: kamu bukan tipe orang yang berhenti hanya pada sekadar wacana."
        }
    },
    {
        babak: 11,
        variabel: "X11",
        tipeKalkulasi: "rata-rata",
        judul: "Pencarian Jatidiri",
        pembuka: "Setelah beberapa waktu mengamati, kamu mulai melihat pola. Masalah di lapangan ternyata bukan sekadar keluhan kosong. Kadang… itu adalah sebuah celah.",
        aksi: [
            {
                // NANTI GANTI URL INI DENGAN RENDER BLENDER-MU (Babak 11 Aksi 1)
                gambar: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHw0fHxtdWRkeSUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNTk3Mnww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Sore itu di sebuah kafe urban yang ramai, kamu melihat menu "Healthy Bowl" seharga puluhan ribu menggunakan sayuran impor. Padahal, kamu tahu persis petani lokal membuang sayur kualitas serupa kemarin karena tidak laku.",
                opsi: [
                    { teks: "Lanjut meminum kopimu. 'Ya udah, hukum pasarnya memang begitu.'", skor: 1 },
                    { teks: "Menggeleng pelan. 'Sayang banget sih, tapi mau gimana lagi.'", skor: 2 },
                    { teks: "Memperhatikan piring pesanan orang lain. 'Menarik juga ya gap harganya bisa sejauh ini.'", skor: 3 },
                    { teks: "Duduk tegak. 'Gila, ini peluang. Harusnya sayur lokal kita bisa masuk ke pasar premium.'", skor: 4 },
                    { teks: "Mengeluarkan ponsel dengan antusias. 'Gue harus bangun sistem buat ngejembatanin ketimpangan ini.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 11 Aksi 2
                gambar: "https://images.unsplash.com/photo-1592982537447-6f296b0bd5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwzfHxvbGQlMjBmYXJtZXJ8ZW58MHx8fHwxNzE1MDA2MDIyfDA&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Kamu menceritakan kegelisahan itu ke temanmu di seberang meja. Dia menanggapi santai, 'Kalau menurut lo petani lokal bisa tembus kafe ini, ya coba aja lo yang mulai jembatanin.'",
                opsi: [
                    { teks: "Tertawa sumbang. 'Ah ribet. Nggak segampang itu.'", skor: 1 },
                    { teks: "Bersandar ke kursi. 'Nanti aja deh, gue belum kepikiran.'", skor: 2 },
                    { teks: "Mengangguk pelan. 'Boleh juga ide lo, tapi gue pikir-pikir dulu.'", skor: 3 },
                    { teks: "Menyesap kopi cepat-cepat. 'Mungkin gue bisa mulai pitching kecil-kecilan ke satu kafe dulu.'", skor: 4 },
                    { teks: "Menatap temanmu tajam. 'Lo mau join nggak? Gue mau eksekusi idenya mulai besok.'", skor: 5 }
                ]
            },
            {
                // Gambar Babak 11 Aksi 3
                gambar: "https://images.unsplash.com/photo-1470434767139-71af9eb52924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxuaWdodCUyMGZpZWxkfGVufDB8fHx8MTcxNTAwNjA1OHww&ixlib=rb-4.0.3&q=80&w=800",
                teksAksi: "Malam harinya di kamar, ide-ide liar mulai berdesakan di kepalamu. Kamu membuka buku catatan kosong di atas meja kerjamu.",
                opsi: [
                    { teks: "Menatapnya sebentar, lalu menutupnya lagi. 'Nggak usah ngadi-ngadi deh gue.'", skor: 1 },
                    { teks: "Menulis satu ide singkat, lalu menyimpannya untuk entah kapan.", skor: 2 },
                    { teks: "Mencoret-coret ide kasarnya, mengisi halaman dengan wacana.", skor: 3 },
                    { teks: "Mulai membuat mind-map, merancang rencana bisnis dan target market.", skor: 4 },
                    { teks: "Membuka laptop, langsung mem-breakdown langkah operasional paling konkret yang harus dilakukan esok pagi.", skor: 5 }
                ]
            }
        ],
        transisi: {
            gambarTransisi: "https://images.unsplash.com/photo-1505934333218-8feea099bbfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwMjJ8MHwxfHNlYXJjaHwyfHxqb3VybmFsfGVufDB8fHx8MTcxNTAwNjA5MXww&ixlib=rb-4.0.3&q=80&w=800",
            rendah: "Peluang emas lewat begitu saja di depan matamu. Kamu melihatnya, namun beban untuk mengejarnya terasa terlalu berat.",
            sedang: "Percikan itu mulai ada. Sebuah ketertarikan mulai tumbuh, meski belum cukup kuat untuk memaksamu berlari menembus ketidakpastian.",
            tinggi: "Di balik krisis rantai pasok, insting kreatormu menyala terang. Kamu melihat kemungkinan, dan yang terpenting: kamu bukan tipe orang yang berhenti hanya pada sekadar wacana."
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
        // AMBIL DATA BABAK AKTIF
        let babakAktif = ceritaPertanian[indexBabakSaatIni];
        let nilaiAkhir = 0;
        let teksTransisi = "";

        // CEK TIPE KALKULASINYA
        if (babakAktif.tipeKalkulasi === "dominan") {
            // 1. Logika Cari Dominan (Modus) untuk 3 Pilihan
            let hitungKemunculan = {};
            let palingSeringMuncul = skorSementara[0];
            let maxHitung = 0;

            skorSementara.forEach(nilai => {
                hitungKemunculan[nilai] = (hitungKemunculan[nilai] || 0) + 1;
                if (hitungKemunculan[nilai] > maxHitung) {
                    maxHitung = hitungKemunculan[nilai];
                    palingSeringMuncul = nilai;
                }
            });

            nilaiAkhir = palingSeringMuncul; // Hasilnya pasti 1 (A), 2 (B), atau 3 (C)

            // Tentukan teks transisi Babak 6 & 7
            if (nilaiAkhir === 1) teksTransisi = babakAktif.transisi.opsiA;
            else if (nilaiAkhir === 2) teksTransisi = babakAktif.transisi.opsiB;
            else teksTransisi = babakAktif.transisi.opsiC;

        } else {
            // 2. Logika Cari Rata-rata untuk 5 Pilihan
            nilaiAkhir = (skorSementara[0] + skorSementara[1] + skorSementara[2]) / 3;

            // Tentukan teks transisi skala 1-5
            if (nilaiAkhir < 2.5) teksTransisi = babakAktif.transisi.rendah;
            else if (nilaiAkhir <= 3.5) teksTransisi = babakAktif.transisi.sedang;
            else teksTransisi = babakAktif.transisi.tinggi;
        }

        // SIMPAN NILAI DAN TAMPILKAN LAYAR
        dataVariabel[babakAktif.variabel] = nilaiAkhir;
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
// ==========================================
// DATA 5 HASIL AKHIR KARAKTER
// ==========================================
const profilKarakter = {
    "THE SYSTEMIC AGRIPRENEUR": {
        gelar: "✨ THE SYSTEMIC AGRIPRENEUR ✨",
        teks: "Dunia pertanian sangat membutuhkan inovator sepertimu untuk memotong jalur tengkulak dan menyejahterakan petani. Kamu melihat alam bukan sekadar petak sawah, tapi sebuah sistem raksasa yang saling terhubung.",
        gambar: "https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    "THE COMMUNITY ECO-MOBILIZER": {
        gelar: "✨ THE COMMUNITY ECO-MOBILIZER ✨",
        teks: "Kekuatan terbesarmu bukanlah pada alat yang kamu pegang, tapi pada orang-orang yang kamu satukan. Teruslah menjadi nyala api yang menggerakkan akar rumput untuk peduli pada pangan lokal.",
        gambar: "https://images.unsplash.com/photo-1529156069898-49953eb1b5e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    "THE AG-TECH INNOVATOR": {
        gelar: "✨ THE AG-TECH INNOVATOR ✨",
        teks: "Kamu membawa masa depan ke atas hamparan tanah. Kamu percaya bahwa efisiensi dan presisi adalah kunci agar kita bisa bertani tanpa harus terus-menerus merusak lahan yang ada.",
        gambar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    "THE AGROECOLOGY CHAMPION": {
        gelar: "✨ THE AGROECOLOGY CHAMPION ✨",
        teks: "Bumi berbicara, dan kamu mau mendengarnya. Kesabaranmu merawat tanah hari ini dengan organik dan permakultur adalah alasan mengapa generasi berikutnya masih bisa makan dengan layak.",
        gambar: "https://images.unsplash.com/photo-1595841696650-6e42b262a66e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    "THE AGRARIAN STRATEGIST": {
        gelar: "✨ THE AGRARIAN STRATEGIST ✨",
        teks: "Setiap pergerakan besar butuh otak strategis. Kamu membangun fondasi yang presisi, logis, dan tanpa celah. Peta jalanmu memastikan industri ini tidak berjalan ke arah jurang kehancuran.",
        gambar: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
};

// ==========================================
// FUNGSI GONG (KALKULASI HASIL AKHIR)
// ==========================================
function lanjutKeBabakBerikutnya() {
    skorSementara = [];
    indexAksiSaatIni = 0;
    indexBabakSaatIni++;

    // Jika masih ada babak tersisa, lanjut pertanyaannya
    if (indexBabakSaatIni < ceritaPertanian.length) {
        renderPertanyaan();
    } else {
        // SEMUA BABAK SELESAI -> JALANKAN LOGIKA AI
        let X = dataVariabel; // Mengambil data skor user (X1 - X11)
        let hasilAkhir = "";

        // --- Simulasi Logika Decision Tree ---
        // (Ini logika contoh berbasis prioritas trait tertinggi. 
        // Nanti sesuaikan persis dengan output text dari Google Colab-mu)
        
        if (X.X9 >= 3.5 && X.X1 >= 3.0) {
            // Dominan tertarik inovasi/tech & tahan banting
            hasilAkhir = "THE AG-TECH INNOVATOR";
        } 
        else if (X.X3 >= 3.5 && X.X6 <= 2.5) {
            // Dominan peduli lingkungan & suka kerja di lapangan (skor Outdoor)
            hasilAkhir = "THE AGROECOLOGY CHAMPION";
        } 
        else if (X.X4 >= 3.5 && X.X8 >= 3.5) {
            // Dominan mau bikin bisnis & butuh kebebasan
            hasilAkhir = "THE SYSTEMIC AGRIPRENEUR";
        } 
        else if (X.X2 >= 3.5 && X.X7 >= 3.5) {
            // Dominan peduli sosial masyarakat & belajar dari ngobrol
            hasilAkhir = "THE COMMUNITY ECO-MOBILIZER";
        } 
        else {
            // Sisa kelompok yang dominan analitis, teori, & di balik layar
            hasilAkhir = "THE AGRARIAN STRATEGIST";
        }

        // --- TAMPILKAN KE LAYAR ---
        let profilPemenang = profilKarakter[hasilAkhir]; // Ambil data dari kamus di atas
        
        // Ganti gambar dengan gambar karakter final
        sceneImageUI.src = profilPemenang.gambar; 
        
        judulBabakUI.innerText = "Panggilan Karirmu";
        teksCeritaUI.innerText = "Menghitung data menggunakan algoritma...";
        optionsAreaUI.innerHTML = "";
        
        // Efek delay dramatis 1,5 detik sebelum hasil muncul
        setTimeout(() => {
            teksCeritaUI.innerText = profilPemenang.gelar + "\n\n" + profilPemenang.teks;
        }, 1500);
    }
}

// MULAI
renderPertanyaan();