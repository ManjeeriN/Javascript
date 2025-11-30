const findMax = (numArr = []) => {
    if (numArr.length === 0) {
        return 'Please provide numbers';
    }
    let max = numArr[0]
    for (i = 0; i <= numArr.length; i++) {
        if(numArr[i] > max) {
            max = numArr[i]
        }
    }
    return max;
}

console.log(findMax([]))
console.log(findMax([1,2,3,70,4,5,6]))
// js has function Math.max([..numArr])