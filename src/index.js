import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const ShopButtons = document.querySelectorAll(".hc-shop-now");

// Inject our React App into each
ShopButtons.forEach((Div) => {
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={Div} />
    </React.StrictMode>,
    Div
  );
});
