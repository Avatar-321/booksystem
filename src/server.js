// const express = require('express');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors()); // Enable CORS for all routes

// // Dummy user data (replace this with your database logic)
// const users = [
//   { id: 1, username: 'user1', password: 'password' } // Password is "password"
// ];

// // Login route
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(user => user.username === username);
//   if (!user) {
//     return res.status(401).json({ message: 'Invalid username or password' });
//   }

//   if (user.password !== password) {
//     return res.status(401).json({ message: 'Invalid username or password' });
//   }
  
//   const token = jwt.sign({ username: user.username, userId: user.id }, 'secret_key', { expiresIn: '1h' });
//   res.json({ message: 'Login successful', token });
// });

// app.post('/signup', (req, res) => {
//   const { username, password } = req.body;
//     const INSERT_USER_QUERY = 'INSERT INTO users (username, password) VALUES (?, ?)';
//     connection.query(INSERT_USER_QUERY, [username, password], (err, results) => {
//         if (err) {
//             console.error('Error inserting user:', err);
//             res.status(500).json({ message: 'An error occurred during signup' });
//             return;
//         }
//         res.status(201).json({ message: 'Signup successful' });
//     });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3001;

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pahani@123',
  database: 'booksys'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Dummy user data (replace this with your database logic)
const users = [
  { id: 1, username: 'user1', password: 'password' } // Password is "password"
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  
  const token = jwt.sign({ username: user.username, userId: user.id }, 'secret_key', { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

// Signup route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const INSERT_USER_QUERY = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(INSERT_USER_QUERY, [username, password], (err, results) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).json({ message: 'An error occurred during signup' });
      return;
    }
    res.status(201).json({ message: 'Signup successful' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
