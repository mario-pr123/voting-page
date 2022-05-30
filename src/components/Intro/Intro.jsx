import "./intro.css";
import logoMain from "../../img/logopina.png";
import { Link } from "react-router-dom";
import trophy from "../../img/trophy.png";
import podium from "../../img/podium1.png";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Intro() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="i">
      <div className="i-left" data-aos="fade-right">
        <div className="i-left-wrapper">
          <div className="img-intro">
            <h1 className="i-logo">J</h1>
            <img src={logoMain} alt="" width="120px" />
            <h1 className="i-logo">P</h1>
          </div>
          <h2 className="i-title-awards">PREMIOS PIAGETIANOS "1° EDICIÓN"</h2>
          <div className="i-intro">
            Premios de la Unidad Educativa Jean Piaget
          </div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">PARTICIPAN</div>
              <div className="i-title-item">DOCENTES</div>
              <div className="i-title-item">ALUMNOS</div>
            </div>
          </div>
          <div>
            <Link className="link" to="/type">
              <button className="i-button">NOMINADOS</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div data-aos="fade-left" className="i-bg"></div>
        <div className="i-trophy">
          <div data-aos="zoom-out-left">
            <img src={trophy} alt="" className="i-img" width="350rem" />
          </div>
          <img src={podium} alt="" className="i-img2" width="430rem" />
        </div>
        <div className="i-social-wrapper" data-aos="fade-up">
          <div className="i-social">
            <a
              href="https://www.facebook.com/profile.php?id=100075397636001"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/lista_mep/?hl=es"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://vm.tiktok.com/ZMLHmGKkV/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
