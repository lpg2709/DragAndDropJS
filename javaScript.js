const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);
   
for(const empty of empties){
    empty.addEventListener('dragover', dargOver);
    empty.addEventListener('dragenter', dargEnter);
    empty.addEventListener('dragleave', dargLeave);
    empty.addEventListener('drop', dargDrop);
}

function dragStart(){
   this.className += "hold";
   //setTimeout(()=> {this.className = 'invisible';} , 0);
}
    
function dragEnd(){
    this.className = 'fill';
}

function dargOver(e){
    e.preventDefoult();
}
function dargEnter(e){
    e.preventDefoult();
    this.className += 'hovered';    
}
function dargLeave(){
    this.className = 'empty';    
}
function dargDrop(){
    this.className = 'empty';
    this.append(fill);     
}