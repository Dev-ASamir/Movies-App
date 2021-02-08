import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { COLORS, PLACEHOLDER_IMAGE, IMAGE_URL, STRINGS, Movie } from '../../common';
import ProgressCircle from 'react-native-progress-circle';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishList } from '../../redux/actions';

const MovieDetails = () => {
  const route = useRoute();

  const {
    params: { movie },
  }: any = route;

  const dispatch = useDispatch();
  const { userData } = useSelector((state: any) => ({
    userData: state.favorite,
  }));
  const { wishlist } = userData;
  const onLikePress = () => {
    dispatch(addToWishList({ movie, wishlist }));
  };
  const index = wishlist && wishlist.findIndex((item: Movie) => item.id === movie.id);
  const heartColor = index === -1 ? COLORS.gray : COLORS.red;

  return (
    <View>
      <Image
        source={{
          uri: movie.poster_path != null ? IMAGE_URL + movie.poster_path : PLACEHOLDER_IMAGE,
        }}
        style={styles.image}
      />
      <Icon
        name="heart"
        size={40}
        onPress={() => onLikePress()}
        style={styles.icon}
        color={heartColor}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.language}>{`( ${movie.original_language} )`}</Text>
        <ProgressCircle
          percent={movie.vote_average * 10}
          radius={25}
          borderWidth={5}
          color={movie.vote_average >= 7 ? COLORS.green : COLORS.orange}
          bgColor={COLORS.white}
          outerCircleStyle={styles.cicle}>
          <Text>{movie.vote_average}</Text>
        </ProgressCircle>
      </View>
      <Text style={styles.date}>{movie.release_date}</Text>
      <Text style={styles.vote}>
        {STRINGS.voteCount}
        {movie.vote_count}{' '}
      </Text>
      <View style={styles.separator} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.overview}>{movie.overview}</Text>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
