var answerButton= document.getElementById('answerButton');

answerButton.onclick = revealAnswer;
var firstNum =  Math.floor(Math.random() *13)
var secondNum = Math.floor(Math.random()*13);
document.getElementById('times').innerHTML = firstNum + " x " + secondNum;
document.getElementById('answer').innerHTML= firstNum*secondNum;
function revealAnswer(){
    document.getElementById('flipper1').classList.toggle('flipped');
    return false;
}
        
        
        
        
        
        
        
        
        
        
     