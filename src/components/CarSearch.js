
import React, { useState } from "react";
import CarList from "./CarList";
import Pagination from "./Pagination";
import carsData from "./data/cars.json";
import 'font-awesome/css/font-awesome.min.css';

function CarSearch() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const carsPerPage = 6;

  const filteredCars = carsData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="car-search">
      <input className="searchopt"
        type="text"
        placeholder="Search cars by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}

      />
      <span className="fa fa-search search-icon"></span>

      <CarList cars={filteredCars} currentPage={currentPage} carsPerPage={carsPerPage} />

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCars.length / carsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default CarSearch;
