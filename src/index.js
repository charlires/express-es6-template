/**
 * Created by carlos on 8/14/16.
 */
/**
 * Import dependencies
 */
import express from 'express';
import logger from 'morgan'; // Logs each server request to the console
import bodyParser from 'body-parser'; // Takes information from POST requests and puts it into an object
import methodOverride from 'method-override'; // Allows for PUT and DELETE methods to be used in browsers where they are not supported
import mongoose from 'mongoose'; // Wrapper for interacting with MongoDB

/**
 * Import controllers
 */
import mainController from './controllers/main';
import memoryController from './controllers/memory';

/**
 * Configure database
 */
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/demo'); // Connects to your MongoDB.  Make sure mongod is running!
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

/** 
 * Configure app
 */
let app = express(); // Creates an Express app
app.set('port', process.env.PORT || 3000); // Set port to 3000 or the provided PORT variable
app.use(logger('dev')); // Log requests to the console
app.use(bodyParser.json()); // Parse JSON data and put it into an object which we can access
app.use(methodOverride()); // Allow PUT/DELETE

/**
 * Configure routes
 */
app.get('/todos', mainController.getAll);
app.post('/todos', mainController.postNew);
app.get('/todosm', memoryController.getAll);
app.post('/todosm', memoryController.postNew);

/**
 * Start app
 */
app.listen(app.get('port'), function() {
  console.log(`App listening on port ${app.get('port')}!`);
});