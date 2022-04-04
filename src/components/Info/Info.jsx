import React, { useEffect } from "react";
import "./info.css";
import "aos/dist/aos.css";
import Aos from "aos";
import infoImg from "../../img/info.png";

export default function Info() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="in">
      <div className="in-left" data-aos="fade-right">
        <div className="in-left-wrapper">
          <h1>
            LOS <b>PREMIOS PIAGETIANOS</b> <br />
            SE ACERCAN
            <br />
          </h1>
          <p className="p-desc">
            ¡Vota por tus nominados favoritos en distintas categorías y asiste a
            la gala presencial para ver a los ganadores!
          </p>
          <p className="p-hashtag">#PREMIOS | #PIAGETIANOS</p>
        </div>
      </div>
      <div className="in-right" data-aos="fade-left">
        <img className="image-main" src={infoImg} alt="" width="450rem" />
      </div>
    </div>
  );
}
