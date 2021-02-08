import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { COLORS, STYLES, SearchResponse, MovieDetails } from '../../common';
import { MoviesCard, SearchBox } from '../../components';
import _ from 'lodash';
import styles from './styles';
import { FlatList } from 'react-native';
import { getMovies } from '../../services';
import { errorHandler } from '../../utils';
import validator from 'validator';

const MoviesList: React.FC = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>('');
  const [requestData, setRequestData] = useState<SearchResponse>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onPressMovie = (movie: MovieDetails) => {
    navigation.navigate('MovieDetails', {
      movie,
    });
  };

  const searchHander: (value: string) => void = useCallback(
    _.debounce(async (value: string) => {
      const isEmpty = validator.isEmpty(value, { ignore_whitespace: true });
      if (!isEmpty) {
        setLoading(true);
        const response: SearchResponse = await getMovies(value);
        setRequestData(response);
        setLoading(false);
        if (response.movies.length === 0) {
          setError('NoData');
        } else {
          setError(response.error);
        }
      }
    }, 1300),
    [],
  );

  return (
    <View style={styles.container}>
      <SearchBox
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          searchHander(text);
        }}
      />

      {loading && (
        <ActivityIndicator color={COLORS.koromike} style={styles.indicator} size={'small'} />
      )}
      {error ? (
        <Text style={STYLES.errorText}>{errorHandler(error)}</Text>
      ) : (
        requestData &&
        requestData.movies.length > 0 && (
          <FlatList
            data={requestData.movies}
            renderItem={({ item }) => (
              <MoviesCard movie={item} onPress={() => onPressMovie(item)} />
            )}
            contentContainerStyle={styles.list}
            keyExtractor={(item) => `${item.id}`}
          />
        )
      )}
    </View>
  );
};

export default MoviesList;
