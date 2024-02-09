import express from "express";
import bodyParser from "body-parser";
import router from "./src/routes/ofd-check.route.js"

const app = express();
const port = process.env.SERVER_PORT || 3001;

app.use(bodyParser.json());
app.use("/api", router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});