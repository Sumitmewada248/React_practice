
import App from "./App";
import { createRoot } from "react-dom/client";
import { store } from "./Store";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(

    <Provider store={store}>
     <App />

    </Provider>


)