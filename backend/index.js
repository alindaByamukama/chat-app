require('dotenv').config()
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const axios = require('axios').default;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // get or create user on chat engine
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": PRIVATE_KEY } }
        );
        return res.status(r.status).json(r.data)
    } catch (err) {
        return res.status(err.response.status).json(err.response.data);
    }
});


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Chat app server listening on port 🔭 ${port}`);
});