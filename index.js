/* 1. Array creation and Intialization
   2. Array Manipulation=(Add and remove element)
   3. Array Searching
   4. Array merging
   5. Array sorting
   6. Array Joining and Splitting
   7. Max and Min

*/

let a=[5,2,3,1,10]
let b=[7,8,6,9,4]
console.log("Array:",a)
a.push(20)
a.pop()
console.log("Manipulated Array:",a)
let index=a.indexOf(3)
console.log("Index value of 3:",index)
merge=[...a,...b]
console.log("Merged Array:",merge)
console.log("Sorted Array:",merge.sort())
let newStr=merge.join("")
console.log("Joined:",newStr)
let split=newStr.split("")
console.log("Splitted:",split)
let Max=Math.max(...split)
console.log("Max value:",Max)
let Min=Math.min(...split)
console.log("Min value:",Min)


