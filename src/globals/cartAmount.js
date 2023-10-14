import { data } from './data.js';

// Set variables initial value and data variables
let CartAmount = 0;
const changeHandlers = [];
const cartChangeInterval = data.cart.changeIntervalSeconds * 1000;
const changeIntervalRange = data.cart.randomIncrementAmount;

// Getter, setter, and Change Handlers
const getCartAmount = () => CartAmount;
const setCartAmount = (amount) => {
  CartAmount = amount;
  // Call all change handlers when there's a modification
  changeHandlers.forEach((handler) => handler(CartAmount));
};
const onCartAmountChange = (handler) => {
  changeHandlers.push(handler);
};

// Currency formatting
const { format: formatCurrency } = new Intl.NumberFormat('fr-CA', {
  minimumFractionDigits: 2,
  style: 'currency',
  currency: "CAD"
});

// Getter to show Formated Cart Amount
const showCartAmount = () => {
  const formattedCurrency = formatCurrency(CartAmount);
  return formattedCurrency;
};

// Value alterations
// Change cart Amount every X seconds 
function changeAmountOnTimeInterval() {
  const min = changeIntervalRange.min;
  const max = changeIntervalRange.max;
  const randomDecimalNumber = Math.random() * (max - min) + min;
  const newAmount = Math.round((randomDecimalNumber + getCartAmount()) * 100) / 100;
  setCartAmount(newAmount);
}
setInterval(changeAmountOnTimeInterval, cartChangeInterval);

// Export functions to use in app modules
export { getCartAmount, setCartAmount, onCartAmountChange, formatCurrency, showCartAmount }