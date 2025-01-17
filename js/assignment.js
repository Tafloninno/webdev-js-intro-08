"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];


function findSmallestNumber(myNumbers){
    let minNum = myNumbers[0]
    for(let i = 1; i < myNumbers.length; i++){
        if(myNumbers[i] <= minNum){
            minNum = myNumbers[i]
        }
    }
    return minNum
    
}
// let test1 = findSmallestNumber(myNumbers)
// console.log(test1);

function findLargestNumber(arr){
    let largest = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
    
}

let test2 = findLargestNumber(myNumbers)
console.log(test2);

function findAverage(arr){
    let sum = 0
    let count;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] 
        count = arr.length
    }
    return sum / count
}
// let test3 = findAverage(myNumbers)
// console.log(test3);

function render(){
    smallestNumberElement.innerText = findSmallestNumber(myNumbers)
    largestNumberElement.innerText = findLargestNumber(myNumbers)
    averageNumberElement.innerText = findAverage(myNumbers)
}

submissionBtn.addEventListener('click', function(){
    render()
})