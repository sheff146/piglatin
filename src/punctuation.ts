const PUNCTUATION_REGEXP = /[.,;!?]/g;

export function getPunctuation(word: string): Map<number, string> {
  const result = new Map<number, string>();
  word
    .split("")
    .reverse()
    .forEach((char, index) => {
      if (PUNCTUATION_REGEXP.test(char)) {
        result.set(index, char);
      }
    });
  return result;
}

export function removePunctuation(word: string): string {
  return word.replace(PUNCTUATION_REGEXP, "");
}

export function addPunctuation(word: string, punctuation: Map<number, string>): string {
  const temp = word.split("").reverse();
  punctuation.forEach((char, index) => {
    temp.splice(index, 0, char);
  });
  return temp.reverse().join("");
}
