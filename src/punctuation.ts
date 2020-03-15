const PUNCTUATION_REGEXP = /[.,;:!?]/g;

type PunctuationMap = string[];

export function getPunctuation(word: string): PunctuationMap {
  const result: string[] = [];
  const matches = word.matchAll(PUNCTUATION_REGEXP);
  for (const match of matches) {
    const index = word.length - 1 - (match.index as number);
    result[index] = match[0];
  }
  return result;
}

export function removePunctuation(word: string): string {
  return word.replace(PUNCTUATION_REGEXP, "");
}

export function addPunctuation(word: string, punctuation: PunctuationMap): string {
  const temp = word.split("");
  punctuation.forEach((char, index) => {
    temp.splice(temp.length - index, 0, char);
  });
  return temp.join("");
}
