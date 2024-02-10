import { $, $$ } from "../utils/dom.js";

const text = $("p");
const btn = $("button");
const info = $("h1");
let ord;

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

function checkReplacement() {
  if (text.textContent.includes(ord)) {
    info.textContent = "HOV NOGET GIK GALT, IKKE ALLE ORD ER UDSKIFTET";
  } else info.textContent = "ALLE ORD ER UDSKIFTET";
  console.log(ord);
}

function replaceWords() {
  curseWords.forEach((word) => {
    if (word.bad && word.good) {
      const replaced = text.textContent.replace(word.bad, word.good);
      text.textContent = replaced;
    } else {
      ord = word.bad.substring();
    }
    checkReplacement();
  });
}

btn.addEventListener("click", replaceWords);
