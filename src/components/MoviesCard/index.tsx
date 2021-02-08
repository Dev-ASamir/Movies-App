import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressCircle from 'react-native-progress-circle';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishList } from '../../redux/actions';
import { ACTIVE_OPCITY, Movie, PLACEHOLDER_IMAGE, IMAGE_URL, COLORS } from '../../common';
import styles from './styles';

interface MoviesProps {
  movie: Movie;
  onPress: () => void;
}

const MoviesCard: React.FC<MoviesProps> = ({ movie, onPress }: MoviesProps) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: any) => ({
    userData: state.favorite,
  }));
  const { wishlist } = userData;
  const onLikePress = () => {
    dispatch(addToWishList({ movie, wishlist }));
  };
  const index = wishlist && wishlist.findIndex((item: any) => item.id === movie.id);
  const heartColor = index === -1 ? COLORS.gray : COLORS.red;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} activeOpacity={ACTIVE_OPCITY} onPress={onPress}>
        <Image
          source={{
            uri: movie.poster_path != null ? IMAGE_URL + movie.poster_path : PLACEHOLDER_IMAGE,
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {movie.title} <Text style={styles.language}>{`( ${movie.original_language} )`}</Text>
          </Text>
          <Text style={styles.releaseDate} numberOfLines={2}>
            {movie.release_date}
          </Text>
        </View>
        <ProgressCircle
          percent={movie.vote_average * 10}
          radius={30}
          borderWidth={5}
          color={movie.vote_average >= 7 ? COLORS.green : COLORS.orange}
          bgColor={COLORS.white}
          outerCircleStyle={styles.cicle}>
          <Text>{movie.vote_average}</Text>
        </ProgressCircle>
        <Icon
          name="heart"
          size={35}
          onPress={() => onLikePress()}
          style={styles.icon}
          color={heartColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export { MoviesCard };
