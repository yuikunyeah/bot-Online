clearInterval(setBot());
var msg = document.getElementsByTagName("span");
console.log("開始");var msgL = msg.length; 
var gm = prompt("gm") ;
function setBot(){
  setInterval(function(){
    var count = msg.length-msgL;
    msgL = msg.length;
    for(let i = 0;i<count;i = i+2){
      var readMsg = msg.item(i).textContent+msg.item(i+1).textContent;
      if(readMsg == gm+": &check;"){
        alert("botは正常に稼働しています");
      }
      if(readMsg.indexOf(gm+": &kick;") != -1){
        var banstr = gm.length+8;
        var userBn = readMsg.slice(banstr);
        console.log(userBn+"をban");
        location.href = "https://zinro.net/m/player.php?kick="+g_players[userBn].id+"&name="+userBn;
      }
    }
  },5000); 
}
