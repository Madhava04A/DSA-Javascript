/////////               Search Alogorithms              //////////

////        Linear Search       ////

// let n = [1,2,3,4,5,6];
// let t = 9;

function linearSearch(x){
    for(let i = 0; i < x.length; i++){
        if(x[i] === t){
            return console.log(i);
        }
    }
    return console.log(-1)
}

//  linearSearch(n) = -1  for the above value of 'n' and 't';

////        Binary Search       ////

let n = [1,2,3,4,5,6,7,9,10,12];
let t = 10;
function binarySearch(x){
    let leftIndex = 0;
    let rightIndex = x.length;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(x[middleIndex] === t){
            return console.log(middleIndex);
        }
        if(t < x[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1;
        }
    }
    return console.log(-1)
}

////        Recursive Binary Search         ////

function recursiveBinarySearch(n,t,leftIndex = 0,rightIndex = n.length - 1){
    // return search(n,t,0,n.length - 1);
    if(leftIndex > rightIndex){
        return console.log(-1);
    }
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(n[midIndex] === t){
        return console.log(midIndex);
    }
    if(n[midIndex] > t){
        rightIndex = midIndex - 1;
        return recursiveBinarySearch(n,t,leftIndex,rightIndex);
    }else{
        leftIndex = midIndex + 1;
        return recursiveBinarySearch(n,t,leftIndex,rightIndex);
    }
}

// function search(n,t,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return console.log(-1);
//     }
//     let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if(n[midIndex] === t){
//         return console.log(midIndex);
//     }
//     if(n[midIndex] > t){
//         return search(n,t,leftIndex,midIndex - 1);
//     }else{
//         return search(n,t,midIndex + 1,rightIndex);
//     }
// }
let x = [1,2,3,4,5,6,7,8,9,10];
// recursiveBinarySearch(x,4); output = 3
// recursiveBinarySearch(x,8); output = 7
// recursiveBinarySearch(x,1); output = 0
