// get the date from the input field
function start() {
//    document.getElementById('start').addEventListener('click',function(){
    const dateInput = document.getElementById('birthday').value
    if (dateInput){
        const targetDate = new Date(dateInput).getTime();
    const counDownInterval =setInterval(function() {
    const now = new Date().getTime()
    const timeDistance = targetDate -now;
    var days =Math.floor(timeDistance/1000/60/60/24) 
var hours = Math.floor((timeDistance%(1000*60*60*24))/1000/60/60)
 var minutes = Math.floor((timeDistance%(1000*60*60))/1000/60)
 var seconds = Math.floor((timeDistance%(1000*60))/1000)
 var milliseconds= Math.floor(timeDistance%1000)/10;
//  document.getElementById('days').innerHTML=days
//  document.getElementById('hours').innerHTML=hours
//  document.getElementById('seconds').innerHTML=seconds
//  document.getElementById('milliseconds').innerHTML=milliseconds

        
       
        // message=`${days}`
 document.getElementById("demo").innerHTML = `${days} days ${hours} hrs ${minutes} mins ${seconds} secs ${milliseconds} millisec`;

 if (timeDistance<0){
    clearInterval(counDownInterval);
    document.getElementById('demo').innerHTML="expired"}},100);}};

// 


// // start the countdown
// function start() {

//     // Set the date we're counting down to
//     const x = document.getElementById("birthday").value;
//     var countDownDate = new Date('x').getTime()
//     // Update the count down every 0.1 second
//  setInterval("runClock()",1000)
//         // Get today's date and time
// var now=new Date().getTime()
//         // Find the distance between now and the count down date
//         var timeDistance = countDownDate - now
//         // Time calculations for days, hours, minutes and seconds
//         var days =Math.floor(timeDistance/1000/60/60/24) 
//         var hours = Math.floor((timeDistance%(1000*60*60*24))/1000/60/60)
//         var minutes = Math.floor((timeDistance%(1000*60*60))/1000/60)
//         var seconds = Math.floor((timeDistance%(1000*60))/1000)
//         // Output the result in an element with id="demo"
//         console.log('days:',days)
//         console.log('hours:',hours)
//         console.log('minutes:',minutes)
//         // If the count down is over, write some text 
        

// var countdown
// function countdownDate(){
//     formDate=document.getElementById('birthday').value;
//     var countDownDate= new Date(formDate).getTime()
// }
// clearInterval(countdown);
// countdown=setInterval(function(){
//     var hours = Math.floor((timeDistance%(1000*60*60*24))/1000/60/60)
//  var minutes = Math.floor((timeDistance%(1000*60*60))/1000/60)
//  var seconds = Math.floor((timeDistance%(1000*60))/1000)
//  var milliseconds= Math.floor((timeDistance%1000)/100);
//  document.getElementById('demo')=
// })