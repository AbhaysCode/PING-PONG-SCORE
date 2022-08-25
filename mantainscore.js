function updateFirstOne() {
    var initialScore = document.getElementById("firstPlayerScore").innerHTML;
    initialScore = parseInt(initialScore);
    var updatedScore = initialScore + 1;
    if(checkValue(updatedScore,"firstPlayerScore","secondPlayerScore")){
    document.getElementById("firstPlayerScore").innerHTML = updatedScore;
    }
}
function updateSecondOne() {
    var initialScore = document.getElementById("secondPlayerScore").innerHTML;
    initialScore = parseInt(initialScore);
    var updatedScore = initialScore + 1;
    if(checkValue(updatedScore,"secondPlayerScore","firstPlayerScore")){
    document.getElementById("secondPlayerScore").innerHTML = updatedScore;
    }
}
let maxScore;
function checkValue(score,wonId,failId){
    if(score<maxScore){
        console.log("Value of MaxScore if stmt",maxScore);
        console.log("Type of Score",typeof score);
        console.log("Type of maxScore",typeof maxScore);
        return true;
    }
    else if(score === maxScore){
        document.getElementById(wonId).style.color = "green";
        document.getElementById(failId).style.color = "red";
        console.log("Value of MaxScore else if stmt",maxScore);
        document.getElementById("firstButton").classList.add("disabled");
        document.getElementById("secondButton").classList.add("disabled");
        return true;
    }
}
function reset(){
    maxScore = 5;
    document.getElementById("firstPlayerScore").innerHTML = 0;
    document.getElementById("secondPlayerScore").innerHTML = 0;
    document.getElementById("firstButton").classList.remove("disabled");
    document.getElementById("secondButton").classList.remove("disabled");
    document.getElementById("firstPlayerScore").style.color = "white";
    document.getElementById("secondPlayerScore").style.color = "white";

}
function startGame() {
    reset();
    var select = document.getElementById('maxScore');
    var value = select.options[select.selectedIndex].value;
    maxScore = parseInt(value); 
    document.getElementById("firstButton").classList.remove("disabled");
    document.getElementById("secondButton").classList.remove("disabled");
    document.getElementById("firstPlayerScore").style.color = "white";
    document.getElementById("secondPlayerScore").style.color = "white";
}