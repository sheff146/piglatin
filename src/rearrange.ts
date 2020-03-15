const CONSONANT_REGEXP = /^([bcdfghjklmnpqrstvwxz])(\w*)$/;
const VOWEL_REGEXP = /^[aeiouy]/;
const WAY_REGEXP = /way$/;

export function rearrange(word: string): string {
  if (WAY_REGEXP.test(word)) {
    return word;
  }

  if (VOWEL_REGEXP.test(word)) {
    return word + "way";
  }

  if (CONSONANT_REGEXP.test(word)) {
    return word.replace(CONSONANT_REGEXP, "$2$1ay");
  }

  return word;
}
