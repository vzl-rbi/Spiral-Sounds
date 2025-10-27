import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";
async function createTable() {
  const db = await open({
    filename: path.join("database.db"),
    driver: sqlite3.Database,
  });
  // await db.exec(`DROP TABLE IF EXISTS products`); // use this code to clears the old table, create fresh table.
  await db.exec(`
            CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            title TEXT NOT NULL,
            artist TEXT NOT NULL,
            price REAL NOT NULL, 
            image TEXT NOT NULL,
            year INTEGER,
            genre TEXT,
            stock INTEGER

            )
            `);
  await db.close();
  console.table("Table is successfully Created!!");
}

createTable();
