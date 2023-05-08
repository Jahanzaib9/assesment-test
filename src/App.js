import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/Navbar/Navbar";
import { Homepage } from "./Components/Homepage/index";
import { Layout } from "./Components/Layout";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <NavigationBar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
