import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VotesService from "../../services/VotesService";
import "./type.css";
import "aos/dist/aos.css";
import Aos from "aos";
import bgnominee from "../../img/bgnominees.png";

export default function Results() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    retrieveCategory();
    Aos.init({ duration: 2000 });
  }, []);
  const retrieveCategory = () => {
    VotesService.category()
      .then((response) => {
        setCategory(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        alert("Error");
        console.log(err);
      });
  };
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
        <h1>
          RESULTADOS
          <br />
          <b>VOTACIONES</b>
          <br />
        </h1>
        <p className="type-desc">
          Elige una categoría para observar el resultado de las votaciones
        </p>
        <div className="t-types" data-aos="zoom-in">
          {category &&
            category.map((cat, index) => (
              <Link
                to={"/cmVzdWx0cw==/" + cat.id_category}
                className="link"
                key={index}
              >
                <div className="t-cards">
                  <img src={bgnominee} alt="" width="270px" />
                  <div className="cats-names">{cat.name_category}</div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
