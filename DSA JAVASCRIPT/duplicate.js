// function toFindDuplicates(arry) {
//     const uniqueElements = new Set(arry);
//     const filteredElements = arry.filter(item => {
//         if (uniqueElements.has(item)) {
//             uniqueElements.delete(item);
//         } else {
//             return item;
//         }
//     });

//     return [...new Set(uniqueElements)]
// }

// const arry = [1, 2, 1, 3, 4, 3, 5];
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);

const a = [4,3,6,3,4,3]

function count_duplicate(a){
    let counts = {}
   
    for(let i =0; i < a.length; i++){ 
        if (counts[a[i]]){
        counts[a[i]] += 1
        } else {
        counts[a[i]] = 1
        }
       }  
       for (let prop in counts){
           if (counts[prop] >= 2){
               console.log(prop + " counted: " + counts[prop] + " times.")
           }
       }
     console.log(counts)
   }
   
   count_duplicate(a);