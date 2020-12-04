const toDoForm = document.querySelector(".js-toDoForm"),
        toDoInput = toDoForm.querySelector("input"),
        toDoList = document.querySelector(".js-toDoList"),
        toDoBody = document.querySelector("body"),
        shareIcon = document.querySelector(".share")
        ;

    const TODOS_LS = 'toDos';
    let loadedtoDos = 'loadedToDos';
    let toDoSize = 0;
    let toDos = [];

    function saveToDos() {
        localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    }

    function deleteToDo(event) {
        const btn = event.target;
        const li = btn.parentNode;
        toDoList.removeChild(li);
        const cleanToDos = toDos.filter(function(toDo){
            return toDo.id !== parseInt(li.id);
        });
        console.log(cleanToDos)
        //replace the toDos
        toDos = cleanToDos;
        saveToDos();

        loadedtoDos = localStorage.getItem(TODOS_LS);
        toDoSize = JSON.parse(loadedtoDos).length;
        if(toDoSize == 0){
           eraseShare();
        }
    }

    function paintToDo(text) {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        delBtn.innerHTML = "❌";
        delBtn.addEventListener("click",deleteToDo);
        const span = document.createElement("span");
        const newId = toDos.length + 1 ;

        span.innerText = text;
        li.id = newId;  //to save li to localstorage. 
        li.appendChild(span);
        li.appendChild(delBtn);

        toDoList.appendChild(li);
        const toDoObj = {
            text : text,
            id : newId
        };
        toDos.push(toDoObj);
        
        saveToDos();

        loadedtoDos = localStorage.getItem(TODOS_LS);
        toDoSize = JSON.parse(loadedtoDos).length;

        if(toDoSize > 0){
            paintShare();  
        }
    }

    // function listUp(toDo) {
    //     console.log(toDo.text)
    // }

    function handleSubmit(event) {
        console.log("Submit Listener")
        event.preventDefault();
        const currentValue = toDoInput.value;
        if(currentValue !== "") {
            paintToDo(currentValue);
            toDoInput.value = "";
        }
    }
    
    function eraseShare() {
        shareIcon.classList.remove("showing");
    }
    function paintShare() {
        shareIcon.classList.add("showing");
    }

    function loadToDos(){
        loadedtoDos = localStorage.getItem(TODOS_LS);
        if(loadedtoDos !== null){
            toDoSize = JSON.parse(loadedtoDos).length;
            console.log(toDoSize)

            if(toDoSize !== 0){
                paintShare();
            }
            
            const parsedToDos = JSON.parse(loadedtoDos);
            parsedToDos.forEach(function(toDo){
                paintToDo(toDo.text);
            });

       
        }
    }
    function init(){
        loadToDos();
        toDoForm.addEventListener("submit",handleSubmit);
    }

    init();
