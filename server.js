import express from 'express';
import mongoose from 'mongoose';
import routes from './Routes/Product.route.js'

const database = "WorkshopNodeJS"
const port = 3000;

// Create Express app
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Parse JSON body
// The line is middleware in Express.js that parses incoming requests with JSON payloads.
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(`mongodb://localhost:27017/${database}`)
  .then(() => {
    console.log(`connected to  ${database}`)
  })
  .catch(err => {
    console.log(err)
  })
mongoose.set('debug', true)

// Routes
app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});