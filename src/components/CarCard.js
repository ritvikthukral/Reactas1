
import React from "react";

function CarCard({ car }) {
  return (
    <div className="car-card">
      <div className="car-info">
        
        
      </div>
      <img src={car.image} alt={car.name} />
      <div className="car-details">
        <h2>{car.name}</h2>
        <p>{car.brand}</p>
        
      </div>
    </div>
  );
}

export default CarCard;
