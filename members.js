function searchMember(){

let input = document.getElementById("search").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

let name = card.querySelector(".name").innerText.toLowerCase();

if(name.includes(input)){

card.style.display="block";

}else{

card.style.display="none";

}

})

}/* SEARCH */

function searchMember(){

let input=document.getElementById("search").value.toLowerCase()

let members=document.querySelectorAll(".member-row")

members.forEach(function(member){

let name=member.innerText.toLowerCase()

if(name.includes(input)){
member.style.display="flex"
}else{
member.style.display="none"
}

})

}


/* STARS BACKGROUND */

const canvas=document.getElementById("stars")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<120;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
alpha:Math.random(),
speed:Math.random()*0.02
})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

stars.forEach(s=>{

s.alpha+=s.speed

if(s.alpha>=1 || s.alpha<=0){
s.speed*=-1
}

ctx.fillStyle="rgba(255,255,255,"+s.alpha+")"

ctx.beginPath()
ctx.arc(s.x,s.y,s.size,0,Math.PI*2)
ctx.fill()

})

requestAnimationFrame(animate)

}

animate()