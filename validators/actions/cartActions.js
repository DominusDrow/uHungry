export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_ITEM = "DELETE_ITEM";
export const MINUS_ITEM = "MINUS_ITEM";
export const PLUS_ITEM = "PLUS_ITEM";
export const DELETE_ALL_ITEMS = "DELETE_ALL_ITEMS";
export const UPDATE_STATUS = "UPDATE_STATUS";


export const addToCart = (item, count) => {
  return {
    type: ADD_TO_CART,
    item: item,
    count: count,
  };1
};

export const deleteItemFromCart = (item) => {
  return {
    type: DELETE_ITEM,
    item: item,
  };
};

export const minusItem = (item) => {
  return {
    type: MINUS_ITEM,
    item: item,
  };
};

export const plusItem = (item) => {
  return {
    type: PLUS_ITEM,
    item: item,
  };
};

export const deleteAllItems = () => {
  return {
    type: DELETE_ALL_ITEMS,
  };
};

export const updateStatus = (status) => {
  return {
    type: UPDATE_STATUS,
    status: status,
  };
}

