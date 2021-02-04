const express = require('express'); // requires express 
const mongoose = require('mongoose'); // requires mongoose 

const app = express(); 
const PORT = process.env.PORT || 3001; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(require('./routes')); 


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', { //tells mongoose which database to connect to 
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// logs mongo queries
mongoose.set('debug', true); 

app.listen(PORT, () => console.log(`📲 Connected on localhost: ${PORT}`)); 