document.addEventListener('DOMContentLoaded', appStart)
// btn.onclick = zmienKoloro
// box.className = "green"
// background-color = backgroundColor w javascript.

let box , btn , counterBtn
function appStart() {
     box = document.querySelector('#box')
     btn = document.querySelector('#actionBtn')
     cBtn = document.querySelector('#counterBtn')
    btn.addEventListener('click', zmienKolor)
    cBtn.addEventListener('click', odliczanie)
}
function zmienKolor(e) {
    //    console.log(e)
    box.classList.toggle('green')
}
function odliczanie() {
    box.innerHTML = "SDSDAS"
}
        // let odliczanieInterval
        // function odliczanie(){
        //     // for (let i=1; i<=10; i++){
        //     //     box.innerHTML += i + '<br>'

        //     // }
        //     for (let i=1; i<=10; i++){
        //       wypiszLiczbe()

        //     }
        // }

        // function odliczanie(){
        //     setInterval(wypiszLiczbe , 500)
        // }
        // let licznik =1
         function wypiszLiczbe(){
             box.innerHTML +=  licznik +  '<br>'
           licznik ++
          if(licznik<=10){
             setTimeout(wypiszLiczbe , 500)  
          }
        }
        //     // if(licznik>10){
        //     //     clearInterval(odliczanieInterval)
        //     // } 
        //     // }



