import React, { useState } from "react";

import { Car, NewCar } from "../models/cars";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export type CarToolProps = {
  cars: Car[];
};

export function CarTool({ cars: initialCars }: CarToolProps) {
  const [cars, setCars] = useState([...initialCars]);
  const [editCarId, setEditCarId] = useState(-1);

  const addCar = (newCar: NewCar) => {
    setCars([
      ...cars,
      {
        ...newCar,
        id: Math.max(...cars.map((c) => c.id), 0) + 1,
      },
    ]);
  };

  const deleteCar = (carId: number) => {
    setCars(cars.filter((c) => c.id !== carId));
  };

  const editCar = (carId: number) => {
    setEditCarId(carId);
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onDeleteCar={deleteCar}
        onEditCar={editCar}
      />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}
