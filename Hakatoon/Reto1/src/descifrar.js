export const mensaje =
  "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$_~()`~]=\\]+~";

// Diccionario de sustitución
const descifrarMensaje = {
  "()": " ",
  "?": "a",
  "[": "e",
  "\\": "i",
  "~": "o",
  "+": "u",
  "¬": "ó",
  "¿": "y",
  "}": "q",
  "^": "m",
  "`": "c",
  "/": "l",
  "*": "p",
  "%": "b",
  "]": "n",
  "-": "h",
  "#": "v",
  $: "r",
  "{": "s",
  "=": "t",
  "!": "j",
  "¡": "d",
  ";": "f",
  _: "z",
};

// Función para realizar las sustituciones
export function descifrar(text) {
  let result = text.replace(/\(\)/g, descifrarMensaje["()"]);
  result = result
    .split("")
    .map((char) => descifrarMensaje[char] || char)
    .join("");
  return result;
}
