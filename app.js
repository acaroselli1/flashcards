var answerButton= document.getElementById('answer-button');


document.getElementById('inputValue').onkeypress = "if(event.keyCode == 13)document.getElementById('answer-button').click()"

answerButton.onclick = revealAnswer;
var firstNum =  Math.floor(Math.random() *13)
var secondNum = Math.floor(Math.random()*13);
document.getElementById('times').innerHTML = firstNum + " x " + secondNum;
document.getElementById('answer').innerHTML= firstNum*secondNum;
var count =0;

function revealAnswer(){
   if(document.getElementById("inputValue").value== firstNum*secondNum){
   document.getElementById('flipper1').classList.toggle('flipped');
   document.getElementById("correct-answer").play();
   return false;
   count++;
    }
   else if(document.getElementById("inputValue").value!= firstNum*secondNum){
   document.getElementById("wrong-answer").play();
   document.getElementById('times').innerHTML = firstNum + " x " + secondNum;
   document.getElementById('answer').innerHTML= firstNum*secondNum;
   }
}

 
 

   
         
        
        
        
        
        
        
        
        
     