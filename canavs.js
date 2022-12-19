let canvas = document.getElementById("canvas"),
    score1 = document.getElementById("score1"),
    score2 = document.getElementById("score2")
    result1 = 0,
    result2 = 0;

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

canvas.style.backgroundColor = "#0ff6";

let c = canvas.getContext("2d");

let yRect1 = 0,
    yRect2 = 0,
    dx = 12,
    dy = 12;

class Ball{
    constructor(){
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        this.radius = 17;
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        c.fill();
        c.stroke();
    }
    update(){
        if(this.x < 0 - this.radius * 2){
            result2++;
            score2.innerHTML = result2;
            ball1.x = window.innerWidth / 2;
            ball1.y = window.innerHeight / 2;
        }
        if(this.x > window.innerWidth + this.radius * 2){
            result1++;
            score1.innerHTML = result1;
            ball1.x = window.innerWidth / 2;
            ball1.y = window.innerHeight / 2;
        }
        if(this.y <= 0 + this.radius || this.y > window.innerHeight - this.radius){
            dy = -dy;
        }
        if(dx > 0){
            if(this.y >= yRect2 && this.y <= yRect2 + (window.innerHeight * 0.25) && this.x >= window.innerWidth - 15){
                dx = -dx;
            }
        }else{
            if(this.y >= yRect1 && this.y <= yRect1 + (window.innerHeight * 0.25) && this.x <= 0 + 15){
                dx = -dx;
            }
        }
        this.x += dx;
        this.y += dy;
        this.draw();
    }
}

let ball1 = new Ball();

function animation(){
    requestAnimationFrame(animation);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    c.fillRect(0,yRect1,15,(window.innerHeight * 0.25));
    c.fillRect((window.innerWidth - 15),yRect2,15,(window.innerHeight * 0.25));
    ball1.update();
}

window.addEventListener("keydown",function(e){
    if(e.code === "ArrowUp" || e.code === "KeyW"){
        if(dx < 0){
            yRect1 -= yRect1 > 0 ? 20:0;
        }else{
            yRect2 -= yRect2 > 0 ? 20:0;
        }
    }else if(e.code === "ArrowDown" || e.code === "KeyS"){
        if(dx < 0){
            yRect1 += yRect1 < this.innerHeight - (this.innerHeight * 0.25) ? 20:0;
        }else{
            yRect2 += yRect2 < this.innerHeight - (this.innerHeight * 0.25) ? 20:0;
        }
    }
})

/*
ArrowUp
ArrowDown
KeyW
KeyS
*/

animation();

