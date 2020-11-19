import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SearchMovies from "./searchMovies";

class Main extends React.Component {
  render() {
    return (
      <>
        <App />
        <SearchMovies />
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
