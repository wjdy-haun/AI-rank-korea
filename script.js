let votes = {
  chatgpt: 0,
  perplexity: 0,
  grammarly: 0
};

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("votes");
  if (saved) votes = JSON.parse(saved);
  render();
});

function vote(name) {
  votes[name] = (votes[name] || 0) + 1;
  localStorage.setItem("votes", JSON.stringify(votes));
  render();
}

function render() {
  document.getElementById("chatgpt").innerText = votes.chatgpt;
  document.getElementById("perplexity").innerText = votes.perplexity;
  document.getElementById("grammarly").innerText = votes.grammarly;
}
