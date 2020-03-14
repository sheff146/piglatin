const CAPITAL_REGEXP = /[A-Z]/;

export function getCapitals(word: string): Set<number> {
  const result = new Set<number>();
  word.split("").forEach((char, index) => {
    if (CAPITAL_REGEXP.test(char)) {
      result.add(index);
    }
  });
  return result;
}

export function removeCapitals(word: string): string {
  return word.toLowerCase();
}

export function addCapitals(word: string, capitals: Set<number>): string {
  return word
    .split("")
    .map((char, index) => {
      if (capitals.has(index)) {
        return char.toUpperCase();
      }

      return char;
    })
    .join("");
}
