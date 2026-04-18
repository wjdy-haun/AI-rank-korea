let votes = {
  chatgpt: 0,
  perplexity: 0,
  grammarly: 0,
  notion: 0
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
  const sorted = Object.entries(votes).sort((a, b) => b[1] - a[1]);

  const tools = document.querySelectorAll(".tool");

  const orderMap = {};
  const medal = ["🥇", "🥈", "🥉", ""];

  // 정렬된 순서대로 다시 배치
  sorted.forEach((item, index) => {
    orderMap[item[0]] = index;
  });

  const list = ["chatgpt", "perplexity", "grammarly", "notion"];

  list.sort((a, b) => {
    return (orderMap[a] ?? 999) - (orderMap[b] ?? 999);
  });

  const container = tools[0].parentElement;

  // UI 초기화 후 다시 붙이기 (핵심 안정 방식)
  list.forEach((name, index) => {
    const el = [...tools].find(t => t.querySelector("span").id === name);

    if (!el) return;

    // 메달 붙이기
    const label = el.querySelector("span");

    if (!label.dataset.base) {
      label.dataset.base = label.innerText;
    }

    label.innerText = `${medal[index] || ""} ${label.dataset.base}`;

    // 스타일 초기화
    el.style.border = "none";
    el.style.transform = "scale(1)";

    // 순위 강조
    if (index === 0) {
      el.style.border = "2px solid gold";
      el.style.transform = "scale(1.08)";
    } else if (index === 1) {
      el.style.border = "2px solid silver";
    } else if (index === 2) {
      el.style.border = "2px solid #cd7f32";
    }

    // 실제 위치 변경 (핵심)
    container.appendChild(el);
  });

  // 숫자 업데이트
  document.getElementById("chatgpt").innerText = votes.chatgpt;
  document.getElementById("perplexity").innerText = votes.perplexity;
  document.getElementById("grammarly").innerText = votes.grammarly;
  document.getElementById("notion").innerText = votes.notion;
}
