const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")

const text = "we love programming!";

let idx =0;

writeText()

function writeText(){
    textEl.innerHTML = text.slice(0,idx)

    idx++
    if(idx>text.length){
        idx=1
    }
    setTimeout(writeText,200)
}

