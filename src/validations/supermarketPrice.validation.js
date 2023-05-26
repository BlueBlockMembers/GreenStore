import validator from 'validator';

const validateSupermarketPrice = (supermarketPrice) => {
    let errors = {};
    const {
        itemID, itemName, yesterDayPrice, toDayPrice,
    } = supermarketPrice;

    if (validator.isEmpty(itemName)) {
        errors.itemName = 'Item Name is required';
    }

    if (validator.isEmpty(yesterDayPrice)) {
        errors.yesterDayPrice = 'Item Yesterday Price is required';
    } else if (yesterDayPrice <= 0) {
        errors.yesterDayPrice = 'Item Yesterday Price should be grater than 0';
    }

    if (validator.isEmpty(toDayPrice)) {
        errors.toDayPrice = 'Item Today price is required';
    } else if (toDayPrice <= 0) {
        errors.toDayPrice = 'Item Today price should be grater than 0';
    }


    return {
        isInvalid: Object.keys(errors).length > 0, errors: errors,
    };
}

export default validateSupermarketPrice;