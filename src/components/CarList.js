
import React from "react";
import CarCard from "./CarCard";

function CarList({ cars, currentPage, carsPerPage }) {
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const carsToDisplay = cars.slice(startIndex, endIndex);

  return (
    <div className="car-list">
      {carsToDisplay.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
