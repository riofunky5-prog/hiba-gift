// Loading Screen
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
};

// =========================
// Typing Effect
// =========================

const text =
`Every flower blooms in its own time...

But meeting you made my heart bloom.

Thank you for being in my life ❤️`;

let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 50);

    }

}

typing();

// =========================
// Music
// =========================

const music = document.getElementById("music");

document.getElementById("open").onclick = () => {

    music.play();

    document.querySelector(".love-letter").scrollIntoView({

        behavior: "smooth"

    });

};

// =========================
// Relationship Counter
// =========================

// بدل التاريخ بالتاريخ الحقيقي ديالكم

const startDate = new Date("2025-08-01");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("timer").innerHTML =

        `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

}

setInterval(updateCounter,1000);

updateCounter();

// =========================
// Floating Hearts
// =========================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    let pos=100;

    const interval=setInterval(()=>{

        pos--;

        heart.style.top=pos+"vh";

        heart.style.opacity=pos/100;

        if(pos<0){

            clearInterval(interval);

            heart.remove();

        }

    },25);

}

setInterval(createHeart,500);

// =========================
// Stars Background
// =========================

const canvas=document.getElementById("stars");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let stars=[];

for(let i=0;i<250;i++){

    stars.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        r:Math.random()*2

    });

}

function drawStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    stars.forEach(s=>{

        ctx.beginPath();

        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

        ctx.fill();

    });

    requestAnimationFrame(drawStars);

}

drawStars();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});
