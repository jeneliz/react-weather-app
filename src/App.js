import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine />
        <footer>
          This project was coded by{" "}
          <a
            rel="noreferrer"
            href="https://coding-on-coffee.netlify.app/"
            target="_blank"
            className="my-portfolio-link"
          >
            Jennifer Brown
          </a>{" "}
          and is{" "}
          <a
            rel="noreferrer"
            href="https://github.com/jeneliz/react-weather-app"
            target="_blank"
            className="my-github-link"
          >
            opened sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
