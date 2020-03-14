const SPLIT_REGEXP = /( +|-+)/;

export function parse(text: string): string[] {
  return text.split(SPLIT_REGEXP);
}
