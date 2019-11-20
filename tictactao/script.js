var btn = [];
var i = 0,temp;

$(document).ready(function(){
	$("#turn").html(" <span class='left' id='turn'>Player 1 Turn*</span>");
	$(".col").click(function(){
    if(i%2){
		$(this).text("O");
		$(this).attr("disabled",true);
		$("#turn").html(" <span class='left' id='turn'>Player 1 Turn*</span>");
	}
	else{
		$(this).text("X");
		$(this).attr("disabled",true);
		$("#turn").html(" <span class='Right' id='turn'>Player 2 Turn*</span>");
	}
	//check if game or not
	i++;
	checkWinner(1000);
  });
});
function checkWinner(){
	//for player 1
		 if( ( $("#b1").text() == $("#b2").text()) && ($("#b1").text() == $("#b3").text()) && ( $("#b1").text() == "X" ) && ( ( $("#b1").text() != "" ) ) ) winnerP1();
	else if( ( $("#b1").text() == $("#b4").text()) && ($("#b1").text() == $("#b7").text()) && ( $("#b1").text() == "X" ) && ( ( $("#b1").text() != "" ) ) ) winnerP1();
	else if( ( $("#b1").text() == $("#b5").text()) && ($("#b1").text() == $("#b9").text()) && ( $("#b1").text() == "X" ) && ( ( $("#b1").text() != "" ) ) ) winnerP1();
	else if( ( $("#b2").text() == $("#b5").text()) && ($("#b2").text() == $("#b8").text()) && ( $("#b2").text() == "X" ) && ( ( $("#b2").text() != "" ) ) ) winnerP1();
	else if( ( $("#b3").text() == $("#b6").text()) && ($("#b3").text() == $("#b9").text()) && ( $("#b3").text() == "X" ) && ( ( $("#b3").text() != "" ) ) ) winnerP1();
	else if( ( $("#b4").text() == $("#b5").text()) && ($("#b4").text() == $("#b6").text()) && ( $("#b4").text() == "X" ) && ( ( $("#b4").text() != "" ) ) ) winnerP1();
	else if( ( $("#b5").text() == $("#b3").text()) && ($("#b5").text() == $("#b7").text()) && ( $("#b5").text() == "X" ) && ( ( $("#b5").text() != "" ) ) ) winnerP1();
	else if( ( $("#b7").text() == $("#b8").text()) && ($("#b7").text() == $("#b9").text()) && ( $("#b7").text() == "X" ) && ( ( $("#b7").text() != "" ) ) ) winnerP1();
	//for player 2
	else if( ( $("#b1").text() == $("#b2").text()) && ($("#b1").text() == $("#b3").text()) && ( $("#b1").text() == "O" ) && ( ( $("#b1").text() != "" ) ) ) winnerP2();
	else if( ( $("#b1").text() == $("#b4").text()) && ($("#b1").text() == $("#b7").text()) && ( $("#b1").text() == "O" ) && ( ( $("#b1").text() != "" ) ) ) winnerP2();
	else if( ( $("#b1").text() == $("#b5").text()) && ($("#b1").text() == $("#b9").text()) && ( $("#b1").text() == "O" ) && ( ( $("#b1").text() != "" ) ) ) winnerP2();
	else if( ( $("#b2").text() == $("#b5").text()) && ($("#b2").text() == $("#b8").text()) && ( $("#b2").text() == "O" ) && ( ( $("#b2").text() != "" ) ) ) winnerP2();
	else if( ( $("#b3").text() == $("#b6").text()) && ($("#b3").text() == $("#b9").text()) && ( $("#b3").text() == "O" ) && ( ( $("#b3").text() != "" ) ) ) winnerP2();
	else if( ( $("#b4").text() == $("#b5").text()) && ($("#b4").text() == $("#b6").text()) && ( $("#b4").text() == "O" ) && ( ( $("#b4").text() != "" ) ) ) winnerP2();
	else if( ( $("#b5").text() == $("#b3").text()) && ($("#b5").text() == $("#b7").text()) && ( $("#b5").text() == "O" ) && ( ( $("#b5").text() != "" ) ) ) winnerP2();
	else if( ( $("#b7").text() == $("#b8").text()) && ($("#b7").text() == $("#b9").text()) && ( $("#b7").text() == "O" ) && ( ( $("#b7").text() != "" ) ) ) winnerP2();
 }
 function winnerP1(){
	 $("#p1Score").text("Winner!");
	 $("#p2Score").text("Don't worry ! Try again later ");
	 $("#turn").hide();
	 $(".game").hide(100);
	 
 }
 function winnerP2(){
	 $("#p2Score").text("Winner");
	 $("#p1Score").text("Don't Worry,Try again later.");
	 $("#turn").hide();
	 $(".game").hide(100);
	 
 }
$("#rematch").click(function(){
	 var check = confirm("Really want to Restart?");
	 if(check) location.reload();
 });
 
	 



