const textEl = document.getElementById('text');
const text = "hiçkimseden, kimseye..";

[...text].forEach(char => {
  const span = document.createElement('span');
  span.textContent = char;
  textEl.appendChild(span);
});
