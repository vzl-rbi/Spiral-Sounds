import express from "express";
import { productRouter } from "./routes/products.js";
const app = express();
const PORT = 8000;
app.use(express.static("public"));
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.send(`<!doctype html><html><body> Spiral Sounds </body></html>`);
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
