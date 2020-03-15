const SPLIT_REGEXP = /(\s+|-+)/;

export function split(text: string): string[] {
  return text.split(SPLIT_REGEXP);
}
