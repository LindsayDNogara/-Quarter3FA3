
function favsport() {
let sports=["Ultimate Disk","Basketball","Badminton"]
let num1 = Math.ceil(Math.random() * 20);
let num2 = Math.ceil(Math.random() * 20);
let num3 = Math.ceil(Math.random() * 20);
let numbers = [num1, num2, num3]

document.getElementById("n1-box").innerText = num1;
document.getElementById("n2-box").innerText = num2;
document.getElementById("n3-box").innerText = num3;


let largest=Math.max(num1,num2,num3);
let topsport = sports[numbers.indexOf(largest)];
document.getElementById("topsport").innerText = `${topsport} (${largest})`;

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let n1thletter = num1 <= 26 ? alphabet[num1 - 1] : "Invalid";
document.getElementById("n1thletter").innerText = n1thletter;

let totalmin=num2*num3;
let hour = Math.floor(totalmin / 60);
let min=totalmin%60;
let time=hour+ "hr "+min+ "min";
let displaytime=`(${totalmin} mins) ${hour}hr ${min}min`
document.getElementById("time").innerText = displaytime;

}

