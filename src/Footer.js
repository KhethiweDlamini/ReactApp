import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        This project was coded by{" "}
        <a href="https://github.com/KhethiweDlamini" target="_blank">
          K.R.L. Dlamini
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/KhethiweDlamini/weather-app"
          target="_blank"
        >
          on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://app.netlify.com/sites/my-weather-app-krld77/overview"
          target="_blank"
        >
          hosted on Netlify
        </a>
      </p>
    </footer>
  );
}