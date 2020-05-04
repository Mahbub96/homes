var count = 1,val1 = 0,val2 = 0,result;
var flag = 0;
var op;
var num1 = [],num2 = [];

function makeNumberpad(){
    for(let i = 1; i < 14;i++){
        document.write(`<span id='n${i}' class='Num'></span>`);
    }
}
makeNumberpad();

function place(n){
    if(count <= 14){
        document.querySelector(`#n${count}`).innerHTML = Number(n);
        count++;
        if(!flag) num1.push(Number(n));
        else num2.push(Number(n));
    }
}

function operator(x){
    
    if(count <= 14){
        document.getElementById(`n${count}`).innerHTML = x;
        flag = !flag;
        count++;
        op = x;
    } 
}

function getValue(){
    var l1 = num1.length - 1;
    var l2 = num2.length - 1;
    var c = 0;
    while(l1+1){
        val1 = val1 + Math.pow(10,c)*num1[l1];
        l1--;
        c++;
    }

    c = 0;
    while(l2+1){
        val2 = val2 + Math.pow(10,c)*num2[l2];
        l2--;
        c++;
    }

}

function check(){
    switch(op){
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            result = val1 / val2;
            break;
    }
}

///oporators
function add(){
    operator('+');
}
function minus(){
    operator('-');
}

function times(){
    operator('*');
}

function div(){
    operator('/');
}

function btnE(){
    getValue();
    check();
    ac();
    document.querySelector("#n1").innerHTML = Number(result);
}

function btn1(){
    place(1);
}

function btn2(){
    place(2);
}

function btn3(){
    place(3);
}


function btn4(){
    place(4);
}

function btn5(){
    place(5);
}

function btn6(){
    place(6);
}

function btn7(){
    place(7);
}

function btn8(){
    place(8);
}

function btn9(){
    place(9);
}

function btn0(){
    place(0);
}


function ac(){
    for(let i = 1; i < 14;i++){
        document.querySelector(`#n${i}`).innerHTML = " ";
    }
    while(num1.length) num1.pop();
    while(num2.length) num2.pop();
    count = 1;
    val1 = 0;
    val2 = 0;
    flag = 0;
}
