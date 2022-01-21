const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
// const msHand = document.querySelector(".min-hand");




function setTime(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    // const ms = now.getMilliseconds();

    // const msDegrees = (ms/1000)*360+90;
    // msHand.style.transform =`rotate(${msDegrees}deg)`;
    
    const secDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform =`rotate(${secDegrees}deg)`;


    const minDegress = (minutes/60*360)+90;
    minHand.style.transform = `rotate(${minDegress}deg)`

    const hourDegrees = (hours/12*360)+90;
    hourHand.style.transform =`rotate(${hourDegrees}deg)`
}
setInterval(setTime,1000)
setTime()





















