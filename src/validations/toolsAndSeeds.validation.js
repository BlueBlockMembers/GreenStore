const validateToolsAndSeeds = (item) => {
  let errors = {};
  const { name, price, image } = item;

  if (!price) {
    errors.price = "Item price is required";
  }

  if (!name) {
    errors.name = "Item Name is required";
  }
  if (!image) {
    errors.image = "image is required";
  }
  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default validateToolsAndSeeds;
