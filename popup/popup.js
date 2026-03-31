const btn = document.getElementById("analyzeButton");
function displayAlert() {
    chrome.runtime.sendMessage({ action: "analyze" });
}
btn.addEventListener("click", displayAlert);