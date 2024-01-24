const counter=document.querySelector('.counter');
const onplan=document.querySelector('.onplan');

let baslangıc=0;

updatenumber();

function updatenumber(){
    counter.textContent=baslangıc+'%';
    onplan.style.width=baslangıc+'%';
    baslangıc++;
    if(baslangıc<101){
        setTimeout(updatenumber,1);
    }
}