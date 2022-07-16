let container2 = document.querySelector('.container2');
let container3 = document.querySelector('.container3');
let noteText = document.getElementById('new-note');
var colors;
var rndColor;
var angels;
var rndAngle;
function color(){
    colors = ['#c2ff3d', '#ff3de8', '#3dc2ff', '#04e022', '#bc83e6', '#ebb328'];
    rndColor = Math.floor(Math.random() * colors.length);
}

function angle(){
    angels = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)', ];
    rndAngle = Math.floor(Math.random() * angels.length);
    console.log(rndAngle);
}

function newNote(){
    container2.setAttribute('class', 'active');
}

function closeFunc(){
    container2.setAttribute('class', 'container2');
    noteText.value = '';
}

function createNote(){  
    if(noteText.value === '' || noteText.value === null){
        alert('Enter Something');
    }else{
        let note = document.createElement('div');
        container3.append(note);
        note.setAttribute('style', `width: 23%; height: 300px; margin: 10px; font-size: 2rem; padding: 10px; box-shadow: 5px 5px 10px black`);
        color();
        angle();
        note.style.backgroundColor = `${colors[rndColor]}`;
        note.style.transform = `${angels[rndAngle]}`;
        note.textContent = noteText.value;
        noteText.value = '';

        note.addEventListener('dblclick', function(){
            note.style.display = 'none';
        })
    }
}
