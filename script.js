const fanOff = document.getElementById("off");
const speedOne = document.getElementById("one");
const speedTwo = document.getElementById("two");
const speedThree = document.getElementById("three");
const speedControl = document.getElementById("fan-mid");

speedOne.addEventListener('click', function(){
    speedControl.style.webkitAnimationDuration = ".5s";
    speedControl.style.webkitAnimationIterationCount = "infinite";
    speedControl.style.msAnimationDuration = ".5s";
    speedControl.style.msAnimationIterationCount = "infinite";
});
speedTwo.addEventListener('click', function() {
    speedControl.style.webkitAnimationDuration = ".3s"
    speedControl.style.webkitAnimationIterationCount = "infinite";
});
speedThree.addEventListener('click', function() {
    speedControl.style.webkitAnimationDuration = ".2s"
    speedControl.style.webkitAnimationIterationCount = "infinite";
});

fanOff.addEventListener('click', function () {
    speedControl.style.webkitAnimationIterationCount = "0";
});