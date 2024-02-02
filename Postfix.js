
evaluatePostFix("+ + 10 * 20 30 40");

function evaluatePostFix(str) {
    let expString  = str.split(" ");
    let stack = [];
    let operators = ['+','-','*','/','%'];
    
    for(let i=expString.length-1 ; i >=0 && expString[i] !== " "; i--) {
        if(operators.includes(expString[i]) && stack.length !=0)  {
            let operand1= stack.pop();
            let operand2 = stack.pop();
            let res = eval(`${operand1} ${expString[i]} ${operand2}`)
            stack.push(res);
        }else if(expString[i] !== " ") {
            stack.push(expString[i]);
        }
    }
    console.log("stack ", stack);
}
