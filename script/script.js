function getHistory()
{
	return document.getElementById("history-value").innerText;
}
function printHistoryValue(num) {
	document.getElementById("history-value").innerText=num;
}
//printHistoryValue("9*9+3");

function getoutput()
{
	return document.getElementById("output-value").innerText;
}
function printoutput(num) {
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}else{
		document.getElementById("output-value").innerText=getFormattedNumber(num) ;
	}
	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n=Number(num);
	var value=n.toLocaleString("en");
	return value;
} 
//printoutput("77564465");


function reverseNumberFormat(num)
{
	return Number(num.replace(/,/g,''));
}
//   alert(reverseNumberFormat(getoutput()));
var operator=document.getElementsByClassName("operator");
for(var i=0; i<operator.length ; i++)
{
	operator[i].addEventListener('click',function(){
		//alert("The operator clicked :"+this.id);
		if(this.id=="clear"){
			printHistory("");
			printoutput(""); 
		} 
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getoutput()).toString();
			if(output){
				output=output.substr(0,output.length-1);
				printoutput(output);
			}
		}
		else{
			var output=getoutput();
			var history=getHistory();
			if(output!=""){
				output=reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printoutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printoutput("");
				}
			}
		}
	});
}

var number=document.getElementsByClassName("number");
for(var i=0; i<operator.length ; i++)
{
	number[i].addEventListener('click',function(){
		//alert("The number clicked :"+this.id);
		var output=reverseNumberFormat(getoutput());
		if(output!=NaN){
			output=output+this.id;
			printoutput(output);
		}

	});
}
