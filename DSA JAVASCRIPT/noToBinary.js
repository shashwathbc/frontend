function noToBinary(num){
    
let bs = "";

while(num>0){
    let rem = num%2;
    bs = rem.toString() + bs;
    num = Math.floor(num/2)
}

return bs;

}
console.log(noToBinary(18));