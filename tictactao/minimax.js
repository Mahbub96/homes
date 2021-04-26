// incomplete tic tac tao 

let board  = [['','',''],['','',''],['','','']];
let Board = ['','','','','','','','',''];
let human = "0";
let ai = "X";

let scores = {
    X : 1,
    0 : -1,
    tie : 0
}



const AI_functionalities_Main = () =>{

    let val = bestMove();
    prints(board);
    finalDecision(val);
}
const bestMove = () =>{
    // AI to make its turn 
    let move;
    let bestScore = -Infinity;

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){

            // is the spot available ? 
            if(board[i][j] == ''){

                board[i][j] = ai;
                let score = minimax(board,false);
                board[i][j] = '';
                if(score > bestScore){
                    bestScore = score;
                    move = {i,j};
                }
                
            }  

        }
               
    }
    board[move.i][move.j] = ai;
    return bestScore;
}

const minimax = (board,isMaximizer) =>{
    let result = checkWinner();
    
    if(result != null){
        return scores[result];
    }
    
    if(isMaximizer){
        let bestScore = -Infinity;

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j] == ''){
                    board[i][j] = ai;
                    let score = minimax(board,false);
                    board[i][j] = '';
                    bestScore = Math.max(score,bestScore);
                }
            }
        }
        return bestScore;
    }
    else{
        let bestScore = Infinity;

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j] == ''){
                    board[i][j] = human;
                    let score = minimax(board,true);
                    board[i][j] = '';
                    bestScore = Math.min(score,bestScore);
                }
            }
        }
        return bestScore;
    }
}

const prints = board => {
    let iteration = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){

            if(board[i][j] != ''){
                document.getElementById(iteration).innerText= board[i][j];
            }
            iteration++;
        }
    }
}

const equals3 = (a,b,c) =>{
    return a == b && b == c && a != '';
}

const checkWinner = () => {

    let winner = null;

    //  horizontal 
    for(let i = 0; i < 3; i++){
        if(equals3(board[i][0] ,board[i][1] ,board[i][2] ))
        winner = board[i][0];
    }

    // vertical 
    for(let i = 0; i < 3; i++){
        if(equals3(board[0][i] ,board[1][i] ,board[2][i] ))
        winner = board[0][i];
    }

    // diagonal 
    if(equals3(board[0][0],board[1][1] ,board[2][2] )){
        winner = board[0][0];
    }
    if(equals3(board[2][0],board[1][1] ,board[0][2] )){
        winner = board[2][0];
    }

    let openSpot = 0;

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] == ''){
                openSpot++;
            }
        }
    }

    // console.log("times");
    if(winner == null && openSpot == 0){
        return 'tie';
    }
    else{
        return winner;
    }
     

}


