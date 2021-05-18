const express = require("express");
const cors = require("cors");
const Email = require("./email/email");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    const email = new Email({
      fullName: req.body.fullName,
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
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Backend is running"));
