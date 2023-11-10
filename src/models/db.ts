import notes from "../data/db";
// import type Note from "../data/db"
const KEY = "notes";

export interface Note {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}
/**
 * @typedef Note
 * @property {string} id
 * @property {string} title
 * @property {string} body
 * @property {string} createdAt
 */

export function generateId() {
  return crypto.randomUUID();
}

export function populate() {
  localStorage.setItem(KEY, JSON.stringify(notes));
}

/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Get all notes in the DB
 * @returns {Promise<Note[]>}
 */
export async function getAllNotes() {
  await fakeNetwork(); // getAllNotes finge una conexion con un servidor  y luego lee
  // de "localStorage", pero perfectamente aca puede ir un fetch a un URL
  // let response = fetch("/api/notes");
  const storedValue = localStorage.getItem(KEY);
  if (!storedValue) return [];
  return JSON.parse(storedValue);
}

/**
 * Get a single note by ID
 * @param {string} id The ID of the note to get
 * @returns {Promise<Note> | Promise<null>}
 */
export async function getNoteById(id: Note) {
  await fakeNetwork();
  const notes = await getAllNotes();
  const note = notes.users.find((): boolean => note.id === id);
  if (!note) return null;
  return note;
}

/**
 * Create a new note and save it
 * @param {string} title The title of the new note
 * @param {string} body The body of the new note
 * @returns {Promise<Note>}
 */
export async function createNote({title, body}:Note) {
  await fakeNetwork();
  const id = generateId();
  const createdAt = new Date().toISOString();

  /**
   * @type {Note}
   */
  const note: Note = { id, title, body, createdAt };

  const notes = await getAllNotes();
  notes.push(note);
  localStorage.setItem(KEY, JSON.stringify(notes));
  return note;
}

/**
 * Deletes a note by ID
 * @param {string} id The ID of the note to delete
 * @returns {Promise<void>}
 */
export async function deleteNote({id}:Note) {
  await fakeNetwork();
  const notes = await getAllNotes();
  const filteredNotes = notes.filter((note:Note) => note.id !== id);
  localStorage.setItem(KEY, JSON.stringify(filteredNotes));
}

export async function updateNote({id, title, body}:Note){
  await fakeNetwork();
  let notes = await getAllNotes();
   notes = notes.map((note: Note) => {
    if (note.body !== id) return note;
    note.title = title;
    note.body = body;
    return note;
  });
  localStorage.setItem(KEY, JSON.stringify(notes));
  return notes.find((note: Note) => note.id === id);
}

async function fakeNetwork() {
  await sleep(Math.random() * 300 + 1000);
}
