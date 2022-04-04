import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VotesService from "../../services/VotesService";
import "./type.css";
import "aos/dist/aos.css";
import Aos from "aos";
import bgnominee from "../../img/bgnominees.png";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    retrieveCategory(id);
  }, [id]);
  const retrieveCategory = (id) => {
    VotesService.getCategory(id)
      .then((response) => {
        setCategory(response.data);
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

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let navigate = useNavigate();
  function handleBack() {
    navigate("/type");
  }

  return (
    <div className="type">
      <div className="t-wrapper" data-aos="zoom-out">
        <h1 className="categories">
          CATEGORÍAS{" "}
          <button className="back-button" onClick={handleBack}>
            <i className="fa-solid fa-rotate-left"></i>
          </button>
        </h1>
        <p className="cat-desc">Escoge una categoría para ver a sus nominados y emitir tu voto</p>

        <div className="t-types" data-aos="zoom-in">
          {category &&
            category.map((cat, index) => (
              <Link
                to={"/categories/" + cat.id_category}
                key={index}
                className="link"
              >
                <div className="t-cards">
                  <img src={bgnominee} alt="" width="270px" />
                  <div>{cat.name_category}</div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
