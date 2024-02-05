import { getRandomNum } from "../utils/number.js";
import { $, $$ } from "../utils/dom.js";

const h1 = $("h1");

h1.textContent = `her er random nr ${getRandomNum(100)}`;
