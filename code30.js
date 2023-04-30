clearInterval(setBot());
var get;
console.log("開始");
var gm = prompt("gm");
function setBot(){ 
  setInterval(function(){ 
    var data = fetchApi("https://zinro.net/m/api/?mode=message&id=119221");
    talk(data,"ALL");
  },3000);
}
function talk(url,forU){
  fetchO("https://zinro.net/m/player.php?mode=message&to_user="+forU+"&message="+url);
}
function fetchO(url){
  fetch(url);
  fetch("https://zinro.net/m/player.php");
}
async function fetchApi(url){
  get = (await fetch(url)).json();
  return get;
}
