import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <SearchEngine />
      <footer>
        This project was coded by{" "}
        <a
          rel="noreferrer"
          href="https://coding-on-coffee.netlify.app/"
          target="_blank"
        >
          Jennifer Brown
        </a>{" "}
        and is{" "}
        <a
          rel="noreferrer"
          href="https://github.com/jeneliz/react-weather-app"
          target="_blank"
        >
          opened sourced
        </a>
      </footer>
    </div>
  );
}
