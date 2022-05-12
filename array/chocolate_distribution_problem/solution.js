// Given an array of n integers where each value represents the number of chocolates in a packet.
// Each packet can have a variable number of chocolates.
// There are m students, the task is to distribute chocolate packets such that: 

// Each student gets one packet.
// The difference between the number of chocolates in the packet with maximum chocolates and packet with minimum chocolates given to the students is minimum.

const chocolateDistributionProblem = (array , numberOfStudents) => {
    const arrayLength = array.length;
    if(arrayLength === 0 || numberOfStudents === 0) return 0;

    let minimumDifference = Number.MAX_VALUE;
    const sortedArray = array.sort((a,b) => a - b);
    
    if(arrayLength < numberOfStudents) return -1;
    for(let i = 0; i + numberOfStudents - 1 < arrayLength; i++){
        let difference = sortedArray[i + numberOfStudents - 1] - sortedArray[i];
        if(difference < minimumDifference) minimumDifference = difference;
    }

    return `minimumDifference = ${minimumDifference}`;

}

console.log(chocolateDistributionProblem([ 12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50 ], 7));
console.log(chocolateDistributionProblem([1], 2));