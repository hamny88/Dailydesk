const setting_body = document.querySelector("body");


function paintMenu() {
    const settingIcon = document.createElement("button");
    settingIcon.innerHTML = '<img class="setting" src="images/setting.png" />';
    setting_body.appendChild(settingIcon);
}

function init() {
    paintMenu();
}

init();