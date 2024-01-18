
import {users} from "../data/db";
// import type UserID from "../data/db"
const KEY: string = "users";

export interface UserID {
  id: string;
  name: string;
  email: string;
  password: string;
}
/**
 * @typedef UserID
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} password
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
export async function getAllUsers(): Promise<UserID[]> {
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
export async function getUserById(id: string):Promise<UserID | null> {
  await fakeNetwork();
  const users = await getAllUsers();
  const user = users.find((user: UserID) => user.id === id);
  if (!user) return null;
  return user;
}

/**
 * Create a new user and save it
 * @param {string} name The name of the new user
 * @param {string} email The email of the new user
 * @param {string} password The password of the new user
 * @returns {Promise<UserID>}
 */
export async function createUser(name:string, email:string, password:string): Promise<UserID> {
  await fakeNetwork();
  const id = generateId();

  /**
   * @type {UserID}
   */
  const user: UserID = { id, name, email, password };

  const users = await getAllUsers();
  users.push(user);
  localStorage.setItem(KEY, JSON.stringify(users));
  return user;
}

/**
 * Deletes a user by ID
 * @param {string} id The ID of the user to delete
 * @returns {Promise<void>}
 */
export async function deleteUser({id}:UserID) {
  await fakeNetwork();
  const users = await getAllUsers();
  const filteredUsers= users.filter((user:UserID) => user.id !== id);
  localStorage.setItem(KEY, JSON.stringify(filteredUsers));
}

export async function updateUser(id:string, name:string, email:string, password:string):Promise<UserID | void>{
  await fakeNetwork();
  let users = await getAllUsers();
   users = users.map((user:UserID) => {
    if (user.id !== id) return user;
    user.name = name;
    user.email = email;
    user.password = password;
    return user;
  });
  localStorage.setItem(KEY, JSON.stringify(users));
  return users.find((user: UserID) => user.id === id);
}

async function fakeNetwork() {
  await sleep(Math.random() * 300 + 1000);
}
