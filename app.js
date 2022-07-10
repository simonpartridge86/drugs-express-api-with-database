import express from "express";
import { router } from "./routes/drugs.js";
import { html } from "./config.js";
import cors from "cors";

const app = express();
const PORT = process.env.port || 3000;

app.use(cors());
app.use(express.json());

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.use("/drugs", router);

//serves front end
app.get("/", (req, res) => {
  res.sendFile(html);
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
