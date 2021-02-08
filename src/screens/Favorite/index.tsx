import React from 'react';
import { FlatList, View } from 'react-native';
import { MoviesCard } from '../../components';
import { MovieDetails } from '../../common';
import styles from './styles';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Favorite = () => {
  const navigation = useNavigation();
  const { userData } = useSelector((state: any) => ({
    userData: state.favorite,
  }));
  const { wishlist } = userData;
  const onPressMovie = (movie: MovieDetails) => {
    navigation.navigate('MovieDetails', {
      movie,
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={wishlist}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <MoviesCard movie={item} onPress={() => onPressMovie(item)} />}
      />
    </View>
  );
};

export default Favorite;
