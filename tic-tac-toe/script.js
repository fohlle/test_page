
class DomObj{
  constructor(){}

    get_board(){
    const divs = document.querySelectorAll(".divs");
    return divs;
  }

}

class Player{
  constructor(name,mark){
    this.name = name;
    this.mark = mark;
  }

  get name(){
    return this._name;
  }
  get mark(){
    return this._mark;
  }

  set name(value){
    this._name = value;
  }
  
  set mark(value){
    this._mark = value;
  }
}

class Logic{
  constructor(p1,p2){
    this.player_one = p1;
    this.player_two = p2;
    this.board = new DomObj().get_board();
    this.player_turn = true;
    this.board_array = ["","","","","","","","",""];
    this.winning_array = 
    [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [6,4,2],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ]
    this.update_board();
  }

  update_board(){
    const board = [...this.board].forEach((node,i) => {
      node.innerText = this.board_array[i];
    })
  }

  check_winner(){
    let compare = [];
    let winner = false;
    this.winning_array.forEach(n => {
      n.forEach(m => {
        if(this.board_array[m] === ""){
          compare.push("s")
        }else{
          compare.push(this.board_array[m])
        }
      })
      if(compare.every(n => n === "X")){ winner = "X" };
      if(compare.every(n => n === "O")){ winner = "O" };
      compare = [];
    })
    return winner;
  }

  game_over(winner){
    console.log(`Game Over ${winner} Won`);
  }

  add_event(){
    const arr = [...this.board];
    arr.forEach(node => {
      node.addEventListener("click",() => {
        let id = node.getAttribute("id");
        if(node.innerText !== ""){ return }
        if(this.player_turn){
          this.board_array[id] = this.player_one.mark;
          this.player_turn = false;
        }else{
          this.board_array[id] = this.player_two.mark;
          this.player_turn = true;
        }
        this.update_board();
        let winner = this.check_winner();
        if(winner){
          this.game_over(winner);
        }
      })
    })
  }


}

const p1 = new Player("anna","X");
const p2 = new Player("emma","O");

const logic = new Logic(p1,p2);

logic.add_event()

console.log(p1.name)
console.log(p1.mark)