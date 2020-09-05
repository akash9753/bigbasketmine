const express = require("express");
const cors = require("cors");


const app = express();

// Middelware :: Programs :: Which runs in advance.
app.use(cors()); // unblocking cors policy
app.use(express.json()); // BODY :: RAW :: JSON


const dbadduser = require("./db.add.user");



// POST API :: FOR TESTIG POSTMAN :: ANDROID :: IOS :: BROWSER
 //http://localhost:3000/adduser
app.post("/adduser", async (req, res) => {
  try {
    const input = req.body; // before doing this

    await dbadduser.addUser(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});

app.post("/auth-user", async (req, res) => {
  try {
    const input = req.body;

    await dbadduser.authenticateUser(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false });
  }
});



// started teh server.
app.listen(3000);