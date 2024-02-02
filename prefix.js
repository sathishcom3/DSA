evaluatePreFix("1 2 3 * + 4 +");

function evaluatePreFix(str) {
    let expString  = str.split(" ");
    let stack = [];
    let operators = ['+','-','*','/','%'];
    
    for(let i=0; i< expString.length && expString[i] !== " " ; i++) {
        if(operators.includes(expString[i])  && stack.length !=0)  {
            let operand1= stack.pop();
            let operand2 = stack.pop();
            let res = eval(`${operand1} ${expString[i]} ${operand2}`)
            stack.push(res);
        }else {
            stack.push(expString[i]);
        }
    }
    console.log("stack ", stack);
}
