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

var qs = ['I had', 'You had', 'He had', 'We had', "You'll had", 'They had','I spoke','You spoke', 'She spoke', 'We spoke', "You'll spoke", 'They spoke', 'I ate', 'You ate', 'He ate', 'We ate', "You'll ate", 'They ate', 'I was', 'You were', 'She was', 'We were', "You'll were", 'They were', 'I went', 'You went', 'He went', 'We went', "You'll went", 'They went', 'I knew', 'You knew', 'He knew', 'We knew', "You'll knew", 'They knew', 'I brought', 'I wanted', 'You wanted', 'She wanted', 'We wanted', "You'll wanted", 'They wanted', 'I did', 'You did', 'He did', 'We did', "You'll did", 'They did'];

var as = ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron', 'hablé', 'hablaste', 'habló', 'hablamos', 'hablasteis', 'hablaron', 'comí', 'comiste', 'comío', 'comimos', 'comisteis', 'comieron', 'fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron', 'fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron', 'supe', 'supiste', 'supo', 'supimos', 'supisteis', 'supieron', 'traje', 'quise', 'quisiste', 'quiso', 'quisimos', 'quisisteis', 'quisieron', 'hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'];
var a = Math.random() * 49;
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
