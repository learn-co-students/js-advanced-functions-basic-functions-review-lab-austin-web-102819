// Your code here
function saturdayFun(input="roller-skate") {
    return `This Saturday, I want to ${input}!`
};

let mondayWork = function(a="go to the office") {
    return `This Monday, I will ${a}.`
};

function wrapAdjective(notation="*") {
    let inner = function(adj="special") {
      return `You are ${notation}${adj}${notation}!`  
    }
    return inner
}

let encouragingPromptFunction = wrapAdjective("!!!");

const Calculator = {
    add(num1, num2) {
        return num1 + num2
    }, 
    subtract(num1, num2) {
        return num1 - num2
    },
    multiply(num1, num2) {
        return num1 * num2
    },
    divide(num1, num2) {
        return num1 / num2
    }
}


let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }
// function actionApplyer(base, Calculator) {
//     if (Calculator = {}) 
//         return base
//     else
//     let inner1 = func Calculator.multiply(base, 2)
//     y = Calculator.add(base, 1000)  
//     return y % 7 
// };



//suppose int = 13,

// 13 * 2 = 26 
// 26 + 1000 = 1026
// 