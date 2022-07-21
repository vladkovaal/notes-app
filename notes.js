import fs from 'fs';
import chalk from 'chalk';

const saveNotes = (notes) => {
	fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
	try {
		return JSON.parse(fs.readFileSync('notes.json'));
	} catch (e) {
		return [];
	}
};

const addNote = (title, body) => {
	const notes = loadNotes();
	console.log(notes);
	const duplicate = notes.find((note) => note.title === title);
	if (!duplicate) {
		notes.push({
			title: title,
			body: body,
		});
		saveNotes(notes);
		console.log(chalk.green.inverse('Note added!'));
	} else {
		console.log(chalk.red.inverse('Note with this title already exists!'));
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const newNotes = notes.filter((note) => note.title !== title);
	if (notes.length !== newNotes.length) {
		saveNotes(newNotes);
		console.log(chalk.green.inverse('Note removed!'));
	} else {
		console.log(chalk.red.inverse("Note with this title doesn't exists!"));
	}
};

const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.bold('Your notes:'));
	notes.forEach((note) => {
		console.log(note.title);
	});
};

const readNote = (title) => {
	const notes = loadNotes();
	const noteToRead = notes.find((note) => note.title === title);
	if (noteToRead) {
		console.log(chalk.bold(noteToRead.title));
		console.log(noteToRead.body);
	} else {
		console.log(chalk.red.inverse("Note with this title doesn't exists!"));
	}
};

export { addNote, removeNote, listNotes, readNote };
