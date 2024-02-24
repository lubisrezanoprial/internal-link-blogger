// Daftar kata kunci dan URL
  var keywords = {
    "Pendidikan Nonformal": "/2023/10/pendidikan-non-formal.html",
"Pendidikan Anak Usia Dini": "/2023/10/pendidikan-anak-usia-dini.html",
"Guru": "/2023/09/guru.html",
"Kepala Sekolah": "/2023/09/kepala-sekolah.html",
"Pendidikan Kecakapan Hidup": "/2023/10/pendidikan-kecakapan-hidup.html",

    // Tambahkan lebih banyak kata kunci dan URL sesuai kebutuhan Anda
  };

  // Fungsi untuk mengganti kata kunci dengan tautan
  function replaceKeywords() {
    var postContent = document.querySelectorAll(".post_body p, .post_body li"); // Sesuaikan dengan kelas yang sesuai di templat Anda

    for (var keyword in keywords) {
      var regex = new RegExp(keyword, "g");
      for (var i = 0; i < postContent.length; i++) {
        var content = postContent[i].innerHTML;
        var linkText = '<a href="' + keywords[keyword] + '" id="' + keyword + '">' + keyword + '</a>';
        content = content.replace(regex, linkText);
        postContent[i].innerHTML = content;
      }
    }
  }

  // Jalankan fungsi saat halaman dimuat
  replaceKeywords();
