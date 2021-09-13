
class DomObj{
  constructor(){}

  add(){
    const divs = document.querySelectorAll(".divs");
    return divs;
  }

}

const dom = new DomObj;

console.log(dom.add())