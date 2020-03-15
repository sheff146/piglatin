const CAPITAL_REGEXP = /[A-Z]/g;
const REPLACE_REGEXP = new RegExp(CAPITAL_REGEXP, "ig");

type CapitalsSet = Set<number>;

export function getCapitals(word: string): CapitalsSet {
  const result = new Set<number>();
  const matches = word.matchAll(CAPITAL_REGEXP);
  for (const match of matches) {
    result.add(match.index as number);
  }
  return result;
}

export function removeCapitals(word: string): string {
  return word.toLowerCase();
}

export function addCapitals(word: string, capitals: CapitalsSet): string {
  return word.replace(REPLACE_REGEXP, (substr, offset) =>
    capitals.has(offset) ? substr.toUpperCase() : substr
  );
}
