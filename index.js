function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
 var grandNode = document.querySelector('#grand-node');
 var deepestNode = grandNode.children[0];
 for (var i = 0; i<grandNode.children[i]; i++) {
   deepestNode = grandNode.children[0]
 }
return deepestNode
}