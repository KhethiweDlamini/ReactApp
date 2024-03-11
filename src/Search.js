import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <header>
      <div className="search-form">
        <form>
          <input
            type="search"
            placeholder="Enter a city.."
            class="search-input"
            required
          />
          <input type="submit" value="Search" class="search-button" />
        </form>
      </div>
    </header>
  );
}
