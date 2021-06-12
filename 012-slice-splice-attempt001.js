/*
Slice and Splice
You are given two arrays and an i.
Copy each element of the first array into the second array, in order.
Begin inserting elements at i n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.

frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
*/

function frankenSplice(arr1, arr2, n) {

    const finalArray = []

    for (let i = 0; i < arr2.length; i++) {
        finalArray.push(arr2[i])
        
    }

    for (let i = arr1.length - 1; i >= 0; i--) {
        finalArray.splice(n, 0, arr1.slice()[i])

    }
    console.log(finalArray)
    
    return finalArray;

  }
  
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);