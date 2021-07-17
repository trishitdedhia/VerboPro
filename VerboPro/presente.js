/*
var qs = ['I have', 'You have', 'He has', 'We have', "You'll have", 'They have'];

var as = ['tengo', 'tienes', 'tiene', 'tenemos', 'teneis', 'tienen'];

var a = Math.random() * 6;
var x = Math.floor(a);

document.getElementById('q').innerHTML = qs[x];

void check(){

  var tc = document.getElementById('textcollector');

  var ip = tc.value;

  var ans = ip.toLowerCase();

  if(ans.equals(as[x])){
    var truth = true;

  }
  else{
    var truth = false;
  }
}
*/


/*
var names = ['Raju R', 'Kaju R', 'Baju R']

var a = Math.random() * 3;
var x = Math.floor(a);

document.getElementById('q').innerHTML = names[x];
*/

var qs = ['I have', 'You have', 'He has', 'We have', "You'll have", 'They have','I speak','You speak', 'She speaks', 'We speak', "You'll speak", 'They speak', 'I eat', 'You eat', 'He eats', 'We eat', "You'll eat", 'They eat', 'I am', 'You are', 'She is', 'We are', "You'll are", 'They are', 'I bring', 'You bring', 'He brings', 'We bring', "You'll bring", 'They bring', 'I do', 'I leave', 'I know'];

var as = ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen', 'hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan', 'como', 'comes', 'come', 'comemos', 'coméis', 'comen', 'soy', 'eres', 'es', 'somos', 'séis', 'son', 'traigo', 'traes', 'trae', 'traemos', 'traéis', 'traen', 'hago', 'salgo', 'sé'];
var a = Math.random() * 33;
var x = Math.floor(a);


document.getElementById('reset').style.display = "none";

document.getElementById('q').innerHTML = qs[x];

function gscreen(){

  document.getElementById('correctAudio').play();

  document.body.style.backgroundColor = "#01FF70";
  document.getElementById('submit').style.display = "none";
  document.getElementById('textcollector').disabled = true;
  document.getElementById('q').innerHTML = "That's Correct!";
  document.getElementById('reset').style.display = "";


}

function yscreen(){

  document.getElementById('wrongAudio').play();

  document.body.style.backgroundColor = "#FF851B";
  document.getElementById('submit').style.display = "none";
  document.getElementById('textcollector').disabled = true;
  document.getElementById('q').innerHTML = 'Wrong,<br>correct answers is:<br>"' + as[x] +'"';
  document.getElementById('reset').style.display = "";


}

function reset(){

  location.reload(false);

}

function checker(){

  var ans = document.getElementById('textcollector').value.toLowerCase();

  if(ans == as[x]){
    gscreen();
  }
  else{
    yscreen();
  }


}

//-------->
// Get the input field
var input = document.getElementById("textcollector");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit").click();
  }
});
