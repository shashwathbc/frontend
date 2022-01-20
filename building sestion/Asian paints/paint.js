const reset = document.getElementById("reset_button")
const change = document.getElementById("change_button")


reset.addEventListener("click",resetGrid)
change.addEventListener("click",changeColor)

function resetGrid(){
    for(let i=1;i<=9;i++){
        const gridItem = document.getElementById(i)
        gridItem.style.backgroundColor = "transparent";
    }

}


function changeColor(){
    const blockId = document.getElementById("block_id");
    const colorId = document.getElementById("color_id");
     
    if(!blockId.value){
        alert("pleace enter block id");
    }
    if(!colorId.value){
        alert("please enter color id");
    }
    resetGrid()
    
    //
    const gridItem = document.getElementById(blockId.value)
    gridItem.style.backgroundColor = colorId.value;


    // this will reset when once a color is changed
    blockId.value ="";
    colorId.value ="";
}