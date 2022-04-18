console.log('setTimeout Issues')

console.log('Start')

setTimeout(
()=>{
    console.log('callback')
}
,0) // setTimeout always waits irrespective of time

console.log('End')
// output:
 //Start
 //End
 //callback