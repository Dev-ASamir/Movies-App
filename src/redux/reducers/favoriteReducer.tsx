import { ADD_TO_WISHLIST, REMOVE_FORM_WISHLIST } from '../actions/types';

const initialState = {
  wishlist: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case REMOVE_FORM_WISHLIST:
      return { ...state, wishlist: [...action.payload] };
    default:
      return state;
  }
};
