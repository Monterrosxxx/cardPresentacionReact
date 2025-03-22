import React from 'react';
import BasicCard from "./components/basicCard";
import ButtonCard from "./components/buttonCard";
import ListCard from "./components/listCard";
import "./components/cardsStyle.css"; // Importa el archivo CSS

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <BasicCard
            imageUrl="URL_DE_LA_IMAGEN"
            title="Rodrigo Josué Monterrosa"
            description="Soy un desarrollador web full-stack en proceso, aprendiendo el stack MERN."
          />
        </div>
        <div className="col-md-4">
          <ButtonCard
            imageUrl="URL_DE_LA_IMAGEN"
            title="Esto es lo que mas me gusta respecto a lo que estoy aprendiendo."
            description="Me encanta JavaScript, es un lenguaje muy versátil y poderoso."
            buttonLabel="Ver más"
            buttonLink="ENLACE_DEL_BOTÓN"
          />
        </div>
        <div className="col-md-4">
          <ListCard
            title="Lista de habilidades"
            items={["HTML", "CSS", "JavaScript", "React"]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;