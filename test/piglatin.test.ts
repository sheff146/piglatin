import { transformToPigLatin } from "../src/piglatin";

describe("transformToPigLatin", () => {
  it("should return transformed text", () => {
    const srcText = "Hello, apple!";
    const result = transformToPigLatin(srcText);

    expect(result).toBe("Ellohay, appleway!");
  });
});
