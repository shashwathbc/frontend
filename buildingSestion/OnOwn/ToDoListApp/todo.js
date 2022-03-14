const form = document.getElementById("form");
const input = document.getElementById("input")
const todosUL =document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem("todos"))

// const todos =[
//     {
//         text:"ABC",
//         completed : true
//     },
//     {
//         text: "DEF",
//         completed : false
//     }
// ]


// show value  even whn refreshed
if(todos){
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener("submit",(e)=>{    // e = event which will go to form (action) here it goes to addtodo()
    e.preventDefault()
    addTodo()

})


function  addTodo(todo){
let todoText = input.value;
// show value  even whn refreshed
if(todo){
    todoText = todo.text
}
//
if(todoText){                    // if whn emty thn clicked enter this will be done so nothng will get listed
    const todoEL = document.createElement("li") // creates a li element a c
     //show value  even whn refreshed
    if(todo && todo.completed){
        todoEL.classList.add("completed")
    }

    todoEL.innerText = todoText;

    // this is for cancel 
    todoEL.addEventListener("click",()=>{               // left click and right click
        todoEL.classList.toggle("completed")           
        updateLS()
    })
    // this is for removing
    todoEL.addEventListener("contextmenu",(e)=>{         // right click remove
        e.preventDefault()

        todoEL.remove()
        updateLS()
    })
    // todoEL.innerText = todoText;
    
    todosUL.appendChild(todoEL);
    input.value=""                 // input will keep staying

    updateLS()

  }


}


// for storinjg in local storage and whn loaded for first time get todos from local storage and show thm
// local storage can store only strings 
function updateLS(){
   const  todoELs = document.querySelectorAll("li")
  const   todos =[]
    todoELs.forEach(todoEL =>{
        todos.push({
            text: todoEL.innerText,
            isCompleted: todoEL.classList.contains("completed")
        })
    })
    localStorage.setItem("todos", JSON.stringify(todos));   // updates in local storage
}










