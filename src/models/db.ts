import {users} from "../data/db";
// import type UserID from "../data/db"
const KEY = "users";

export interface UserID {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}
/**
 * @typedef UserID
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} createdAt
 */

export function generateId() {
  return crypto.randomUUID();
}

export function populate() {
  localStorage.setItem(KEY, JSON.stringify(users));
}

/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Get all users in the DB
 * @returns {Promise<UserID[]>}
 */
export async function getAllNotes() {
  await fakeNetwork(); 
  // let response = fetch("/api/users");
  const storedValue = localStorage.getItem(KEY);
  if (!storedValue) return [];
  return JSON.parse(storedValue);
}

/**
 * Get a single user by ID
 * @param {string} id The ID of the user to get
 * @returns {Promise<UserID> | Promise<null>}
 */
export async function getNoteById(id: UserID) {
  await fakeNetwork();
  const users = await getAllNotes();
  const user = users.users.find((): boolean => user.id === id);
  if (!user) return null;
  return user;
}

/**
 * Create a new user and save it
 * @param {string} name The name of the new user
 * @param {string} email The email of the new user
 * @returns {Promise<UserID>}
 */
export async function createNote({name, email}:UserID) {
  await fakeNetwork();
  const id = generateId();
  const createdAt = new Date().toISOString();

  /**
   * @type {UserID}
   */
  const user: UserID = { id, name, email, createdAt };

  const users = await getAllNotes();
  users.push(user);
  localStorage.setItem(KEY, JSON.stringify(users));
  return user;
}

/**
 * Deletes a user by ID
 * @param {string} id The ID of the user to delete
 * @returns {Promise<void>}
 */
export async function deleteNote({id}:UserID) {
  await fakeNetwork();
  const users = await getAllNotes();
  const filteredNotes = users.filter((user:UserID) => user.id !== id);
  localStorage.setItem(KEY, JSON.stringify(filteredNotes));
}

export async function updateNote({id, name, email}:UserID){
  await fakeNetwork();
  let users = await getAllNotes();
   users = users.map((user: UserID) => {
    if (user.email !== id) return user;
    user.name = name;
    user.email = email;
    return user;
  });
  localStorage.setItem(KEY, JSON.stringify(users));
  return users.find((user: UserID) => user.id === id);
}

async function fakeNetwork() {
  await sleep(Math.random() * 300 + 1000);
}
