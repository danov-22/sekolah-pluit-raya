/* ===========================
   SEKOLAH ISLAM PLUIT RAYA
   Main Script + Language
   =========================== */

// ================================
// TRANSLATIONS
// ================================
const translations = {
  id: {
    /* NAVBAR */
    "nav-beranda":     "Beranda",
    "nav-profil":      "Profil",
    "nav-jenjang":     "Jenjang Sekolah",
    "nav-penerimaan":  "Penerimaan Siswa",
    "nav-informasi":   "Informasi",
    "nav-guru":        "Guru & Staf",
    "nav-kontak":      "Kontak",
    /* Dropdown Profil */
    "drop-visimisi":   "Visi & Misi",
    "drop-sejarah":    "Sejarah",
    "drop-dakwah":     "Dakwah",
    /* Dropdown Jenjang */
    "drop-sdit":       "SDIT",
    "drop-smpit":      "SMPIT",
    "drop-smk":        "SMK",
    "drop-madrasah":   "Madrasah Diniyah",
    "drop-kursus":     "Kursus Bahasa Inggris",
    "drop-osis":       "OSIS",
    "drop-pembinaan":  "Pembinaan",
    /* Dropdown Informasi */
    "drop-kurikulum":  "Kurikulum",
    "drop-ekstra":     "Ekstrakurikuler",
    "drop-fasilitas":  "Fasilitas",
    "drop-kehidupan":  "Kehidupan Siswa",
    "drop-prestasi":   "Prestasi",

    /* HERO */
    "hero-subtitle":   "Membentuk Generasi Islami yang Berilmu, Berakhlak Mulia, dan Berdakwah",
    "btn-daftar":      "Daftar Sekarang",
    "btn-tentang":     "Tentang Kami",

    /* STATS */
    "stat-unit":       "Jenjang Pendidikan",
    "stat-siswa":      "Siswa Aktif",
    "stat-guru":       "Tenaga Pendidik",
    "stat-tahun":      "Tahun Berpengalaman",

    /* HOME – UNIT PENDIDIKAN */
    "sec-tag-unit":    "Jenjang Kami",
    "sec-title-unit":  "Unit Pendidikan",
    "sec-sub-unit":    "Berbagai jenjang pendidikan Islam berkualitas di bawah satu naungan",
    "card-sdit-title": "SDIT",
    "card-sdit-desc":  "Sekolah Dasar Islam Terpadu — pendidikan dasar berbasis nilai-nilai Islam",
    "card-sdit-link":  "Selengkapnya",
    "card-smpit-title":"SMPIT",
    "card-smpit-desc": "Sekolah Menengah Pertama Islam Terpadu — membentuk karakter Islami",
    "card-smpit-link": "Selengkapnya",
    "card-smk-title":  "SMK",
    "card-smk-desc":   "Sekolah Menengah Kejuruan dengan program keahlian unggulan",
    "card-smk-link":   "Selengkapnya",
    "card-md-title":   "Madrasah Diniyah",
    "card-md-desc":    "Pendidikan agama Islam secara mendalam dan komprehensif",
    "card-md-link":    "Selengkapnya",
    "card-kursus-title":"Kursus Bahasa Inggris",
    "card-kursus-desc":"Program kursus bahasa Inggris untuk memperluas wawasan global",
    "card-kursus-link":"Selengkapnya",
    "card-pem-title":  "Pembinaan",
    "card-pem-desc":   "Program pembinaan karakter dan pengembangan diri siswa",
    "card-pem-link":   "Selengkapnya",

    /* HOME – KEUNGGULAN */
    "sec-tag-unggulan":   "Keunggulan Kami",
    "sec-title-unggulan": "Mengapa Memilih Kami?",
    "feat-kurikulum-title":"Kurikulum Terpadu",
    "feat-kurikulum-desc": "Memadukan kurikulum nasional dengan pendidikan agama Islam secara menyeluruh",
    "feat-guru-title":    "Tenaga Pendidik Berkualitas",
    "feat-guru-desc":     "Guru-guru berpengalaman dan berdedikasi dengan latar belakang pendidikan terbaik",
    "feat-prestasi-title":"Prestasi Unggul",
    "feat-prestasi-desc": "Raih berbagai prestasi akademik dan non-akademik di tingkat kota hingga nasional",
    "feat-fasilitas-title":"Fasilitas Lengkap",
    "feat-fasilitas-desc": "Sarana dan prasarana modern yang mendukung kegiatan belajar mengajar",
    "feat-islami-title":  "Lingkungan Islami",
    "feat-islami-desc":   "Suasana belajar yang kondusif, Islami, dan menjunjung akhlak mulia",
    "feat-global-title":  "Wawasan Global",
    "feat-global-desc":   "Membekali siswa dengan kemampuan bahasa asing dan teknologi modern",

    /* HOME – CTA */
    "cta-title":   "Bergabunglah dengan Keluarga Besar Sekolah Islam Pluit Raya",
    "cta-desc":    "Daftarkan putra-putri Anda sekarang dan jadikan mereka generasi Islam yang unggul",
    "btn-cta1":    "Informasi Pendaftaran",
    "btn-cta2":    "Hubungi Kami",

    /* PAGE HEROES */
    "ph-profil-title":    "Profil Sekolah",
    "ph-profil-sub":      "Mengenal Sekolah Islam Pluit Raya lebih dekat",
    "ph-jenjang-title":   "Jenjang Sekolah",
    "ph-jenjang-sub":     "Unit pendidikan Islam terpadu di bawah satu naungan",
    "ph-ppdb-title":      "Penerimaan Peserta Didik Baru",
    "ph-ppdb-sub":        "Bergabunglah bersama kami untuk tahun ajaran baru",
    "ph-info-title":      "Informasi",
    "ph-info-sub":        "Kenali program dan kehidupan sekolah kami lebih dalam",
    "ph-guru-title":      "Guru & Tenaga Kependidikan",
    "ph-guru-sub":        "Pendidik berdedikasi yang siap membimbing generasi terbaik",
    "ph-kontak-title":    "Kontak Kami",
    "ph-kontak-sub":      "Kami siap membantu Anda — jangan ragu untuk menghubungi kami",

    /* PROFIL – tabs */
    "tab-visimisi":  "Visi & Misi",
    "tab-sejarah":   "Sejarah",
    "tab-dakwah":    "Dakwah",
    /* PROFIL – visi misi */
    "profil-tag":    "Tujuan Kami",
    "profil-h2":     "Visi & Misi",
    "visi-title":    "Visi",
    "visi-text":     "Terwujudnya generasi Islam yang berilmu, berakhlak mulia, mandiri, dan mampu berkontribusi nyata bagi masyarakat serta agama Allah SWT.",
    "misi-title":    "Misi",
    "misi-1": "Menyelenggarakan pendidikan Islam terpadu yang berkualitas dan menyenangkan",
    "misi-2": "Membentuk akhlakul karimah melalui pembiasaan nilai-nilai Islam dalam kehidupan sehari-hari",
    "misi-3": "Mengembangkan potensi akademik dan non-akademik setiap peserta didik secara optimal",
    "misi-4": "Menciptakan lingkungan belajar yang Islami, kondusif, dan inovatif",
    "misi-5": "Mempersiapkan generasi yang siap menghadapi tantangan zaman dengan iman yang kokoh",
    "misi-6": "Membangun kemitraan yang erat antara sekolah, orang tua, dan masyarakat",
    /* PROFIL – sejarah */
    "sej-tag":   "Perjalanan Kami",
    "sej-title": "Sejarah Sekolah",
    "sej-y1":    "Awal Berdiri",
    "sej-h1":    "Pendirian Lembaga",
    "sej-p1":    "Sekolah Islam Pluit Raya didirikan atas dasar kebutuhan masyarakat Muslim di kawasan Penjaringan, Jakarta Utara, akan pendidikan Islam berkualitas. Berlokasi di Jalan Jembatan Tiga No. 1, sekolah ini hadir sebagai jawaban atas tantangan zaman.",
    "sej-y2":    "Pengembangan",
    "sej-h2":    "Pertumbuhan Pesat",
    "sej-p2":    "Seiring kepercayaan masyarakat yang terus meningkat, sekolah berkembang membuka berbagai unit pendidikan mulai dari SDIT hingga SMK, serta Madrasah Diniyah untuk memperdalam ilmu agama.",
    "sej-y3":    "Era Modern",
    "sej-h3":    "Modernisasi Pendidikan",
    "sej-p3":    "Sekolah terus berinovasi mengintegrasikan teknologi dalam pembelajaran, membuka program kursus bahasa Inggris, dan mengembangkan kurikulum terpadu yang berpadu antara ilmu umum dan agama.",
    "sej-y4":    "Kini",
    "sej-h4":    "Sekolah Unggulan Jakarta Utara",
    "sej-p4":    "Saat ini Sekolah Islam Pluit Raya telah menjadi salah satu lembaga pendidikan Islam terpercaya di Jakarta Utara, dengan ribuan alumni yang tersebar di berbagai bidang dan penjuru Indonesia.",
    /* PROFIL – dakwah */
    "dak-tag":   "Misi Dakwah",
    "dak-title": "Dakwah & Nilai Islam",
    "dak-sub":   "Sekolah Islam Pluit Raya bukan sekadar lembaga pendidikan, tetapi juga sarana dakwah dalam menegakkan nilai-nilai Islam",
    "dak-c1-title": "Tahfizh Al-Quran",
    "dak-c1-desc":  "Program hafalan Al-Quran terintegrasi dalam kurikulum sekolah, membentuk generasi Qurani.",
    "dak-c2-title": "Pembinaan Ibadah",
    "dak-c2-desc":  "Pembiasaan shalat berjamaah, dzikir pagi-petang, dan amalan sunnah dalam keseharian siswa.",
    "dak-c3-title": "Dakwah Sosial",
    "dak-c3-desc":  "Kegiatan bakti sosial, santunan yatim, dan pemberdayaan masyarakat sekitar sebagai wujud Islam rahmatan lil 'alamin.",

    /* JENJANG – tabs */
    "jtab-sdit":     "SDIT",
    "jtab-smpit":    "SMPIT",
    "jtab-smk":      "SMK",
    "jtab-madrasah": "Madrasah",
    "jtab-kursus":   "Kursus B.Inggris",
    "jtab-osis":     "OSIS",
    "jtab-pembinaan":"Pembinaan",
    /* JENJANG – SDIT */
    "sdit-h2":   "SDIT — Sekolah Dasar Islam Terpadu",
    "sdit-sub":  "Fondasi pendidikan Islam untuk usia 6–12 tahun",
    "sdit-desc": "SDIT Pluit Raya Jakarta menyelenggarakan pendidikan dasar yang mengintegrasikan kurikulum nasional dengan pendidikan Islam secara menyeluruh. Kami menanamkan nilai-nilai tauhid, akhlak mulia, dan kecintaan kepada Al-Quran sejak dini.",
    "sdit-prog": "Keunggulan Program",
    "sdit-f1":   "Tahfizh Al-Quran (hafalan juz 30)",
    "sdit-f2":   "Pembelajaran bilingual (Indonesia & Arab)",
    "sdit-f3":   "Shalat Dhuha dan Dzuhur berjamaah",
    "sdit-f4":   "Pembiasaan akhlak Islami sehari-hari",
    "sdit-f5":   "Ekstrakurikuler beragam",
    "sdit-f6":   "UNBK dan persiapan ke jenjang berikutnya",
    /* JENJANG – SMPIT */
    "smpit-h2":   "SMPIT — Sekolah Menengah Pertama Islam Terpadu",
    "smpit-sub":  "Membentuk karakter Islami untuk usia 12–15 tahun",
    "smpit-desc": "SMPIT Pluit Raya Jakarta hadir sebagai jenjang lanjutan dengan program pendidikan yang memperkuat pondasi akidah, meningkatkan kemampuan akademik, dan mengembangkan potensi diri siswa secara optimal dalam bingkai nilai-nilai Islam.",
    "smpit-prog": "Keunggulan Program",
    "smpit-f1":   "Lanjutan tahfizh Al-Quran",
    "smpit-f2":   "Pembelajaran Bahasa Arab & Inggris intensif",
    "smpit-f3":   "Program Leadership & Character Building",
    "smpit-f4":   "Persiapan UN dan masuk SMA/SMK terbaik",
    "smpit-f5":   "Kegiatan dakwah dan kemasyarakatan",
    "smpit-f6":   "Outing class dan studi banding",
    /* JENJANG – SMK */
    "smk-h2":   "SMK — Sekolah Menengah Kejuruan",
    "smk-sub":  "Pendidikan vokasi berbasis Islam untuk masa depan",
    "smk-desc": "SMK Pluit Raya Jakarta menyiapkan lulusan yang kompeten di bidang kejuruan, berkarakter Islami, dan siap memasuki dunia kerja atau melanjutkan ke perguruan tinggi. Dengan program keahlian unggulan dan pelatihan praktis.",
    "smk-prog": "Program Keahlian",
    "smk-f1":   "Teknologi Informasi & Komunikasi",
    "smk-f2":   "Bisnis & Manajemen",
    "smk-f3":   "Praktek Kerja Industri (PKL)",
    "smk-f4":   "Sertifikasi kompetensi nasional",
    "smk-f5":   "Bimbingan karir dan entrepreneurship",
    "smk-f6":   "Integrasi nilai Islam dalam profesi",
    /* JENJANG – Madrasah */
    "md-h2":   "Madrasah Diniyah",
    "md-sub":  "Pendalaman ilmu agama Islam secara komprehensif",
    "md-desc": "Madrasah Diniyah Pluit Raya menyelenggarakan pendidikan agama Islam secara mendalam, meliputi Al-Quran, Hadits, Fiqih, Akidah, Sejarah Islam, dan Bahasa Arab. Program ini dapat diikuti oleh siswa dari berbagai jenjang.",
    "md-prog": "Mata Pelajaran",
    "md-f1":   "Al-Quran & Tajwid",
    "md-f2":   "Hadits & Ulumul Hadits",
    "md-f3":   "Fiqih Islam",
    "md-f4":   "Akidah & Tauhid",
    "md-f5":   "Bahasa Arab",
    "md-f6":   "Sejarah Islam (Sirah Nabawiyah)",
    /* JENJANG – Kursus */
    "kursus-h2":   "Kursus Bahasa Inggris",
    "kursus-sub":  "Memperluas wawasan global dengan kemampuan bahasa internasional",
    "kursus-desc": "Program Kursus Bahasa Inggris Pluit Raya dirancang untuk meningkatkan kemampuan berbahasa Inggris siswa secara komprehensif — mulai dari kemampuan percakapan sehari-hari hingga persiapan ujian internasional.",
    "kursus-prog": "Program Unggulan",
    "kursus-f1":   "Conversation & Speaking skills",
    "kursus-f2":   "Reading & Writing proficiency",
    "kursus-f3":   "Persiapan TOEFL/IELTS",
    "kursus-f4":   "English for Islamic Studies",
    "kursus-f5":   "Native-like pronunciation training",
    "kursus-f6":   "Sertifikat resmi lembaga",
    /* JENJANG – OSIS */
    "osis-h2":   "OSIS — Organisasi Siswa Intra Sekolah",
    "osis-sub":  "Wadah kepemimpinan dan kreativitas siswa",
    "osis-desc": "OSIS Sekolah Islam Pluit Raya merupakan organisasi siswa yang aktif dalam merencanakan dan melaksanakan kegiatan sekolah, mengembangkan jiwa kepemimpinan, serta menjadi pelopor kegiatan dakwah di lingkungan sekolah.",
    "osis-prog": "Program OSIS",
    "osis-f1":   "Pekan Olahraga & Seni Sekolah",
    "osis-f2":   "Peringatan hari besar Islam (PHBI)",
    "osis-f3":   "Bakti sosial dan santunan yatim",
    "osis-f4":   "Majalah dinding dan media sekolah",
    "osis-f5":   "Latihan kepemimpinan (LDKS)",
    "osis-f6":   "Pekan Perkenalan Sekolah",
    /* JENJANG – Pembinaan */
    "pem-h2":   "Pembinaan Siswa",
    "pem-sub":  "Pengembangan karakter dan potensi diri secara holistik",
    "pem-desc": "Program Pembinaan Siswa dirancang untuk membentuk karakter Islami yang kuat, mengembangkan potensi diri, serta mempersiapkan siswa menghadapi tantangan kehidupan dengan bekal iman, ilmu, dan amal.",
    "pem-prog": "Program Pembinaan",
    "pem-f1":   "Pembinaan akhlak & adab harian",
    "pem-f2":   "Mentoring dan konseling Islami",
    "pem-f3":   "Program parenting & kemitraan orang tua",
    "pem-f4":   "Pembinaan prestasi akademik",
    "pem-f5":   "Pengembangan bakat & minat",
    "pem-f6":   "Pelatihan public speaking & dakwah",

    /* PENERIMAAN */
    "ppdb-banner-title": "Penerimaan Peserta Didik Baru (PPDB)",
    "ppdb-banner-desc":  "Sekolah Islam Pluit Raya membuka pendaftaran untuk seluruh jenjang pendidikan. Segera daftarkan putra-putri Anda!",
    "ppdb-step1-title":  "Pendaftaran",
    "ppdb-step1-desc":   "Isi formulir pendaftaran secara online atau datang langsung ke sekolah. Siapkan dokumen yang diperlukan.",
    "ppdb-step2-title":  "Seleksi & Tes",
    "ppdb-step2-desc":   "Calon siswa mengikuti tes akademik, tes baca Al-Quran, dan wawancara sesuai jenjang yang dipilih.",
    "ppdb-step3-title":  "Pengumuman",
    "ppdb-step3-desc":   "Hasil seleksi diumumkan dan siswa yang diterima melanjutkan proses daftar ulang dan orientasi.",
    "ppdb-req-title":    "Persyaratan Umum",
    "ppdb-r1": "Fotokopi Kartu Keluarga (KK)",
    "ppdb-r2": "Fotokopi Akte Kelahiran",
    "ppdb-r3": "Fotokopi Ijazah / Rapor terakhir",
    "ppdb-r4": "Pas foto 3×4 (4 lembar, background merah)",
    "ppdb-r5": "Surat keterangan sehat dari dokter",
    "ppdb-r6": "Mengisi formulir pendaftaran",
    "ppdb-level-title":  "Jenjang yang Tersedia",
    "ppdb-info-title":   "Informasi Pendaftaran",
    "ppdb-info-desc":    "Untuk informasi lebih lanjut mengenai pendaftaran, silakan hubungi kami:",
    "ppdb-wa-soon":      "WhatsApp (akan segera tersedia)",
    "ppdb-hours":        "Senin – Jumat: 08.00 – 16.00 WIB",
    "btn-ppdb-contact":  "Hubungi Kami Sekarang",

    /* INFORMASI – tabs */
    "itab-kurikulum":  "Kurikulum",
    "itab-ekstra":     "Ekstrakurikuler",
    "itab-fasilitas":  "Fasilitas",
    "itab-kehidupan":  "Kehidupan Siswa",
    "itab-prestasi":   "Prestasi",
    /* INFORMASI – Kurikulum */
    "kur-tag":   "Metode Belajar",
    "kur-title": "Kurikulum Terpadu",
    "kur-sub":   "Memadukan kurikulum nasional (Kemendikbud) dengan kurikulum pendidikan Islam secara harmonis",
    "kur-c1-title": "Kurikulum Nasional",
    "kur-c1-desc":  "Mengikuti kurikulum Merdeka Belajar dari Kemendikbud, memastikan standar pendidikan nasional tercapai dengan baik.",
    "kur-c2-title": "Kurikulum Islam",
    "kur-c2-desc":  "Integrasi Al-Quran, Hadits, Fiqih, Akidah, dan Bahasa Arab dalam setiap aspek pembelajaran.",
    "kur-c3-title": "Teknologi & Digital",
    "kur-c3-desc":  "Pembelajaran berbasis teknologi dengan pemanfaatan media digital yang bijak sesuai nilai Islam.",
    "kur-c4-title": "Pendidikan Karakter",
    "kur-c4-desc":  "Pembentukan karakter Islami melalui pembiasaan, keteladanan, dan program pembinaan terstruktur.",
    /* INFORMASI – Ekstra */
    "eks-tag":   "Pengembangan Bakat",
    "eks-title": "Ekstrakurikuler",
    /* INFORMASI – Fasilitas */
    "fas-tag":   "Sarana & Prasarana",
    "fas-title": "Fasilitas Sekolah",
    "fas-c1-title": "Masjid / Mushalla",
    "fas-c1-desc":  "Tempat ibadah dan kegiatan keagamaan yang nyaman dan representatif",
    "fas-c2-title": "Laboratorium",
    "fas-c2-desc":  "Lab IPA, komputer, dan bahasa yang dilengkapi peralatan modern",
    "fas-c3-title": "Perpustakaan",
    "fas-c3-desc":  "Koleksi buku umum dan Islam yang lengkap untuk mendukung pembelajaran",
    "fas-c4-title": "Lapangan Olahraga",
    "fas-c4-desc":  "Lapangan serbaguna untuk berbagai kegiatan olahraga dan ekstrakurikuler",
    "fas-c5-title": "Kantin Halal",
    "fas-c5-desc":  "Kantin bersih dengan menu halal dan bergizi untuk mendukung kesehatan siswa",
    "fas-c6-title": "Ruang Multimedia",
    "fas-c6-desc":  "Ruang belajar multimedia modern untuk kegiatan presentasi dan pembelajaran digital",
    /* INFORMASI – Kehidupan */
    "keh-tag":   "Aktivitas Harian",
    "keh-title": "Kehidupan Siswa",
    "keh-sub":   "Sehari-hari bersama kami, siswa menjalani rutinitas yang menyeimbangkan ilmu, ibadah, dan kegiatan positif",
    "keh-s1-h":  "Penerimaan Siswa & Pembinaan Pagi",
    "keh-s1-p":  "Siswa disambut guru, melaksanakan dzikir pagi dan muroja'ah Al-Quran bersama",
    "keh-s2-h":  "Kegiatan Belajar Mengajar",
    "keh-s2-p":  "Pembelajaran akademik sesuai kurikulum nasional dan Islam terpadu",
    "keh-s3-h":  "Shalat Dhuha Berjamaah",
    "keh-s3-p":  "Pembiasaan shalat sunnah dhuha yang membentuk kedekatan siswa dengan Allah SWT",
    "keh-s4-h":  "Shalat Dzuhur Berjamaah & Makan Siang",
    "keh-s4-p":  "Shalat berjamaah dilanjutkan istirahat makan siang dengan menu halal",
    "keh-s5-h":  "Lanjutan KBM & Ekstrakurikuler",
    "keh-s5-p":  "Sesi belajar siang dan kegiatan pengembangan bakat minat siswa",
    "keh-s6-h":  "Shalat Ashar & Kepulangan",
    "keh-s6-p":  "Shalat Ashar berjamaah sebelum siswa dijemput pulang",
    /* INFORMASI – Prestasi */
    "pre-tag":   "Kebanggaan Kami",
    "pre-title": "Prestasi Sekolah",
    "pre-sub":   "Berbagai pencapaian membanggakan dari siswa dan sekolah kami",
    "pre-c1-title": "Olimpiade Matematika",
    "pre-c1-desc":  "Siswa kami meraih kejuaraan olimpiade matematika tingkat kota Jakarta",
    "pre-c2-title": "Musabaqah Tilawatil Quran",
    "pre-c2-desc":  "Prestasi luar biasa dalam kompetisi tilawah Al-Quran tingkat kota",
    "pre-c3-title": "Pildacil & Pidato Islam",
    "pre-c3-desc":  "Siswa kami juara dalam lomba pidato dakwah Islam tingkat provinsi",
    "pre-c4-title": "Tahfizh Al-Quran",
    "pre-c4-desc":  "Hafizh muda dari sekolah kami meraih prestasi nasional dalam kompetisi tahfizh",
    "pre-c5-title": "Turnamen Sepak Bola Pelajar",
    "pre-c5-desc":  "Tim sepak bola sekolah juara dalam turnamen pelajar tingkat Jakarta Utara",
    "pre-c6-title": "Lomba Kaligrafi Islam",
    "pre-c6-desc":  "Karya kaligrafi terbaik dari siswa kami meraih penghargaan tingkat provinsi",
    "pre-lv1":   "Juara Tingkat Kota",
    "pre-lv2":   "Juara Tingkat Kota",
    "pre-lv3":   "Juara Tingkat Provinsi",
    "pre-lv4":   "Juara Tingkat Nasional",
    "pre-lv5":   "Juara Tingkat Kota",
    "pre-lv6":   "Juara Tingkat Provinsi",

    /* GURU & STAF */
    "guru-tag":   "Tim Kami",
    "guru-title": "Tenaga Pendidik & Staf",
    "guru-sub":   "Guru-guru kami adalah para profesional berdedikasi dengan latar belakang pendidikan terbaik dan komitmen penuh terhadap nilai-nilai Islam",
    "guru-pimpinan": "Pimpinan Sekolah",
    "guru-kepsdit":  "Kepala Sekolah SDIT",
    "guru-kepsdit-desc": "Bertanggung jawab atas pengelolaan dan pengembangan SDIT Pluit Raya Jakarta",
    "guru-kepsmpit":  "Kepala Sekolah SMPIT",
    "guru-kepsmpit-desc": "Memimpin dan mengembangkan SMPIT Pluit Raya Jakarta menuju keunggulan",
    "guru-kepsmk":  "Kepala Sekolah SMK",
    "guru-kepsmk-desc": "Memimpin SMK Pluit Raya dengan visi pendidikan vokasi Islami berkualitas",
    "guru-mapel":    "Guru Mata Pelajaran",
    "guru-ph-desc":  "Kami memiliki lebih dari 50 tenaga pendidik berpengalaman, bersertifikasi, dan berdedikasi tinggi dalam mendidik generasi Islam yang berkualitas.",
    "guru-stat-label1": "Guru & Staf",
    "guru-stat-label2": "Kualifikasi",
    "guru-stat-label3": "Bersertifikasi",
    "karir-title": "Bergabunglah Bersama Kami",
    "karir-desc":  "Kami membuka kesempatan bagi tenaga pendidik dan kependidikan yang berdedikasi, kompeten, dan memiliki komitmen terhadap nilai-nilai Islam untuk bergabung dalam tim kami.",
    "karir-req-title":  "Kualifikasi Umum:",
    "karir-r1": "Beragama Islam dan berakhlak baik",
    "karir-r2": "Minimal lulusan S1 sesuai bidang",
    "karir-r3": "Memiliki kemampuan mengajar yang baik",
    "karir-r4": "Berpengalaman di bidang pendidikan Islam (diutamakan)",
    "karir-pos-title":  "Posisi Tersedia:",
    "karir-p1": "Guru Mata Pelajaran (semua bidang)",
    "karir-p2": "Guru Al-Quran & Tahfizh",
    "karir-p3": "Staf Administrasi & Tata Usaha",
    "karir-p4": "Pembina Ekstrakurikuler",
    "btn-karir": "Kirim Lamaran",

    /* KONTAK */
    "kontak-info-title":  "Informasi Kontak",
    "kontak-map-title":   "Lokasi Kami",
    "kontak-addr-label":  "Alamat",
    "kontak-phone-label": "Telepon",
    "kontak-email-label": "Email",
    "kontak-wa-label":    "WhatsApp Admin",
    "kontak-wa-soon":     "Segera tersedia — hubungi melalui telepon sementara ini",
    "kontak-jam-title":   "Jam Operasional",
    "kontak-jam-row1-day": "Senin – Jumat",
    "kontak-jam-row2-day": "Sabtu",
    "kontak-jam-row3-day": "Minggu & Hari Libur",
    "kontak-jam-row3-val": "Tutup",
    "kontak-social-title": "Ikuti Kami di Media Sosial",
    "btn-maps": "Buka di Google Maps",

    /* FOOTER */
    "footer-desc":       "Membentuk generasi Islam yang berilmu, berakhlak mulia, dan siap berkontribusi untuk agama dan bangsa.",
    "footer-nav-title":  "Halaman",
    "footer-unit-title": "Unit Pendidikan",
    "footer-contact-title": "Hubungi Kami",
    "footer-nav-beranda":    "Beranda",
    "footer-nav-profil":     "Profil",
    "footer-nav-jenjang":    "Jenjang Sekolah",
    "footer-nav-penerimaan": "Penerimaan Siswa",
    "footer-nav-informasi":  "Informasi",
    "footer-nav-guru":       "Guru & Staf",
    "footer-nav-kontak":     "Kontak",
    "footer-copy": "© 2025 Sekolah Islam Pluit Raya Jakarta. Hak Cipta Dilindungi.",

    /* INFO BOXES (shared) */
    "ib-jam":      "Jam Belajar",
    "ib-kelas":    "Kelas",
    "ib-akred":    "Akreditasi",
    "ib-terakred": "Terakreditasi",
    "ib-peserta":  "Peserta",
    "ib-terbuka":  "Terbuka untuk semua usia",
    "ib-level":    "Level",
    "ib-anggota":  "Anggota",
    "ib-kepen":    "Kepengurusan",
    "ib-1-thn":    "1 tahun periode",
    "ib-jadwal":   "Jadwal",
    "ib-flex":     "Fleksibel, pagi & sore",
    "ib-siswa-sel":"Siswa SMPIT & SMK terpilih",
  },

  en: {
    /* NAVBAR */
    "nav-beranda":     "Home",
    "nav-profil":      "Profile",
    "nav-jenjang":     "School Levels",
    "nav-penerimaan":  "Student Admission",
    "nav-informasi":   "Information",
    "nav-guru":        "Teachers & Staff",
    "nav-kontak":      "Contact",
    /* Dropdown Profil */
    "drop-visimisi":   "Vision & Mission",
    "drop-sejarah":    "History",
    "drop-dakwah":     "Da'wah",
    /* Dropdown Jenjang */
    "drop-sdit":       "SDIT",
    "drop-smpit":      "SMPIT",
    "drop-smk":        "SMK",
    "drop-madrasah":   "Islamic School",
    "drop-kursus":     "English Course",
    "drop-osis":       "Student Council",
    "drop-pembinaan":  "Guidance",
    /* Dropdown Informasi */
    "drop-kurikulum":  "Curriculum",
    "drop-ekstra":     "Extracurricular",
    "drop-fasilitas":  "Facilities",
    "drop-kehidupan":  "Student Life",
    "drop-prestasi":   "Achievements",

    /* HERO */
    "hero-subtitle":   "Shaping Islamic Generations with Knowledge, Noble Character, and Da'wah",
    "btn-daftar":      "Register Now",
    "btn-tentang":     "About Us",

    /* STATS */
    "stat-unit":   "Education Levels",
    "stat-siswa":  "Active Students",
    "stat-guru":   "Educators",
    "stat-tahun":  "Years of Experience",

    /* HOME – UNIT PENDIDIKAN */
    "sec-tag-unit":    "Our Levels",
    "sec-title-unit":  "Education Units",
    "sec-sub-unit":    "Quality Islamic education at every level, all under one roof",
    "card-sdit-title": "SDIT",
    "card-sdit-desc":  "Integrated Islamic Elementary School — foundational education based on Islamic values",
    "card-sdit-link":  "Learn More",
    "card-smpit-title":"SMPIT",
    "card-smpit-desc": "Integrated Islamic Junior High School — building Islamic character",
    "card-smpit-link": "Learn More",
    "card-smk-title":  "SMK",
    "card-smk-desc":   "Vocational High School with excellent skill programs",
    "card-smk-link":   "Learn More",
    "card-md-title":   "Islamic School",
    "card-md-desc":    "In-depth and comprehensive Islamic religious education",
    "card-md-link":    "Learn More",
    "card-kursus-title":"English Course",
    "card-kursus-desc":"English language courses to expand global horizons",
    "card-kursus-link":"Learn More",
    "card-pem-title":  "Guidance",
    "card-pem-desc":   "Character building and personal development programs for students",
    "card-pem-link":   "Learn More",

    /* HOME – KEUNGGULAN */
    "sec-tag-unggulan":    "Our Strengths",
    "sec-title-unggulan":  "Why Choose Us?",
    "feat-kurikulum-title":"Integrated Curriculum",
    "feat-kurikulum-desc": "Combining the national curriculum with comprehensive Islamic education",
    "feat-guru-title":     "Qualified Educators",
    "feat-guru-desc":      "Experienced and dedicated teachers with the best educational backgrounds",
    "feat-prestasi-title": "Outstanding Achievements",
    "feat-prestasi-desc":  "Winning academic and non-academic awards at city and national levels",
    "feat-fasilitas-title":"Complete Facilities",
    "feat-fasilitas-desc": "Modern infrastructure supporting quality teaching and learning",
    "feat-islami-title":   "Islamic Environment",
    "feat-islami-desc":    "A conducive, Islamic learning atmosphere upholding noble character",
    "feat-global-title":   "Global Perspective",
    "feat-global-desc":    "Equipping students with foreign language skills and modern technology",

    /* HOME – CTA */
    "cta-title":   "Join the Big Family of Sekolah Islam Pluit Raya",
    "cta-desc":    "Enroll your children now and shape them into outstanding Muslim generations",
    "btn-cta1":    "Admission Info",
    "btn-cta2":    "Contact Us",

    /* PAGE HEROES */
    "ph-profil-title":    "School Profile",
    "ph-profil-sub":      "Get to know Sekolah Islam Pluit Raya more closely",
    "ph-jenjang-title":   "School Levels",
    "ph-jenjang-sub":     "Integrated Islamic education units under one roof",
    "ph-ppdb-title":      "New Student Admissions",
    "ph-ppdb-sub":        "Join us for the new academic year",
    "ph-info-title":      "Information",
    "ph-info-sub":        "Discover our programs and school life in depth",
    "ph-guru-title":      "Teachers & Educational Staff",
    "ph-guru-sub":        "Dedicated educators ready to guide the next generation",
    "ph-kontak-title":    "Contact Us",
    "ph-kontak-sub":      "We are here to help — don't hesitate to reach out",

    /* PROFIL – tabs */
    "tab-visimisi":  "Vision & Mission",
    "tab-sejarah":   "History",
    "tab-dakwah":    "Da'wah",
    /* PROFIL – visi misi */
    "profil-tag":    "Our Purpose",
    "profil-h2":     "Vision & Mission",
    "visi-title":    "Vision",
    "visi-text":     "To realize an Islamic generation that is knowledgeable, of noble character, independent, and able to contribute meaningfully to society and the religion of Allah SWT.",
    "misi-title":    "Mission",
    "misi-1": "Provide high-quality and engaging integrated Islamic education",
    "misi-2": "Build noble character through daily Islamic habits and values",
    "misi-3": "Optimally develop each student's academic and non-academic potential",
    "misi-4": "Create an Islamic, conducive, and innovative learning environment",
    "misi-5": "Prepare a generation ready to face life's challenges with strong faith",
    "misi-6": "Build strong partnerships between school, parents, and community",
    /* PROFIL – sejarah */
    "sej-tag":   "Our Journey",
    "sej-title": "School History",
    "sej-y1":    "Founded",
    "sej-h1":    "Establishment",
    "sej-p1":    "Sekolah Islam Pluit Raya was established to serve the Muslim community's need for quality Islamic education in Penjaringan, North Jakarta. Located on Jalan Jembatan Tiga No. 1, the school was founded as an answer to the challenges of the time.",
    "sej-y2":    "Growth",
    "sej-h2":    "Rapid Expansion",
    "sej-p2":    "As community trust grew, the school expanded to open various education units from SDIT to SMK, along with Madrasah Diniyah for deeper religious study.",
    "sej-y3":    "Modern Era",
    "sej-h3":    "Educational Modernization",
    "sej-p3":    "The school continued to innovate by integrating technology into learning, launching an English course program, and developing an integrated curriculum that blends general and Islamic education.",
    "sej-y4":    "Today",
    "sej-h4":    "North Jakarta's Premier Islamic School",
    "sej-p4":    "Today, Sekolah Islam Pluit Raya is one of the most trusted Islamic educational institutions in North Jakarta, with thousands of alumni spread across various fields and regions of Indonesia.",
    /* PROFIL – dakwah */
    "dak-tag":   "Da'wah Mission",
    "dak-title": "Da'wah & Islamic Values",
    "dak-sub":   "Sekolah Islam Pluit Raya is more than an educational institution — it is also a vehicle for da'wah in upholding Islamic values",
    "dak-c1-title": "Tahfizh Al-Quran",
    "dak-c1-desc":  "An integrated Quran memorization program within the school curriculum, shaping a Quranic generation.",
    "dak-c2-title": "Worship Guidance",
    "dak-c2-desc":  "Habituating congregational prayers, morning-evening dhikr, and sunnah practices in students' daily lives.",
    "dak-c3-title": "Social Da'wah",
    "dak-c3-desc":  "Community service, orphan assistance, and empowering the local community as an expression of Islam as a mercy for all.",

    /* JENJANG – tabs */
    "jtab-sdit":     "SDIT",
    "jtab-smpit":    "SMPIT",
    "jtab-smk":      "SMK",
    "jtab-madrasah": "Islamic School",
    "jtab-kursus":   "English Course",
    "jtab-osis":     "Student Council",
    "jtab-pembinaan":"Guidance",
    /* JENJANG – SDIT */
    "sdit-h2":   "SDIT — Integrated Islamic Elementary School",
    "sdit-sub":  "Islamic educational foundation for ages 6–12",
    "sdit-desc": "SDIT Pluit Raya Jakarta provides elementary education that integrates the national curriculum with comprehensive Islamic education. We instill the values of tawheed, noble character, and love for the Quran from an early age.",
    "sdit-prog": "Program Highlights",
    "sdit-f1":   "Tahfizh Al-Quran (Juz 30 memorization)",
    "sdit-f2":   "Bilingual learning (Indonesian & Arabic)",
    "sdit-f3":   "Congregational Dhuha and Dzuhur prayers",
    "sdit-f4":   "Daily Islamic character building habits",
    "sdit-f5":   "Diverse extracurricular activities",
    "sdit-f6":   "National exam preparation for the next level",
    /* JENJANG – SMPIT */
    "smpit-h2":   "SMPIT — Integrated Islamic Junior High School",
    "smpit-sub":  "Building Islamic character for ages 12–15",
    "smpit-desc": "SMPIT Pluit Raya Jakarta serves as the next level, with an education program that strengthens the foundation of aqeedah, enhances academic abilities, and optimally develops students' potential within an Islamic framework.",
    "smpit-prog": "Program Highlights",
    "smpit-f1":   "Continued Tahfizh Al-Quran",
    "smpit-f2":   "Intensive Arabic & English learning",
    "smpit-f3":   "Leadership & Character Building Program",
    "smpit-f4":   "National exam preparation",
    "smpit-f5":   "Da'wah and community activities",
    "smpit-f6":   "Field trips and comparative studies",
    /* JENJANG – SMK */
    "smk-h2":   "SMK — Vocational High School",
    "smk-sub":  "Islamic-based vocational education for the future",
    "smk-desc": "SMK Pluit Raya Jakarta prepares graduates who are competent in their vocational field, of Islamic character, and ready to enter the workforce or continue to university — with excellent skill programs and hands-on training.",
    "smk-prog": "Skill Programs",
    "smk-f1":   "Information & Communication Technology",
    "smk-f2":   "Business & Management",
    "smk-f3":   "Industrial Work Practice (PKL)",
    "smk-f4":   "National competency certification",
    "smk-f5":   "Career counseling and entrepreneurship",
    "smk-f6":   "Integration of Islamic values in the profession",
    /* JENJANG – Madrasah */
    "md-h2":   "Madrasah Diniyah",
    "md-sub":  "In-depth and comprehensive Islamic religious education",
    "md-desc": "Madrasah Diniyah Pluit Raya provides in-depth Islamic religious education covering the Quran, Hadith, Fiqh, Aqeedah, Islamic History, and Arabic. This program is open to students of all levels.",
    "md-prog": "Subjects",
    "md-f1":   "Al-Quran & Tajweed",
    "md-f2":   "Hadith & Hadith Sciences",
    "md-f3":   "Islamic Jurisprudence (Fiqh)",
    "md-f4":   "Aqeedah & Tawheed",
    "md-f5":   "Arabic Language",
    "md-f6":   "Islamic History (Sirah Nabawiyah)",
    /* JENJANG – Kursus */
    "kursus-h2":   "English Language Course",
    "kursus-sub":  "Expanding global horizons through international language proficiency",
    "kursus-desc": "The Pluit Raya English Course is designed to comprehensively improve students' English proficiency — from everyday conversation to preparation for international exams.",
    "kursus-prog": "Featured Programs",
    "kursus-f1":   "Conversation & Speaking skills",
    "kursus-f2":   "Reading & Writing proficiency",
    "kursus-f3":   "TOEFL/IELTS preparation",
    "kursus-f4":   "English for Islamic Studies",
    "kursus-f5":   "Native-like pronunciation training",
    "kursus-f6":   "Official institution certificate",
    /* JENJANG – OSIS */
    "osis-h2":   "OSIS — Student Council",
    "osis-sub":  "A forum for student leadership and creativity",
    "osis-desc": "The Student Council of Sekolah Islam Pluit Raya is an active student organization that plans and implements school activities, develops leadership skills, and leads da'wah activities within the school environment.",
    "osis-prog": "Student Council Programs",
    "osis-f1":   "School Sports & Arts Week",
    "osis-f2":   "Islamic holidays commemoration",
    "osis-f3":   "Social service and orphan assistance",
    "osis-f4":   "School bulletin board & media",
    "osis-f5":   "Leadership training (LDKS)",
    "osis-f6":   "Student Orientation Week",
    /* JENJANG – Pembinaan */
    "pem-h2":   "Student Guidance",
    "pem-sub":  "Holistic character and personal development",
    "pem-desc": "The Student Guidance Program is designed to build strong Islamic character, develop personal potential, and prepare students to face life's challenges with the foundations of faith, knowledge, and action.",
    "pem-prog": "Guidance Programs",
    "pem-f1":   "Daily Islamic character & etiquette guidance",
    "pem-f2":   "Islamic mentoring and counseling",
    "pem-f3":   "Parenting & parent partnership programs",
    "pem-f4":   "Academic achievement coaching",
    "pem-f5":   "Talent & interest development",
    "pem-f6":   "Public speaking & da'wah training",

    /* PENERIMAAN */
    "ppdb-banner-title": "New Student Admissions (PPDB)",
    "ppdb-banner-desc":  "Sekolah Islam Pluit Raya is open for registration across all education levels. Enroll your children today!",
    "ppdb-step1-title":  "Registration",
    "ppdb-step1-desc":   "Fill in the registration form online or visit the school directly. Prepare the required documents.",
    "ppdb-step2-title":  "Selection & Tests",
    "ppdb-step2-desc":   "Prospective students take an academic test, Quran reading test, and interview according to the chosen level.",
    "ppdb-step3-title":  "Announcement",
    "ppdb-step3-desc":   "Selection results are announced and accepted students proceed with re-registration and orientation.",
    "ppdb-req-title":    "General Requirements",
    "ppdb-r1": "Copy of Family Card (KK)",
    "ppdb-r2": "Copy of Birth Certificate",
    "ppdb-r3": "Copy of Last Diploma / Report Card",
    "ppdb-r4": "3×4 photo (4 copies, red background)",
    "ppdb-r5": "Medical certificate from a doctor",
    "ppdb-r6": "Completed registration form",
    "ppdb-level-title":  "Available Levels",
    "ppdb-info-title":   "Admission Information",
    "ppdb-info-desc":    "For further information about registration, please contact us:",
    "ppdb-wa-soon":      "WhatsApp (coming soon — please call for now)",
    "ppdb-hours":        "Monday – Friday: 08:00 – 16:00 WIB",
    "btn-ppdb-contact":  "Contact Us Now",

    /* INFORMASI – tabs */
    "itab-kurikulum":  "Curriculum",
    "itab-ekstra":     "Extracurricular",
    "itab-fasilitas":  "Facilities",
    "itab-kehidupan":  "Student Life",
    "itab-prestasi":   "Achievements",
    /* INFORMASI – Kurikulum */
    "kur-tag":   "Learning Methods",
    "kur-title": "Integrated Curriculum",
    "kur-sub":   "Harmoniously combining the national curriculum (Ministry of Education) with Islamic education",
    "kur-c1-title": "National Curriculum",
    "kur-c1-desc":  "Following the Merdeka Belajar curriculum from the Ministry of Education, ensuring national education standards are well-achieved.",
    "kur-c2-title": "Islamic Curriculum",
    "kur-c2-desc":  "Integration of Quran, Hadith, Fiqh, Aqeedah, and Arabic in every aspect of learning.",
    "kur-c3-title": "Technology & Digital",
    "kur-c3-desc":  "Technology-based learning using digital media wisely in accordance with Islamic values.",
    "kur-c4-title": "Character Education",
    "kur-c4-desc":  "Building Islamic character through habituation, role modeling, and structured coaching programs.",
    /* INFORMASI – Ekstra */
    "eks-tag":   "Talent Development",
    "eks-title": "Extracurricular",
    /* INFORMASI – Fasilitas */
    "fas-tag":   "Infrastructure",
    "fas-title": "School Facilities",
    "fas-c1-title": "Mosque / Mushalla",
    "fas-c1-desc":  "A comfortable and representative place for worship and religious activities",
    "fas-c2-title": "Laboratories",
    "fas-c2-desc":  "Science, computer, and language labs equipped with modern equipment",
    "fas-c3-title": "Library",
    "fas-c3-desc":  "A comprehensive collection of general and Islamic books to support learning",
    "fas-c4-title": "Sports Field",
    "fas-c4-desc":  "Multi-purpose field for various sports and extracurricular activities",
    "fas-c5-title": "Halal Canteen",
    "fas-c5-desc":  "Clean canteen with halal and nutritious meals to support student health",
    "fas-c6-title": "Multimedia Room",
    "fas-c6-desc":  "Modern multimedia learning room for presentations and digital learning activities",
    /* INFORMASI – Kehidupan */
    "keh-tag":   "Daily Activities",
    "keh-title": "Student Life",
    "keh-sub":   "Each day with us, students follow routines that balance knowledge, worship, and positive activities",
    "keh-s1-h":  "Student Welcome & Morning Guidance",
    "keh-s1-p":  "Students are greeted by teachers, perform morning dhikr and Quran muroja'ah together",
    "keh-s2-h":  "Teaching & Learning Activities",
    "keh-s2-p":  "Academic learning in line with the national and integrated Islamic curriculum",
    "keh-s3-h":  "Congregational Dhuha Prayer",
    "keh-s3-p":  "Practicing the Dhuha sunnah prayer that builds students' closeness to Allah SWT",
    "keh-s4-h":  "Dzuhur Prayer & Lunch",
    "keh-s4-p":  "Congregational prayer followed by lunch break with halal meals",
    "keh-s5-h":  "Afternoon Classes & Extracurricular",
    "keh-s5-p":  "Afternoon study sessions and talent development activities",
    "keh-s6-h":  "Ashar Prayer & Dismissal",
    "keh-s6-p":  "Congregational Ashar prayer before students are picked up",
    /* INFORMASI – Prestasi */
    "pre-tag":   "Our Pride",
    "pre-title": "School Achievements",
    "pre-sub":   "A variety of impressive accomplishments from our students and school",
    "pre-c1-title": "Mathematics Olympiad",
    "pre-c1-desc":  "Our students won the mathematics olympiad at the city of Jakarta level",
    "pre-c2-title": "Quran Recitation Competition",
    "pre-c2-desc":  "Outstanding achievement in the Quran tilawah competition at city level",
    "pre-c3-title": "Islamic Speech Competition",
    "pre-c3-desc":  "Our students won the Islamic da'wah speech competition at provincial level",
    "pre-c4-title": "Tahfizh Al-Quran",
    "pre-c4-desc":  "Young huffaz from our school achieved national recognition in the Quran memorization competition",
    "pre-c5-title": "Student Football Tournament",
    "pre-c5-desc":  "The school football team won the student tournament at North Jakarta level",
    "pre-c6-title": "Islamic Calligraphy Competition",
    "pre-c6-desc":  "The best calligraphy works from our students won an award at provincial level",
    "pre-lv1":   "City Level Champion",
    "pre-lv2":   "City Level Champion",
    "pre-lv3":   "Provincial Level Champion",
    "pre-lv4":   "National Level Champion",
    "pre-lv5":   "City Level Champion",
    "pre-lv6":   "Provincial Level Champion",

    /* GURU & STAF */
    "guru-tag":   "Our Team",
    "guru-title": "Teachers & Educational Staff",
    "guru-sub":   "Our teachers are dedicated professionals with the best educational backgrounds and full commitment to Islamic values",
    "guru-pimpinan": "School Leadership",
    "guru-kepsdit":  "SDIT Principal",
    "guru-kepsdit-desc": "Responsible for managing and developing SDIT Pluit Raya Jakarta",
    "guru-kepsmpit":  "SMPIT Principal",
    "guru-kepsmpit-desc": "Leading and developing SMPIT Pluit Raya Jakarta towards excellence",
    "guru-kepsmk":  "SMK Principal",
    "guru-kepsmk-desc": "Leading SMK Pluit Raya with a vision of quality Islamic vocational education",
    "guru-mapel":    "Subject Teachers",
    "guru-ph-desc":  "We have over 50 experienced, certified, and highly dedicated teachers committed to educating quality Islamic generations.",
    "guru-stat-label1": "Teachers & Staff",
    "guru-stat-label2": "Qualification",
    "guru-stat-label3": "Certified",
    "karir-title": "Join Our Team",
    "karir-desc":  "We are looking for dedicated, competent educators and school staff with a commitment to Islamic values to join our team.",
    "karir-req-title":  "General Qualifications:",
    "karir-r1": "Muslim and of good character",
    "karir-r2": "Minimum S1 degree in relevant field",
    "karir-r3": "Good teaching ability",
    "karir-r4": "Experience in Islamic education (preferred)",
    "karir-pos-title":  "Available Positions:",
    "karir-p1": "Subject Teachers (all fields)",
    "karir-p2": "Quran & Tahfizh Teacher",
    "karir-p3": "Administrative Staff",
    "karir-p4": "Extracurricular Coach",
    "btn-karir": "Submit Application",

    /* KONTAK */
    "kontak-info-title":  "Contact Information",
    "kontak-map-title":   "Our Location",
    "kontak-addr-label":  "Address",
    "kontak-phone-label": "Phone",
    "kontak-email-label": "Email",
    "kontak-wa-label":    "WhatsApp Admin",
    "kontak-wa-soon":     "Coming soon — please call for now",
    "kontak-jam-title":   "Operating Hours",
    "kontak-jam-row1-day": "Monday – Friday",
    "kontak-jam-row2-day": "Saturday",
    "kontak-jam-row3-day": "Sunday & Public Holidays",
    "kontak-jam-row3-val": "Closed",
    "kontak-social-title": "Follow Us on Social Media",
    "btn-maps": "Open in Google Maps",

    /* FOOTER */
    "footer-desc":       "Shaping an Islamic generation with knowledge, noble character, and ready to contribute to religion and nation.",
    "footer-nav-title":  "Pages",
    "footer-unit-title": "Education Units",
    "footer-contact-title": "Contact Us",
    "footer-nav-beranda":    "Home",
    "footer-nav-profil":     "Profile",
    "footer-nav-jenjang":    "School Levels",
    "footer-nav-penerimaan": "Student Admission",
    "footer-nav-informasi":  "Information",
    "footer-nav-guru":       "Teachers & Staff",
    "footer-nav-kontak":     "Contact",
    "footer-copy": "© 2025 Sekolah Islam Pluit Raya Jakarta. All Rights Reserved.",

    /* INFO BOXES (shared) */
    "ib-jam":      "School Hours",
    "ib-kelas":    "Grade",
    "ib-akred":    "Accreditation",
    "ib-terakred": "Accredited",
    "ib-peserta":  "Participants",
    "ib-terbuka":  "Open to all ages",
    "ib-level":    "Level",
    "ib-anggota":  "Members",
    "ib-kepen":    "Term",
    "ib-1-thn":    "1-year term",
    "ib-jadwal":   "Schedule",
    "ib-flex":     "Flexible, morning & afternoon",
    "ib-siswa-sel":"Selected SMPIT & SMK students",
  }
};

