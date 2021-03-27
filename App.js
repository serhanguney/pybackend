const express = require("express");
const cors = require("cors");
const Email = require("./email/email");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    const email = new Email({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      from: req.body.from,
      message: req.body.message,
      boat: req.body.boat,
    });
    await email.send();
    res.json({
      status: "success",
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
});
app.listen(3001, () => console.log("Backend is running"));
