import { split } from "./split";
import { rearrange } from "./rearrange";
import { addCapitals, getCapitals, removeCapitals } from "./capitals";
import { addPunctuation, getPunctuation, removePunctuation } from "./punctuation";

export function transformToPigLatin(text: string): string {
  const words = split(text);
  const transformedWords = words.map(transformWord);
  return transformedWords.join("");
}

function transformWord(word: string): string {
  const punctuation = getPunctuation(word);
  const wordWithoutPunctuation = removePunctuation(word);

  const capitals = getCapitals(wordWithoutPunctuation);
  const wordWithoutCapitals = removeCapitals(wordWithoutPunctuation);

  const rearrangedWord = rearrange(wordWithoutCapitals);

  const wordWithCapitals = addCapitals(rearrangedWord, capitals);
  const wordWithPunctuation = addPunctuation(wordWithCapitals, punctuation);

  return wordWithPunctuation;
}
