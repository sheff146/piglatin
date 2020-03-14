const punctuationRegex = /[.,;!?]/g;

export function transformToPigLatin(text: string) {
  const words = parse(text);
  const transformedWords = words.map(transformWord);
  return transformedWords.join("");
}

const splitRegex = /( +)|(-+)/;

function parse(text: string): string[] {
  return text.split(splitRegex).filter(str => str);
}

function transformWord(word: string): string {
  const punctuationMap = getPunctuation(word);
  word = word.replace(punctuationRegex, "");
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

  const temp = word.split("").reverse();
  punctuationMap.forEach((char, index) => {
    temp.splice(index, 0, char);
  });
  word = temp.reverse().join("");

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

let capitalRegex = /[A-Z]/;

function getCapitalIndices(word: string): Set<number> {
  const result = new Set<number>();
  word.split("").forEach((char, index) => {
    if (capitalRegex.test(char)) {
      result.add(index);
    }
  });
  return result;
}

function getPunctuation(word: string): Map<number, string> {
  const result = new Map<number, string>();
  word
    .split("")
    .reverse()
    .forEach((char, index) => {
      if (punctuationRegex.test(char)) {
        result.set(index, char);
      }
    });
  return result;
}
