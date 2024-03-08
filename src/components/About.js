import React from "react";
import headerImg from "../assets/img/akeemPP.png";
import "react-multi-carousel/lib/styles.css";
import { Skills, AboutInfo } from "../components/Constant";
import colorSharp from "../assets/img/color-sharp.png";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>
                About
                <hr className="under-line" />
              </h2>
              <div className="row" style={{ marginTop: "10vh" }}>
                <div className="col-6 label">
                  <img
                    className="about-img"
                    src={headerImg}
                    alt="Akeem Photo"
                  />
                  {AboutInfo.label}
                  {AboutInfo.subLabel}
                  {AboutInfo.description}
                </div>
                <div className="col-6 skills">
                  <h1>
                    Skills
                    <hr className="under-line" />
                  </h1>
                  <ul>
                    {Skills.map((each) => (
                      <li key={each.name}>
                        <img src={each.img} alt={each.name} />
                        <h2>{each.name}</h2>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
