import React from "react";
import Navbar from "./components/Navbar.js";
import QuoteAPI from "./components/QuoteAPI";

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteAPI />
    </div>
  );
}

export default App;
