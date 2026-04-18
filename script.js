let votes = {
  chatgpt: 0,
  perplexity: 0,
  grammarly: 0,
  notion: 0
};

window.onload = function () {
  const saved = localStorage.getItem("votes");
  if (saved) {
    votes = JSON.parse(saved);
  }
  render();
};

function vote(name) {
  votes[name]++;
  localStorage.setItem("votes", JSON.stringify(votes));
  render();
}

function render() {
  const container = document.querySelectorAll(".tool");

  // 점수 기준 정렬 배열 만들기
  const sorted = Object.entries(votes).sort((a, b) => b[1] - a[1]);

  // 1위 찾기
  const top = sorted[0][0];

  // UI 업데이트
  document.getElementById("chatgpt").innerText = votes.chatgpt;
  document.getElementById("perplexity").innerText = votes.perplexity;
  document.getElementById("grammarly").innerText = votes.grammarly;
  document.getElementById("notion").innerText = votes.notion;

  // 1위 표시 추가
  container.forEach(div => {
    div.style.border = "none";
    div.style.transform = "scale(1)";
  });

  const map = {
    chatgpt: container[0],
    perplexity: container[1],
    grammarly: container[2],
    notion: container[3]
  };

  const topBox = map[top];
  topBox.style.border = "2px solid gold";
  topBox.style.transform = "scale(1.05)";
}
