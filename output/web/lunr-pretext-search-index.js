var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-introduction",
  "level": "1",
  "url": "sec-introduction.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction",
  "body": " Introduction  A brief description of the present work  In the representation theory of many important algebraic structures, such as Lie algebras, groups (or group algebras), commutative associative algebras, Hopf algebras or quantum groups, tensor product operations among modules play a central role. They not only give new modules from known ones, but they of course also provide a powerful tool for studying modules. More significantly, suitable categories of modules for such algebras, equipped with tensor product operations and appropriate natural isomorphisms, and so on, become symmetric or braided tensor categories, and this tensor category structure is always used, even when it is not explicitly discussed.  "
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
