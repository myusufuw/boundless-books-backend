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
]
