import React from "react";
import "./App.css";
import Cart from "./Cart";
import Logo from "./Logo";

const positionClass = (position) => {
  if (position === "right-top") return "heycater__widget_placement__top";
  if (position === "right-middle") return "heycater__widget_placement__middle";
  if (position === "right-bottom") return "heycater__widget_placement__bottom";
  return "heycater__widget_placement__bottom";
};

function App({ domElement }) {
  const catererSlug = domElement.getAttribute("data-caterer");
  const city = domElement.getAttribute("data-city");
  const position = positionClass(domElement.getAttribute("data-placement"));

  return (
    <a
      href={`https://www.heycater.com/de/catering/${city}/${catererSlug}?utm_source=online-shop-widget`}
      target="_top"
      className={`shop__button__heycater_app ${position}`}
    >
      <div className="heycater__widget_cta">
        <div className="heycater__widget_cart">
          <Cart />
        </div>
        <div className="heycater__widget_button-text">
          <Logo /> Online buchen
        </div>
      </div>
    </a>
  );
}

export default App;
