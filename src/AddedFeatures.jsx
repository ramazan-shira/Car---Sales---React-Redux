import AddedFeature from "./AddedFeature";

const AddedFeatures = (props) => {
  const { addedFeatures } = props;
  return (
    <div className="added-features">
      <h4>Added features:</h4>
      {addedFeatures?.length > 0 ? (
        <ol type="1">
          {addedFeatures.map((feature) => (
            <AddedFeature key={feature.id} feature={feature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
