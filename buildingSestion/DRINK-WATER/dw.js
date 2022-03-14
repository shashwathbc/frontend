const smallCups = document.querySelectorAll(".cup-small");  // since we r selecting all the cups 
const literss =  document.getElementById("liters");
const percentage =  document.getElementById("percentage");  // one to fill the big cup
const remained =  document.getElementById("remained");


// big cup:
updateBigCup();


smallCups.forEach((cup , idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
    console.log(idx);
})


function highlightCups(idx){
    // useed so that whn clicked again it will remove water frm small cups (empty cups functinality)
if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full"))
    {
       idx --;
    }

// done to fill the cups accordingly  (fill cups functionality)
    smallCups.forEach((cup , idx2) => {
                     if(idx2 <= idx){
                         cup.classList.add('full')
                     }else{
                         cup.classList.remove("full")
                     }
    })
    updateBigCup();
}



function updateBigCup(){
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    // to make the percentage hidden when thr is no water in the big cup
    if(fullCups === 0){
        percentage.style.visibility = "hidden";
        percentage.style.height =0;
    }else{
        percentage.style.visibility="visible";
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText =`${fullCups / totalCups * 100}%`
    }
    
    if(fullCups === totalCups){
        remained.style.visibility ="hidden";
        remained.style.height =0;
    } else{
        remained.style.visibility ="visible";
        literss.innerText = `${2 -(250 * fullCups / 1000)} Liters`
    }
}







//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//or:

// const bigcup = document.getElementById("cup")
// const liters = document.getElementById("liter")
// const smallcups = document.querySelectorAll(".cup-small")
// const percentage = document.getElementById("percentage")
// const remain = document.getElementById("remained")

// function smallcupbgcolor(index){
//    	for(var i = 0; i <index+1; i++){
//         smallcups[i].style.backgroundColor = "#6ab3f8";
    
// 	}
    
//    smallcups[index].addEventListener('click', ()=>{
//         if(smallcups[index].style.backgroundColor === '#6ab3f8'){
//             smallcups[index].style.backgroundColor='#fff';
//         }else{
//             smallcups[index].style.backgroundColor = "#6ab3f8";
           
//         }
//      })
//     bigcupcalculation(index)
// }

// function removebg(index){
//     for(let i = index+1;i<smallcups.length;i++){
//         smallcups[i].style.backgroundColor = "#fff";
//        }

// }

// function bigcupcalculation(index){
//     const filledsmallcups = index +1;
//     const totalcups = smallcups.length;
//     if(bigcup === 0 ) {
//     percentage.style.visibility = "hidden";
//     percentage.style.height = 0;
//   } else {
//     percentage.style.visibility = "visible";
//     percentage.style.height = `${filledsmallcups / totalcups * 350}px`;
//     percentage.innerText = `${filledsmallcups / totalcups * 100}%`;
//   }
//   if(filledsmallcups === totalcups){
//       remain.style.visibility = "hidden";
//       remain.style.height = 0;
//   }
//   else{
//     remain.style.visibility = "visible";
//     remain.innerText = `${2-(250*filledsmallcups/1000)}L`;
//   }


// }
  

// for(i=0; i < smallcups.length; i++) {

//   smallcups[i].index = i;

//   smallcups[i].addEventListener('click', function(e) {
    
//     smallcupbgcolor(e.target.index)
//     removebg(e.target.index)
    
//   }, false);
// }



//or:
// let smallCup =document.querySelectorAll('.smallCup')
// let filledGlass = document.getElementById('filledGlass')
// let cup = document.getElementById('cup')
// smallCup.forEach(smallCup=>{
//     smallCup.addEventListener('click',()=>{
//         emptyGlass()
//         filledGlasses(smallCup.id)
//     })
// })
// function emptyGlass(){
//     smallCup.forEach(smallCup=>{
//         smallCup.classList.remove('filled')
//     })
// }
// function filledGlasses(number){
//     for(let i =0;i<number;i++){
//         smallCup[i].classList.toggle('filled')
//     }
// largeGlass(number)
// }
// function largeGlass(number){
//     let height = (number)/8*100;
//     filledGlass.style.height=height+'%'
//     if(height === 100){
//         cup.innerText=''
//     filledGlass.style.height=height+'%'


//         filledGlass.innerText='Filled'
//     }
//     else{
//         cup.innerText=`${height}% Filled`
//         filledGlass.innerText=''
//     }
// }



