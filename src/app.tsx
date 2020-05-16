import React, { FunctionComponent } from "react";
import { render } from "react-dom";
import { Router, Link, RouteComponentProps } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App: FunctionComponent = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.querySelector("#root"));
