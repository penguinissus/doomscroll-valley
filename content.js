console.log("CONTENT.JS LOADED", window.location.href);

// Listen for messages from popup
chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === "showBeginning") {
        showBeginning();
    }
});

// Function to show the floating div
function showBeginning() {
    console.log("button works");

    // Create div if it doesn't exist
    let firstDiv = document.getElementById("firstDiv");
    if (!firstDiv) {
        firstDiv = document.createElement("div");
        firstDiv.id = "firstDiv";
        firstDiv.style.position = "fixed";
        firstDiv.style.top = "10px";
        firstDiv.style.right = "10px";
        firstDiv.style.backgroundColor = "yellow";
        firstDiv.style.padding = "10px";
        firstDiv.style.zIndex = 9999;
        document.body.appendChild(firstDiv);
    }

    firstDiv.textContent = "Hello from extension";
}

// Scroll detection
window.addEventListener("scroll", () => {
    console.log("User scrolled. Scroll position:", window.scrollY);
});

// Down-arrow detection
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        console.log("Down arrow pressed");
    }
});
