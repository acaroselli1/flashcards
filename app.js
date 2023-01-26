var answerButton= document.getElementById('answer-button');


document.getElementById('inputValue').onkeypress = "if(event.keyCode == 13)document.getElementById('answer-button').click()"

window.onkeydown = preventEnter;
answerButton.onclick = revealAnswer;
var firstNum =  Math.floor(Math.random() * 13)
var secondNum = Math.floor(Math.random() * 13);
document.getElementById('times').innerHTML = firstNum + " x " + secondNum;
document.getElementById('answer').innerHTML = firstNum * secondNum;
var rightAnswerCount = 0;

function preventEnter(event){
   if (event.which == '13') {
      event.preventDefault();
    }
}

function revealAnswer(){ 
   if(document.getElementById("inputValue").value == firstNum * secondNum){
      document.getElementById('flipper1').classList.toggle('flipped');
      document.getElementById("Correct-answer").play();
      rightAnswerCount++;
      document.getElementById("right-answer-count").innerHTML = rightAnswerCount;
      console.log('rightAnswerCount: ', rightAnswerCount);
      setTimeout(() => resetFlashCard(), 1000);
    }
   else if(document.getElementById("inputValue").value != firstNum * secondNum){
      document.getElementById("wrong-answer").play();
      document.getElementById('times').innerHTML = firstNum + " x " + secondNum;
      document.getElementById('answer').style.opacity = 1;
      document.getElementById('answer').innerHTML= firstNum * secondNum;
   }
}

function resetFlashCard(){
   firstNum =  Math.floor(Math.random() * 13)
   secondNum = Math.floor(Math.random() * 13);
   document.getElementById('flipper1').classList.toggle('flipped');
   document.getElementById('times').innerHTML = firstNum + " x " + secondNum;
   document.getElementById('answer').style.opacity = 0;
   document.getElementById('answer').innerHTML = firstNum * secondNum;
}

 
 

   
         
        
        
        
        
        
        
        
        
     
