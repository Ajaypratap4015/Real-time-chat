const express = require("express");  // website k liye (http servers)
const cors = require("cors"); // server call from other origin
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username },
            {headers: {"private-key": " 88af20d3-7b1d-4e19-b16d-3861442e9c0f "} }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);

    }
});

app.listen(8000); 