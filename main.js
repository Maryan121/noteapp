let main = document.querySelector('main');
let AddBtn = document.getElementById('addnote');

AddBtn.addEventListener('click',function(){
    addNote()
})

function saveNotes(){
    const notes = document.querySelectorAll('textarea');
    console.log(notes);
    const data = [];

    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )

    if(data === 0){
        localStorage.removeItem('notes');
    }
    else{
        localStorage.setItem('notes', JSON.stringify(data))
    }
}




function addNote(text=""){
    let container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = 
    `
        <nav>
            <i class="fa-solid fa-arrow-left icon back-arrow" id="back-icon"></i>
            <div class="note-icons">
                <i class="fa-regular fa-floppy-disk icon save" id="save"></i>
                <i class="fa-solid fa-trash icon delete" id=""></i>
            </div>
        </nav>
        <div class="text" id="text">
            <textarea  name="textardeleteea"  id="textArea">${text}</textarea>
        </div> 
    `;
    main.appendChild(container);
        saveNotes();

    
        //deleting notes when delete icon is clicked
    container.querySelector('.delete').addEventListener(
        "click",
        function(){
            container.remove();
            saveNotes()
        }
    )

     //to save to note when save icon is clicked
    container.querySelector('.save').addEventListener(
        "click",
        function(){
            saveNotes()
        }
    )

    container.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes()
        }
    )

    
}


//making elements not to disappear after the page is refreshed
(function(){
    const isNotes = JSON.parse(localStorage.getItem('notes'));
    if(isNotes === null){
        addNote()
    }
    else{
        isNotes.forEach(
            (isNote) => {
                addNote(isNote);
            }
        )
    }
})();



