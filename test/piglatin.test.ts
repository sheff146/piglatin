import { transformToPigLatin } from "../src/piglatin";

describe("transformToPigLatin", () => {
  it("should return transformed text", () => {
    const srcText = "HeLlO apple gO away";
    const result = transformToPigLatin(srcText);

    expect(result).toBe("ElLoHay appleway oGay away");
  });
});
