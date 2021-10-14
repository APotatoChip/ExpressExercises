const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes");

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/users", userRoutes);

// app.get("/", function(req, res) {
//     res.json({ message: "That's it!" });
//     // return res.send("Hello World!");
// });

// app.get("/instructor/:firstName", function(req, res) {
//     res.status(200).json({ name: "Ellie" });
//     // return res.send(`The name of this instructor is ${request.params.firstName}`);
// });

// app.get("/secret", function(req, res) {
//     res.status(401).json({ message: 'Unathorized' });
// });

app.get("/", (req, res) => {
    return res.json("Start with /users");
})

app.listen(3000, function() {
    console.log("The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!");
});