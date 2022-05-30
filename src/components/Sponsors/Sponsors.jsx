import React, { useEffect } from "react";
import "./sponsors.css";
import sponsor1 from "../../img/sponsor1.png";
import sponsor2 from "../../img/sponsor2.png";
import sponsor3 from "../../img/sponsor3.png";
import sponsor4 from "../../img/sponsor4.png";
import utpl from "../../img/utpl.png";
import fundel from "../../img/fundel.png";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Sponsors() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const sponsors = [
    { image: sponsor1 },
    { image: sponsor2 },
    { image: sponsor3 },
    { image: utpl },
    { image: fundel },
  ];
  const sponsors2 = [{ image: sponsor4 }];
  return (
    <div className="s">
      <div className="s-wrapper" data-aos="zoom-out">
        <h1>PATROCINADORES</h1>
        <div className="images">
          {sponsors.map((sp) => {
            return (
              <div className="img-wrapper">
                <img src={sp.image} alt="" />
              </div>
            );
          })}
          {sponsors2.map((sp) => {
            return (
              <div className="img-wrapper">
                <img src={sp.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
