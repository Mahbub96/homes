numbers();

function numbers(){
    var n = 1;
    var x = 7;
    document.write("<div class='number'>");
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 3; j++,n++){
            if(n < 10) document.write("<div id='"+n+"' class='button'>"+x - (-j)+"</div>",);
            else if(n == 10) document.write("<div id='"+n+"' class='button'>0</div>",);
            else if(n == 11) document.write("<div id='"+n+"' class='button'>.</div>",);
            else if(n == 12) document.write("<div id='"+n+"' class='button'>=</div>",);
        }
        x = x - 3;
        document.write("<br>");
    }
    document.write("</div>");
}