// ================================
// LANGUAGE SYSTEM
// ================================
let currentLang = localStorage.getItem('lang') || 'id';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const t = translations[lang];

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update language toggle button appearance
  const btnId  = document.getElementById('lang-btn-id');
  const btnEn  = document.getElementById('lang-btn-en');
  if (btnId && btnEn) {
    btnId.classList.toggle('lang-active', lang === 'id');
    btnEn.classList.toggle('lang-active', lang === 'en');
  }

  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : 'id';
}

function initLanguage() {
  setLanguage(currentLang);
}

// ================================
// PAGE NAVIGATION
// ================================
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === '#' + pageId) {
      link.classList.add('active');
    }
  });

  closeMenu();
  history.replaceState(null, null, '#' + pageId);
}

// ================================
// TAB SWITCHING
// ================================
function setTab(pageName, tabId) {
  const tabContainer = document.getElementById('tabs-' + pageName);
  if (!tabContainer) return;

  tabContainer.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  tabContainer.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes("'" + tabId + "'")) {
      btn.classList.add('active');
    }
  });

  const pageEl = document.getElementById('page-' + pageName);
  if (!pageEl) return;

  pageEl.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });

  const targetContent = document.getElementById('tab-' + pageName + '-' + tabId);
  if (targetContent) {
    targetContent.classList.add('active');
  }
}

