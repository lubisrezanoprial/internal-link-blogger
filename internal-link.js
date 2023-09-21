// auto-link.js

var internalLinks = {
  "guru": "/2023/09/guru.html",
  "orang": "/2023/09/orang.html",
  "peserta didik": "/2023/09/peserta-didik.html",
  "transformasi ilmu": "/2023/09/transformasi-ilmu.html",
  "media pembelajaran": "/2023/09/media-pembelajaran.html",
  "tujuan pembelajaran": "/2023/09/tujuan-pembelajaran.html",
  "kepala sekolah": "/2023/09/kepala-sekolah.html",
  // tambahkan lebih banyak kata kunci dan URL sesuai kebutuhan
};

document.addEventListener("DOMContentLoaded", function() {
document.addEventListener("DOMContentLoaded", function() {
  var articleContent = document.getElementById("post_body");
  if (articleContent) {
    var linkedKeywords = {}; // Objek untuk melacak kata kunci yang telah diberi tautan

    for (var keyword in internalLinks) {
      if (internalLinks.hasOwnProperty(keyword)) {
        var regex = new RegExp("\\b" + keyword + "\\b", "g");

        // Cek apakah kata kunci sudah memiliki tautan
        if (!linkedKeywords[keyword]) {
          articleContent.innerHTML = articleContent.innerHTML.replace(regex, '<a href="' + internalLinks[keyword] + '">' + keyword + '</a>');
          linkedKeywords[keyword] = true; // Tandai kata kunci sebagai sudah diberi tautan
        }
      }
    }
  }
});
