// переключение вкладок
const tabs = document.querySelectorAll(".tab");
const lists = document.querySelectorAll(".list");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const target = tab.dataset.target;
    lists.forEach(list => {
      list.classList.toggle("active", list.id === target);
    });
  });
});

// модальное окно
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const title = document.getElementById("modal-title");
const id = document.getElementById("modal-id");
const author = document.getElementById("modal-author");
const length = document.getElementById("modal-length");
const copyBtn = document.getElementById("copy-btn");
const copiedMsg = document.getElementById("copied-msg");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!card.dataset.id) return; // не открывать для "In Progress"
    title.textContent = card.dataset.title;
    id.textContent = card.dataset.id;
    author.textContent = card.dataset.author;
    length.textContent = card.dataset.length;
    modal.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(id.textContent);
  copiedMsg.classList.add("visible");
  setTimeout(() => copiedMsg.classList.remove("visible"), 1000);
});
