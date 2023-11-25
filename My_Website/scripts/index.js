var iterator = 0;
var txt = 'man vignesh_hedge ';
var blink_curser = "_"
var typewriter_container = document.getElementById("command");
var prev_content = ""


window.onload = function()
{
    typewriter_container.innerHTML = " ";
    blink_start();
    // dispay_content();

}

function blink_start(){
    if(iterator < 6)
    {
        blink_curser = ( blink_curser == ">  " ) ? "> _" : ">  ";
        typewriter_container.innerHTML  = blink_curser ;
        iterator++;
       setTimeout(blink_start, 400);
    }
    else
    {
        iterator = 0;
        typeWriter();
    }
}


function typeWriter() {
  if (iterator < txt.length) {

    y = 7 * Math.floor(Math.random() * 10) + 3;

    if (y <= 3*7 ){
        y += 7*20;
    }
    
    prev_content = typewriter_container.innerHTML.slice(0, typewriter_container.innerHTML.length - 1 );
    
    typewriter_container.innerHTML = prev_content + txt.charAt(iterator) + "_";
    
    iterator++;
    
    setTimeout(typeWriter, y);
  }
  else{
    iterator = 0;
    blink_end();
  }
}

function blink_end() {
    if(iterator < 4){
        blink_curser = ( blink_curser == " " ) ? "_" : " ";
        typewriter_container.innerHTML  = prev_content + blink_curser ;

        iterator++;

        setTimeout(blink_end, 400);
    }
    else{
        typewriter_container.innerHTML = ""
        dispay_content();
    }
}

function dispay_content(){
    document.getElementById('content').style.display = "block";
    document.getElementById('remove').style.height = "0px";
    // document.getElementById('remove').style.marginTop = "100%";
    // document.getElementById('remove').style.display = "none";
    
    
}

