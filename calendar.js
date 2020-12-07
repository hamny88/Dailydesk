const shareBtn = document.querySelector(".share"),
    calDiv = document.querySelector(".calenderList"),
    calUl = document.querySelector(".calUl")
;
const YMD = toString(date.getFullYear())
let getCalendar = [];

const chosenCal = "";

console.log(shareBtn)
function authenticate() {
    const success = gapi.auth2.getAuthInstance();
    //gapi.auth2.init().isSignedIn.get();
    //isSignedIn.le
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }

  function loadClient() {
    gapi.client.setApiKey("AIzaSyAGc4uw7olFECQhFYdBA-lnM8yA0KOUt5s");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(function() {
             console.log("GAPI client loaded for API"); 
             getCalendarList();
            },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }

function execute(task,calId) {
    return gapi.client.calendar.events.insert({
      "calendarId": calId,
      "resource": {
        "summary": task,
        "end": {
          "dateTime": "2020-12-28T17:00:00-07:00",
          "timeZone": "America/Los_Angeles"
        },
        "start": {
          "dateTime": "2020-12-07T09:00:00-07:00",
          "timeZone": "America/Los_Angeles"
        }
      }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }

function getCalendarList() {
    return gapi.client.calendar.calendarList.list({})
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                const calID = response.result.items[0];
                
                parsedToDos.forEach(function(toDo){
                    execute(toDo.text,calId);
                });
               // execute(calId);
                // const getCalLength = getCalResult.length;
                // for(var i = 0; i < getCalLength ; i++) {
                //     getCalendar.push(getCalResult[i].summary);
                // }
                // getCalendar.forEach(function(calList){
                //     paintCalList(calList);
                // })
                // console.log(getCalendar)

              },
              function(err) { console.error("Execute error", err); });
  }

  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "1009281003826-3vh2g8h76bpu2t6a87v5457i28udbmmr.apps.googleusercontent.com"});
  });

function handleShareClick(){
    console.log("handleShareClicked")

}
function paintCalList(calName) {
    console.log("paintCalList")
   // const calPopUp = document.createElement("div");
    //const calUl = document.createElement("ul");
    const calLi = document.createElement("li");
    calLi.innerHTML = calName;

    calUl.appendChild(calLi);
    calDiv.appendChild(calUl);
    body.appendChild(calDiv);
    calDiv.classList.add("short-showing");
}
function init() {

    shareBtn.addEventListener("click",handleShareClick);
}

init();