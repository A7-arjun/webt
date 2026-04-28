const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let tasks = [];

// ROOT → open UI
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/task.html');
});

// CREATE
app.post('/add', (req, res) => {
  tasks.push(req.body);
  res.send("Task Added");
});

// READ
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// DELETE
app.delete('/delete/:id', (req, res) => {
  tasks.splice(req.params.id, 1);
  res.send("Deleted");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});