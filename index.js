const drum=document.querySelectorAll(".drum");
console.log('working')

const sounds=['tom-1','tom-2','tom-3','tom-4','snare','crash','kick-bass'];
const len=drum.length;
for(let i=0;i<len;i++){
    drum[i].addEventListener('click',function(){
        makeSound(i);
        buttonAnimation(i);
    })
    document.addEventListener('keypress',(event)=>{
        if(event.key===drum[i].innerHTML){
            makeSound(i);
            buttonAnimation(i);}
    })
}
function makeSound(i){
            let audio= new Audio(`./sounds/${sounds[i]}.mp3`);
            audio.play();
    
}
function buttonAnimation(i){
    drum[i].style.color="black"
    drum[i].classList.add("pressed");
        setTimeout(function(){
            drum[i].style.color="#DA0463"
            drum[i].classList.remove("pressed")
        },100);
}
