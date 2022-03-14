// setTimeout(funname, time , urdata)

//setInterval: calling set timeout repeatedly
//clearInterval(func name in which we have setInterval)

let i=1;
setInterval(function(){
    func(i++)
   
},1000)



let i=1;
setTimeout(function run(){
    func(i++)
    setTimeout(run,1000)
},1000)