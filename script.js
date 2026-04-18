let votes = {
  chatgpt: 0,
  perplexity: 0,
  grammarly: 0,
  notion: 0
};

// 페이지 로드 시 저장값 불러오기
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("votes");

  if (saved) {
    votes = JSON.parse(saved);
  }

  updateUI();
});

function vote(name) {
  if (!votes[name]) {
    votes[name] = 0;
  }

  votes[name] += 1;

  localStorage.setItem("votes", JSON.stringify(votes));

  updateUI();
}

function updateUI() {
  // 숫자 업데이트
  document.getElementById("chatgpt").innerText = votes.chatgpt || 0;
  document.getElementById("perplexity").innerText = votes.perplexity || 0;
  document.getElementById("grammarly").innerText = votes.grammarly || 0;
  document.getElementById("notion").innerText = votes.notion || 0;

  // 1위 찾기
  const sorted = Object.entries(votes).sort((a, b) => b[1] - a[1]);
  const top = sorted[0][0];

  // 모든 박스 초기화
  document.querySelectorAll(".tool").forEach(el => {
    el.style.border = "none";
    el.style.transform = "scale(1)";
  });

  // 1위 강조
  const tools = document.querySelectorAll(".tool");

  const map = {
    chatgpt: tools[0],
    perplexity: tools[1],
    grammarly: tools[2],
    notion: tools[3]
  };

  if (map[top]) {
    map[top].style.border = "2px solid gold";
    map[top].style.transform = "scale(1.05)";
  }
}
