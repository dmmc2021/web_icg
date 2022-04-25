import React, { Fragment } from "react";
import BarNav from "../BarNav/BarNav";
import icglogo from "../../img/icg_logo.jpg";

function Header() {
  return (
    <Fragment>
      <header className="hero">
        <BarNav />

        <div className="textos-hero">
          <img src={icglogo} alt="logo"></img>
          <h1>I C G Consultores Empresariales</h1>
          <p>
            <span>Excelencia</span> en asesoria financiera
          </p>
          <a href="#media-id">
            <input type="button" value="Ven con Nosotros" className="cta cta1" />
          </a>
        </div>
        <div
          className="svg-hero"
          style={{ height: "150px", overflow: "hidden" }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "white" }}
            ></path>
          </svg>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
