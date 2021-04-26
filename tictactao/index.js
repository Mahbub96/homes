
// Driver part 

let turns = false;
$(document).ready(function(){
    
    $(".btn").click(function(){
      if($(this).text() == ""){
        
        $(this).text(human);
        Board[parseInt(this.id)] = human;
        let iteration = 0;
        for(let i = 0; i < 3; i++){
          for(let j = 0; j < 3; j++){
            if(Board[iteration] == '0'){
              board[i][j] = Board[iteration];
            }
            iteration++;
          }
        }
        
        AI_functionalities_Main();

      }
      
      
    });
});


const  reset = () =>{

$("#display").css("display","none");
Board = ['','','','','','','','',''];
board  = [['','',''],['','',''],['','','']];
  for(let i = 0; i < 9; i++){
    document.getElementById(i).innerText= ''
  }
  turns = !turns;
  if(turns) AI_functionalities_Main();
}

const  Exit = () =>{
  if(confirm("Really Want to Exit ?")) window.close();
}

const finalDecision = (d) =>{
  console.log(d)
  if(d == 1){
    $("#display").css("display","block");
    $("#result").text('You Lose !');
  }
  else if(d == -1){
    $("#display").css("display","block");
    $("#result").text('You Win !');
  }
  else if(d == 0){
    $("#display").css("display","block");
    $("#result").text('....');
  }
} 
