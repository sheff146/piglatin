export function transformToPigLatin(text: string) {
  const words = parse(text);
  const transformedWords = words.map(transformWord);
  return transformedWords.join(" ");
}

function parse(text: string): string[] {
  return text.split(" ");
}

function transformWord(word: string): string {
  const capitalIndices = getCapitalIndices(word);
  word = word.toLowerCase();

  word = rearrangeLetters(word);

  word = word
    .split("")
    .map((char, index) => {
      if (capitalIndices.has(index)) {
        return char.toUpperCase();
      }

      return char;
    })
    .join("");

  return word;
}

const consonantRegex = /^([bcdfghjklmnpqrstvwxz])(\w*)$/;
const vowelRegex = /^[aeiouy]\w*$/;
const wayRegex = /way$/;

function rearrangeLetters(word: string): string {
  if (wayRegex.test(word)) {
    return word;
  }

  if (vowelRegex.test(word)) {
    return word + "way";
  }

  if (consonantRegex.test(word)) {
    return word.replace(consonantRegex, "$2$1ay");
  }

  return word;
}

let capitalRegExp = /[A-Z]/;

function getCapitalIndices(word: string): Set<number> {
  const result = new Set<number>();
  word.split("").forEach((char, index) => {
    if (capitalRegExp.test(char)) {
      result.add(index);
    }
  });
  return result;
}
