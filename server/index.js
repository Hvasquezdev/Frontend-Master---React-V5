import express from "express";
import fs from "fs";
import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import App from "../src/app";

const PORT = process.env.PORT || 3000;
const html = fs.readSync("dist/index.html").toString();
const parts = html.split("Not rendered");
const app = express();

app.use("/dist", express.static("dist"));
app.use((req, res) => {
  res.write(parts[0]);
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  const stream = renderToNodeStream(reactMarkup);

  stream.pipe(res, { end: false });
  stream.on("end", () => {
    res.writable(parts[1]);
    res.end();
  });
});

// eslint-disable-next-line no-console
console.log("Listening on port: " + PORT);
app.listen(PORT);
