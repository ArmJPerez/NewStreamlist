// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//           pppppppp
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import StreamList from "./pages/Streamlist"; 
import Movies from "./pages/Movies"; 
import Cart from "./pages/Cart";
import About from "./pages/About";
import "./App.css";
import logo from "./logo.svg"; // NEW IMPORT FOR LOGO
function App() {
  return (
    <Router>
      <Navbar />
      {/* Display the Logo at the top */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img src={logo} alt="StreamList Logo" width="100" />
      </div>
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;