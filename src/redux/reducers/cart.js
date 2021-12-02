const initialCart = {products: []};
const cart = (state = initialCart, action) => {
  switch (action.type) {
    case 'Add to cart':
      if (
        state.products.find(product => action.payload.product.ID === product.ID)
      ) {
        return {
          ...state,
          products: state.products.map(product => {
            return {
              ...product,
              Quantity:
                product.ID == action.payload.product.ID
                  ? product.Quantity + 1
                  : product.Quantity,
            };
          }),
        };
      } else {
        return {
          ...state,
          products: [...state.products, action.payload.product],
        };
      }
    case 'Remove from cart':
      return {
        ...state,
        products: state.products.filter(
          product => product.ID != action.payload.ID,
        ),
      };
    default:
      return state;
  }
};
export default cart;
