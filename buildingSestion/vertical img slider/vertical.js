const sliderContainer = document.querySelector(".slider-container");

const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const slideLength = slideRight.querySelectorAll("div").length;


let activeSlideIndex =0;

slideLeft.getElementsByClassName.top = `-${(slideLength-1)*100}vh`

upButton.addEventListener("click" , () => changeSlide("up"));
downButton.addEventListener("click" , () => changeSlide("down"));



const changeSlide =(direction) =>{
    const sliderHeight = sliderContainer.clientHeight;

    if(direction === "up"){
        activeSlideIndex++;
        if(activeSlideIndex > slideLength-1){
            activeSlideIndex=0
        }
     }else if(direction === "down"){
         activeSlideIndex--;
         if(activeSlideIndex<0){
             activeSlideIndex = slideLength-1;
         }
     }
     slideRight.getElementsByClassName.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`
     slideLeft.getElementsByClassName.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`
    
}