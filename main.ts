// Pass the post address through to the grader unchanged. The X post is created
// by Wisnu after this build, so POST.json will be added only when it exists.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const repository = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot');
const destinationDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const source = resolve(repository, 'POST.json');
const destination = resolve(destinationDirectory, 'POST.json');

function copyPostFile() {
  const details = statSync(source);
  if (!details.isFile()) {
    throw new Error('the post address must be a regular POST.json file');
  }

  mkdirSync(destinationDirectory, { recursive: true });
  copyFileSync(source, destination);
}

try {
  copyPostFile();
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  process.stderr.write(`Could not copy POST.json: ${reason}\n`);
  process.exitCode = 1;
}
