type Product = {
  title: string
  slug: string
  authorSlug?: string
  publicationDate: Date
  numberOfPages: number
  length: number
  width: number
  weight: number
  language: string
  description: string
  imageUrl: string
  isbn: string
  publisherSlug?: string
  price: number
}

export const productList: Product[] = [
  {
    title: "Atomic Habits",
    slug: "atomic-habits",
    authorSlug: "james-clear",
    publicationDate: new Date("17 Jan 2023"),
    numberOfPages: 352,
    length: 230,
    width: 150,
    weight: 500,
    language: "Indonesian",
    description:
      "Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa adalah buku kategori self improvement karya James Clear. Pada umumnya, perubahan-perubahan kecil seringkali terkesan tak bermakna karena tidak langsung membawa perubahan nyata pada hidup suatu manusia. Jika diumpamakan sekeping koin tidak bisa menjadikan kaya, suatu perubahan positif seperti meditasi selama satu menit atau membaca buku satu halaman setiap hari mustahil menghasilkan perbedaan yang bisa terdeteksi. Namun hal tersebut tidak sejalan dengan pemikiran James Clear, ia merupakan seorang pakar dunia yang terkenal dengan 'habits' atau kebiasaan. Ia tahu bahwa tiap perbaikan kecil bagaikan menambahkan pasir ke sisi positif timbangan dan akan menghasilkan perubahan nyata yang berasal dari efek gabungan ratusan bahkan ribuan keputusan kecil. Ia menamakan perubahan kecil yang membawa pengaruh yang luar biasa dengan nama atomic habits.\n\n Sebuah sistem revolusioner untuk menjadi 1 persen lebih baik setiap hari. Orang mengira ketika Anda ingin mengubah hidup, Anda perlu memikirkan hal-hal besar. Namun pakar kebiasaan terkenal kelas dunia James Clear telah menemukan sebuah cara lain. Ia tahu bahwa perubahan nyata berasal dari efek gabungan ratusan keputusan kecil—dari mengerjakan dua push-up sehari, bangun lima menit lebih awal, sampai menahan sebentar hasrat untuk menelepon. Ia menyebut semua tadi atomic habits. Dalam buku terobosan ini, Clear pada hakikatnya mengungkapkan bagaimana perubahan perubahan sangat remeh ini dapat tumbuh menjadi hasil-hasil yang sangat mengubah hidup. Ia menyingkap beberapa trik sederhana dalam hidup kita (seni Menumpuk Kebiasaan yang terlupakan, kekuatan tak terduga Aturan Dua Menit, atau trik untuk masuk ke dalam Zona Goldilocks), dan menggali ke dalam teori psikologi dan neurosains paling baru untuk menerangkan mengapa semua itu penting. Dalam rangka itu, ia menceritakan kisah-kisah inspiratif para peraih medali emas Olimpiade, para CEO terkemuka, dan ilmuwan-ilmuwan istimewa yang telah menggunakan sains tentang kebiasaan-kebiasaan kecil untuk tetap produktif, tetap termotivasi, dan bahagia. Perubahan-perubahan kecil ini akan mendatangkan pengaruh revolusioner pada karier Anda, hubungan pribadi Anda, dan hidup Anda.",
    imageUrl:
      "https://cdn.gramedia.com/uploads/items/Atomic_Habits_C-FRONT_HC_-_Mockup.png",
    isbn: "9786020667188",
    publisherSlug: "gramedia",
    price: 81000,
  },
  {
    title: "Laskar Pelangi",
    slug: "laskar-pelangi",
    authorSlug: "andrea-hirata",
    publicationDate: new Date("01 Feb 2023"),
    numberOfPages: 340,
    length: 205,
    width: 130,
    weight: 272,
    language: "Indonesian",
    description:
      "Andrea Hirata adalah pemenang pertama penghargaan sastra New York Book Festival 2013 untuk The Rainbow Troops, Laskar Pelangi edisi Amerika, penerbit Farrar, Straus & Giroux, New York, kategori general fiction, dan pemenang pertama Buchawards 2013, Jerman, untuk Die Regenbogen Truppe, Laskar Pelangi edisi Jerman, penerbit Hanser Berlin. Dia juga pemenang seleksi short story majalah sastra terkemuka di Amerika, Washington Square Review, New York University, edisi winter/spring 2011 untuk short story pertamanya Dry Season. Tahun 2015 dia dianugerahi gelar Doktor Honoris Causa di bidang sastra oleh University of Warwick, UK dan Tahun 2017 menerima penghargaan budaya dari pemerintah Perancis untuk karyanya Les Guerriers de L'arc-en-ciel (Laskar Pelangi edisi Prancis, penerbit Mercure de France). Laskar Pelangi telah diadaptasi dalam bentuk film, musikal, lagu, serial TV dan koreografi oleh City Dance Company, Washington, DC serta dilayarkan di Berlinale dan Smithsonian. \n\nLaskar Pelangi telah menjadi international bestseller, diterjemahkan ke-40 bahasa asing, telah terbit dalam 22 bahasa, dan diedarkan di lebih dari 130 negara. Melalui program beasiswa, Hirata meraih Master of Science (Msc) bidang teori ekonomi dari Sheffield Hallam University, UK. Hirata juga mendapat beasiswa pendidikan sastra di IWP (International Writing Program), University of Iowa, USA. Karya Hirata berbahasa Indonesia: Laskar Pelangi, Sang Pemimpi, Edensor, Maryamah Karpov, Padang Bulan, Cinta di dalam Gelas, Sebelas Patriot, Laskar Pelangi Song Book, Ayah, Sirkus Pohon, dan Guru Aini. Karya dalam bahasa asing The Rainbow Troops, Der Träumer, Dry Season. Sejak Tahun 2010, secara mandiri Hirata mempromosikan minat baca, minat menulis, dan mendirikan museum sastra pertama dan satu-satunya di Indonesia, yaitu Museum Kata Andrea Hirata di Belitung.",
    imageUrl: "https://cdn.gramedia.com/uploads/items/img212.jpg",
    isbn: "9786022916628",
    publisherSlug: "bentang-pustaka",
    price: 89000,
  },
  {
    title: "Guru Aini",
    slug: "guru-aini",
    authorSlug: "andrea-hirata",
    publicationDate: new Date("01 Feb 2020"),
    numberOfPages: 312,
    length: 200,
    width: 135,
    weight: 258,
    language: "Indonesian",
    description:
      "Ini persamaan hidupku sekarang, Bu,” Desi menyodorkan buku catatan ke tengah meja. Bu Amanah, yang juga guru matematika tersenyum getir melihat persamaan garis lurus dengan variabel-variabel yang didefinisikan sendiri oleh Desi. Yang menarik perhatiannya adalah pengorbanan. \n\n“Pendidikan memerlukan pengorbanan, Bu. Pengorbanan itu nilai tetap, konstan, tak boleh berubah” \n\nKonon, berdasarkan penelitian antah berantah, umumnya idealisme anak muda yang baru tamat dari perguruan tinggi bertahan paling lama 4 bulan. Setelah itu mereka akan menjadi pengeluh, penggerutu, dan penyalah seperti banyak orang lainnya, lalu secara menyedihkan terseret arus deras sungai besar rutinitas dan basa-basi birokrasi lalu tunduk patuh pada sistem yang buruk. Dalam kenyataan hidup seperti itu, seberapa jauh Desi berani mempertahankan idealismenya menjadi guru matematika di sekolah pelosok? \n\n“Stunningly beautiful, highly intelligent, sangat perlu dibaca mereka yang ingin belajar.” –Firza Aulia, scholarship awardee.",
    imageUrl:
      "https://cdn.gramedia.com/uploads/items/COVER_GURU_AINI_zELbGLS.png",
    isbn: "9786022916864",
    publisherSlug: "bentang-pustaka",
    price: 90000,
  },
  {
    title: "Sang Pemimmpi",
    slug: "sang-pemimpi",
    authorSlug: "andrea-hirata",
    publicationDate: new Date("01 Feb 2020"),
    numberOfPages: 276,
    length: 205,
    width: 130,
    weight: 223,
    language: "Indonesian",
    description:
      "Andrea Hirata adalah pemenang pertama penghargaan sastra New York Book Festival 2013, untuk The Rainbow Troops, Laskar Pelangi edisi Amerika, penerbit Farrar, Straus & Giroux, New York, kategori general fiction, dan pemenang pertama Buchawards 2013, Jerman, untuk Die Regenbogen Truppe, Laskar Pelangi edisi Jerman, penerbit Hanser Berlin. Dia juga pemenang seleksi short story majalah sastra terkemuka di Amerika, Washington Square Review, New York University, edisi winter/spring 2011 untuk short story pertamanya Dry Season. Tahun 2015 dia dianugerahi gelar Doktor Honoris Causa di bidang sastra oleh University of Warwick, UK dan Tahun 2017 menerima penghargaan budaya dari pemerintah Prancis untuk karyanya Les Guerriers de L'arc-en-ciel (Laskar Pelangi edisi Prancis, penerbit Mercure de France). Karya Hirata berbahasa Indonesia: Laskar Pelangi, Sang Pemimpi, Edensor, Maryamah Karpov, Padang Bulan, Cinta di dalam Gelas, Sebelas Patriot, Laskar Pelangi Song Book, Ayah, Sirkus Pohon, dan Guru Aini. Karya dalam bahasa asing The Rainbow Troops, Der Träumer, Dry Season. Sejak Tahun 2010, secara mandiri Hirata mempromosikan minat baca, minat menulis dan mendirikan museum sastra pertama dan satu-satunya di Indonesia, Museum Kata Andrea Hirata di Belitung.\n\nArai adalah saudara jauh Ikal yang telah menjadi yatim piatu sejak kelas 3 SD. Ia adalah anak yang sangat tabah menjalani hidupnya. Bayangkan saja, ketika Ikal dan Ayahnya menjemput Arai, mereka sedih melihat keadaan Arai, tetapi Arai menghibur Ikal dengan mainan buatannya. Adapun Jimbron adalah sahabat setia mereka yang sangat terobsesi kepada kuda. Ia sangat mengerti seluk-beluk setiap jenis kuda. Ketiga anak itu sering dimarahi Pak Mustar karena ulah konyol mereka. Pak Mustar adalah sosok orang yang sangat bersahaja, tegas, dan disiplin. Ia adalah pahlawan bagi anak-anak di Belitung. Berkatnya, Ikal dan teman-temannya tidak perlu menempuh jalan sejauh ratusan kilometer untuk pergi ke sebuah sekolah negeri. Pak Mustar menjadi galak karena anaknya tidak dapat masuk ke SMA yang susah-payah dibangunnya hanya karena nilai ujiannya kurang 0,25 dari batas minimal",
    imageUrl: "https://cdn.gramedia.com/uploads/items/Sang_Pemimpi.jpg",
    isbn: "9786022916635",
    publisherSlug: "bentang-pustaka",
    price: 80100,
  },
  {
    title: "Orang Orang Biasa",
    slug: "orang-orang-biasa",
    authorSlug: "andrea-hirata",
    publicationDate: new Date("28 Feb 2019"),
    numberOfPages: 262,
    length: 130,
    width: 205,
    weight: 300,
    language: "Indonesian",
    description:
      "Andrea Hirata adalah pemenang pertama penghargaan sastra New York Book Festival 2013, untuk The Rainbow Troops, Laskar Pelangi edisi Amerika, penerbit Farrar, Straus & Giroux, New York, kategori general fiction, dan pemenang pertama Buchawards 2013, Jerman, untuk Die Regenbogen Truppe, Laskar Pelangi edisi Jerman, penerbit Hanser Berlin. Dia juga pemenang seleksi short story majalah sastra terkemuka di Amerika, Washington Square Review, New York University, edisi winter/spring 2011 untuk short story pertamanya Dry Season. Tahun 2015 dia dianugerahi gelar Doktor Honoris Causa di bidang sastra oleh University of Warwick, UK dan Tahun 2017 menerima penghargaan budaya dari pemerintah Prancis untuk karyanya Les Guerriers de L'arc-en-ciel (Laskar Pelangi edisi Prancis, penerbit Mercure de France). Karya Hirata berbahasa Indonesia: Laskar Pelangi, Sang Pemimpi, Edensor, Maryamah Karpov, Padang Bulan, Cinta di dalam Gelas, Sebelas Patriot, Laskar Pelangi Song Book, Ayah, Sirkus Pohon, dan Guru Aini. Karya dalam bahasa asing The Rainbow Troops, Der Träumer, Dry Season. Sejak Tahun 2010, secara mandiri Hirata mempromosikan minat baca, minat menulis dan mendirikan museum sastra pertama dan satu-satunya di Indonesia, Museum Kata Andrea Hirata di Belitung.\n\nKali ini, karyanya mengisahkan sebuah rencana perampokan yang dilakukan oleh 10 orang yang berada dalam satu persahabatan di Kota Belantik, yaitu Salud, Junilah, Nihe, Dinah, Handai, Sobri, Honorun, Rusip, Tohirin, dan Debut. Awalnya, Kota Belantik disebut kota naif karena masyarakatnya yang terkenal ramah dan sopan walaupun tidak banyak yang mengenyam pendidikan tinggi, namun sebutan naif tersebut hilang sejak terjadinya kasus perampokan terjadi ketika pawai kemerdekaan yang dilakukan oleh sekelompok perampok.",
    imageUrl:
      "https://cdn.gramedia.com/uploads/items/9786022915249_orang-orang-b.jpg",
    isbn: "9786022915249",
    publisherSlug: "bentang-pustaka",
    price: 80100,
  },
  {
    title: "The Alchemist - Sang Alkemis",
    slug: "sang-alkemis",
    authorSlug: "paulo-coelho",
    publicationDate: new Date("28 Aug 2021"),
    numberOfPages: 224,
    length: 200,
    width: 135,
    weight: 260,
    language: "Indonesian",
    description:
      "Novel Sang Alkemis menceritakan tentang mimpi, harapan, dan impian seorang anak bernama Santiago, yang mengembala untuk mencari harta karun. Ia melakukan pencarian harta karun setelah seorang peramal mengatakan bahwa Santiago akan menemukan dan mendapatkan harta karun yang tidak akan habis dipakai sampai tujuh turunan. Dalam perjalanannya, ia bertemu dengan Melchizedek yang memberikan nasihat bahwa saat seseorang menginginkan sesuatu, alam semesta akan membantu menolong agar seseorang itu dapat meraih impiannya. Mechizedek juga memberikan Santiago dua buah batu untuk membaca tanda dan meminta Santiago untuk tidak menyerah dengan mimpinya dan mengikuti pertanda yang ada. Santiago meneruskan menggembala sampai akhirnya ia bertemu dengan penunggang kuda, Sang Alkemis.\n\nSetiap beberapa puluh tahun, muncul sebuah buku yang mengubah hidup para pembacanya selamanya. Novel Paulo Coelho yang memikat ini telah memberikan inspirasi bagi jutaan orang di seluruh dunia. Kisah yang sangat sederhana, namun menyimpan kebijaksanaan penuh makna, tentang anak gembala bernama Santiago yang berkelana dari rumahnya di Spanyol ke padang pasir Mesir untuk mencari harta karun terpendam di Piramida-Piramida. Di perjalanan dia bertemu seorang perempuan Gipsi, seorang lelaki yang mengaku dirinya Raja, dan seorang alkemis––semuanya menunjukkan jalan kepada Santiago untuk menuju harta karunnya. Tak ada yang tahu isi harta karun itu, atau apakah Santiago akan berhasil mengatasi rintangan-rintangan sepanjang jalan. Namun perjalanan yang semula bertujuan untuk menemukan harta duniawi berubah menjadi penemuan harta di dalam diri. Kaya, menggugah, dan sangat manusiawi, kisah Santiago menunjukkan kekuatan mimpi-mimpi dan pentingnya mendengarkan suara hati kita.",
    imageUrl:
      "https://cdn.gramedia.com/uploads/items/9786020656069_Sang_Alkemis_cov.jpg",
    isbn: "9786020656069",
    publisherSlug: "gramedia",
    price: 52000,
  },
  {
    title: "The Fifth Mountain - Gunug Kelima",
    slug: "gunung-kelima",
    authorSlug: "paulo-coelho",
    publicationDate: new Date("29 Aug 2013"),
    numberOfPages: 319,
    length: 200,
    width: 140,
    weight: 400,
    language: "Indonesian",
    description: "Gunung Kelima (The Fifth Mountain) - Cover Baru",
    imageUrl:
      "https://cdn.gramedia.com/uploads/items/9789792298383_Gunung-Kelima-The-Fifth-Mountain---Cover-Baru.jpg",
    isbn: "9789792298383",
    publisherSlug: "gramedia",
    price: 50400,
  },
  {
    title: "Warrior of The Light - Kitab Suci Kesatria Cahaya",
    slug: "kitab-suci-kesatria-cahaya",
    authorSlug: "paulo-coelho",
    publicationDate: new Date("29 Sept 2013"),
    numberOfPages: 154,
    length: 200,
    width: 125,
    weight: 200,
    language: "Indonesian",
    description:
      'Kitab Suci Kesatria Cahaya adalah ajakan bagi kita semua untuk mewujudkan impian, menerima ketidakpastian dalam hidup, dan bangkit untuk menyongsong takdir pribadi kita yang unik. Ada sosok sang Kesatria Cahaya di dalam diri setiap orang, dan dengan caranya yang tak tertandingi, Paulo Coelho membantu kita untuk menemukannya. Jalan Kesatria Cahaya tak selalu mudah, tetapi dia menerima kegagalan-kegagalannya dan berjuang tak kenal lelah untuk memenuhi Legenda Pribadi-nya.\n\nKitab Suci Kesatria adalah ajakan bagi kita semua untuk mewujudkan impian, menerima ketidakpastian dalam hidup, dan bangkit untuk menyongsong takdir pribadi kita yang unik. Ada sosok sang Kesatria Cahaya di dalam diri setiap orang, dan dengan caranya yang tak tertandingi, Paulo Coelho membantu kita menemukannya. Jalan Kesatria Cahaya tak selalu mudah, tetapi dia menerima kegagalan-kegagalannya dan berjuang tak kenal lelah untuk memenuhi legenda pribadinya.\n\nBuat yang suka tulisan tangan Paulo Coelho mungkin nggak asing dengan gaya bahasa dan tulisannya, "Alchemist" salah satu karyanya yang populer. Diawali dengan prolog untuk menuju nasehat-nasehat di mana yang dimaksud kesatria cahaya adalah semua manusia yang sedang berjuang untuk mencapai tujuan hidupnya masing-masing.\n\nBuku ini sangat positif di mana setiap nasehatnya meaningful banget, setiap halamannya ada satu makna. Topik yang beragam mulai dari hubungan dengan Tuhan, sesama dan tentu dengan diri sendiri. Bagaimana seharusnya sang kesatria menghadapi permasalahan dan segala gejolak pikiran dan hatinya dengan bijak. Buku ini cocok untuk temen-temen yang mencari makna kehidupan dan bisa dijadikan pelajaran untuk bisa termotivasi lagi.',
    imageUrl:
      "https://cdn.gramedia.com/uploads/items/ID_GPU2013MTH10KSKC_C.jpg",
    isbn: "9789792298611",
    publisherSlug: "gramedia",
    price: 49000,
  },
  {
    title: "The Alpha Girl`S Guide",
    slug: "the-apha-girls-guide",
    authorSlug: "henry-manampiring",
    publicationDate: new Date("30 Jan 2020"),
    numberOfPages: 280,
    length: 190,
    width: 130,
    weight: 215,
    language: "Indonesian",
    description:
      "The Alpha Girl’s Guide juga berisi wawancara inspiratif dengan dua Alpha Female Indonesia dari dua generasi: Najwa Shihab dan Alanda Kariza\n\nAlpha Female adalah para perempuan yang menginspirasi, memimpin, menggerakkan orang sekitarnya, dan membawa perubahan. Mereka cerdas, percaya diri, dan independen. Bagaimana remaja dan perempuan muda bisa mengembangkan diri menjadi mereka? Buku ini adalah hasil pengamatan, riset artikel, wawancara langsung, dan diskusi dengan banyak perempuan di media sosial. Ditulis dengan ringan, penuh ilustrasi kocak, namun tetap blak-blakan dan menohok,The Alpha Girl’s Guide akan membuat kamu terinspirasi menjadi cewek smart, independen dan bebas galau!",
    imageUrl:
      "https://cdn.gramedia.com/uploads/items/THE_ALPHA_GIRLS_GUIDE.jpg",
    isbn: "9789797809546",
    publisherSlug: "kawah-media",
    price: 79200,
  },
  {
    title: "Filosofi Teras",
    slug: "filosofi-teras",
    authorSlug: "henry-manampiring",
    publicationDate: new Date("01 Jan 2022"),
    numberOfPages: 298,
    length: 210,
    width: 140,
    weight: 320,
    language: "Indonesian",
    description:
      "Lebih dari 2000 tahun lalu, sebuah mazhab filsafat menemukan akar masalah dan juga solusi dari banyak emosi negatif. Stoisisme, atau Filosofi Teras, adalah filsafat Yunani-Romawi kuno yang bisa membantu kita mengatasi emosi negatif dan menghasilkan mental yang tangguh dalam menghadapi naik-turun nya kehidupan.Jauh dari kesan filsafat sebagai topik berat dan mengawang-awang, Filosofi Teras justru bersifat praktis dan relevan dengan kehidupan Generasi Milenial dan Gen-Z masa kini.\n\nBuku yang pertama kali diterbitkan pada 2019 ini mengajarkan kita tentang pengendalian emosi negatif yang ada dalam diri kita. Buku Filosofi Teras menjadi buku mega best seller, dan memenangkan Book of the Year di Indonesia International Book Fair pada 2019. Filosofi Teras memiliki tebal sebanyak 344 halaman.\n\nBuku ini mudah dipahami dengan ilustrasi tokoh filsafat, serta kata-kata bijak yang menambah daya tarik dalam membaca. Buku karangan Henry Manampiring ini sangat cocok dibaca untuk para generasi milenial, dan Gen Z dalam menghadapi ketakutan, kekhawatiran, kecemasan, serta hal negatif lainnya.\n\nAwal mula kehadiran buku ini tidak lain dari latar belakang kondisi sang penulis yang didiagnosis major depressive disorder. Hingga akhirnya ia menemukan buku tentang penerapan filsafat stoa dalam hidup.Stoa sendiri identik dengan kesederhanaan, dan menerima keadaan yang tidak bisa dikendalikan. Namun, stoicism bukan berarti pasrah dan tidak peduli sama sekali. Filsafat ini mengajarkan kita untuk memiliki prinsip indifferent.",
    imageUrl: "https://cdn.gramedia.com/uploads/items/img20220101_11444970.jpg",
    isbn: "9786233463034",
    publisherSlug: "penerbit-buku-kompas",
    price: 88200,
  },
  {
    title: "Teruslah Bodoh Jangan Pintar",
    slug: "teruslah-bodoh-jangan-pintar",
    authorSlug: "tere-liye",
    publicationDate: new Date("27 Jan 2024"),
    numberOfPages: 371,
    length: 210,
    width: 135,
    weight: 305,
    language: "Indonesian",
    description:
      "Novel ini teknik berceritanya unik. Bayangkan, semua cerita berpusat di ruangan kecil 3x6 meter. Sy dari dulu pengin sekali punya novel dgn teknik bercerita begini.\n\nNovel ini ada aksinya, ada politiknya, ada ekonominya, ada hukumnya, ujung ke ujung lengkap. Buat kalian yg mau nyari topik disertasi atau thesis, novel ini bisa kalian kuliti dgn serius. Kaki-kaki cerita novel ini, lapisan2 ceritanya, coba saja dibaca. Dari ruangan 3x6 meter, kalian pergi ke penjuru negeri, memahami realitas menyakitkan di negeri ini.\n\nSayangnya, novel ini ditandai 18+, alias novel dewasa. Karena beberapa bab, dipenuhi adegan kekerasan, martir, dll. Sy berharap kalian tidak bandel. Jika masih maksa mau baca, suruh orang tuanya baca dulu, biar mereka\n\nBuku ini bercerita tentang seorang pemuda bernama Ali yang tinggal di sebuah desa kecil. Ali adalah pemuda yang cerdas dan bercita-cita menjadi orang yang sukses. Namun, Ali juga menyadari bahwa dunia ini tidak selalu adil. Orang-orang yang pintar dan berpendidikan belum tentu bisa sukses.\n\nSuatu hari, Ali bertemu dengan seorang pria tua yang misterius. Pria tua itu memberi tahu Ali bahwa dunia ini sedang dalam kekacauan. Orang-orang yang pintar dan berpendidikan justru menjadi bagian dari kekacauan tersebut.Pria tua itu kemudian mengajarkan Ali tentang pentingnya menjadi bodoh. Bodoh di sini bukan berarti tidak memiliki pengetahuan atau kecerdasan. Bodoh di sini berarti tidak memiliki ambisi dan keserakahan.\n\nAli pun mulai menjalani kehidupannya sebagai orang bodoh. Dia berhenti mengejar kesuksesan dan mulai fokus pada hal-hal yang lebih penting dalam hidup, seperti keluarga dan teman-teman.Seiring berjalannya waktu, Ali menyadari bahwa kehidupannya menjadi lebih bahagia dan damai. Dia tidak lagi stres dan terbebani dengan ambisi-ambisinya.",
    imageUrl:
      "https://cdn.gramedia.com/uploads/picture_meta/2024/1/28/bfenfrhizmwxkx6di6emhi.jpg",
    isbn: "9786238882205",
    publisherSlug: "sabak-grip",
    price: 98100,
  },
  {
    title: "Si Anak Badai",
    slug: "si-anak-badai",
    authorSlug: "tere-liye",
    publicationDate: new Date("05 Mar 2021"),
    numberOfPages: 335,
    length: 205,
    width: 135,
    weight: 280,
    language: "Indonesian",
    description:
      "Badai kembali membungkus kampung kami. Kali ini aku mendongak, menatap jutaan tetes air hujan dengan riang. Inilah kami, Si Anak Badai. Tekad kami sebesar badai. Tidak pernah kenal kata menyerah. Buku ini tentang Si Anak Badai yang tumbuh ditemani suara aliran sungai, riak permukaan muara, dan deru ombak lautan. Si Anak Badai yang penuh tekad dan keberanian mempertahankan apa yang menjadi milik mereka, hari-hari penuh keceriaan dan petualangan seru.\n\nNovel ini berkisah tentang kehidupan anak-anak dari kampung manowa yang selalu gembira ketika kapal lewat. Mereka akan saling berlomba untuk mendapatkan koin yang dilemparkan oleh penumpang. Namun, semua kegembiraan itu seketika menghilang. Saat seseorang dengan kekuasaan datang dan merampas semua kebahagiaan masyarakat kampung manowa. Za, dan kawan-kawan nya pun maju melawan badai tersebut berusaha mengembalikan sinar matahari yang dulunya selalu menyinari kampung manowa.\n\nIni adalah kisah tentang Za dan sahabat-sahabat terbaiknya dari kampung Manowa. Mereka hidup dipenuhi canda tawa meski hidup dalam kesederhanaan. Selain mengajarkan tentang keluarga,persahabatan,keberanian dan kejujuran, novel ini juga menyajikan trik dan tipu muslihat yang dapat dimainkan oleh para politikus, atau bisa dibilang dalam kasus ini adalah pemerintah. Sebagai kaum awam, dengan disajikannya konten tentang permainan politik dan keseruan di dalamnya, pembaca akan dibuat hanyut dalam novel tersebut.",
    imageUrl: "https://cdn.gramedia.com/uploads/items/9786239607425.jpg",
    isbn: "9786239607425",
    publisherSlug: "sabak-grip",
    price: 76500,
  },
  {
    title: "Tanah Para Bandit",
    slug: "tanah-para-bandit",
    authorSlug: "tere-liye",
    publicationDate: new Date("13 Feb 2023"),
    numberOfPages: 433,
    length: 205,
    width: 140,
    weight: 355,
    language: "Indonesian",
    description:
      "Usia lima belas tahun, aku menemukan tempat rahasia. Lokasinya berada di tengah hutan lebat, di lereng-lereng terjal Bukit Barisan. Dengan pohon-pohon tinggi. Semak belukar yang susah ditembus. Tumbuhan pakis, lumut, juga belalai rotan. Pertama kali aku menemukannya, kakiku, tanganku, juga bagian tubuh lain tidak terhitung meninggalkan baret dari duri, onak, atau ujung daun yang tajam, pun bisa membuat luka.\n\nAku tidak sengaja menemukannya. Aku sedang sedih, jadi aku pergi dari rumah panggung milik Abu Syik-kakekku. Mungkin sama seperti anak perempuan lainnya, setelah dimarahi oleh orang tua, menangis, kabur dari rumah. Tapi di tengah hutan lebat begini, kemana aku harus 'kabur'? Talang, atau perkampungan tempat aku tinggal berada di lembah yang dikelilingi hutan lebat. Tidak ada mall, tempat wisata, atau tempat nongkrong di sini. Satu-satunya tempat pelarianku adalah hutan itu. Maka aku berjalan tidak tahu arah masuk ke dalamnya. Berjam jam.\n\nDi sini, para penjahat dibesarkan sejak buaian. Dilatih lewat kebohongan. Dididik dengan kemunafikan. Diajarkan melalui ketidakpedulian.Di sini, semua bisa diatur sepanjang ada uangnya. Yang bodoh bisa menjadi pintar seketika. Yang tidak layak bisa segera memenuhi syarat. Yang bersalah bisa jadi benar. Yang bengkok bisa diluruskan. Tidak suka lurus? Mari dibengkokkan lagi.  Di sini, di Tanah Para Bandit, tidak ada lagi beda antara penjahat bejat dengan tuan nyonya terhormat. Mencuri, merampok hak orang lain, lumrah saja. Ayo, jangan terlalu serius, Kawan. Kita berpesta malam ini.",
    imageUrl:
      "https://cdn.gramedia.com/uploads/picture_meta/2023/2/14/2op5kuxbxmq8zvhdu8sqr8.jpg",
    isbn: "9786238829675",
    publisherSlug: "sabak-grip",
    price: 94500,
  },
  {
    title: "Hafalan Shalat Delisa",
    slug: "hafalan-shalat-delisa",
    authorSlug: "tere-liye",
    publicationDate: new Date("11 May 2021"),
    numberOfPages: 266,
    length: 210,
    width: 140,
    weight: 280,
    language: "Indonesian",
    description:
      "Delisa adalah gadis kecil asal Lhok-Ngah Aceh berusia 6 tahun ini penggemar warna biru. Gadis cerdas, polos, dan suka bertanya ini tinggal bersama umminya dan ketiga kakaknya. Ayahnya bekerja di kapal tanker dan baru pulang setiap 3 bulan sekali. Suatu waktu, Delisa mendapat tugas menghafal bacaan salat dan umminya pun berjanji akan memberinya hadiah bila Delisa mampu menuntaskannya. Namun, Tuhan lebih tahu apa yang lebih baik untuk hamba-Nya. Tsunami datang melumatkan senyuman pada wajah Delisa. Tsunami mengambil segala-galanya, keluarga juga kaki kecilnya. Yang tersisa, hanya dia dan ayahnya. Apakah Delisa mampu tetap tersenyum seperti dahulu dan menuntaskan hafalannya?\n\nNovel ini menceritakan tentang seorang anak perempuan yang berusaha menghafal bacaan salat. Dia semangat melakukannya karena jika dia berhasil, Ibunya akan membelikan seuntai kalung emas. Saat dia siap menyetor hafalan tersebut ke guru di sekolahnya, peristiwa bencana besar terjadi, yaitu Tsunami. Anak perempuan itu pun terpisah dari keluarganya. Hafalan shalatnya pun terputus. Setelah bertemu Ayahnya, apakah dia akhirnya bisa bertemu dengan Ibunya kembali? Juga dengan kakak-kakaknya? Atau dia akan menemukan banyak pemahaman baru tentang ketulusan. Termasuk ketulusan saat menghafal bacaan salat, bukan untuk hadiah seuntai kalung emas dan berdamai dengan bencana itu. Mari baca novel Hafalan Shalat Delisa hingga habis untuk tahu semua jawabannya.",
    imageUrl:
      "https://cdn.gramedia.com/uploads/items/Hafalan_Shalat_Delisa.jpg",
    isbn: "9786239607487",
    publisherSlug: "sabak-grip",
    price: 76500,
  },
  {
    title: "Negeri Para Bedebah",
    slug: "negeri-para-bedebah",
    authorSlug: "tere-liye",
    publicationDate: new Date("09 Apr 2023"),
    numberOfPages: 433,
    length: 200,
    width: 135,
    weight: 355,
    language: "Indonesian",
    description:
      "Negeri para bedebah, negerinya para musang berbulu domba, negerinya pencuri berdasi. Tempat dimana kehidupan terasa jauh lebih fiksi dari pada novel fiksi itu sendiri. Dimana realita terasa jauh lebih nyata. Sebab di negeri para bedebah segala hal bisa terjadi selama melibatkan materi dan kedudukan. Manusia bisa berubah menjadi musang paling manipulatif selama itu demi kekayaan. Namun di negeri para bedebah pula masih menyimpan kebaikan, kemanusiaan dan kesetiaan.\n\nBercerita tentang Thomas, seorang konsultan keuangan yang sangat terkenal. Keahliannya dalam bidangnya ini membuat dirinya bahkan sering diundang menjadi pembicara dalam berbagai kesempatan seperti talk show dan seminar hingga luar negeri.\n\nThomas bisa dibilang merupakan salah satu figure paling berpengaruh dalam bidang perekonomian hingga mampu mendirikan firma konsultannya bernama Thomas & Co. Ketenaran Thomas membuat banyak orang ingin mengulik sisi dari dirinya yang amat misterius dan latar belakangnya yang gelap. Sampai suatu ketika pemilik Bank nasional yakni Bank Semesta sedang tersandung kasus akibat kelalaiannya dan perbuatannya yang dinilai melanggar undang-undang bisnis perbankan. Thomas berlandaskan rasa kekeluargaan membantu Bank Semesta agar tidak bangkrut.",
    imageUrl:
      "https://cdn.gramedia.com/uploads/picture_meta/2023/4/10/hwwjhrajpbdc4ctutxpzxa.jpg",
    isbn: "9786238829620",
    publisherSlug: "sabak-grip",
    price: 89100,
  },
]
