let votes = {
  chatgpt: 0,
  perplexity: 0,
  grammarly: 0,
  notion: 0
};

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("votes");

  if (saved) {
    votes = JSON.parse(saved);
  }

  render();
});

function vote(name) {
  votes[name] = (votes[name] || 0) + 1;

  localStorage.setItem("votes", JSON.stringify(votes));

  render();
}

function render() {
  // 정렬 (내림차순)
  const sorted = Object.entries(votes).sort((a, b) => b[1] - a[1]);

  // 화면 다시 그릴 준비
  const container = document.body;

  // 기존 tool들 제거 후 재정렬
  const tools = document.querySelectorAll(".tool");

  const medal = ["🥇 1위", "🥈 2위", "🥉 3위", ""];

  const map = {
    chatgpt: tools[0],
    perplexity: tools[1],
    grammarly: tools[2],
    notion: tools[3]
  };

  // 초기화
  tools.forEach(t => {
    t.style.order = "";
    t.style.border = "none";
    t.style.transform = "scale(1)";
  });

  // 순위대로 정렬 적용
  sorted.forEach((item, index) => {
    const name = item[0];

    const el = map[name];

    if (!el) return;

    // 순서 변경 (CSS flex order)
    el.style.order = index;

    // 메달 표시
    const label = el.querySelector("span");

    let medalText = "";
    if (index === 0) medalText = "🥇 ";
    if (index === 1) medalText = "🥈 ";
    if (index === 2) medalText = "🥉 ";

    // 이름 덮어쓰기 방지
    if (!label.dataset.original) {
      label.dataset.original = label.innerText;
    }

    label.innerText = medalText + label.dataset.original;

    // 강조 스타일
    if (index === 0) {
      el.style.border = "2px solid gold";
      el.style.transform = "scale(1.08)";
    }
    if (index === 1) {
      el.style.border = "2px solid silver";
    }
    if (index === 2) {
      el.style.border = "2px solid #cd7f32"; // bronze
    }
  });

  // 숫자 업데이트
  document.getElementById("chatgpt").innerText = votes.chatgpt;
  document.getElementById("perplexity").innerText = votes.perplexity;
  document.getElementById("grammarly").innerText = votes.grammarly;
  document.getElementById("notion").innerText = votes.notion;
}
span {
  margin-left: 10px;
  font-weight: bold;
}
