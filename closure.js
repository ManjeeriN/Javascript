const x = () => {
    for (let index = 1; index <= 5; index++) { //  1 2 4 5
        //for (var index = 0; index < 5; index++) { // 5 5 5 5 5 
        setTimeout(() => {
            console.log(index)                  
        }, 1000);  
    }
}
// x();

// if i want to print using var
const y = () => {
    for(var i = 1;i<=5;i++){
        close(i)
    }
}

function close(x){
    setTimeout(() =>{
        console.log(x)
    },1000)
}
// y();
// closure example = function with its lexical scope remembered
function a() {
    var first = 1;
    function b(){
        console.log(first)
    }
    return b;
}


var z = a()
z()


function callfun(){
    for(let a=1;a<5;a++){
        setTimeout(()=>{
            console.log(a)
        },a*1000);
    }
}

callfun()

function callfun2(){
    for(var i = 1;i<=5;i++){
        function print(x){
            setTimeout(()=>{
                console.log(x)
            },x*1000)
        }
        print(i)
    }
}
callfun2()



















