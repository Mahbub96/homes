// Driver part 
$(document).ready(function(){
  AI_functionalities_Main();
    $(".btn").click(function(){
      if($(this).text() == ""){
        
        $(this).text(human);
        // console.log(parseInt(this.id))
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



