import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Rocky" animal="Dog" breed="Dalmatian" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doing" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.querySelector("#root"));
