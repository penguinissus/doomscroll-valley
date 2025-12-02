const btn = document.getElementById("button");
let isOn = false;

btn.addEventListener("click", ()=> {
    isOn = !isOn;
    if (isOn) {
        btn.textContent = "ON";
        //send to content js
        chrome.tabs.sendMessage(tabs[0].id, {action: "showBeginning"});
    }
    else {
        btn.textContent = "OFF";
    }
});