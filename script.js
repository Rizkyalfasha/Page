function bukaHalaman(menu) {
  const konten = document.getElementById("konten");

  let isi = "";

  switch(menu) {
    case "profil":
      isi = "<h2>Profil Perusahaan</h2><p>Ini adalah halaman profil perusahaan.</p>";
      break;
    case "bagus":
      isi = "<h2>Sangat Bagus</h2><p>Halaman rating dan penilaian.</p>";
      break;
    case "jabatan":
      isi = "<h2>Jabatan</h2><p>Daftar jabatan dalam organisasi.</p>";
      break;
    case "panduan":
      isi = "<h2>Buku Panduan</h2><p>Berisi buku panduan untuk anggota.</p>";
      break;
    case "video":
      isi = "<h2>Tutorial Video</h2><p>Kumpulan video pembelajaran.</p>";
      break;
    case "kode":
      isi = "<h2>Kode</h2><p>Berisi informasi kode atau voucher.</p>";
      break;
    case "kejutan":
      isi = "<h2>Kartu Kejutan</h2><p>Klaim hadiah spesial di sini.</p>";
      break;
    case "undang":
      isi = "<h2>Undang Teman</h2><p>Ajak teman untuk bergabung.</p>";
      break;

    case "beranda":
      isi = "<h2>Beranda</h2><p>Ini adalah halaman utama beranda.</p>";
      break;
    case "tugas":
      isi = "<h2>Tugas</h2><p>Daftar tugas dan pekerjaanmu.</p>";
      break;
    case "vip":
      isi = "<h2>VIP</h2><p>Halaman khusus member VIP.</p>";
      break;
    case "keuntungan":
      isi = "<h2>Keuntungan</h2><p>Daftar keuntungan yang bisa didapat.</p>";
      break;
    case "saya":
      isi = "<h2>Profil Saya</h2><p>Informasi akun pribadi.</p>";
      break;

    default:
      isi = "<h2>Selamat Datang 👋</h2><p>Silakan pilih menu.</p>";
  }

  konten.innerHTML = isi;
}