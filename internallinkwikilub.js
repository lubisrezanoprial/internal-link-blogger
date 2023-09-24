// auto-link.js

var internalLinks = {
  "guru": "/2023/09/guru.html",
  "pendidikan": "/2023/05/pendidikan.html",
  // tambahkan lebih banyak kata kunci dan URL sesuai kebutuhan
};

document.addEventListener("DOMContentLoaded", function() {
  var articleContent = document.getElementById("post_body");
  if (articleContent) {
    var keywordsWithLinks = {}; // Objek untuk melacak kata kunci yang telah diberi tautan

    for (var keyword in internalLinks) {
      if (internalLinks.hasOwnProperty(keyword)) {
        var regex = new RegExp("\\b" + keyword + "\\b", "g");

        articleContent.innerHTML = articleContent.innerHTML.replace(regex, function(match) {
          // Cek apakah kata kunci sudah ada dalam atribut data-link
          if (!keywordsWithLinks[keyword]) {
            keywordsWithLinks[keyword] = true; // Tandai kata kunci sebagai sudah diberi tautan
            return '<a href="' + internalLinks[keyword] + '" data-link="true">' + match + '</a>';
          } else {
            return match; // Tidak ubah yang sudah memiliki tautan
          }
        });
      }
    }
  }
});
