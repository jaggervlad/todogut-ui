import {
  SELECT_CLIENT,
  SELECT_PRODUCT,
  COUNT_PRODUCTS,
  ADD_DISCOUNT,
  ADD_COST_SHIPPING,
  UPDATE_TOTAL,
} from '@/types/orders';

export default function OrderReducer(state, action) {
  switch (action.type) {
    case SELECT_CLIENT:
      return {
        ...state,
        cliente: action.payload,
      };

    case SELECT_PRODUCT:
      return {
        ...state,
        productos: action.payload,
      };

    case COUNT_PRODUCTS:
      return {
        ...state,
        productos: state.productos.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
      };

    case ADD_COST_SHIPPING:
      return {
        ...state,
        costEnv: action.payload,
      };

    case ADD_DISCOUNT:
      return {
        ...state,
        discount: action.payload,
      };

    case UPDATE_TOTAL:
      let reduceTotal = state.productos.reduce((newTotal, product) => {
        newTotal += product.precio * product.cantidad;
        return newTotal;
      }, 0);

      if (state.costEnv > 0) {
        reduceTotal += state.costEnv;
      }

      if (state.discount > 0) {
        reduceTotal -= state.discount;
      }
      return {
        ...state,
        total: reduceTotal,
      };

    default:
      return state;
  }
}
