import Todo from '../models/todo'; // Import the Todo model so we can query the DB

export default {
  // This gets all Todos in the collection and sends it back in JSON format
  getAll: (req, res) => {
    Todo.find({}).then(todos => {
      res.json(todos);
    })
  },
  findOne: (req, res) => {
    Todo.findOne({_id: req.params.id}).then(todo => {
      res.json(todo);
    })
  },
  postNew: (req, res) => {
    // This creates a new todo using POSTed data (in req.body)
    Todo.create(req.body).then(todo => {
      res.json(todo);
    });
  },
  deleteNew: (req, res) => {
    // This creates a new todo using POSTed data (in req.body)
    Todo.remove({_id: req.params.id}).then(todo => {
      res.json(todo);
    });
  }
};
