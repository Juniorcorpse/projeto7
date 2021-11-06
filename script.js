let areas = {
    a: null,
    b: null,
    c: null
}

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach(area =>{
    area.addEventListener('dragover', dragover);
    area.addEventListener('dragleave', dragleave);
    area.addEventListener('drop', drop);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragoverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragleaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);
  
function localS(){
    let lsdragStart = localStorage.getItem('dragStart');
}
let lsdragStart = localStorage.getItem('dragStart');  
function dragStart(e){
    
    let classe = 'dragging';      
    if (!lsdragStart) {                  
        localStorage.setItem('dragStart', classe);                 
                      
      }
      e.currentTarget.classList.add(lsdragStart)
}

function dragEnd(e){    
    e.currentTarget.classList.remove(lsdragStart);

}

//funcition area

function dragover(e){
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
}

function dragleave(e){
    //console.log('saiu')
    e.currentTarget.classList.remove('hover');
}

function drop(e){
    e.currentTarget.classList.remove('hover');
    let lsdragStart = localStorage.getItem('dragStart');
    if (e.currentTarget.querySelector('.item') === null) {
        if (lsdragStart) 
        {console.log(lsdragStart);
            let dragItem = document.querySelector(`.item.${lsdragStart}`);
            e.currentTarget.appendChild(dragItem);
            updateAreas();
        }      
        
    }
}


//funcition Neutral
function dragoverNeutral(e){
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragleaveNeutral(e){
    e.currentTarget.classList.remove('hover');
}

function dropNeutral(e){
    let dragItem = document.querySelector(`.item.${lsdragStart}`);
    e.currentTarget.appendChild(dragItem);
    updateAreas();
}

function updateAreas(){
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');

        if (area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML;
        }else{
            areas[name] = null;
        }
    });

    if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct');
    }else{
        document.querySelector('.areas').classList.remove('correct');
    }
}