let display1 = document.getElementById("display2");
console.log(display1);
 function display(num){
    display1.value += num;
 }
 function calculate(){
    try{
        display1.value = eval(display1.value);

    }
    catch(err){
        alert("invalid inputs")
    }
 }

 function Clear(){
    display1.value =' ';
 }
 function del(){
    display1.value= display1.value.slice(0,-1);
 }