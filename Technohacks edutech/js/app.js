const days=document.querySelector(".days");
const hours=document.querySelector(".hours");
const minutes=document.querySelector(".minutes");
const seconds=document.querySelector(".seconds");

const currYear=new Date().getFullYear();
const newYearTime=new Date(` september 19 ${currYear + 1} 00:00:00 `);
// function for countdown calculating
function updateEventDays(){
    const currTime=new Date();
    const diff = newYearTime-currTime ;
    const d = Math.floor(diff/1000/60)%24 ;
    const h= Math.floor(diff/1000/60/60)%24;
    const m=Math.floor(diff/1000/60)%24;
    const s=Math.floor(diff/1000)%24;
    days.innerHTML=d<10?'0'+d:d;
    hours.innerHTML=h <10?'0'+h:h;
    minutes.innerHTML=m<10?'0'+m:m;
    seconds.innerHTML=s<10?'0'+s:s;

}
setInterval(updateEventDays,1000);



