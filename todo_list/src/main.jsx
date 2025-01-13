import store from "./store";
import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(


<Provider store={store}>
<App />
</Provider>

);

