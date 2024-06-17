import React from "react";
import { createRoot } from "react-dom/client";
import App from "./DynamicRemoteApp";

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
