

const game = (rolls) => {
    let score =0;
    let rollIndex =0;

    for(let frameIndex=1;frameIndex<=10;frameIndex++){        //frameindex is our chance 
        //strike
        if(rolls[rollIndex]===10){
            score+=10 + rolls[rollIndex+1]+rolls[rollIndex+2];
            rollIndex++;
        }else{
            //spare:
        let frameScore = rolls[rollIndex] + rolls[rollIndex+1];
        if(frameScore===10){
            //spare:
            score+=10+rolls[rollIndex+2];
        }else{
            //normal:
            score+=frameScore
        }
        rollIndex+=2;
        }
    }
    return score;
}
const rolls = [10,2,8,5,5,4,2,3,4,9,0,0,10,2,8,4,3,10,5,2];
console.log(game(rolls));