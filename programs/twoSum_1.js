const twoSum = (numArr, total) => {
    if(numArr.length === 0) return 'Please provide numbers';
    let result = []
    for (let i = 0; i <= numArr.length; i++) {
        for (let j = 1; j < numArr.length; j++) {
            if( (i !== j) && (total === numArr[i] + numArr[j])) {
                result.push(i, j)
                break;
            }
        }
        if(result.length === 2) break;
    }
    return result;
}

// time complexity O(n2)

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum(nums, target));


// another way optimized

const twoSumIndexes = (numArr, total)=> {
    const newSet = new Set();// create a empty hash map
    for(let [index, num] of numArr.entries()) {
        // loop through all the numbers till you get the other number
        let remainder = total - num;
        // find what should be other num as compared to current
        if(newSet.has(remainder)) {
            // if hashmap has 2nd number return the current and 2nd number
            return [index, numArr.indexOf(remainder)]
        }
        // add the current to hashmap to be compared next time
        newSet.add(num)
    }
}

// time complexity O(n)
console.log(twoSumIndexes(nums, target));
