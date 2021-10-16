const express = require("express");

const router = express.Router();

let shoppingList = [];
var id = 1;

router.route("")
    .get((req, res) => {
        return res.json(shoppingList);
    })
    .post((req, res) => {
        shoppingList.push({
            name: req.body.name,
            prize: req.body.prize,
            id: id++
        });
        return res.json({ message: "Created!" });
    });

router.route("/:id")
    .get((req, res) => {
        let item = shoppingList.find(val => val.id === Number(req.params.id));
        return res.json(item)
    })
    .patch((req, res) => {
        let item = shoppingList.find(val => val.id === Number(req.params.id));
        shoppingList.name = req.body.name;
        shoppingList.prize = req.body.prize;
        return res.json({ message: "Updated!" });
    })
    .delete((req, res) => {
        let index = shoppingList.findIndex(val => val.id === Number(req.params.id));
        shoppingList.splice(index, 1);
        return res.json({ message: "Deleted!" });
    });

module.exports = router;