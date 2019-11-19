var btn = [];
var i = 0,temp;
$(document).ready(function(){
	$("#turn").html(" <span class='left' id='turn'>Player 1 Turn*</span>");
  $(".col").click(function(){
    if(i%2){
		$(this).text("0");
		temp = 0;
		$("#turn").html(" <span class='left' id='turn'>Player 1 Turn*</span>");
	}
	else{
		$(this).text("X");
		temp = 1;
		$("#turn").html(" <span class='Right' id='turn'>Player 2 Turn*</span>");
	}
	//check if game or not
	
	i++;
  });
});
