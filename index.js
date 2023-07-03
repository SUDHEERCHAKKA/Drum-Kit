//document.querySelector("button").addEventListener("click",fun);
/*it works when mouse click*/
function fun(){
    var htm= this.innerHTML;
    buttonAnimation(htm);
    smg(htm);   
}

var s=document.querySelectorAll(".drum");
var len=s.length;

var i=0;
while(i<len){
    document.querySelectorAll(".drum")[i].addEventListener("click",fun);     
    i++;
}
function smg(key){    
    switch (key) {
        case  "w":
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case  "a":
            var audio=new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case  "s":
            var audio=new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case  "d":
            var audio=new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case  "j":
            var audio=new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case  "k":
            var audio=new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case  "l":
            var audio=new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        
        default:
            console.log(htm);
        }
}

/* it works when key pressed*/
document.addEventListener("keypress",function(event){
    smg(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(key){
    var actionButton=document.querySelector("."+key);
    actionButton.classList.add("pressed");
    setTimeout(function(){
        actionButton.classList.remove("pressed");
    },100);

}