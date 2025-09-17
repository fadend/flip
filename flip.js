const FLIP_TABLE = {
  a: "\u0250",
  b: "q",
  c: "\u0254",
  d: "p",
  e: "\u01DD",
  f: "\u025F",
  g: "\u0183",
  h: "\u0265",
  i: "\u0131",
  j: "\u027E",
  k: "\u029E",
  //l : '\u0283',
  m: "\u026F",
  n: "u",
  r: "\u0279",
  t: "\u0287",
  v: "\u028C",
  w: "\u028D",
  y: "\u028E",
  ".": "\u02D9",
  "[": "]",
  "(": ")",
  "{": "}",
  "?": "\u00BF",
  "!": "\u00A1",
  "\'": ",",
  "<": ">",
  _: "\u203E",
  "\u203F": "\u2040",
  "\u2045": "\u2046",
  "\u2234": "\u2235",
  "\r": "\n", // thank you, Yeeliberto
};

for (let c in FLIP_TABLE) {
  FLIP_TABLE[FLIP_TABLE[c]] = c;
}

function flipString(aString) {
  const last = aString.length - 1;
  const result = [];
  for (let i = last; i >= 0; --i) {
    let c = aString[i];
    let r = FLIP_TABLE[c];
    result[last - i] = r ? r : c;
  }
  return result.join("");
}

const originalArea = document.getElementById("original");
const flippedArea = document.getElementById("flipped");
originalArea.addEventListener("keyup", () => {
  flippedArea.value = flipString(originalArea.value.toLowerCase());
});

originalArea.focus();
originalArea.select();
