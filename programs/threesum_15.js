const threesum = (arrp) => {
    if(arrp && arrp.length < 3 ) return [];
    let arr = arrp.sort();
    console.log(arr)
    let result = []
    for (let i = 0; i < arr.length - 2; i++) {

        let left = i+1
        let right = arr.length - 1

        while(left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if(sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse)
}
console.log(threesum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
// doesnt satisfy this condition
