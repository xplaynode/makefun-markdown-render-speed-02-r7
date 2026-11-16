// main.ts — harness driver for markdown-render-speed-02.
//
// The harness runs `node /bot/main.ts`. This driver reads cases.json
// (an array of { id, markdown }) from the input directory, renders
// each case on its own with parse() from parse.js, and writes
// html.json (an array of the HTML strings, in order) to the output
// directory. Outside a container, MAKEFUN_INPUT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /input and /output.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from './parse.js';

const INPUT_DIR: string = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const OUTPUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(readFileSync(join(INPUT_DIR, 'cases.json'), 'utf8')) as { id: string; markdown: string }[];
// Output assembly: stringify each case's HTML immediately after it renders
// and join the spellings, instead of collecting the strings and making
// JSON.stringify walk the whole array a second time. The bytes written are
// identical: '[' + parts.join(',') + ']' is exactly JSON.stringify of the
// same array of strings.
const parts: string[] = [];
for (const c of cases) parts.push(JSON.stringify(parse(c.markdown)));
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'html.json'), '[' + parts.join(',') + ']');
