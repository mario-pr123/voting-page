import React, { useEffect } from "react";
import "./about.css";
import consejo from "../../img/consejo.png";
import consejo2 from "../../img/consejo2.png";
import "aos/dist/aos.css";
import Aos from "aos";
import fondo from "../../img/fondo.png";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="a" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="a-left" data-aos="fade-right">
        <div className="figure">
          <img className="image-main" src={consejo} alt="" width="900rem" />
          <img className="image-hover" src={consejo2} alt="" width="900rem" />
        </div>
      </div>

      <div className="a-right" data-aos="fade-left">
        <h1 className="a-title">ANFITRIONES</h1>
        <p>
          Consejo Estudiantil MEP (Movimiento Estudiantil Piagetiano) trabaja en
          beneficio de las necesidades de la comunidad estudiantil de acuerdo
          con los valores de la Unidad Educativa Jean Piaget. Nuestros objetivos
          principales son:
        </p>
        <div className="a-right-list">
          <ul>
            <li>
              <div className="a-list-icon">
                <i className="fa-solid fa-people-roof"></i>
              </div>
              <div className="a-li-desc">Incentivar la unión del plantel</div>
            </li>
            <li>
              <div className="a-list-icon">
                <i className="fa-solid fa-book"></i>
              </div>
              <div className="a-li-desc">
                Fomentar el trabajo, responsabilidad y valores
              </div>
            </li>
            <li>
              <div className="a-list-icon">
                <i className="fa-solid fa-handshake-angle"></i>
              </div>
              <div className="a-li-desc">
                Promover el compañerismo entre la comunidad Piagetiana
              </div>
            </li>
            <li>
              <div className="a-list-icon">
                <i className="fa-solid fa-gavel"></i>
              </div>
              <div className="a-li-desc">
                Ser un Gobierno diferente, dispuesto a apoyar y ser la voz que
                represente al alumnado Piagetiano
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
