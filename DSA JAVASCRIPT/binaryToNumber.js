function bn(binaryStr ){
    let muktiplier =1;
let num=0;
    for(let i=binaryStr.length-1;i>=0;i--){
        num = num +parseInt(binaryStr[i])* muktiplier;
        muktiplier=muktiplier*2;
    }
return num;

}

console.log(bn("10010"));


// other method
//dec to binary
console.log((18).toString("2"));
// binary to decimal
console.log(parseInt("10010",2));