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

// wait for the page to load until it shows

var prom = document.getElementById('prom')

var url = "cars.html";
// function of a object
var carObject = {
name : 'Ferrari',
speed : '100km/hr',
carcb :function (){
    console.log(this.speed)
}
}
carObject.carcb()


// function to get the request from server and wait for callback to run
function carwebsite(cb){
    let req = new XMLHttpRequest();
    req.open('GET',url);
    req.onload = function(){
        if(req.status = 200) {
            cb(this.responseText)
        } else{
            cb('Error: Someting Went wrong')
        }
    }
    req.send()
}

function callback(resulthtml){
    prom.innerHTML = resulthtml
}

carwebsite(callback)