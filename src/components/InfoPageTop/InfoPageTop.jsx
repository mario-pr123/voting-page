import React from "react";
import "./InfoPageTop.css";
import infopina from "../../img/infopina.png";

export default function InfoPageTop() {
  return (
    <div className="i-top">
      <div className="i-top-left" data-aos="fade-right">
        <div className="i-top-left-wrapper">
          <h1>
            Premios <b>PIAGETIANOS</b>
            <br />
          </h1>
          <p className="i-top-p-desc">
            Un reconocimiento único para Docentes y Estudiantes de la{" "}
            <b>Unidad Educativa Jean Piaget</b> otorgado por el Consejo
            Estudiantil <b>"MEP"</b>.
          </p>
          <p className="i-top-p-awards">
            Los Premios PIAGETIANOS son una iniciativa promovida por el Consejo
            Estudiantil <b>"MEP"</b> de la Unidad Educativa y buscan promover un
            evento en honor a los <b>34 años</b> de aniversario de esta
            prestigiosa Institución.
          </p>
        </div>
      </div>
      <div className="i-top-right" data-aos="fade-left">
        <img className="i-top-img" src={infopina} alt="" width="450rem" />
      </div>
    </div>
  );
}
