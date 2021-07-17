document.getElementById('1').scrollIntoView();
document.getElementById('pointer1').src = "pointer.png";
document.getElementById('pointer2').src = "pointer.png";
document.getElementById('pointer3').src = "pointer.png";
document.getElementById('pointer4').src = "pointer.png";
document.getElementById('pointer5').src = "pointer.png";

function aboutUs(){
  document.getElementById('0').scrollIntoView;
}

function selectedPointer1(){
  document.getElementById('pointer1').src = "selectedpointer.png";
  document.getElementById('title1').innerHTML = "Home";
}

function selectedPointer2(){
  document.getElementById('pointer2').src = "selectedpointer.png";
  document.getElementById('title2').innerHTML = "Presente";
}

function selectedPointer3(){
  document.getElementById('pointer3').src = "selectedpointer.png";
  document.getElementById('title3').innerHTML = "Pretérito Indefinido";
}

function selectedPointer4(){
  document.getElementById('pointer4').src = "selectedpointer.png";
  document.getElementById('title4').innerHTML = "El Condicional";
}

function selectedPointer5(){
  document.getElementById('pointer5').src = "selectedpointer.png";
  document.getElementById('title5').innerHTML = "Futuro";
}

function pointer1(){
  scrollcheck();
  document.getElementById('title1').innerHTML = "";
}

function pointer2(){
  scrollcheck();
  document.getElementById('title2').innerHTML = "";
}

function pointer3(){
  scrollcheck();
  document.getElementById('title3').innerHTML = "";
}

function pointer4(){
  scrollcheck();
  document.getElementById('title4').innerHTML = "";
}

function pointer5(){
  scrollcheck();
  document.getElementById('title5').innerHTML = "";
}

function locate1(){
  document.getElementById('1').scrollIntoView();
}

function locate2(){
  document.getElementById('2').scrollIntoView();
}

function locate3(){
  document.getElementById('3').scrollIntoView();
}

function locate4(){
  document.getElementById('4').scrollIntoView();
}

function locate5(){
  document.getElementById('5').scrollIntoView();
}

function scrollcheck(){
  if (document.body.scrollTop < 1400){
    document.getElementById('pointer1').src = "selectedpointer.png";
    document.getElementById('pointer2').src = "pointer.png";
    document.getElementById('pointer3').src = "pointer.png";
    document.getElementById('pointer4').src = "pointer.png";
    document.getElementById('pointer5').src = "pointer.png";
  }
  else if(document.body.scrollTop < 2100){
    document.getElementById('pointer1').src = "pointer.png";
    document.getElementById('pointer2').src = "selectedpointer.png";
    document.getElementById('pointer3').src = "pointer.png";
    document.getElementById('pointer4').src = "pointer.png";
    document.getElementById('pointer5').src = "pointer.png";
  }
  else if(document.body.scrollTop < 2800){
    document.getElementById('pointer1').src = "pointer.png";
    document.getElementById('pointer2').src = "pointer.png";
    document.getElementById('pointer3').src = "selectedpointer.png";
    document.getElementById('pointer4').src = "pointer.png";
    document.getElementById('pointer5').src = "pointer.png";
  }
  else if(document.body.scrollTop < 3500){
    document.getElementById('pointer1').src = "pointer.png";
    document.getElementById('pointer2').src = "pointer.png";
    document.getElementById('pointer3').src = "pointer.png";
    document.getElementById('pointer4').src = "selectedpointer.png";
    document.getElementById('pointer5').src = "pointer.png";
  }
  else{
    document.getElementById('pointer1').src = "pointer.png";
    document.getElementById('pointer2').src = "pointer.png";
    document.getElementById('pointer3').src = "pointer.png";
    document.getElementById('pointer4').src = "pointer.png";
    document.getElementById('pointer5').src = "selectedpointer.png";
  }

}

//alert(document.body.scrollTop);
