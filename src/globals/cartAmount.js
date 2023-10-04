let CartAmount = 0;
const changeHandlers = [];

module.exports = {
  getCartAmount: () => CartAmount,
  setCartAmount: (amount) => {
    CartAmount = amount;
    // Appeler tous les gestionnaires de changement en cas de modification
    changeHandlers.forEach((handler) => handler(CartAmount));
  },
  // Ajouter un gestionnaire de changement
  onChange: (handler) => {
    changeHandlers.push(handler);
  },
};