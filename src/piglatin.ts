export function transformToPigLatin(text: string) {
  const words = parse(text);
  const transformedWords = words.map(transformWord);
  return transformedWords.join(" ");
}

function parse(text: string): string[] {
  return text.split(" ");
}

function transformWord(word: string): string {
  const consonantRegex = /^([bcdfghjklmnpqrstvwxz])(\w*)$/;
  const vowelRegex = /^[aeiouy]\w*$/;
  const wayRegex = /way$/;

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
