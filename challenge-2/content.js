const data = {
  companyName: "TechCorp",
  matchScore: 86,
  accountStatus: "Target"
};

const widget = document.createElement('div');
widget.id = "enhancer-widget";
widget.innerHTML = `
  <div class="header">
    <strong id="company-name">${data.companyName}</strong>
    <button id="toggle-widget">Hide</button>
  </div>
  <div class="score">
    <label>Match Score</label>
    <progress id="match-score" max="100" value="${data.matchScore}"></progress>
  </div>
  <div id="status" class="status-tag ${
    data.accountStatus === "Target" ? "status-target" : "status-not-target"
  }">${data.accountStatus}</div>
`;

document.body.appendChild(widget);

document.getElementById("toggle-widget").addEventListener("click", () => {
  const current = widget.style.display;
  const next = current === "none" ? "block" : "none";
  widget.style.display = next;
  chrome.storage.sync.set({ visible: next === "block" });
});

chrome.storage.sync.get("visible", (result) => {
  if (result.visible === false) {
    widget.style.display = "none";
  }
});