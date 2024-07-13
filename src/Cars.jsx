import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const cars = useSelector((state) => state.cars.cars);

  const navigate = useNavigate();

  const showMore = (id) => {
    navigate(`/car-sales/${id}`);
  };
  return (
    <div className="cars">
      {cars.map((car) => (
        <div className="car-card" key={car.id}>
          <div className="car-info">
            <img src={car.image} alt={car.name} />
            <h2>{car.name}</h2>
            <p>Amount: ${car.price}</p>
            <button onClick={() => showMore(car.id)}>Show more</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cars;
