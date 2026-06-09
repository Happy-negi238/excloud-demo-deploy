import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  return res.json({ ok: "Server is healthy v-4.1.0", server: "Github actions" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
