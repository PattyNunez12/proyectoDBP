import React from "react";

const WorkerHighlight = ({ worker }) => {
  return (
    <div className="worker-highlight">
      <div className="background-image">
        {/* Aquí va la imagen de fondo */}
      </div>
      <div className="content">
        <img className="profile-picture" src={worker.profilePicture} alt={worker.name} />
        <h2>{worker.name}</h2>
        <p>{worker.district}</p>
        <p>{worker.description}</p>
        <div className="worker-buttons">
          <button onClick={() => viewProfile(worker.id)}>Ver Perfil</button>
          <button onClick={() => viewMore(worker.id)}>Ver Más</button>
        </div>
      </div>
    </div>
  );
};

export default WorkerHighlight;

