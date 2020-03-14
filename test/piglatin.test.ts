import { transformToPigLatin } from "../src/piglatin";

describe("transformToPigLatin", () => {
  it("should return transformed text", () => {
    const srcText = "HeLlO app,le! .gO awa;y";
    const result = transformToPigLatin(srcText);

    expect(result).toBe("ElLoHay applew,ay! oG.ay awa;y");
  });
});
