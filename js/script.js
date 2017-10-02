// var arr = ['foo'];
// console.log(arr[0]);
// var obj = { 0: 'foo' };
// console.log(obj[0]);


// var questions=[
//   [ "What is 10+4?", "12","14","16","20", "B"],
//   [ "What is 15+4?", "12","14","19","20", "C"],
//   [ "What is 11+4?", "15","14","16","20", "A"],
//   [ "What is 10+7?", "12","17","16","20", "B"]
// ];
// function _(x){
//   return document.getElementById('x')
// }
function renderQuestion(){
  test=document.getElementById("test");
  if(position>=questions.length){
    document.getElementById("test").innerHTML="<h2> You got "+correct+" of "+questions.length+" questions correct.</h2>";
    document.getElementById("test_status").innerHTML="Test Completed";
    // position=0;
    // correct=0;
  }else{
    document.getElementById("test_status").innerHTML = "Question "+(position+1)+" of "+questions.length;
    question = questions[position][0];
    choiceA = questions[position][1];
    choiceB = questions[position][2];
    choiceC = questions[position][3];
    choiceD = questions[position][4];
    document.getElementById("test").innerHTML ="<h3>"+question+"</h3>";
    document.getElementById("test").innerHTML +="<div class='radio'><input type='radio' name='choices' value='A'> "+choiceA+"</div>";
    document.getElementById("test").innerHTML +="<div class='radio'><input type='radio' name='choices' value='B'> "+choiceB+"</div>";
    document.getElementById("test").innerHTML +="<div class='radio'><input type='radio' name='choices' value='C'> "+choiceC+"</div>";
    document.getElementById("test").innerHTML +="<div class='radio'><input type='radio' name='choices' value='D'> "+choiceD+"</div><br>";
    document.getElementById("test").innerHTML +="<div class='btn'><button onclick='checkAnswer()'>Submit Answer</button>";
  }
}
function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice=choices[i].value;
    }
  }
  if(choice==questions[position][5]){
    correct++;
  }
  position++;
  renderQuestion();
}
document.getElementById('timer').innerHTML =
  10 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
$(document).ready(function() {
    var f = document.getElementById("timer");
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 1000);

});

window.addEventListener("load", renderQuestion, false);
