#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [rawNumber, date, ...authorParts] = process.argv.slice(2);
const author = authorParts.join(' ').trim();

function fail(message) {
	console.error(message);
	process.exit(1);
}

if (!rawNumber || !date || !author) {
	fail('Usage: npm run new-meeting -- <number> <YYYY-MM-DD> <author name>');
}

const number = Number(rawNumber);
if (!Number.isSafeInteger(number) || number < 1) {
	fail('Meeting number must be a positive whole number.');
}

const parsedDate = new Date(`${date}T00:00:00Z`);
if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(parsedDate.valueOf()) || parsedDate.toISOString().slice(0, 10) !== date) {
	fail('Date must be a valid calendar date in YYYY-MM-DD format.');
}

const minutesDirectory = path.resolve(
	process.env.APONTAUA_MEETINGS_DIR ?? path.join(projectRoot, 'docs/meetings/minutes'),
);
const outputPath = path.join(minutesDirectory, `minute-${String(number).padStart(3, '0')}.md`);
const templatePath = path.join(projectRoot, 'static/templates/meeting-template.md');

try {
	const template = await readFile(templatePath, 'utf8');
	const content = template
		.replaceAll('{{NUMBER}}', String(number))
		.replaceAll('{{DATE}}', date)
		.replaceAll('{{AUTHOR}}', JSON.stringify(author))
		.replaceAll('{{ORDER}}', String(number));

	await mkdir(minutesDirectory, { recursive: true });
	await writeFile(outputPath, content, { encoding: 'utf8', flag: 'wx' });
	console.log(`Created ${path.relative(projectRoot, outputPath)}`);
} catch (error) {
	if (error?.code === 'EEXIST') fail(`Meeting ${number} already exists; no file was overwritten.`);
	fail(`Could not create meeting minutes: ${error.message}`);
}
