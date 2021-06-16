var possiblegenlist = 'abcdefvwxyzABCDEFGHIJK456789';
var nitro = '';
for(var i = 0; i < 16; i++){
nitro = nitro + possiblegenlist.charAt(Math.floor(Math.random() * possiblegenlist.length));}
b='discord.com/gifts/'+nitro
function a(){document.getElementById('1').innerHTML=b}