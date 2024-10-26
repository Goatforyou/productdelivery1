// utils/deliveryEstimator.js
export const estimateDeliveryDate = (pincode) => {
    // Simulate delivery date estimation logic based on pincode
    const deliveryDays = Math.floor(Math.random() * 5) + 1; // Random delivery time between 1 to 5 days
    const today = new Date();
    today.setDate(today.getDate() + deliveryDays);
    return today.toDateString();
};