import { transformToPigLatin } from "./piglatin";

describe("transformToPigLatin", () => {
  it("should return transformed text", () => {
    const srcText = "HeLlO a'pp,le! .gO awa;y   hey-wa\"y-yay!";
    const result = transformToPigLatin(srcText);

    expect(result).toBe("ElLoHay appl'ew,ay! oG.ay awa;y   eyhay-wa\"y-yayway!");
  });
});
