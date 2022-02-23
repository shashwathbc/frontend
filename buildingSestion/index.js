var num1Input = document.getElementById("num1")
var num2Input = document.getElementById("num2")
var operator = document.getElementById("operator")
var result = document.getElementById("result")

function calculate(){
    if(num1Input.value===""){
        alert("please enter number 1")
    }
    if(num2Input.value===""){
        alert("Please enter number 2")
    }
var num1 = Number(num1Input.value)
var num2 = Number(num2Input.value)

var op=operator.value
if(op==="-"){
    result.value= num1-num2
}else if(op==="*"){
    result.value= num1*num2
}else if(op==="/"){
    result.value= num1/num2
}else{
    result.value= num1+num2
}

}

button.addEventListener("click",calculate)