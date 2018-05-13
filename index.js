function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').children[0];
}

function increaseRankBy(n) {
  let list = document.getElementById("app").querySelectorAll('ul.ranked-list li')
  for(let i=0; i< list.length; i++) {
    let int = parseInt(list[i].innerHTML)
    list[i].innerHTML = int + n;
  }
}

function deepestChild() {
  let deepestChild = document.getElementById("app").querySelectorAll("div#grand-node div");
  console.log(deepestChild[3].innerHTML)
  for(let i=0; i<deepestChild.length; i++) {
    if(i == deepestChild.length-1) {
     return deepestChild[i];
    }
  }
}