/* 
Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWordLength(str) {
    let newArray = str.split(" ")
    let findLongestWordLength = 0
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].length > findLongestWordLength) {
            findLongestWordLength = newArray[i].length
        }
    }
    return findLongestWordLength
}
  
console.log(findLongestWordLength("May the force be with you")) 
