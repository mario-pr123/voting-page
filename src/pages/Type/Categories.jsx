import React, { useEffect, useState } from "react";
import VotesService from "../../services/VotesService";
import { useNavigate, useParams } from "react-router-dom";
import "./categories.css";
import Modal from "react-modal";
import "./type.css";
import "aos/dist/aos.css";
import Aos from "aos";
import bgnominee from "../../img/bgnominees.png";
import { GiVote } from "react-icons/gi";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [catName, setCatName] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [none, setNone] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    retrieveCategories(id);
    retrieveCatName(id);
  }, [id]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const initialVoteState = {
    id_vote: null,
    email: "",
    id_category: null,
    id_nominee: null,
    date: null,
  };
  const [vote, setVote] = useState(initialVoteState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVote({ ...vote, [name]: value });
  };
  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setVote({ ...vote, [name]: value });
  };
  const saveVote = () => {
    let data = {
      email: vote.email,
      id_category: vote.id_category,
      id_nominee: vote.id_nominee,
      date: vote.date,
    };
    setNone(true);
    VotesService.vote(data)
      .catch(() => {
        setNone(false);
        setHasError(true);
        setSubmitted(false);
      })
      .then(() => {
        setNone(false);
        setSubmitted(true);
      });
  };

  const retrieveCategories = (id) => {
    VotesService.getCategoriesById(id)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const retrieveCatName = (id) => {
    VotesService.getCatName(id)
      .then((response) => {
        setCatName(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const [initial, setInitial] = useState(0);
  useEffect(() => {
    if (initial === 0) {
      setInitial(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [initial]);
  const customStyles = {
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      background: " rgb(20, 20, 20)",
      color: "#b19250",
      border: "none",
      borderRadius: "5px",
      boxShadow:
        " -1px -6px 14px rgba(0, 0, 0, 0.7), -6px -6px 10px rgba(0, 0, 0, 0.5), 6px 6px 8px rgba(24, 24, 24, 0.281), 6px 6px 10px rgba(0, 0, 0, 0.15)",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
    setInitial(0);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const current = new Date();
  const date = `${current.getFullYear()}-0${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const navigate = useNavigate();

  return (
    <div className="type">
      <div className="t-wrapper" data-aos="zoom-out">
        <div>
          {catName &&
            catName.map((catN, index) => (
              <div key={index}>
                <h1 className="categories">
                  Nominados a&nbsp;<b>"{catN.name_category}"</b>
                  <button onClick={() => navigate(-1)} className="back-button">
                    <i className="fa-solid fa-rotate-left"></i>
                  </button>
                </h1>
                <p className="cat-desc">
                  Pasa el mouse por encima de las tarjetas para ver una foto de
                  los nominados, posteriormente desliza hacia abajo para
                  encontrar la opción de votar
                </p>
              </div>
            ))}
        </div>
        <div className="t-nominees" data-aos="zoom-in">
          {categories &&
            categories.map((cats, index) => (
              <div className="t-cards-nominees" key={index}>
                <div className="front-side">
                  <img src={bgnominee} alt="" width="300px" />
                  <div className="nominees-name">
                    {cats.name_nominee}
                    <br />
                    {cats.last_name_nominee}
                  </div>
                </div>
                <div className="back-side">
                  <img src={cats.photo} alt="" height="250px" />
                  <div className="nominees-name-back">
                    {cats.name_nominee} {cats.last_name_nominee}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div>
          <div className="button-vote-wrapper">
            <button onClick={openModal} className="vote-button">
              <GiVote /> Vota tu Favorito
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
          >
            {none ? (
              <div className="holder">
                <h2>Espera...</h2>
              </div>
            ) : hasError ? (
              <div className="holder">
                <h2>
                  Has acabado con tus votos para esta categoría :( <br />
                  Intentalo de nuevo el día de mañana!
                </h2>
                <button className="close-button" onClick={closeModal}>
                  X
                </button>
              </div>
            ) : submitted ? (
              <div className="holder">
                <h2>Has votado exitosamente!</h2>
                <button
                  className="vote-form-button"
                  onClick={() => {
                    setSubmitted(false);
                  }}
                >
                  Votar Nuevamente
                </button>
                <button className="close-button" onClick={closeModal}>
                  X
                </button>
              </div>
            ) : (
              <form onSubmit={saveVote}>
                <label>
                  {catName &&
                    catName.map((catN, index) => (
                      <div key={index}>
                        <h1 className="categories-form">
                          Nominados a <br /> <b>"{catN.name_category}"</b>
                        </h1>
                      </div>
                    ))}
                </label>

                <div className="form-input">
                  {catName &&
                    catName.map((catN, index) => (
                      <div key={index}>
                        <input
                          type="radio"
                          id="id_category"
                          required
                          value={(vote.id_category = catN.id_category)}
                          name="id_category"
                          checked="checked"
                          disabled="disable"
                          className="radio-cat"
                        ></input>
                      </div>
                    ))}
                </div>
                <div className="form-input">
                  <input
                    type="email"
                    id="email"
                    required
                    value={vote.email}
                    onChange={handleInputChange}
                    name="email"
                    placeholder="Ingrese el correo del colegio"
                    className="form-input-email"
                  ></input>
                </div>
                <div className="radio-cat">
                  <input
                    type="text"
                    id="date"
                    required
                    value={(vote.date = date)}
                    onChange={handleInputChange}
                    name="date"
                  ></input>
                </div>
                <div className="form-input">
                  {categories &&
                    categories.map((cats, index) => (
                      <div key={index} className="radio-b">
                        <input
                          type="radio"
                          id={cats.id_nominee}
                          required
                          value={cats.id_nominee}
                          onChange={handleRadioChange}
                          name="id_nominee"
                        ></input>
                        <label htmlFor={cats.id_nominee}>
                          {cats.name_nominee} {cats.last_name_nominee}
                        </label>
                      </div>
                    ))}
                </div>
                <div className="vote-form-button-wrapper">
                  <input
                    type="submit"
                    value="Votar"
                    className="vote-form-button"
                  />
                </div>
              </form>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
}
