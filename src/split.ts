const SPLIT_REGEXP = /( +|-+)/;

export function split(text: string): string[] {
  return text.split(SPLIT_REGEXP);
}
