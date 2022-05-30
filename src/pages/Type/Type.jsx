import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VotesService from "../../services/VotesService";
import "./type.css";
import "aos/dist/aos.css";
import Aos from "aos";
import voter from "../../img/voter.png";
import bgnominee from "../../img/bgnominees.png";

export default function Type() {
  const [type, setType] = useState([]);
  useEffect(() => {
    retrieveType();
  }, []);
  const retrieveType = () => {
    VotesService.getType()
      .then((response) => {
        setType(response.data);
      })
      .catch((err) => {
        alert("Error");
        console.log(err);
      });
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [initial, setInitial] = useState(0);
  useEffect(() => {
    if (initial === 0) {
      setInitial(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [initial]);
  return (
    <div className="type">
      <div className="t-wrapper" data-aos="zoom-out">
        <div>
          <img src={voter} alt="" className="type-img" data-aos="fade-left" />
        </div>
        <h1>
          VOTACIÓN
          <br />
          <b>PREMIOS PIAGETIANOS</b> <br />
          1° EDICIÓN
          <br />
        </h1>
        <p className="type-desc">
          Elige un tipo de miembro de la comunidad piagetiana y mira las
          diversas categorías junto con sus nominados
        </p>
        <h2>VOTACIONES FINALIZADAS &#128575;</h2>
        <div className="t-types" data-aos="zoom-in">
          {type &&
            type.map((types, index) => (
              <Link
                to={"/category/" + types.id_type}
                className="link"
                key={index}
              >
                <div className="t-cards">
                  <img src={bgnominee} alt="" width="270px" />
                  {types.name_type}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
