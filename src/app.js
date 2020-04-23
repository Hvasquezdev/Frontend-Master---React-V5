import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Rocky",
      animal: "Dog",
      breed: "Dalmatian",
    }),
    React.createElement(Pet, {
      name: "Peppe",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doing",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

render(React.createElement(App), document.querySelector("#root"));