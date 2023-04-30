clearInterval(setBot());
var msg = document.getElementsByTagName("span");
console.log("開始");
var msgL = msg.length; 
var gm = prompt("gm");
function setBot(){ 
  setInterval(function(){   
    var count = msg.length-msgL;   
    msgL = msg.length;    
    for(let i = 0;i<count;i = i+2){  
      var readMsg = msg.item(i).textContent+msg.item(i+1).textContent;   
      if(readMsg == gm+": &check;"){ 
        talk("YMH:botは正常に稼働しています","ALL");    
      }
      if(readMsg.substr(0,gm.length).indexOf(gm) == -1){   
        if(readMsg.indexOf("老害") != -1){
         var userBn = "";
         var subst;
         while(subst != ":"){
           userBn =　readMsg.substr(0,userBn.length+1);
           subst = readMsg.substr(userBn.length,1);
         }
         console.log(userBn+"をban");       
          var url = "https://zinro.net/m/player.php?kick="+g_players[userBn].id+"&name="+userBn; 
          fetchO(url);  
        }  
      }     
    }
  },3000);
}
function talk(url,forU){
  fetchO("https://zinro.net/m/player.php?mode=message&to_user="+forU+"&message="+url);
}
function fetchO(url){
  fetch(url);
  fetch("https://zinro.net/m/player.php");
}
