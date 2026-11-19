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

// nav menu (tablet + mobile)

const nav = document.getElementById("nav");

const navToggle = document.createElement("button");
navToggle.className = "nav-toggle";
navToggle.type = "button";
navToggle.setAttribute("aria-label", "Open menu");
navToggle.setAttribute("aria-expanded", "false");
navToggle.setAttribute("aria-controls", "nav-links");
navToggle.innerHTML = `
    <svg class="nav-toggle-open" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 5H3"/><path d="M21 12H9"/><path d="M21 19H7"/></svg>
    <svg class="nav-toggle-close" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
`;
nav.appendChild(navToggle);

function setMenu(open) {
  nav.classList.toggle("nav-open", open);
  navToggle.setAttribute("aria-expanded", open);
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

navToggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("nav-open"));
});

document.querySelectorAll(".nav-links-item").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});
