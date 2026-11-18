// for hero animation

function splitWords(el, startIndex = 0) {
  const words = el.textContent.trim().split(/\s+/);

  el.innerHTML = words
    .map(
      (word, n) =>
        `<span class="word" style="--i:${startIndex + n}">${word}</span>`,
    )
    .join(" ");

  return startIndex + words.length;
}

let i = 0;
document.querySelectorAll(".hero-title-line").forEach((line) => {
  i = splitWords(line, i);
});

splitWords(document.querySelector(".hero-text"));
// --------------------------------------------------------------------------------------//
