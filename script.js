// ============================================================
// DATA NASKAH
// ============================================================
const ceritaPertanian = [
  {
    babak: 1,
    variabel: "X1",
    tipeKalkulasi: "rata-rata",
    judul: "Hujan di Bulan yang Salah",
    pembuka: "Langit gelap sejak pagi. Kamu berdiri di pinggir kebun percobaan pertamamu. Hujan datang terlalu cepat. Terlalu deras. Bibit yang kamu tanam seminggu lalu… hilang, hanyut, tak tersisa.",
    gambarBabak: "https://images.unsplash.com/photo-1562058233-065f1fc8ff51?w=1600&q=80",
    aksi: [
      {
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
    gambarBabak: "https://images.unsplash.com/photo-1691039030445-c0a1f3cad6eb?w=1600&q=80",
    aksi: [
      {
        teksAksi: "Di tengah hiruk-pikuk lapak, seseorang di sebelahmu berbisik getir, 'Kasian ya, yang untung mah bukan mereka.'",
        opsi: [
          { teks: "'Ya begitulah hukum pasarnya.'", skor: 1 },
          { teks: "'Kasihan sih... tapi gue juga nggak bisa ngapa-ngapain.'", skor: 2 },
          { teks: "'Aneh juga ya, kok bisa jomplang banget harganya.'", skor: 3 },
          { teks: "'Bentar, kenapa rantai pasoknya bisa seburuk ini?'", skor: 4 },
          { teks: "'Ini nggak adil. Pasti ada sistem yang bisa memotong jalur tengkulak ini.'", skor: 5 }
        ]
      },
      {
        teksAksi: "Matahari mulai naik. Lapak mulai sepi, tapi sayur masih sisa banyak. Seorang petani yang kelelahan menatap tumpukan sawinya dan berkata pasrah: 'Kalau nggak dijual murah sekarang, ya busuk di jalan.'",
        opsi: [
          { teks: "Menunduk, merasa situasi ini terlalu besar untuk kamu campuri.", skor: 1 },
          { teks: "Mengangguk pelan, menyerap realitas pahit ini tanpa berkata-kata.", skor: 2 },
          { teks: "Bergumam setuju, walau otakmu merasa ada yang salah dengan siklus ini.", skor: 3 },
          { teks: "Mendekat dan mulai menanyakan ke mana biasanya sisa sayur ini dibuang.", skor: 4 },
          { teks: "Otakmu berputar cepat, memikirkan ide produk olahan agar sayur sisa ini tetap punya nilai jual.", skor: 5 }
        ]
      },
      {
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
    gambarBabak: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?w=1600&q=80",
    aksi: [
      {
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
    gambarBabak: "https://images.unsplash.com/photo-1745239853358-5ab62bc08af2?w=1600&q=80",
    aksi: [
      {
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
    gambarBabak: "https://images.unsplash.com/photo-1745239853358-5ab62bc08af2?w=1600&q=80",
    aksi: [
      {
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
        teksAksi: "Presentasi selesai, suara tepuk tangan menggema meriah di ruangan. Saat mereka menatap kagum ke arahmu, suara di dalam kepalamu berbisik:",
        opsi: [
          { teks: "'Gila, kapok gue. Ini panggung bukan buat gue.'", skor: 1 },
          { teks: "'Masih banyak kurangnya, gue jadi ngerasa nggak pantes dipuji gitu.'", skor: 2 },
          { teks: "'Not bad lah... lumayan buat pemula kayak gue.'", skor: 3 },
          { teks: "'Bisa banget ini, tinggal dikembangin dikit lagi eksekusinya.'", skor: 4 },
          { teks: "'Gue berhasil memukau mereka. Ini baru langkah pemanasan.'", skor: 5 }
        ]
      }
    ],
    transisi: {
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
    gambarBabak: "https://images.unsplash.com/photo-1745239853358-5ab62bc08af2?w=1600&q=80",
    aksi: [
      {
        teksAksi: "Suatu sore di teras basecamp, mentormu menyodorkan segelas kopi dan bertanya santai, 'Kalau kamu punya kendali penuh atas proyek ini, kamu mau lebih banyak menghabiskan waktu di mana?'",
        opsi: [
          { teks: "Menatap layar laptop yang menyala. 'Menyendiri di ruangan yang tenang, Pak. Menyusun pola dan strategi tanpa gangguan.'", skor: 1 },
          { teks: "Memandang hamparan kebun di kejauhan. 'Turun ke tanah berlumpur, Pak. Cari tahu masalahnya langsung pakai tangan sendiri.'", skor: 2 },
          { teks: "Tersenyum santai. 'Gantian aja, Pak. Pagi berkeringat di lapangan, sorenya rapiin data sambil ngopi di kafe.'", skor: 3 }
        ]
      },
      {
        teksAksi: "Keesokan harinya, dua masalah muncul bersamaan. Laporan data logistik bulan lalu berantakan dan butuh dianalisis ulang, sementara pipa irigasi di sektor utara tiba-tiba bocor. Kamu hanya bisa menangani satu hal lebih dulu.",
        opsi: [
          { teks: "Membuka spreadsheet. Memilih tenggelam dalam baris data yang rumit namun sepenuhnya bisa kamu kontrol dari meja.", skor: 1 },
          { teks: "Mengambil kotak perkakas. Berlari ke sektor utara, membiarkan tanganmu kotor memperbaiki pipa di bawah terik matahari.", skor: 2 },
          { teks: "Membawa tabletmu ke lapangan. Mengecek pipa sebentar untuk memandu tim, lalu duduk di bawah pohon untuk membalas email darurat.", skor: 3 }
        ]
      },
      {
        teksAksi: "Malam beranjak larut. Pekerjaan hari itu akhirnya selesai. Sambil merebahkan tubuh yang kelelahan di kasur, kamu merenungkan hari yang baru saja berlalu.",
        opsi: [
          { teks: "'Gue bener-bener butuh stabilitas ruangan yang rapi biar otak gue bisa kerja maksimal.'", skor: 1 },
          { teks: "'Lelah fisik hari ini memuaskan banget. Gue ngerasa bener-bener 'hidup' kalau lagi di lapangan.'", skor: 2 },
          { teks: "'Hari yang asyik. Gue gampang bosen kalau disuruh milih salah satu, mending dinamis gini.'", skor: 3 }
        ]
      }
    ],
    transisi: {
      opsiA: "Kamu menemukan kedamaian dalam ruang yang bisa kamu kendalikan. Bagimu, perubahan besar selalu dimulai dari perencanaan yang presisi di balik layar.",
      opsiB: "Kamu adalah denyut nadi lapangan. Kamu tidak bisa dipisahkan dari tanah, matahari, dan pekerjaan nyata yang membuat tanganmu kotor.",
      opsiC: "Kamu hidup di antara dua dunia. Kemampuan adaptasimu adalah senjata utamamu, kamu bisa sama tajamnya, baik di ruang rapat maupun di tengah kebun berlumpur."
    }
  },
  {
    babak: 7,
    variabel: "X7",
    tipeKalkulasi: "dominan",
    judul: "Bahasa Tanah yang Baru",
    pembuka: "Hama tiba-tiba menyerang sebagian lahanmu. Daripada memakai pestisida keras yang merusak tanah, kamu memutuskan untuk belajar metode tanam pendamping, sebuah cara menanam dua jenis tanaman berdampingan agar saling melindungi secara alami. Ini hal yang benar-benar baru buatmu.",
    gambarBabak: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?w=1600&q=80",
    aksi: [
      {
        teksAksi: "Kamu punya waktu seminggu sebelum hama menyebar makin luas. Apa langkah pertamamu untuk memahami metode ini?",
        opsi: [
          { teks: "Duduk di teras, membuka buku panduan ekologi dan artikel jurnal. 'Gue harus paham dulu sifat biologis setiap tanaman sebelum benihnya masuk ke tanah.'", skor: 1 },
          { teks: "Langsung membawa cangkul ke bedengan. Menyebar beberapa jenis benih berdampingan. 'Teori kadang beda sama di lapangan. Mending gue tanam dulu, nanti kelihatan mana yang cocok.'", skor: 2 },
          { teks: "Berjalan ke saung desa sebelah, membawa kopi, dan duduk bersama petani-petani lokal. 'Pak, kalau sawi biasanya akur ditanam bareng apa ya biar ulatnya kabur?'", skor: 3 }
        ]
      },
      {
        teksAksi: "Seminggu kemudian, eksperimenmu menunjukkan hasil yang campur aduk. Sebagian lahan aman, tapi di pojok utara, daun-daun masih habis dimakan ulat.",
        opsi: [
          { teks: "Kembali membuka buku catatan, mengecek ulang teori jarak tanam dan rasio kebutuhan cahaya matahari yang mungkin kamu lewatkan.", skor: 1 },
          { teks: "Langsung mencabut tanaman yang rusak, memindahkan sisa benih ke posisi baru, dan terus melakukan trial & error sampai ulatnya pergi.", skor: 2 },
          { teks: "Memetik daun yang berlubang, membawanya ke forum warga atau grup chat petani, lalu bertanya tentang pengalaman mereka.", skor: 3 }
        ]
      },
      {
        teksAksi: "Setelah berhari-hari berjibaku, lahanmu akhirnya kembali hijau dan bebas dari serangan hama. Menyadari bagaimana kamu memecahkan masalah ini, kamu bergumam:",
        opsi: [
          { teks: "'Gue beneran nggak bisa jalan kalau nggak paham konsep 'kenapa'-nya dari dasar teori.'", skor: 1 },
          { teks: "'Pelajaran paling nempel di otak gue ya dari kesalahan langsung waktu tangan gue kotor.'", skor: 2 },
          { teks: "'Sumpah, ngobrol sama orang yang udah ngalamin langsung itu bener-bener jalan pintas terbaik.'", skor: 3 }
        ]
      }
    ],
    transisi: {
      opsiA: "Kamu membangun pemahamanmu seperti merakit blueprint: dari fondasi teori yang rapi, perlahan, hingga kerangka logikamu berdiri tanpa celah.",
      opsiB: "Kamu belajar lewat tangan yang bergerak dan keberanian mengambil risiko. Kegagalan langsung di lapangan adalah satu-satunya guru yang kamu dengarkan.",
      opsiC: "Kamu menolak terjebak dalam masalah sendirian. Bagimu, sudut pandang dan pengalaman orang lain adalah perpustakaan paling berharga untuk dijelajahi."
    }
  },
  {
    babak: 8,
    variabel: "X8",
    tipeKalkulasi: "rata-rata",
    judul: "Kebutuhan Otonomi Menurutmu",
    pembuka: "Proyekmu mulai menarik perhatian. Sebuah institusi pertanian besar bersedia memberi dukungan dana, namun dengan satu syarat mutlak: kamu harus tunduk pada Prosedur Operasional Standar (SOP) mereka yang tebal, kaku, dan sudah dipakai sejak puluhan tahun lalu.",
    gambarBabak: "https://images.unsplash.com/photo-1562058233-065f1fc8ff51?w=1600&q=80",
    aksi: [
      {
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
        teksAksi: "Malam harinya, setelah masalah di lapangan berhasil diredam, kamu duduk menatap map SOP tebal itu dan merenung:",
        opsi: [
          { teks: "'Jujur, gue butuh banget struktur. Kebebasan di saat krisis kayak gini malah bikin gue stres.'", skor: 1 },
          { teks: "'Punya panduan dari orang yang lebih senior itu penting banget buat gue.'", skor: 2 },
          { teks: "'Idealnya sih ada panduan umum, tapi tetep dikasih ruang buat napas sedikit.'", skor: 3 },
          { teks: "'Gue kerja paling maksimal kalau dikasih kepercayaan buat nyelesaiin masalah pakai cara gue sendiri.'", skor: 4 },
          { teks: "'Kebebasan penuh itu energi gue. Nggak ada yang lebih nyebelin dari mikromanajemen.'", skor: 5 }
        ]
      }
    ],
    transisi: {
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
    gambarBabak: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?w=1600&q=80",
    aksi: [
      {
        teksAksi: "Koper dibuka, menampilkan badan drone kokoh dan deretan sensor sirkuit rumit. Apa reaksi internalmu saat melihat benda ini diletakkan di atas mejamu?",
        opsi: [
          { teks: "Mengernyitkan dahi. 'Makin ribet aja. Bertani itu soal nyentuh tanah, bukan megang remote.'", skor: 1 },
          { teks: "Menutup kopernya kembali. 'Disimpen dulu deh, buat sekarang kayaknya belum terlalu butuh.'", skor: 2 },
          { teks: "Mengamati sensornya dengan rasa penasaran. 'Boleh juga dicoba, asalkan setup-nya nggak bikin pusing.'", skor: 3 },
          { teks: "Mengeluarkan drone dari koper perlahan. 'Wah, gue harus buru-buru baca manualnya. Pengen banget langsung tes terbang.'", skor: 4 },
          { teks: "Mata berbinar antusias. 'Ini dia kepingan puzzle efisiensi yang selama ini gue cari! Selamat datang di pertanian masa depan.'", skor: 5 }
        ]
      },
      {
        teksAksi: "Saat uji coba pertama, layar kontrol mendadak memunculkan kode error merah. Sinyal sensor tanah di lahan tidak bisa terhubung dengan sistem pusat.",
        opsi: [
          { teks: "Langsung mematikan sistemnya. 'Udah gue tebak, ujung-ujungnya alat ginian cuma bikin kerjaan makin lama.'", skor: 1 },
          { teks: "Mencoba me-restart sebentar, tapi saat error-nya muncul lagi, kamu memutuskan meninggalkannya.", skor: 2 },
          { teks: "Meminta tolong teknisi via chat, sambil sesekali mencoba mengutak-atik kabelnya perlahan.", skor: 3 },
          { teks: "Menelusuri log error di layar, mencoba beberapa kalibrasi frekuensi sampai datanya berhasil masuk.", skor: 4 },
          { teks: "Membongkar sebagian casing sensor, sangat tertantang mencari akar masalah konfigurasi jaringannya sampai benar-benar terselesaikan hari itu juga.", skor: 5 }
        ]
      },
      {
        teksAksi: "Setelah semuanya akhirnya berjalan, melihat hamparan tanahmu kini tervisualisasi menjadi data digital di layar tablet, kamu bergumam:",
        opsi: [
          { teks: "'Teknologi begini malah bikin interaksi batin petani dan tanahnya jadi hilang.'", skor: 1 },
          { teks: "'Keren sih buat gaya-gayaan, tapi belum kerasa esensial banget.'", skor: 2 },
          { teks: "'Lumayan lah buat ngebantu memantau kalau fisik lagi capek keliling kebun.'", skor: 3 },
          { teks: "'Ini penting banget. Data ini yang bakal bikin kita nggak selalu bergantung sama tebak-tebakan cuaca.'", skor: 4 },
          { teks: "'Ini baru langkah awal. Kalau mau ekosistem kita scale-up tanpa merusak alam, presisi teknologi adalah senjata utamanya.'", skor: 5 }
        ]
      }
    ],
    transisi: {
      rendah: "Kamu sangat mempercayai apa yang sudah terbukti. Bagimu, tidak ada layar canggih yang bisa menggantikan insting dan sentuhan langsung tangan manusia pada tanah.",
      sedang: "Kamu membuka diri pada pembaruan, namun tetap memfilter dengan hati-hati mana yang sekadar tren dan mana yang benar-benar kamu butuhkan.",
      tinggi: "Kamu tidak takut pada hal baru; kamu memeluk masa depan. Kamu melihat teknologi bukan sebagai pengganti petani, melainkan pendorong untuk evolusi agrikultur."
    }
  },
  {
    babak: 10,
    variabel: "X10",
    tipeKalkulasi: "rata-rata",
    judul: "Menghubungkan Titik",
    pembuka: "Malam semakin larut di basecamp. Kamu berdiri sendirian di depan papan tulis besar yang penuh dengan coretan spidol, sticky notes, kuitansi pupuk, dan jurnal cuaca harianmu. Awalnya, semua masalah panen bulan ini terasa seperti kejadian buruk yang datang beruntun. Namun, menatap papan itu berlama-lama, matamu mulai menangkap sesuatu.",
    gambarBabak: "https://images.unsplash.com/photo-1745239853358-5ab62bc08af2?w=1600&q=80",
    aksi: [
      {
        teksAksi: "Tiba-tiba, semuanya masuk akal. Kuitansi pupuk yang membengkak, pola hujan yang aneh bulan ini, dan sayur yang membusuk di gudang... semuanya ternyata saling tarik-menarik. Apa reaksi pertamamu saat melihat kerumitan ini?",
        opsi: [
          { teks: "Memijat pelipis. 'Terlalu banyak faktor. Mending gue fokus aja ke cara nanam yang bener, sisanya di luar kendali gue.'", skor: 1 },
          { teks: "Menghela napas panjang. 'Ribet banget. Tapi ya minimal gue sadar, kalau cuaca lagi parah, modal awal pasti bakal membengkak.'", skor: 2 },
          { teks: "Melipat tangan di dada. 'Satu masalah ternyata nular ke masalah lain. Ini nggak bisa diselesaiin satu-satu.'", skor: 3 },
          { teks: "Mengambil spidol, mulai menarik garis antar sticky notes. 'Tunggu, kalau distribusi di gudang kita percepat, kerugian pupuk ini sebenarnya bisa ketutup.'", skor: 4 },
          { teks: "Menatap papan tulis dengan mata berbinar. 'Ini bukan sekadar kebun. Ini ekosistem besar! Cara kita nanam, kondisi alam, dan kecepatan pasar... semuanya satu napas. Gue nemu polanya.'", skor: 5 }
        ]
      },
      {
        teksAksi: "Keesokan harinya, timmu berdebat panas. Laba proyek bulan ini menipis tajam. Sebagian besar anggota tim mengusulkan solusi cepat dan radikal: pangkas dana perawatan tanah dan kurangi upah harian pekerja.",
        opsi: [
          { teks: "Mengangguk setuju. 'Logis sih. Kita memang butuh potong pengeluaran secepatnya buat napas bulan ini.'", skor: 1 },
          { teks: "Ikut memikirkan opsi pemotongan lain. 'Ya udah, coba kurangin aja dulu pengeluaran yang nggak terlalu mendesak bulan ini.'", skor: 2 },
          { teks: "Menyela pelan. 'Tapi kalau upah pekerja dipotong, moral mereka turun, jangan-jangan hasil panen malah makin telat?'", skor: 3 },
          { teks: "Mengetuk meja. 'Bentar, masalah kita bukan di biaya operasional, tapi di sistem irigasi yang boros air. Kalau itu yang dibenerin, laba kita otomatis ketolong.'", skor: 4 },
          { teks: "Berdiri menatap tim. 'Motong biaya sekarang itu cuma obat penahan sakit. Akar masalahnya ada di strategi pemasaran kita yang terlalu lambat. Kita harus rombak cara jualnya hari ini juga.'", skor: 5 }
        ]
      },
      {
        teksAksi: "Setelah perdebatan panjang itu selesai, kamu menulis satu kesimpulan di buku catatan pribadimu:",
        opsi: [
          { teks: "'Intinya pertanian itu simpel: lu rawat tanamannya dengan baik, lu bakal dapet hasil yang baik.'", skor: 1 },
          { teks: "'Banyak banget faktor luar yang bikin pusing. Keberhasilan di sini kadang ada faktor hoki-hokiannya.'", skor: 2 },
          { teks: "'Ternyata sistem ini lumayan rumit. Gue harus hati-hati banget milih prioritas.'", skor: 3 },
          { teks: "'Setiap daun yang telat dipanen di kebun ini ternyata punya efek domino sampai ke harga jual akhir.'", skor: 4 },
          { teks: "'Nggak ada satu pun masalah yang berdiri sendiri di sini. Benerin satu elemen berarti gue harus siap ngatur ulang seluruh sistemnya.'", skor: 5 }
        ]
      }
    ],
    transisi: {
      rendah: "Kamu melihat dunia dari jendela yang kecil dan aman. Bagimu, memecah masalah menjadi potongan-potongan sederhana adalah cara terbaik agar pikiranmu tidak tenggelam dalam kerumitan.",
      sedang: "Titik-titik itu mulai terhubung di kepalamu. Kamu menyadari ada jaring laba-laba yang menyelimuti sistem ini, meski kamu masih mencari cara untuk mengurainya.",
      tinggi: "Pikiranmu melampaui batas petak tanah. Kamu bukan lagi sekadar penanam; kamu adalah arsitek sistem yang melihat bagaimana rintik hujan di ladang bisa mengubah angka-angka di pasar."
    }
  },
  {
    babak: 11,
    variabel: "X11",
    tipeKalkulasi: "rata-rata",
    judul: "Titik Akhir",
    pembuka: "Malam puncak sebelum panen raya pertamamu. Handphone berdering berturut-turut — ada video dari pintu air di hulu: tanggul jebol karena hujan deras, dan debit air cokelat sedang meluap turun ke arah lahan kalian. Kepanikan pecah seketika. Tanpa sadar, di tengah kekacauan itu, mata beberapa anggota tim menatap ke arahmu.",
    gambarBabak: "https://images.unsplash.com/photo-1562058233-065f1fc8ff51?w=1600&q=80",
    aksi: [
      {
        teksAksi: "Air keruh mulai menggenangi pekarangan basecamp hingga semata kaki. Suara aliran air dari parit terdengar makin deras. Apa reaksi pertamamu saat kepanikan meledak di depan matamu?",
        opsi: [
          { teks: "Mengecek handphone dengan panik. 'Aduh, mana nih yang lain? Cepet dong di grup ada yang ngasih instruksi harus ngungsiin apa dulu!'", skor: 1 },
          { teks: "Fokus pada dirimu sendiri. Bergegas mencabut saklar listrik dan mengangkat barang-barangmu ke atas meja tanpa banyak bicara.", skor: 2 },
          { teks: "Menahan lengan teman di sebelahmu yang lari kebingungan. 'Tenang, tenang dulu! Jangan lari-lari ntar kepeleset lumpur!'", skor: 3 },
          { teks: "Berteriak cukup keras untuk memecah kebisingan. 'Semuanya kumpul di sini bentar! Kita harus gerak bareng pindahin barang ke tempat tinggi!'", skor: 4 },
          { teks: "Melompat ke atas teras yang lebih tinggi agar terlihat. 'Bagi tiga kelompok sekarang! Lo amanin mesin pompa, lo angkat karung pupuk, sisanya ikut gue ambil karung pasir buat nahan air di pintu kebun!'", skor: 5 }
        ]
      },
      {
        teksAksi: "Lumpur mulai masuk merendam area pinggir kebun. Di pintu masuk irigasi utama, dua rekanmu malah berdebat keras saling menyalahkan tentang cara menyusun karung pasir penahan air.",
        opsi: [
          { teks: "Mundur selangkah, membiarkan mereka menyelesaikan debatnya sendiri karena kamu tidak mau ikut campur.", skor: 1 },
          { teks: "Menunggu perdebatan mereka mereda sambil memegangi salah satu karung pasir sekuat tenaga menahan arus.", skor: 2 },
          { teks: "Menyela dengan nada memohon. 'Udah dong debatnya, ini airnya keburu masuk merendam sayur, tolong tumpuk bareng-bareng!'", skor: 3 },
          { teks: "Mendekat dan memberi instruksi cepat. 'Tumpuk menyilang dari sudut yang sana aja, yang bawah dipadetin dulu pakai tanah!'", skor: 4 },
          { teks: "Menerobos masuk genangan, merebut karung dari mereka. 'Nggak ada waktu buat debat! Lo pegang sisi kiri, lo injak karung yang ini biar nggak kegeser arus. Tumpuk sekarang!'", skor: 5 }
        ]
      },
      {
        teksAksi: "Pagi harinya, genangan air mulai surut. Kalian basah kuyup, kotor, dan kelelahan. Tapi sebagian besar panen berhasil diselamatkan. Seorang anggota tim menepuk pundakmu dengan napas lega.",
        opsi: [
          { teks: "'Syukurlah kita semua selamat. Untung semalam ada yang inisiatif ngasih komando buat nahan air.'", skor: 1 },
          { teks: "'Kerja keras semalaman yang gila. Tapi seenggaknya tugas gue selesai dan alat-alat aman.'", skor: 2 },
          { teks: "'Tim ini solid banget. Besok-besok kita harus evaluasi bareng posisi barang biar kalau ada banjir lagi nggak se-panik tadi.'", skor: 3 },
          { teks: "'Kerja bagus semuanya. Besok gue bakal susun ulang jalur drainase darurat biar air dari hulu nggak langsung nabrak kebun kita.'", skor: 4 },
          { teks: "Menepuk baliknya dengan mantap. 'Kalian luar biasa semalam. Semua kerugian bibit yang terendam, gue yang rekap dan tanggung jawab ke pusat. Kalian bersihin badan dan istirahat sekarang.'", skor: 5 }
        ]
      }
    ],
    transisi: {
      rendah: "Cahaya pagi akhirnya benar-benar memecah kegelapan. Badai telah usai. Kamu berdiri, membersihkan sisa lumpur di tanganmu, dan menatap jauh ke cakrawala.",
      sedang: "Cahaya pagi akhirnya benar-benar memecah kegelapan. Badai telah usai. Kamu berdiri, membersihkan sisa lumpur di tanganmu, dan menatap jauh ke cakrawala.",
      tinggi: "Cahaya pagi akhirnya benar-benar memecah kegelapan. Badai telah usai. Kamu berdiri, membersihkan sisa lumpur di tanganmu, dan menatap jauh ke cakrawala."
    }
  }
];

// ==========================================
// DATA HASIL AKHIR (Aset Kartumu)
// ==========================================
const profilKarakter = {
    "THE AGRARIAN STRATEGIST": {
        gambarDepan: "./assets/strategist_depan.jpg",
        gambarBelakang: "./assets/strategist_belakang.jpg"
    },
    "THE SYSTEMIC AGRIPRENEUR": {
        gambarDepan: "./assets/agripreneur_depan.jpg",
        gambarBelakang: "./assets/agripreneur_belakang.jpg"
    },
    "THE COMMUNITY ECO-MOBILIZER": {
        gambarDepan: "./assets/mobilizer_depan.jpg",
        gambarBelakang: "./assets/mobilizer_belakang.jpg"
    },
    "THE AG-TECH INNOVATOR": {
        gambarDepan: "./assets/innovator_depan.jpg",
        gambarBelakang: "./assets/innovator_belakang.jpg"
    },
    "THE AGROECOLOGY CHAMPION": {
        gambarDepan: "./assets/champion_depan.jpg",
        gambarBelakang: "./assets/champion_belakang.jpg"
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

        // --- Logika Decision Tree ---
        if (X.X9 >= 3.5 && X.X1 >= 3.0) {
            hasilAkhir = "THE AG-TECH INNOVATOR";
        } 
        else if (X.X3 >= 3.5 && X.X6 <= 2.5) {
            hasilAkhir = "THE AGROECOLOGY CHAMPION";
        } 
        else if (X.X4 >= 3.5 && X.X8 >= 3.5) {
            hasilAkhir = "THE SYSTEMIC AGRIPRENEUR";
        } 
        else if (X.X2 >= 3.5 && X.X7 >= 3.5) {
            hasilAkhir = "THE COMMUNITY ECO-MOBILIZER";
        } 
        else {
            hasilAkhir = "THE AGRARIAN STRATEGIST";
        }

        // --- Render UI Hasil Akhir dengan Kartu 3D ---
        setTimeout(() => {
            let p = profilKarakter[hasilAkhir];
    
            teksCeritaUI.innerHTML = `
                <div class="hasil-akhir-container">
                    <p class="intro-akhir">Ini adalah kartu personamu...</p>
                    
                    <div class="flip-card" onclick="this.classList.toggle('flipped')">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="${p.gambarDepan}" alt="Bagian Depan Kartu">
                            </div>
                            <div class="flip-card-back">
                                <img src="${p.gambarBelakang}" alt="Bagian Belakang Kartu">
                            </div>
                        </div>
                    </div>
                    
                    <p class="petunjuk-tap">Tap kartu untuk membalik ↺</p>
                </div>
            `;
            
            // Tombol untuk mengulang dari awal
            optionsAreaUI.innerHTML = "<button class='btn-opsi' onclick='location.reload()'>Mulai Lagi ↺</button>";
        }, 1500);
    }
}

// ============================================================
// STATE
// ============================================================
let indexBabakSaatIni = 0;
let indexAksiSaatIni  = 0;
let skorSementara     = [];
let dataVariabel      = { X1:0, X2:0, X3:0, X4:0, X5:0, X6:0, X7:0, X8:0, X9:0, X10:0, X11:0 };

// ============================================================
// DOM REFS
// ============================================================
const splashScreen        = document.getElementById('splash-screen');
const btnMulai            = document.getElementById('btn-mulai');
const gameWrapper         = document.getElementById('game-wrapper');
const judulBabakUI        = document.getElementById('judul-babak');
const teksCeritaUI        = document.getElementById('teks-cerita');
const optionsAreaUI       = document.getElementById('options-area');
const sceneImageEl        = document.getElementById('scene-image');
const chapterNumberEl     = document.getElementById('chapter-number');
const progressBarFill     = document.getElementById('progress-bar-fill');
const chapterEyebrowEl    = document.getElementById('chapter-eyebrow');
const contentFadeEl       = document.getElementById('content-fade');
const transitionOverlay   = document.getElementById('transition-overlay');
const transitionTextEl    = document.getElementById('transition-text');
const btnLanjut           = document.getElementById('btn-lanjut');
const resultScreen        = document.getElementById('result-screen');
const personalityCard     = document.getElementById('personality-card');
const cardFrontBg         = document.getElementById('card-front-bg');
const cardGelarFront      = document.getElementById('card-gelar-front');
const cardQuoteFront      = document.getElementById('card-quote-front');
const cardGelarBack       = document.getElementById('card-gelar-back');
const cardProfilEl        = document.getElementById('card-profil');
const cardKarirEl         = document.getElementById('card-karir');
const cardSaranEl         = document.getElementById('card-saran');

// ============================================================
// SPLASH → GAME
// ============================================================
btnMulai.addEventListener('click', () => {
  splashScreen.classList.add('fade-out');
  setTimeout(() => {
    splashScreen.classList.add('hidden');
    gameWrapper.classList.remove('hidden');
    renderPertanyaan();
  }, 600);
});

// ============================================================
// IMAGE TRANSITION HELPER
// ============================================================
function changeSceneImage(newUrl) {
  sceneImageEl.classList.add('fading');
  setTimeout(() => {
    sceneImageEl.style.backgroundImage = `url('${newUrl}')`;
    sceneImageEl.classList.remove('fading');
  }, 350);
}

// ============================================================
// CONTENT FADE HELPER
// ============================================================
function fadeContent(callback) {
  contentFadeEl.classList.add('fade-out-content');
  setTimeout(() => {
    callback();
    contentFadeEl.classList.remove('fade-out-content');
  }, 400);
}

// ============================================================
// UPDATE PROGRESS
// ============================================================
function updateProgress() {
  const total = ceritaPertanian.length;
  const pct   = ((indexBabakSaatIni + 1) / total) * 100;
  progressBarFill.style.width = pct + '%';
  chapterNumberEl.textContent = ceritaPertanian[indexBabakSaatIni].babak;
}

// ============================================================
// RENDER PERTANYAAN
// ============================================================
function renderPertanyaan() {
  const babakAktif = ceritaPertanian[indexBabakSaatIni];
  const aksiAktif  = babakAktif.aksi[indexAksiSaatIni];

  updateProgress();

  // Image only changes once per chapter (on its first action)
  if (indexAksiSaatIni === 0) {
    changeSceneImage(babakAktif.gambarBabak);
  }

  fadeContent(() => {
    // Eyebrow: show chapter title only on first action
    if (indexAksiSaatIni === 0) {
      chapterEyebrowEl.textContent = `Babak ${babakAktif.babak}`;
      judulBabakUI.textContent     = babakAktif.judul;
      judulBabakUI.style.display   = '';
      chapterEyebrowEl.style.display = '';
      teksCeritaUI.textContent     = babakAktif.pembuka + '\n\n' + aksiAktif.teksAksi;
    } else {
      chapterEyebrowEl.style.display = 'none';
      judulBabakUI.style.display     = 'none';
      teksCeritaUI.textContent       = aksiAktif.teksAksi;
    }

    // Render options
    optionsAreaUI.innerHTML = '';
    aksiAktif.opsi.forEach(pilihan => {
      const btn = document.createElement('button');
      btn.textContent = pilihan.teks;
      btn.className   = 'btn-opsi';
      btn.addEventListener('click', () => prosesPilihan(pilihan.skor, btn));
      optionsAreaUI.appendChild(btn);
    });
  });
}

// ============================================================
// PROSES PILIHAN
// ============================================================
function prosesPilihan(skor, btnEl) {
  // Brief visual feedback
  btnEl.classList.add('selected');
  // Disable all buttons immediately
  optionsAreaUI.querySelectorAll('.btn-opsi').forEach(b => {
    b.style.pointerEvents = 'none';
    b.style.opacity = '0.5';
  });
  btnEl.style.opacity = '1';

  setTimeout(() => {
    skorSementara.push(skor);

    if (indexAksiSaatIni < babakAktif().aksi.length - 1) {
      indexAksiSaatIni++;
      renderPertanyaan();
    } else {
      hitungDanTransisi();
    }
  }, 350);
}

function babakAktif() {
  return ceritaPertanian[indexBabakSaatIni];
}

// ============================================================
// HITUNG SKOR & TAMPILKAN TRANSISI
// ============================================================
function hitungDanTransisi() {
  const babak = babakAktif();
  let nilaiAkhir = 0;
  let teksTransisi = '';

  if (babak.tipeKalkulasi === 'dominan') {
    // Modus — find most frequent score
    const hitungKemunculan = {};
    let palingSeringMuncul = skorSementara[0];
    let maxHitung = 0;

    skorSementara.forEach(nilai => {
      hitungKemunculan[nilai] = (hitungKemunculan[nilai] || 0) + 1;
      if (hitungKemunculan[nilai] > maxHitung) {
        maxHitung = hitungKemunculan[nilai];
        palingSeringMuncul = nilai;
      }
    });

    nilaiAkhir = palingSeringMuncul;

    if (nilaiAkhir === 1)      teksTransisi = babak.transisi.opsiA;
    else if (nilaiAkhir === 2) teksTransisi = babak.transisi.opsiB;
    else                       teksTransisi = babak.transisi.opsiC;

  } else {
    // Rata-rata
    const jumlah = skorSementara.reduce((acc, v) => acc + v, 0);
    nilaiAkhir   = jumlah / skorSementara.length;

    if (nilaiAkhir < 2.5)      teksTransisi = babak.transisi.rendah;
    else if (nilaiAkhir <= 3.5) teksTransisi = babak.transisi.sedang;
    else                        teksTransisi = babak.transisi.tinggi;
  }

  dataVariabel[babak.variabel] = nilaiAkhir;
  tampilkanTransisi(teksTransisi);
}

// ============================================================
// TAMPILKAN LAYAR TRANSISI
// ============================================================
function tampilkanTransisi(teks) {
  transitionTextEl.textContent = teks;
  transitionOverlay.classList.remove('hidden');
  // Force reflow then add visible
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      transitionOverlay.classList.add('visible');
    });
  });
}

// ============================================================
// LANJUT KE BABAK BERIKUTNYA
// ============================================================
btnLanjut.addEventListener('click', () => {
  transitionOverlay.classList.remove('visible');
  setTimeout(() => {
    transitionOverlay.classList.add('hidden');
    lanjutKeBabakBerikutnya();
  }, 500);
});

function lanjutKeBabakBerikutnya() {
  skorSementara    = [];
  indexAksiSaatIni = 0;
  indexBabakSaatIni++;

  if (indexBabakSaatIni < ceritaPertanian.length) {
    renderPertanyaan();
  } else {
    tampilkanHasilAkhir();
  }
}

// ============================================================
// KALKULASI HASIL AKHIR
// ============================================================
function tampilkanHasilAkhir() {
  const X = dataVariabel;
  let hasilAkhir = '';

  if (X.X9 >= 3.5 && X.X1 >= 3.0) {
    hasilAkhir = 'THE AG-TECH INNOVATOR';
  } else if (X.X3 >= 3.5 && X.X6 <= 2.5) {
    hasilAkhir = 'THE AGROECOLOGY CHAMPION';
  } else if (X.X4 >= 3.5 && X.X8 >= 3.5) {
    hasilAkhir = 'THE SYSTEMIC AGRIPRENEUR';
  } else if (X.X2 >= 3.5 && X.X7 >= 3.5) {
    hasilAkhir = 'THE COMMUNITY ECO-MOBILIZER';
  } else {
    hasilAkhir = 'THE AGRARIAN STRATEGIST';
  }

  const p = profilKarakter[hasilAkhir];

  // Populate card
  cardFrontBg.style.backgroundImage = `url('${p.gambar}')`;
  cardGelarFront.innerHTML = `${p.gelar}<br><small style="font-weight:400;font-size:0.75em;color:var(--gold);font-family:var(--font-mono);letter-spacing:0.1em;">${p.subgelar}</small>`;
  cardQuoteFront.textContent = `"${p.quote}"`;
  cardGelarBack.textContent  = `${p.gelar} — ${p.subgelar}`;
  cardProfilEl.textContent   = p.profil;
  cardKarirEl.textContent    = p.karir;
  cardSaranEl.textContent    = p.saran;

  // Show result screen
  resultScreen.classList.remove('hidden');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      resultScreen.classList.add('visible');
    });
  });
}

// ============================================================
// CARD FLIP ON CLICK / TAP
// ============================================================
personalityCard.addEventListener('click', () => {
  personalityCard.classList.toggle('is-flipped');
});

// ============================================================
// START
// ============================================================
// (Game starts on splash button click — nothing auto-fires here)