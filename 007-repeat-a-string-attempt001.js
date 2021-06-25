/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/


function repeatStringNumTimes(str, num) {
    const repeat = []

    if (num > 0) {
        for (let i = 0; i < num; i++) {
            repeat.push(str)
        }

        repeat.join("")
        let stringed = repeat.toString()
        stringed = stringed.replace(/,/g, "")
        return stringed
    }
  
    return "";

}
  
  console.log(repeatStringNumTimes("abc", 4));