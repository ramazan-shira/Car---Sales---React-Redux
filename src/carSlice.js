import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [
      {
        id: 0,
        price: 26395,
        name: "2019 Ford Mustang",
        image:
          "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
        features: [],
      },
      {
        id: 1,
        price: 26395,
        name: "2020 Ford Mustang",
        image:
          "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
        features: [],
      },
      {
        id: 2,
        price: 26395,
        name: "2021 Ford Mustang",
        image:
          "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
        features: [],
      },
      {
        id: 3,
        price: 30000,
        name: "2022 Ford Mustang",
        image:
          "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
        features: [],
      },
    ],
    additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 },
    ],
    additionalPrice: 0,
  },
  reducers: {
    addFeature: (state, action) => {
      const selectedFeature = state.additionalFeatures.find(
        (additionalFeature) => additionalFeature.id === action.payload.id
      );

      state.cars = state.cars.map((car) => {
        if (car.id === action.payload.carId) {
          if (
            selectedFeature &&
            !car.features.find((feature) => feature.id === selectedFeature.id)
          ) {
            car.features.push({
              id: action.payload.id,
              name: action.payload.name,
              price: action.payload.price,
            });
            state.additionalPrice += selectedFeature.price;
          }
        }
        return car;
      });
    },
    removeFeature: (state, action) => {
      const selectedFeature = state.additionalFeatures.find(
        (additionalFeature) => additionalFeature.id === action.payload.id
      );
      state.cars = state.cars.map((car) => {
        if (car.id === action.payload.carId) {
          car.features = car.features.filter(
            (feature) => feature.id !== action.payload.id
          );
        }
        return car;
      });
      state.additionalPrice -= selectedFeature.price;
    },
  },
});
export const { addFeature, removeFeature } = carSlice.actions;
export default carSlice.reducer;
