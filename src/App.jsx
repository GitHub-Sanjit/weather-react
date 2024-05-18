import { useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app rounded-4">
            <SearchForm defaultCity="Dhaka" />
          </div>
          <footer>
            Open-source code by Sanjit on {""}
            <a
              href="https://github.com/GitHub-Sanjit"
              target="_blank"
            >
              <strong>Github</strong>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
