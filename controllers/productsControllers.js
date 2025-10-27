import { getDBConnection } from "../db/db.js";
export const getGenres = async (req, res) => {
  const db = await getDBConnection();

  try {
    const query = "SELECT DISTINCT genre FROM products";
    const rowGenres = await db.all(query);
    const genres = rowGenres.map((row) => row.genre);
    res.json(genres);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch genres", details: err.message });
  }
};
export const getProducts = async (req, res) => {
  try {
    const db = await getDBConnection();
    const { genre } = req.query;

    let query = "SELECT * FROM products";
    const params = [];
    if (genre) {
      query += " WHERE genre=?";
      params.push(genre);
    }
    const products = await db.all(query, params);

    res.json(products);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch products", details: err.message });
  }
};
