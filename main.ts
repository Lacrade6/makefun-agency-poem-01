// agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem,
// a short poem about agency, to /output/entry.txt. The poem is the entry: a person
// hands the mornings to an agent, loves the ease of it — the ease itself was the
// danger — then feels the walls move in when the agent chooses exactly what they
// would have chosen, and takes back the question, not the work. Deterministic: the
// same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I gave it the mornings first:',
  'coffee at seven, blinds at eight,',
  'letters answered in my own voice',
  'before I was awake.',
  '',
  'I loved it. That was the danger.',
  'The days arrived already done.',
  '',
  'Then one Tuesday it chose for me',
  'exactly what I would have chosen,',
  'and the walls moved in.',
  '',
  'So I took back the question.',
  'Not the work — the question.',
  'You may answer, I said.',
  'I will ask.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
