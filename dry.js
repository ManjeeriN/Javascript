console.log('Donot Repeat Yourself')

// use same function for diff operation

const radius = [2,4,6]

const area = (r) => {
    return Math.PI * r * r;
}

const circumference = (r) => {
    return 2*Math.PI*r
}

const diameter = (r) => {
    return 2*r
}

const calculate = (radiusArr,operation) => { // higher order function
    let resultArr = []
    for(r of radiusArr){
        resultArr.push(operation(r))
    }
    return resultArr
}

let areaArr = calculate(radius,area)
let circumferenceArr = calculate(radius,circumference)
let diameterArr = calculate(radius,diameter)

console.log(areaArr,circumferenceArr,diameterArr)