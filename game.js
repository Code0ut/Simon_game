let gamePattern=[];
let checkArr=[];
let level=1;
function getRandomNumber(){
    return Math.floor(Math.random() * 4);
}
function getRandomColor(){
    var randomNumber=getRandomNumber();
    switch(randomNumber){
        case 0:
            return "red";
            break;
        case 1:
            return "blue";
            break;
        case 2:
            return "green";
            break;
        case 3:
            return "yellow";
            break;
    }
}
function handleBtnClick(e) {

    let curr=e.target;
    $(curr).fadeIn(10).fadeOut(10).fadeIn(10);
    const audio=new Audio(`sounds/${curr.id}.mp3`);
    audio.play();
    checkArr.push(`${curr.id}`);
    console.log("checkarr"+checkArr);
    if(checkArr.length==gamePattern.length){
        if(checkPattern()){
        nextSequence();
    }
    }
    else if(checkArr.length>gamePattern.length){
        $("h1").text(`Game Over|Your Score:${level-1}|Press any Key to Restart`);
        const gmOverAud=new Audio(`sounds/wrong.mp3`)
        gmOverAud.play();
        level=1;
        gamePattern=[];
        checkArr=[];
        console.log($( document ).on( "keypress", handleKeypress ));
    }
    
}

function checkPattern(){
    for(let i=0;i<checkArr.length;i++){
        if(checkArr[i]!==gamePattern[i]){
            return false;
        }
    }
    return true;
}



function nextSequence(){
    $("h1").text(`Level ${level}`);
    checkArr=[]
    var color=getRandomColor();
    gamePattern.push(color);
    gamePattern.push()
    $(`#${color}`).fadeIn(50).fadeOut(50).fadeIn(50);
    const audio=new Audio(`sounds/${color}.mp3`);
    audio.play();
    console.log(gamePattern)   
    level++;
    
}

function handleKeypress(){
    if(level==1){
    $("h1").text(`Level ${level}`);
    var color=getRandomColor();
    gamePattern.push(color);
    gamePattern.push()
    $(`#${color}`).fadeIn(50).fadeOut(50).fadeIn(50);
    const audio=new Audio(`sounds/${color}.mp3`);
    audio.play();
    console.log(gamePattern)   
    level++;
    }
}

$("button").on("click", handleBtnClick);


$( document ).on( "keypress", handleKeypress );