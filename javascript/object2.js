// let arr = [1,2,5]
// arr[arr.length] =6;
// console.log(arr);



// let details ={
//     'name':'shash',
//     'country': 'india',
//     'cource': 'webdev',
// }


// adding new keys and values to an existing object
// details.techStack ="text";
// details.numberofhobby = 3;
// details.liketv = true;

// details.tectack =["text","jafsjk"];
// console.log(details);


// taking i/p frm user 1st method
let arr=[];
for(let i=0;i<3;i++){
    let x = Number(prompt("enter some number"))
    arr.push(x)
}
console.log(arr);

// taking i/p frm user 2st method
let x = prompt("whats up");
let arrinput = x.split(',');
console.log(arrinput);


document.getElementById("id").innerText = arr(object of arr);   // numbers[1,2,3,4] will display
document.getElementById("id").innerText = string(object of string);  // object[object,object] will display 
// if i want the strings[name , shash , place , india .....]
document.getElementById("id").innerText = JSON.stringify(object); 
// JSON = javascript ogject Notation (client is connected with server)
// transmitting data in web applications 
// (e.g., sending some data from the server to the client,
//  so it can be displayed on a web page, or vice versa).
// stringify will give key and value (convert object to string) and use it
// XML =  extensible markup lang





