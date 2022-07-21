import yargs from 'yargs';
import * as notes from './notes.js';

yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			decribe: 'Note title',
			demandOption: true,
			type: 'string',
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	},
});

yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			decribe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	},
});

yargs.command({
	command: 'list',
	describe: 'List notes',
	handler() {
		notes.listNotes();
	},
});

yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			decribe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	},
});

yargs.argv;
