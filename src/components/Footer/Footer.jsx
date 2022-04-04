import { Link } from "react-router-dom";
import "./footer.css";
import Aos from "aos";
import { useEffect } from "react";
import logo from "../../img/logowhite.png";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="footer">
        <div className="footerSocial">
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
          <a
            href="https://api.whatsapp.com/send?phone=0969039848&text=Hola, nececito mas informacion!"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div className="footerInfo">
          <div>
            <Link className="link" to="/">
              <div className="link-info">Inicio</div>
            </Link>
          </div>
          <div>
            <Link className="link" to="/type">
              <div className="link-info">Votación</div>
            </Link>
          </div>
          <div>
            <Link className="link" to="/info">
              <div className="link-info">Información</div>
            </Link>
          </div>
          <div>
            <a className="link" href="mailto:listamep@gmail.com">
              <div className="link-info">Contacto</div>
            </a>
          </div>
        </div>
        <div className="f-logo">
          <img src={logo} alt="" width="100px" />
        </div>
        <p className="footerCopyright">
          <small>© 2022 | Web Design MP | All Rights Reserved</small>
        </p>
      </div>
    </div>
  );
}
