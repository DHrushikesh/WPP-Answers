// Day 1 -  Question 
// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10  : 30 : 38 PM

// ----------------------------------------------------------------------------------------

// ANS

const today = new Date();
const day= today.getDay();
dayslist=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log("Today is : "+ dayslist[day])

let timeh = today.getHours();
let timem = today.getMinutes();
let times = today.getSeconds();
let amorpm ;
if(timeh>=12){
    timeh=Math.abs(12-timeh)
    amorpm = "PM"
}
else{
    amorpm = "AM"
}
let timemi = (timem<10)?"0"+timem:timem;
let timese = (times<10)?"0"+times:times;

console.log("Current Time is : "+timeh+":"+timemi+":"+timese+":"+amorpm);
