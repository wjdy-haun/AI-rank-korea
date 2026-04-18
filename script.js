let votes = {
  chatgpt: 0,
  perplexity: 0,
  grammarly: 0,
  notion: 0
};

// 저장 불러오기
window.onload = function() {
  const saved = localStorage.getItem("votes");
  if (saved) {
    votes = JSON.parse(saved);
    updateUI();
  }
};

function vote(name) {
  votes[name]++;
  localStorage.setItem("votes", JSON.stringify(votes));
  updateUI();
}

function updateUI() {
  document.getElementById("chatgpt").innerText = votes.chatgpt;
  document.getElementById("perplexity").innerText = votes.perplexity;
  document.getElementById("grammarly").innerText = votes.grammarly;
  document.getElementById("notion").innerText = votes.notion;
}
