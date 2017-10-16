import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

const body = document.getElementsByTagName("body")[0];
const containerDiv = document.createElement("div");
body.appendChild(containerDiv);

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    containerDiv
);
