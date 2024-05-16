var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "sec-algebra-functions",
  "level": "1",
  "url": "sec-algebra-functions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Algebras and Functions",
  "body": " Algebras and Functions   Expand      Expand        Expand  Expand  Factorize  Factorize  Simplify  Simplify  Simplify  Simplify  Compute and write the result as a simple fraction  Compute and write the result as a simple fraction  Compute and write the result as a simple fraction  Compute and write the result as a simple fraction  Compute and write the result as a simple fraction  Rationalize the denomiator:  Rationalize the numerator:   "
},
{
  "id": "sec-algebra-functions-2-2-2-1",
  "level": "2",
  "url": "sec-algebra-functions.html#sec-algebra-functions-2-2-2-1",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec-advanced--topics",
  "level": "1",
  "url": "sec-advanced--topics.html",
  "type": "Section",
  "number": "1.2",
  "title": "First attempt of the first step",
  "body": " First attempt of the first step  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
