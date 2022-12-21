let sc = 1 ;
let min = 0 ;
let hr = 0 ;
var SC = document.getElementById("s");
var MIN = document.getElementById("m") ;
var HR = document.getElementById("h") ;
var timer ;

function start(){
     
      if(timer == null){
        clearInterval(timer);
  timer = setInterval(setTim, 1000);
  document.getElementById("start").value ="start"} 
                }


function stop(){
    clearInterval(timer);
    timer = null ;
    document.getElementById("start").value = "continue";
               }
function reset(){
    clearInterval(timer) ;
    timer = null ;
    SC.innerHTML = "00" ;
    MIN.innerHTML ="00" ;
    HR.innerHTML = "00"
    sc = 0 ;
    min =0 ;
    hr =0 ;
                }
function setTim(){
    
    if(sc > 59){sc =0 ; min++ ;}

    if(min > 59){min = 0 ; hr++}

    if (sc > 9) { SC.innerHTML = sc++} 

    else{SC.innerHTML = "0" + sc++}

    if (min > 9) { MIN.innerHTML = min}

     else{ MIN.innerHTML = "0" + min}

     if (hr > 9) { HR.innerHTML = hr}

     else{ HR.innerHTML = "0" + hr}
   

}
