const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    gr_toDos = document.querySelector(".js-toDoForm"),
    gr_toDoList = document.querySelector(".js-toDoList"),
    gr_body = document.querySelector("body")
    ;


const USER_LS = "currentUser",
    SHOWING_CN = "showing",
    NONE = "none"
    ;

let GREETING_MSG;
function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event) {
   
    event.preventDefault();
    const currentValue = input.value;
    if(currentValue !== "") {
        paintGreeting(currentValue);
        saveName(currentValue);
        gr_toDos.classList.remove(NONE);
        gr_toDoList.classList.remove(NONE);
    }
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);

}

function greetingTime(){
    const date = new Date();
    const hours = date.getHours();
    return hours;
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    const time = greetingTime();
    console.log(time);

    if(time > 5 && time < 12) {
        GREETING_MSG = "Good morning";
    } else if ( time > 11 && time < 18) {
        GREETING_MSG = "Good afternoon";
    } else {
        GREETING_MSG = "Good evening";
    }
    greeting.innerText = `${GREETING_MSG} , ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
        gr_toDos.classList.add(NONE);
        gr_toDoList.classList.add(NONE);
    }else {
        paintGreeting(currentUser);
        gr_toDos.classList.remove(NONE);
        gr_toDoList.classList.remove(NONE);
    }
}
function init() {
    loadName();
}

init();