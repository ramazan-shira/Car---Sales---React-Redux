import { useDispatch } from "react-redux";
import { removeFeature } from "./carSlice";
import { useParams } from "react-router-dom";

const AddedFeature = (props) => {
  const { feature } = props;
  const dispatch = useDispatch();

  const { id: carId } = useParams();

  const deleteFeature = (id) => {
    dispatch(removeFeature({ id, carId: Number(carId) }));
  };
  return (
    <div>
      <li>
        <button className="button" onClick={() => deleteFeature(feature.id)}>
          X
        </button>
        {feature.name}
      </li>
    </div>
  );
};

export default AddedFeature;
