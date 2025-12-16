function calculate(){
	const n1=document.getElementById("num1").value
	const n2=document.getElementById("num2").value
	const operator=document.getElementById("operator").value;
	const num1=parseFloat(n1);
	const num2=parseFloat(n2);
	if(isNaN(num1)||isNaN(num2)){
		document.getElementById("resultDisplay").innerHTML="Result=InvaildInput";
		return;		
	}
	let result;
	switch(operator){
	case"+":
		result=add(num1,num2);
		break;
	case"-":
		result=subtract(num1,num2);
		break;
	case"*":
		result=multiply(num1,num2);
		break;
	case"/":
		if(num2===0){
		document.getElementById("resultDisplay").innerHTML="Result=Cannnot divide by zero";
		return;
	}
		result=divide(num1,num2);
		break;
default:
	result=0;
	}
	document.getElementById("resultDisplay").innerHTML=`Result = ${result.toFixed(2)}`;
}
function add(a,b){
	return a+b;
}
function subtract(a,b){
	return a-b;
}
function multiply(a,b){
	return a*b;
}
function divide(a,b){
	return a/b;
}
function updateButtonText(){
	const operator=document.getElementById("operator").value;
	const btn=document.getElementById("calcBtn");
	switch (operator){
	case"+":btn.innerHTML="Add";break;
	case"-":btn.innerHTML="Subtract";break;
	case"*":btn.innerHTML="Multiply";break;
	case"/":btn.innerHTML="Divide";break;
	}
}
