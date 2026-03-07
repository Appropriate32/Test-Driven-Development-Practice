function isLetter(char) {
  const ascii = char.charCodeAt(0);

  if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
    return true;
  }

  return false;
}

function isUpper(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}

function wrapLetter(char, shift) {
  let floor;
  if (isUpper(char)) {
    floor = 65;
  } else {
    floor = 97;
  }

  const charCodeAtZero = char.charCodeAt(0) - floor;

  const shiftedIndex = (((charCodeAtZero + shift) % 26) + 26) % 26;

  return String.fromCharCode(shiftedIndex + floor);
}

export const caesarCipher = (string, shiftFactor) => {
  let shiftedChars = "";

  for (let i = 0; i < string.length; i++) {
    if (isLetter(string.charAt(i))) {
      shiftedChars += wrapLetter(string.charAt(i), shiftFactor);
    } else {
      shiftedChars += string.charAt(i);
    }
  }

  return shiftedChars;
};
