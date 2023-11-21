import React from 'react';
import "../css/Home.css";


const SuggestedWorkers = () => {
  // Supongamos que tienes información de trabajadores en un array
  const suggestedWorkers = [
    {
      id: 1,
      name: 'John Doe',
      image: 'path-to-image-1.jpg',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'path-to-image-2.jpg',
      rating: 4.2,
    },
    {
        id: 3,
        name: 'John Doe',
        image: 'path-to-image-1.jpg',
        rating: 4.5,
      },
      {
        id: 4,
        name: 'John Doe',
        image: 'path-to-image-1.jpg',
        rating: 4.5,
      },
    // ... y así sucesivamente para los trabajadores sugeridos
  ];
  const limitedWorkers = suggestedWorkers.slice(0, 4);

  return (
    <div className="suggested-workers">
      <h2>Suggested Workers</h2>
      <div className="workers-list">
        {limitedWorkers.map((worker) => (
          <div className="worker" key={worker.id}>
            <img src={worker.image} alt={worker.name} />
            <h3>{worker.name}</h3>
            <p>Rating: {worker.rating}</p>
          </div>
        ))}
      </div>
      <div className="see-more">
        <button>See More</button>
      </div>
    </div>
  );
};

export default SuggestedWorkers;