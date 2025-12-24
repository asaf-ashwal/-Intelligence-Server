import express from "express";
import agentsR from "./routers/agentsR.js";
import reportsR from "./routers/reportsR.js";
import usersR from "./routers/usersR.js";
import aoth from "./middleware/aoth.js";
import { creatFiles, reed_file, write_file } from "./fileHandle.js";
import errorHandler from "./middleware/errorHandler.js";
import { creatAgent } from "./functions/agentF.js";
import { creatRport } from "./functions/reportsF.js";

const app = express();
const port = 3003;

creatFiles();

app.use(express.json());
app.use(aoth);
app.use("/agents", agentsR);
app.use("/reports", reportsR);
app.use("/users", usersR);
app.use(errorHandler);

app.get("/health", (req, res) => {
  res.json({ ok: true });
  creatRport("new report", 1);
});

app.listen(port, () => console.log(`setrver runing on port ${port}`));
