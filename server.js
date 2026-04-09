const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// statikus fájlok kiszolgálása a public mappából
app.use(express.static(path.join(__dirname, "public")));

// főoldal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`A szerver fut ezen a porton: ${PORT}`);
});
