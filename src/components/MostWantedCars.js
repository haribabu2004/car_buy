import React from "react";
import { Link } from "react-router-dom";
import "./MostWantedCars.css";
import fordRanger from "../images/ford-ranger.jpeg";
import bmw520 from "../images/bmw-520.jpeg";
import landRover from "../images/land-rover.jpeg";
import audiQ3 from "../images/audi-q3.jpeg";


const MostWantedCars = () => {
  const cars = [
    {
      id: 1,
      name: "Ford Ranger 3.2 TDCi WILDT...",
      price: "€ 26,990",
      details: "11/2018 | Diesel | 99,606 km",
      location: "BE 6061 Montignies-sur-sambre",
      image: fordRanger,
    },
    {
      id: 2,
      name: "BMW 520 d Touring Luxury a...",
      price: "€ 26,990",
      details: "01/2019 | Diesel | 94,718 km",
      location: "IT 25082 Botticino - BS",
      image:bmw520,
    },
    {
      id: 3,
      name: "Land Rover Discovery Sport",
      price: "€ 23,450",
      details: "06/2019 | Diesel | 54,000 km",
      location: "BE 5660 Couvin",
      image: landRover,
    },
    {
      id: 4,
      name: "Audi Q3 35 2.0 TDI Business",
      price: "€ 29,890",
      details: "11/2020 | Diesel | 78,990 km",
      location: "IT 20017 Rho - Milano",
      image: audiQ3,
    },
  ];

  return (
    <div className="most-wanted-container">
      <h2>Most Wanted Cars</h2>
      <div className="cars-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h3>{car.name}</h3>
            <p className="price">{car.price}</p>
            <p>{car.details}</p>
            <p className="location">{car.location}</p>
          </div>
        ))}
      </div>
      <Link className="Home-page" to="/">Back to HomePage</Link>
    </div>
  );
};

export default MostWantedCars;
