function infixToPostfix(expr) {
    let postfix = '' // result expression in postfix
    let stck = [] // stack
    //'a+(b*c)+d'

    for (i = 0; i <= expr.length; i++) {
        let curr = expr[i];
        if(validateOperand(curr)) {
            postfix += curr;
        }
        else if( curr === '(' ) {
            stck.push(curr)
        }
        else if ( curr === ')') {
            while ((stck.length > 0) && (stck[stck.length - 1] !== '(')){
                postfix += stck.pop()
            }
        }
        else {
            while ((stck.length > 0)  &&
            (preceedance(stck[stck.length-1]) >= preceedance(curr) )
            ) {
                postfix += stck.pop()
            }
            stck.push(curr)
        }
    }

    while (stck.length-1 > 0) {
        postfix += stck.pop()
    }

    return postfix;
}

const validateOperand = (operand) => {
    if (
        (operand >= 'a' && operand <= 'z') ||
        (operand >= 'A' && operand <= 'B') ||
        (operand >= '0' && operand <= '9')
    ) {
        return true;
    }
    return false;
}

const preceedance = (op) => {
    const operators = ['*', '^', '/', '+', '-'];
    let priority = -1;
    if(operators.indexOf(op) > -1) {
        switch (op) {
            case '^':
                priority = 3;
                break;
            case '*':
                priority = 2;
                break;
            case '/':
                priority = 2;
                break;
            case '+':
                priority = 1;
                break;
            case '-':
                priority = 1;
                break;
        
            default:
                priority = -1;
                break;
        }
    }
    return priority;
}
const str = 'a+b^c*2+d'; // Postfix if a+b^c*2+d is abc^2*+d+
console.log(`Postfix if ${str} is ${infixToPostfix(str)}`);