console.log('Array Function');
// create array from string
const arr1 = Array.from('ABCDEFGH')
// console.log(arr1)
//------------------------------
const arr2 = ['5','6']
// get the keys of array
const keys = arr2.keys()
let text = "";
for (let x of keys) {
  text += arr1[x] + "<br>";
}
// console.log(text)
//---------------------

function searchFunction (value,index,array){
    return value > 5
}
const res = arr2.find(searchFunction)
const resIndex = arr2.findIndex(searchFunction)
console.log(resIndex) //1
// console.log(res) //6