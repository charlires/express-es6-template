/**
 * Created by carlos on 8/14/16.
 */
import Todo from '../models/Memory'; // Import the Todo model so we can query the DB

export default {
  // This gets all Todos in the collection and sends it back in JSON format
  getAll: (req, res) => {
    res.json(Todo);
  },
  postNew: (req, res) => {
    // This creates a new todo using POSTed data (in req.body)
    Todo.push(req.body);
    res.json(req.body);
  }
};