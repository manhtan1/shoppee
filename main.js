const openmodal=document.querySelector('.modol');
const openmodallogin=document.querySelector('.modollogin');
const openlogin=document.querySelector('.js-login');
const clicksign=document.querySelector('.js-sign');
const closesigns=document.querySelectorAll('.js-back');

clicksign.onclick=function(){
    openmodal.classList.add('open');
}
openlogin.onclick=function(){
    openmodallogin.classList.add('open');
}
function closebtn(){
    if(openmodal){
        openmodal.classList.remove('open');
    }
    else{
        openmodallogin.classList.remove('open');
    }
}

for(const closesign of closesigns){
    closesign.addEventListener('click',closebtn);
}
