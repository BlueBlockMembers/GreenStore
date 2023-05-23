const fertilizers = {
  tomato: {
    Seedling: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
    Vegetative: { type: "Nitrogen", amount: "1", frequency: "Every 2 weeks" },
    Fruiting: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
  },
  lettuce: {
    Seedling: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
    Vegetative: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
    Heading: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
  },
  cucumber: {
    Seedling: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
    Vegetative: { type: "Nitrogen", amount: "1", frequency: "Every 2 weeks" },
    Flowering: { type: "Phosphorus", amount: "1", frequency: "Every 2 weeks" },
    Fruiting: { type: "Potassium", amount: "1", frequency: "Every 2 weeks" },
  },
  bell_pepper: {
    Seedling: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
    Vegetative: { type: "Nitrogen", amount: "1", frequency: "Every 2 weeks" },
    Flowering: { type: "Phosphorus", amount: "1", frequency: "Every 2 weeks" },
    Fruiting: { type: "Potassium", amount: "1", frequency: "Every 2 weeks" },
  },
  zucchini: {
    Seedling: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
    Vegetative: { type: "Nitrogen", amount: "1", frequency: "Every 2 weeks" },
    Flowering: { type: "Phosphorus", amount: "1", frequency: "Every 2 weeks" },
    Fruiting: { type: "Potassium", amount: "1", frequency: "Every 2 weeks" },
  },
  carrot: {
    Seedling: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
    Vegetative: { type: "Phosphorus", amount: "1", frequency: "Every 2 weeks" },
    Rooting: { type: "Potassium", amount: "1", frequency: "Every 2 weeks" },
  },
  broccoli: {
    Seedling: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
    Vegetative: { type: "Nitrogen", amount: "1", frequency: "Every 2 weeks" },
    Flowering: { type: "Phosphorus", amount: "1", frequency: "Every 2 weeks" },
  },
  spinach: {
    Seedling: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
    Vegetative: { type: "Nitrogen", amount: "1", frequency: "Every 2 weeks" },
    Heading: { type: "Phosphorus", amount: "1", frequency: "Every 2 weeks" },
  },
  corn: {
    Seedling: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
    Vegetative: { type: "Nitrogen", amount: "1", frequency: "Every 2 weeks" },
    Tasseling: { type: "Phosphorus", amount: "1", frequency: "Every 2 weeks" },
    Pollinating: { type: "Potassium", amount: "1", frequency: "Every 2 weeks" },
  },
  pumpkin: {
    Seedling: { type: "Nitrogen", amount: "0.5", frequency: "Every 2 weeks" },
    Vegetative: { type: "Nitrogen", amount: "1", frequency: "Every 2 weeks" },
    Flowering: { type: "Phosphorus", amount: "1", frequency: "Every 2 weeks" },
    Fruiting: { type: "Potassium", amount: "1", frequency: "Every 2 weeks" },
  }

  // Add more plants and growth stages as needed
};

export default fertilizers;
