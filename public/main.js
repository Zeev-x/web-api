const page_home = document.getElementById("con_home");
const page_about = document.getElementById("con_about");
const btn_home = document.getElementById("btn_home");
const btn_about = document.getElementById("btn_about");

function audio(){
  var time = new Date().getHours();
  if(time <= 4 && time <= 13){
    var aux1 = `<audio autoplay loop>
                  <source src="/assets/kroncong.mp3">
                </audio>`;
    document.getElementById("audio").innerHTML = aux1;
  } else if(time <= 13 && time <= 17){
    var aux2 = `<audio autoplay loop>
                  <source src="/assets/audio.mp3">
                </audio>`;
    document.getElementById("audio").innerHTML = aux2;
  } else if(time <= 17 || time <= 4){
    var aux3 = `<audio autoplay loop>
                  <source src="/assets/angels.mp3">
                </audio>`;
    document.getElementById("audio").innerHTML = aux3;
  }
}

function home(){ 
  page_home.style.display = "block";
  page_about.style.display = "none";
  btn_home.style.color = "red";
  btn_about.style.color = "black";
}
function about(){
  page_home.style.display = "none";
  page_about.style.display = "block";
  btn_about.style.color = "red";
  btn_home.style.color = "black";
}
function zeev(){
  var teks = `<h1>The website is currently undergoing maintenance</h1>`
  document.getElementById("result").innerHTML = teks;
}


window.onload = home(),audio();
