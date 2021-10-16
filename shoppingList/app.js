const express = require("express");

const morgan = require("morgan");
const shoppingListRouter = require("./routes");

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("tiny"));
app.use("/items", shoppingListRouter);

app.get("/", (req, res) => {
    return res.json("Start with /items");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}!`);
});