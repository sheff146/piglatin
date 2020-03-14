import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";

const pkg = require("./package.json");

export default {
  input: `index.ts`,
  output: [{ file: pkg.module, format: "es", sourcemap: true }],
  watch: {
    include: "src/**"
  },
  plugins: [typescript({ useTsconfigDeclarationDir: true }), sourceMaps()]
};
