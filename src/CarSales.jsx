import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AdditionalFeature from "./AdditionalFeature";
import AddedFeatures from "./AddedFeatures";
import "./style.css";

const CarSales = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const additionalPrice = useSelector((state) => state.cars.additionalPrice);

  const cars = useSelector((state) => state.cars.cars);
  const additionalFeatures = useSelector(
    (state) => state.cars.additionalFeatures
  );

  const car = cars.find((car) => car.id === Number(id));

  if (!car) {
    return <p>Car not found</p>;
  }

  const viewCars = () => {
    navigate("/");
  };

  return (
    <div className="car-shop">
      <div className="car-features">
        <div className="car-card sales" key={car.id}>
          <img src={car.image} alt={car.name} />
          <h2>{car.name}</h2>
          <p>Amount: ${car.price}</p>
          <h4>Total Amount: ${Number(car.price) + Number(additionalPrice)}</h4>
          <AddedFeatures addedFeatures={car.features} />
        </div>

        <div className="additional-features">
          <h4>Additional Features</h4>
          {additionalFeatures.length ? (
            <ol type="1">
              {additionalFeatures.map((item) => (
                <AdditionalFeature
                  key={item.id}
                  feature={item}
                  disabled={car.features.find(
                    (feature) => feature.id === item.id
                  )}
                />
              ))}
            </ol>
          ) : (
            <p>Nice looking car!</p>
          )}
        </div>
      </div>
      <div className="view-cars">
        <button onClick={viewCars}>View Cars</button>
      </div>
    </div>
  );
};

export default CarSales;
