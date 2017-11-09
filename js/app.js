
window.onload=function(){
    var board=document.querySelector('.board-js');
    
   // board.addEventListener('click',function(event){
   //     console.log(event.target);
   // });

    // board.addEventListener('dblclick', function(event){
    // event.target.style.backgroundColor='yellow';
    // event.target.style.border='5px solid green';

    board.addEventListener('click', addX);
};

var centinel=true;
function addX(event){
    if(centinel){
        event.target.textContent='x';
    }
    else {
        event.target.textContent='o';
    }
centinel=!centinel;
}

