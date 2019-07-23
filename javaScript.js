const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
var objectDragged;
// Call the events
fill.addEventListener('dragstart',dragStart,false);
fill.addEventListener('dragend',dragEnd,false);
   
for(const empty of empties){
    empty.addEventListener('dragover', dargOver,false);
    empty.addEventListener('dragenter', dargEnter,false);
    empty.addEventListener('dragleave', dargLeave,false);
    empty.addEventListener('drop', dargDrop,false);
}
// ------------------------------------

// Handler events

function dragStart(e){
    objectDragged = e.target;
    e.dataTransfer.setData("text/plain", e.target.id);
    e.target.style.opacity = .5;
   console.log("Start");
}
    
function dragEnd(e){
    e.target.style.opacity = "";
    console.log("End");
}

function dargOver(e){
    e.preventDefault();
    console.log("Over");
}

function dargEnter(e){
    if(e.target.className == "empty" ){
        e.target.className = "hovered";
    }
    console.log("Enter"); 
}

function dargLeave(e){
    if(e.target.className == "hovered"){
        e.target.className= "empty";
    }   
    console.log("Leave");
}

function dargDrop(e){
    e.preventDefault();
    if(e.target.className == "hovered"){
        e.target.className = "empty";
        objectDragged.parentNode.removeChild(objectDragged);
        e.target.appendChild(objectDragged);
    }   
    console.log("Drop");
}
// ------------------------------------