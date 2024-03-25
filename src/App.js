import React from "react";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Search />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/KhethiweDlamini"
              target="_blank"
              rel="noreferrer"
            >
              K.R.L. Dlamini
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/KhethiweDlamini/ReactApp"
              target="_blank"
              rel="noreferrer"
            >
              on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://shecodes-weather-app-react.netlify.app/?"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
