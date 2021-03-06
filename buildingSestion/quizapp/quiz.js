const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const submitBtn = document.getElementById("submit")

const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")


let score =0;
let currentQuestion =0;

function loadQuiz(){
    deselectAnswer()
    const currentQuizData = quizData[currentQuestion]
    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    console.log(answer);
      return answer;
}

loadQuiz()


submitBtn.addEventListener("click", ()=>{
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++
        }
        currentQuestion++;

        if(currentQuestion<quizData.length){
              loadQuiz()
        }else{
            quiz.innerHTML =`
            <h2>
            You answered ${score}/${quizData.length} questions correctly
            </h2>
            <button onClick="location.reload()">Reload</button>
            `
            // quiz.innerHTML = `<p> Quiz Completed with score ${score}/${quizData.length} </p>`
        }

    }
})






// jdabkjdabgjadbgbadg

const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
let numberOfCircle = circles.length;

//NEXT
next.addEventListener("click",function(){
    currentActive++;

    if(currentActive >numberOfCircle){
        currentActive = numberOfCircle;
    }
    console.log(currentActive)
    uddateCSS();
})

//PREV
prev.addEventListener("click",function(){
    currentActive --;

    if(currentActive < 1){
        currentActive = 1;

    }
    console.log(currentActive)
    uddateCSS();

})

//enable Disable function
function enableDisable(){
    if(currentActive === 1){
        prev.disabled = true;
    }
    else if (currentActive === numberOfCircle){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}


//update css
function uddateCSS(){
    for(var i=0;i<numberOfCircle; i++){
        const  circle = circles[i];
        
        if(i<currentActive){
           circle.classList.add("active");

         }else{
            circle.classList.remove("active");
         }
    }

    const activexyz = document.querySelectorAll(".active");

    //calculate width
    //set progress bar width = formula for that
    const widthxyz = (activexyz.length-1)/(circles.length-1)*100;

    progress.style.width = widthxyz +"%";
    enableDisable();
}