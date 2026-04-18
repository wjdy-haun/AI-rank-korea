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
  const list = document.getElementById("list");
  const tools = Array.from(document.querySelectorAll(".tool"));

  // 정렬
  const sorted = tools.sort((a, b) => {
    const aName = a.dataset.name;
    const bName = b.dataset.name;
    return (votes[bName] || 0) - (votes[aName] || 0);
  });

  // 다시 붙이기
  sorted.forEach((el, index) => {
    const name = el.dataset.name;

    // 숫자 업데이트
    document.getElementById(name).innerText = votes[name] || 0;

    // 초기화
    el.style.border = "none";

    // 메달 색
    if (index === 0) {
      el.style.border = "2px solid gold";
    } else if (index === 1) {
      el.style.border = "2px solid silver";
    } else if (index === 2) {
      el.style.border = "2px solid #cd7f32";
    }

    list.appendChild(el);
  });
}
