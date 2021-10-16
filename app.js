const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes");

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/users", userRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    return next(err); // pass the error to the next piece of middleware
});

/* 
  error handler - for a handler with four parameters, 
  the first is assumed to be an error passed by another
  handler's "next"
 */
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
        message: err.message,
        /*
         if we're in development mode, include stack trace (full error object)
         otherwise, it's an empty object so the user doesn't see all of that
        */
        error: app.get("env") === "development" ? err : {}
    });
});

// app.use((req, res, next) => {
//     console.log("Our middleware ran!");
//     return next();
// });

// app.use("/users", (req, res, next) => {
//     console.log("Middleware just ran on a users route!");
//     return next();
// });

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