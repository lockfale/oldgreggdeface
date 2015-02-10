
imgpre = new Image();
imgpre.scr = "assets/m_star01.gif";
imgpre.scr = "assets/m_star02.gif";
imgpre.scr = "assets/m_star03.gif";

kira = new Array();
kira[0] = "assets/m_star01.gif";
kira[1] = "assets/m_star02.gif";
kira[2] = "assets/m_star03.gif";
var kira_s = 2;

setTimeout("kirakira01()",0);

var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

if(document.layers){document.captureEvents(Event.IMGMOVE);}
document.onmousemove=moveImg;

function moveImg(theEvent){
if (userAgent.indexOf("msie") > -1) {
CH01 = document.documentElement.scrollTop;
CH02 = document.body.scrollTop;
if(CH01 > CH02 ){
doc_W = event.clientX + document.documentElement.scrollLeft;
doc_H = event.clientY  + document.documentElement.scrollTop;
}else{
doc_W = event.clientX + document.body.scrollLeft;
doc_H = event.clientY  + document.body.scrollTop;
}
} else {
doc_W = theEvent.pageX;
doc_H = theEvent.pageY;
}
}

kn=15;
kxp=new Array();
kyp=new Array();
dotk=new Array();
var kp=0;
var doc_W;
var doc_H;
timerID_k=0;
kira_n = kira_s;

function kirakira01() { 
if(kxp[kn]!=doc_W||kyp[kn]!=doc_H){
kp=kp%kn+1;
kxp[kp] = doc_W; 
kyp[kp] = doc_H;
document.getElementById('dotk'+kp).style.visibility='visible';
document.getElementById('dotk'+kp).style.top = kyp[kp]+"px";
document.getElementById('dotk'+kp).style.left = kxp[kp]+"px";
}else{
for(km=1;km<(kn+1);km++){
document.getElementById('dotk'+km).style.visibility='hidden';
}
}
timerID_k=setTimeout("kirakira01()",100);
}

for (km=1;km<(kn+1);km++){
document.write("<div id=\"dotk"+ km +"\" style=\"position: absolute; z-index: "+ km +" ;visibility:hidden; top: 15px; left: 15px;\"><img src=\"" + kira[kira_n] + "\" border=\"0\"></div>");
if (kira_n == 0) { kira_n = kira_s; } else { kira_n -= 1; }
}

