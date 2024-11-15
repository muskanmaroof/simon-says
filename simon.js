let gameseq = [];
let userseq = [];

let btns = ["red","yellow","green","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        console.log("game started");

        levelUp();
    }
    
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    }, 250);

};


function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let ranIdx = Math.floor(Math.random()* 3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    // console.log(ranIdx);
    // console.log(ranColor);
    // console.log(ranBtn);
    gameseq.push(ranColor);
    console.log(gameseq);
    btnFlash(ranBtn);
};

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML=`game over!<b>your score was ${level}</b> <br>press any key to start`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"; 
        },150);
        reset();
    }
}
function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
};

function reset(){
    gameseq =[];
    userseq = [];
    level = [];
    started = false;

}