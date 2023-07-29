const page_home = document.getElementById("con_home");
const page_about = document.getElementById("con_about");
const btn_home = document.getElementById("btn_home");
const btn_about = document.getElementById("btn_about");

function audio(){
  var aux = `<audio autoplay loop><source src="https://zeev-x.github.io/database/media/angels.mp3"></audio`;
  document.getElementById("audio").innerHTML = aux;
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

//window.onload = home(),kiwora(),nsfw(),loli();
//window.onload = home(),zeev();
window.onload = home();