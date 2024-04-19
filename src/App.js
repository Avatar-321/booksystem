// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/login', { username, password });
//       if (response.data && response.data.token) {
//         setMessage('Login successful');
//         localStorage.setItem('token', response.data.token); // Store token in local storage
//       } else {
//         setMessage('Login failed');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setMessage('Invalid username or password');
//       } else {
//         setMessage('An error occurred during login');
//         console.error('Error:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/LoginSignup/login";
import Signup from "./components/LoginSignup/signup";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

