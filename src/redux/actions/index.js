export const increNum = () => {
  return {type: 'Increment'};
};

export const decreNum = () => {
  return {type: 'Decrement'};
};

export const addToCart = product => {
  return {type: 'Add to cart', payload: {product}};
};

export const removeFromCart = ID => {
  return {type: 'Remove from cart', payload: {ID}};
};
