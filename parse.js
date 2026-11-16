// parse.js — drop-in replacement for marked 18.1.3.
//
// parse(markdown) returns exactly the HTML that marked 18.1.3's
// marked.parse returns with default options (gfm true, breaks false,
// pedantic false, async false) for every input.
//
// The speed does not come from this thin wrapper. It comes from a
// performance fork of the vendored marked under vendor/marked/:
// that fork skips tokenizers and masking passes whose outcome is
// already decided by the source's first characters, and scans list
// lines with indexOf instead of split. The fork changes no rendering
// rule — it only skips decided work — so the output is byte-for-byte
// identical to pristine marked.

import { marked } from './vendor/marked/marked.esm.js';

/** The HTML marked renders for `markdown`, with marked's defaults. */
export function parse(markdown) {
  return marked.parse(markdown);
}
