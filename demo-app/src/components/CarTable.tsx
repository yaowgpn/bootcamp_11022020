import React from "react";

import { Car } from "../models/cars";
import { CarViewRow } from "./CarViewRow";

import "./CarTable.css";

export type CarTableProps = {
  cars: Car[];
  onDeleteCar: (carId: number) => void;
};

export function CarTable(props: CarTableProps) {
  return (
    <table id="car-table">
      <thead>
        <tr>
          <th className="col-header">Id</th>
          <th className="col-header">Make</th>
          <th className="col-header">Model</th>
          <th className="col-header">Year</th>
          <th className="col-header">Color</th>
          <th className="col-header">Price</th>
          <th className="col-header">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map((car) => (
          <CarViewRow key={car.id} car={car} onDeleteCar={props.onDeleteCar} />
        ))}
      </tbody>
    </table>
  );
}

CarTable.defaultProps = {
  cars: [],
};
