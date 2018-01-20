function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
// var grandNode =
 return document.querySelector('#grand-node div div div div');
// var deepestNode = grandNode.children[0];
// for (var i = 0; i<deepestNode.children[i]; i++) {
//   deepestNode = deepestNode.children[0]
// }
//return deepestNode
}