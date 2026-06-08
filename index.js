import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.json({ ok: "Server is healthy v.3.0" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