// ================================
// MOBILE MENU
// ================================
function closeMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
}

document.getElementById('hamburger').addEventListener('click', function () {
  this.classList.toggle('open');
  document.getElementById('navLinks').classList.toggle('open');
});

if (window.innerWidth <= 768) {
  document.querySelectorAll('.dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle('open');
    });
  });
}

document.addEventListener('click', function (e) {
  const navbar = document.querySelector('.navbar');
  if (!navbar.contains(e.target)) closeMenu();
});

// ================================
// NAVBAR SCROLL
// ================================
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ================================
// INIT
// ================================
function initPage() {
  const hash = window.location.hash.replace('#', '');
  const validPages = ['beranda', 'profil', 'jenjang', 'penerimaan', 'informasi', 'guru-staf', 'kontak'];
  navigateTo(hash && validPages.includes(hash) ? hash : 'beranda');
}

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initLanguage();
  observeAnimatables();
});

if (document.readyState !== 'loading') {
  initPage();
  initLanguage();
  observeAnimatables();
}

window.addEventListener('popstate', initPage);

// ================================
// ANIMATIONS
// ================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function observeAnimatables() {
  document.querySelectorAll('.card, .feature-item, .timeline-item, .achievement-card, .staff-card, .ekstra-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

new MutationObserver(observeAnimatables).observe(document.body, { childList: true, subtree: true });
