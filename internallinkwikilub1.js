// auto-link.js

var internalLinks = {
  "guru": "/2023/09/guru.html",
  "pendidikan": "/2023/05/pendidikan.html",
  // tambahkan lebih banyak kata kunci dan URL sesuai kebutuhan
};

document.addEventListener("DOMContentLoaded", function() {
  var articleContent = document.getElementById("post_body");
  console.log(articleContent); // Tambahkan ini untuk memeriksa apakah artikel ditemukan

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
              keywordsWithLinks[keyword] = true; // Tandai kata kunci sebagai sudah diberi tautan
              return '<a href="' + internalLinks[keyword] + '" data-link="true">' + match + '</a>';
            });

            node.nodeValue = replacedText;
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
