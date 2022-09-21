const express = require("express");
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("melllo World")
});

const users = [
    { id: 1, name: "Sohag", phone: "012345" },
    { id: 2, name: "Sojib", phone: "3423454" },
    { id: 3, name: "Sakib", phone: "2345235" },
    { id: 4, name: "Sakil", phone: "346235" },
    { id: 5, name: "Sohan", phone: "643522346" }
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const match = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(match)
    }
    else {
        console.log(users)
        res.send(users)
    }

});
app.get('/user', (req, res) => {
    console.log(users)
    res.send(users)
});
app.get('/users/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    console.log(id)
    // const user = users[id];
    const user = users.find(user => user.id == id);
    const guddi = "user: " + JSON.stringify(user);
    res.send(guddi)
    // res.send(user)
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.listen(port, () => {
    console.log("app.listen and port")
})