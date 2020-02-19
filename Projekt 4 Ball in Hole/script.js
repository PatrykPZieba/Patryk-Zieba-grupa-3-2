let ball= document.querySelector("#kulka");                     // Podstawowe zmienne
let container = document.getElementsByClassName("container")[0];
console.log(container);
let holes = [];
let gameStart=false;
let speedX = 0, speedY = 0;
let posX = 20, posY = 20;
window.addEventListener('deviceorientation', zmianaPolozenia)
var h1 = document.getElementsByTagName('h1')[0], seconds = 0, minutes = 0, hours = 0,
t;

function start(){                                               //Inicjacja startu
    gameStart=true;
    spawnHoles();                       // Tworzenie dołków
    poruszKulke();                      // poruszanie kulką
    console.log("game Started!")
    document.getElementById("start").hidden=true;
    counter = document.createElement('span');               // Dodanie licznika punktów   
    counter.classList.add("counter");
    container.appendChild(counter);
    timer();
}
function restart(){                                 // funkcja restartu gry 
    gameStart=true;
    for(i=container.childElementCount;i>0;i--){     // usunięcie starych dołków
        if(container.childNodes[i].nodeName=="DIV"){
            if(container.childNodes[i].id!=="kulka"){
                container.removeChild(container.childNodes[i])
                clear();
            }
        }
    }
    holes=[];
    posX = 20, posY = 20;
    spawnHoles();                   //tworzenie dołków
    poruszKulke();                  // poruszanie kulką
    console.log("game Started!")
    document.getElementById("restart").hidden=true;
    start();
}

function zmianaPolozenia(e){            // Funkcja napędu kulki z żyroskopu
    console.log(e);
    speedX=e.gamma/5
    speedY=e.beta/5
}
function poruszKulke(){                 // funkcja poruszania kulki
    
    

    if(posX+speedX<window.innerWidth-50 && posX+speedX>0){  // ograniczenia kulki
        posX+=speedX;
        ball.style.left=posX+'px';        
    }
    if(posY+speedY<window.innerHeight-50 && posY+speedY>0){
        posY+=speedY;
        ball.style.top=posY+'px';        
    }
                                                    //Sprawdzanie kolizji z dziurami
    for(i=0;i<holes.length;i++) {
        if(posY<Math.floor(holes[i].style.top.slice(0,-2))+38&&posY>holes[i].style.top.slice(0,-2)){
            if(posX>holes[i].style.left.slice(0,-2)&&posX<Math.floor(holes[i].style.left.slice(0,-2))+38){
                if(holes[i].classList.contains("dobraDziura")){
                    holes[i].classList.remove("dobraDziura");
                    holes.forEach(e=>{if(e.classList.contains("tempDziura")){
                        e.classList.remove("tempDziura");
                        e.classList.add("dziura");
                    }})
                    holes[i].classList.add("tempDziura");
                    randomGoodHole(i);
                }
                else if(holes[i].classList.contains("dziura")){     // koniec gry
                gameStart=false;
                stop();
                document.getElementById("restart").hidden=false;
            }
        }
        console.log("omg"+i);
    }
    };
    if(gameStart==true){
        window.requestAnimationFrame(poruszKulke)
    }
}
function spawnHoles(){                                 
    for(i=1;i<(window.innerWidth/100);i++){
        let hole = document.createElement('div');
        hole.classList.add("dziura");
        hole.style.left=100*i+Math.random()*75-95+'px';
        hole.style.top=Math.random()*(window.innerHeight)/2+'px';
        holes.push(hole);
        container.appendChild(hole);
    }
   
    checkHoles();
    randomGoodHole(1);
}
function checkHoles(){                                      
    for(i=0;i<holes.length-1;i++){                         
        for(j=i+1;j<holes.length;j++){
            if(holes[j].style.left.slice(0,-2)>holes[i].style.left.slice(0,-2)+75
            &&holes[j].style.top.slice(0,-2)>holes[i].style.top.slice(0,-2)+75){
                holes[j].style.top=holes[j].style.top.slice(0,-2)+50+'px';
                holes[j].style.left=holes[j].style.left.slice(0,-2)+50+'px';
            }
        }
    }
}
function randomGoodHole(i){                                 // Dodanie dobrej dziury
    let goodHole = Math.floor(Math.random()*holes.length);
    if(goodHole ==i&&i<holes.length){i++;}                  // uniknięcie pojawienia się dobrej dziury w tym samym miejscu
    else{i--;}
    holes[goodHole].classList.remove("dziura");
    holes[goodHole].classList.add("dobraDziura")

}
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}
function stop(){
    clearTimeout(t);
}
function clear(){
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}