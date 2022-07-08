const express = require("express");
const connection = require("./connection");
const bodyParser = require("body-parser");
const taskController = require("./controllers/TaskController");
const task = require("./models/task.js");

const app = express();

const port = process.env.PORT || 8001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
