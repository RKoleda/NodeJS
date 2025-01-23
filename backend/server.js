import express from "express";
import cors from "cors";

const server = express();
const PORT = 4000;

// Middleware
server.use(cors());

let todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

server.get("/todos", (req, res) => {
  res.json(todos);
});

server.listen(PORT, () => {
  console.log(`Express app is running on http://localhost:${PORT}`);
});
