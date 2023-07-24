const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    return res.json({ username: username, secret: "sha256..." });
});

const port = 3001;

app.listen(port, () => {
    console.log(`Chat app server listening on port 🔭 ${port}`);
});