console.log('Asynchronous Javascript')
// show timer 
var p = document.getElementById('timer');
// call every 1 sec
setInterval(showTimer,1000)
// function to get the current time
function showTimer(){
    let currentDateTime = new Date();
    let currentTime = currentDateTime.getHours() + ":" + currentDateTime.getMinutes()+ ":" + currentDateTime.getSeconds()
    p.innerText = currentTime
}