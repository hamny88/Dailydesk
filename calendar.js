const shareBtn = document.querySelector(".share"),
    calDiv = document.querySelector(".calenderList"),
    calUl = document.querySelector(".calUl")
;
let startDate = "",
  endDate = ""
  ;

function getDate() {
  let today = new Date();
  console.log(Date.parse('2012-07-04T18:10:00.000+09:00'));
  let strDate = today.getFullYear().toString() + "-";
//  strDate += "-";
  strDate += (today.getMonth()+1).toString() + "-";
  strDate += today.getDate().toString() + "T";
  startDate = strDate +  "09:00:00+09:00" ; 
  endDate = strDate +  "23:59:59+09:00";

  console.log("2020-12-07T23:59:59+09:00") 
  console.log(startDate)
}

function authenticate() {
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
//2020-12-08T10:00:00+09:00
function execute(task,calId) {
  console.log("Execute!")
    return gapi.client.calendar.events.insert({
      "calendarId": calId,
      "resource": {
        "summary": task,
        "end": {
          "dateTime": endDate,
          "timeZone": "Asia/Seoul"
        },
        "start": {
          "dateTime": startDate,
          "timeZone": "Asia/Seoul"
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
                const calID = response.result.items[0].summary;
              
                const parsedToDos = JSON.parse(loadedtoDos);
                parsedToDos.forEach(function(toDo){
                  execute(toDo.text,calID);
                  });
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
    getDate();
    shareBtn.addEventListener("click",handleShareClick);
}

init();