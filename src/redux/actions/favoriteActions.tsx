import { ADD_TO_WISHLIST, REMOVE_FORM_WISHLIST } from './types';
import { Movie } from '../../common';

interface WishLisProps {
  movie: Movie;
  wishlist: [];
}

export const addToWishList = ({ movie, wishlist }: WishLisProps) => {
  const index = wishlist && wishlist.findIndex((item: Movie) => item.id === movie.id);
  if (index !== -1) {
    const myWishList = wishlist && wishlist.filter((item: Movie) => item.id !== movie.id);
    return { type: REMOVE_FORM_WISHLIST, payload: myWishList };
  } else {
    return { type: ADD_TO_WISHLIST, payload: movie };
  }
};
