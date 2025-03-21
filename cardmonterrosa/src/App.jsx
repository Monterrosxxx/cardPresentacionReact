import React from 'react';
import BasicCard from "../src/assets/components/basicCard";
import ButtonCard from "../src/assets/components/buttonCard";
import ListCard from "../src/assets/components/listCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <BasicCard
            imageUrl="URL_DE_LA_IMAGEN"
            title="Título de la tarjeta"
            description="Descripción de la tarjeta."
          />
        </div>
        <div className="col-md-4">
          <ButtonCard
            imageUrl="URL_DE_LA_IMAGEN"
            title="Título de la tarjeta"
            description="Descripción de la tarjeta."
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
