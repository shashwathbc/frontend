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

// in the assignment if i want the previous color entered to stay as it is 

function changeColor(){
    const blockId = document.getElementById("block_id");
    const colorId = document.getElementById("color_id");
     
    if(!blockId.value){
        alert("pleace enter block id");
    }
    if(!colorId.value){
        alert("please enter color id");
    }
    // resets the previous color: if not added then all previous color will keep thr only:
    resetGrid();
    
    //
    const gridItem = document.getElementById(blockId.value)
    gridItem.style.backgroundColor = colorId.value;


    // this will reset when once a color is changed
    blockId.value ="";
    colorId.value ="";
}