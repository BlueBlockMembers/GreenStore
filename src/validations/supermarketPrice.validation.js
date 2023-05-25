const validateSupermarketPrice = (supermarketPrice) => {
    let errors = {};
    const {
        itemID, itemName, yesterDayPrice: yesterdayPrice, toDayPrice: todayPrice,
    } = supermarketPrice;

    if (!itemName) {
        errors.itemID = 'Item ID is required';
    }

    if (!itemName) {
        errors.itemName = 'Item Name is required';
    }


    return {
        isInvalid: Object.keys(errors).length > 0, errors: errors,
    };
}

export default validateSupermarketPrice;