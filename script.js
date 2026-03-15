const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars=[];

for(let i=0;i<200;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
alpha:Math.random(),
speed:Math.random()*0.02

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(s=>{

s.alpha += s.speed;

if(s.alpha>=1 || s.alpha<=0){
s.speed *= -1;
}

ctx.beginPath();
ctx.arc(s.x,s.y,s.size,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,"+s.alpha+")";
ctx.fill();

})

requestAnimationFrame(draw);

}

draw();

/* resize */

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

})

/* click sound */

function clickSound(){

document.getElementById("click").play()

}function goMembers(){

let sound = document.getElementById("clickSound")

sound.currentTime = 0
sound.play()

setTimeout(()=>{
window.location.href="members.html"
},200)

}

function goShop(){

let sound = document.getElementById("clickSound")

sound.currentTime = 0
sound.play()

setTimeout(()=>{
window.location.href="shop.html"
},200)

}