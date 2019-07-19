const fill = document.querySelector('.fill');
const empties = document.querySelector('.empty');

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);
    
function dragStart(){
    console.log("Start");
}
    
function dragEnd(){
    console.log("End");
}