import React, { useEffect, useState } from "react";
import VotesService from "../../services/VotesService";
import { useNavigate, useParams } from "react-router-dom";
import "./categories.css";
import "./type.css";
import "aos/dist/aos.css";
import Aos from "aos";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default function CategoryResults() {
  const [catName, setCatName] = useState([]);
  const [results, setResults] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    retrieveCatName(id);
    retrieveResults(id);
    Aos.init({ duration: 2000 });
  }, [id]);

  const retrieveCatName = (id) => {
    VotesService.getCatName(id)
      .then((response) => {
        setCatName(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const retrieveResults = (id) => {
    VotesService.getResults(id)
      .then((response) => {
        setResults(response.data);
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

  const data = {
    labels: results.map((res) =>
      res.name_nominee.concat(" " + res.last_name_nominee)
    ),
    datasets: [
      {
        data: results.map((res) => res.result),
        backgroundColor: [
          "#b19250",
          "#aaa85f",
          "#ac842ded",
          "#b88044",
          "#b19250ae",

          "#a99467",

          "#b38f42bd",

          "#aa6944d4",

          "#bdca5aea",
        ],
        borderColor: "#1b1b1baa",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Poppins",
          },
        },
      },
    },
  };

  const navigate = useNavigate();
  return (
    <div className="type">
      <div className="t-wrapper" data-aos="zoom-out">
        <button
          onClick={() => window.location.reload(false)}
          className="reload-button"
        >
          <i className="fa-solid fa-rotate-left"></i>
        </button>
        <button onClick={() => navigate(-1)} className="back-button">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <div>
          {catName &&
            catName.map((catN, index) => (
              <div key={index}>
                <h1 className="r-categories">
                  RESULTADOS CATEGORÍA&nbsp;<b>"{catN.name_category}"</b>
                </h1>
              </div>
            ))}
        </div>
        <div className="chart-wrapper" data-aos="zoom-in">
          <div className="chart">
            <Chart type="doughnut" data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
