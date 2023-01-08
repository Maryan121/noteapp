let save = document.querySelector('#save');
        let subject = document.getElementById("subject");
        let textArea = document.getElementById('textArea');
        let deleteIcon = document.getElementById('deleteIcon');
        //theme
        let changethemeintowhite = document.getElementById('changethemeintowhite');
        let changethemeintoblack = document.getElementById('changethemeintoblack'); 
        let main = document.querySelector('main');
        changethemeintoblack.addEventListener('click',()=>{
            main.style.backgroundColor = 'black';
            changethemeintowhite.style.display = 'flex';
            changethemeintoblack.style.display = 'none';
        })
        changethemeintowhite.addEventListener('click',()=>{
            main.style.backgroundColor = 'white';
            
            changethemeintowhite.style.display = 'none';
            changethemeintoblack.style.display = 'flex';
        })
        //end
        save.addEventListener('click', ()=>{
            localStorage.setItem('sub', JSON.stringify(subject.value));
            localStorage.setItem('text', JSON.stringify(textArea.value));
            
        });

        //bacicon
        let backIicon = document.getElementById('back-icon');
        let nav = document.querySelector('nav');
        backIicon.addEventListener('click',back);
        function back(){
            main.style.width = '98%';
            main.style.backgroundColor = 'whitesmoke';
            main.style.height = '10vh';
            main.style.padding = '.7rem';
            main.style.margin = '1rem auto';
            nav.style.display = 'none';
            textArea.style.display = 'none';
            subject.addEventListener('click',resize);

        }
        function resize(){
            main.style.width = '100%';
            nav.style.display = 'flex';
            main.style.height = '100vh';
            main.style.padding = '0';
            main.style.margin = '0';
            textArea.style.display = 'flex';
        }
        (function autosave(){
            subject.value = JSON.parse(localStorage.getItem('sub'));
            textArea.value = JSON.parse(localStorage.getItem('text'));
            //textArea.value = JSON.parse('note');
        })();
        
        function deleteNote(){
            localStorage.removeItem('sub');
            subject.value = '';
            localStorage.removeItem('text');
            textArea.value = '';
        }
        deleteIcon.addEventListener('click',deleteNote);
       