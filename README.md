# Pig Latin transformer

Translates a string into "Pig Latin"

## Features

- Words that start with a consonant have their first letter moved to the end of the word and the
letters “ay” added to the end
  - **Hello** becomes **Ellohay**
- Words that start with a vowel have the letters “way” added to the end
  - **apple** becomes **appleway**
- Words that end in “way” are not modified
  - **stairway** stays as **stairway**
- Punctuation remains in the same relative place from the end of the word
  - **can’t** becomes **antca’y**
  - **end.** becomes **endway.**
- Hyphens are treated as two words
  - **this-thing** becomes **histay-hingtay**
- Capitalization remains in the same place
  - **Beach** becomes **Eachbay**
  - **McCloud** becomes **CcLoudmay**
 
## Current limitations

- Works only with latin characters (a-zA-Z)
- Supports a limited set of punctuation (.,;:!?'")
- Wasn't tested with multi-line strings, so correctness is not guaranteed
- Doesn't work in IE and Safari

## TODO

- Write tests for every module (right now there is just one big test for the main function covering all possible cases)
- Expand supported punctuation
- Ensure correctness with multi-line strings processing
- Add polyfills for cross-browser support (IE and Safari)

## Yarn scripts

- `yarn build`: Generate js module and source maps
- `yarn start`: Run `yarn build` in watch mode
- `yarn test`: Run tests and generate coverage
- `yarn test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `yarn lint`: Lints code

## Credits

Based on [`typescript-library-starter`](https://github.com/alexjoverm/typescript-library-starter) project by [@alexjoverm](https://twitter.com/alexjoverm).
