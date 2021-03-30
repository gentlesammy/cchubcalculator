
//get output value
function getOutputValue () {
  return  document.querySelector(".output_value").innerText;
}
//print output value #format it to thousand if number is not null
function printOutput(num){
    if(num == ""){
        document.querySelector(".output_value").innerText = num;
    }else{
        document.querySelector(".output_value").innerText = formatOutputNumber(num);
    }
    
}
//get history value 
function getHistoryValue () {
  return  document.querySelector(".history_value").innerText;
}
//print history value
function printHistory(num){
    document.querySelector(".history_value").innerText = num;
}
//function to format number typed to thousands
function formatOutputNumber(num){
    if(num == "-"){
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}
//reverse number conversion to original for calculation purpose
function getOriginalNumber(num){
    return Number(num.replace(/,/g, ''));
}
//get the operands and display as it is clicked
let operands = document.querySelectorAll(".operand");
operands.forEach((opd) => {
  opd.addEventListener('click', () => {
      var output = getOriginalNumber(getOutputValue());
      if(output !=NaN){
          output = output + opd.id;
          printOutput(output)
      }
  });
});
//get the operators, carry out operations 
let operators = document.querySelectorAll(".operator");
operators.forEach((opr) => {
  opr.addEventListener('click', () => {
    if(opr.id == "clear"){
        printOutput("");
        printHistory("");
    }else if(opr.id == "backspace"){
        let 
        output= getOriginalNumber(getOutputValue()).toString();
        if(output){
            output = output.substr(0, output.length - 1);
            printOutput(output);
        }
    }
    else{
        let output = getOutputValue();
        let history = getHistoryValue(); 
        if(output == "" && history != ""){
            if(isNaN(history[history.length-1])){
                history = history.substr(0, history.length-1)
            }
        }
        if(output != "" || history != ""){
            output = output == "" ?  output : getOriginalNumber(output);
            history = history + output;
            if(opr.id == "="){
                let result =eval(history)
                console.log("res", result)
                printOutput(result)
                printHistory("")
            }else{
                history = history + opr.id;
                 printOutput("")
                printHistory(history)
            }
        }else{
            alert("nullndnhdh")
        }
    }
  });
});

