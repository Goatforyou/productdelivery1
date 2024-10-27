// utils/deliveryEstimator.js
export const estimateDeliveryDate = (pincode) => {
    // Validate pincode (example: must be a 6-digit number)
    const pincodePattern = /^[0-9]{6}$/;
    if (!pincodePattern.test(pincode)) {
        throw new Error('Invalid pincode. Please enter a valid 6-digit pincode.');
    }

    // Simulate delivery date estimation logic based on pincode
    const deliveryDays = Math.floor(Math.random() * 5) + 1; // Random delivery time between 1 to 5 days
    const today = new Date();
    today.setDate(today.getDate() + deliveryDays);
    
    return today.toDateString();
};
