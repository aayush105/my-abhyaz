import React from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ margin: '20px' }}>
        <div style={{ margin: '20px' }}>
          <Home />
        </div>
        <div style={{ margin: '20px' }}>
          <Jobs />
        </div>
        <div id="form-section" style={{ margin: '40px' }}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
