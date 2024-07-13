import { useDispatch } from "react-redux";
import { addFeature } from "./carSlice";
import { useParams } from "react-router-dom";

const AdditionalFeature = (props) => {
  const { id: carId } = useParams();

  const { feature, disabled } = props;
  const dispatch = useDispatch();

  const addFeatures = (feature) => {
    dispatch(
      addFeature({
        id: feature.id,
        name: feature.name,
        price: feature.price,
        carId: Number(carId),
      })
    );
  };

  return (
    <li>
      <button
        onClick={() => addFeatures(feature)}
        className="button"
        disabled={disabled}
      >
        {disabled ? "Added" : "Add"}
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
