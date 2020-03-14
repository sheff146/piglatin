import { transformToPigLatin } from "../src/piglatin";

describe("transformToPigLatin", () => {
  it("should return transformed text", () => {
    const srcText = "hello apple go away";
    const result = transformToPigLatin(srcText);

    expect(result).toBe("ellohay appleway ogay away");
  });
});
