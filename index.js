// alert("hellooooo!!!!!1")


var btn=document.querySelectorAll("button")

for(var i=0; i<document.querySelectorAll(".drum").length ; i++){
    btn[i].addEventListener("click",function (){
        var btn1=this.innerHTML
        sound(btn1)
        pressedKey(btn1)
    })
}

document.addEventListener('keydown', event =>{
    var key=event.key
    sound(key)
    pressedKey(key)
})


function sound(keys){
    switch (keys) {
        case 'w':
                var crash= new Audio('./sounds/crash.mp3')
                crash.play()
                break;
            
            case 'a':
                var bass= new Audio('./sounds/kick-bass.mp3')
                bass.play()
                break;
                
            case 's':
                var snare= new Audio('./sounds/snare.mp3')
                    snare.play()
                    break;

            case 'd':
                    var tom1= new Audio('./sounds/tom-1.mp3')
                    tom1.play()
                    break;
            
            case 'j':
                var tom2= new Audio('./sounds/tom-2.mp3')
                tom2.play()
                break;
            
            case 'k':
                var tom3= new Audio('./sounds/tom-3.mp3')
                tom3.play()
                break;

            case 'l':
                var tom4= new Audio('./sounds/tom-4.mp3')
                tom4.play()
                break;
            
            default:
                console.log(this.innerHTML);
                break;
    }
}

function pressedKey(pressKey){
    console.log(pressKey)
      var keyBtn=document.querySelector('.'+pressKey)
      keyBtn.classList.add('pressed')
      setTimeout( ()=> keyBtn.classList.remove('pressed'),100)
}
//5 lines)
// 