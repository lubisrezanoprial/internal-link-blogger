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
  var articleContent = document.getElementById("post_body");
  if (articleContent) {
    var keywordsWithLinks = {}; // Objek untuk melacak kata kunci yang telah diberi tautan

    var textNodes = getTextNodes(articleContent);

    for (var keyword in internalLinks) {
      if (internalLinks.hasOwnProperty(keyword)) {
        var regex = new RegExp("\\b" + keyword + "\\b", "g");

        for (var i = 0; i < textNodes.length; i++) {
          var node = textNodes[i];
          var text = node.nodeValue;

          // Cek apakah kata kunci sudah ada dalam atribut data-link
          if (!keywordsWithLinks[keyword] && regex.test(text)) {
            var replacedText = text.replace(regex, function(match) {
              return '<a href="' + internalLinks[keyword] + '" data-link="true">' + match + '</a>';
            });

            node.nodeValue = replacedText;
            keywordsWithLinks[keyword] = true; // Tandai kata kunci sebagai sudah diberi tautan
          }
        }
      }
    }
  }
});

function getTextNodes(element) {
  var textNodes = [];
  var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  return textNodes;
}

