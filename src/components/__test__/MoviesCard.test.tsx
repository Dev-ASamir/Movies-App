import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { MoviesCard } from '../MoviesCard';

test('make sure that MoviesCard has been called ', () => {
  const onPressMock = jest.fn();
  const { getByTestId } = render(
    <MoviesCard
      movie={{
        id: '5',
        title: 'TestTitle',
        poster_path: 'TestImage',
        release_date: 'TestDate',
        vote_average: 10,
        original_language: 'TestLanguage',
      }}
      onPress={onPressMock}
    />,
  );
  const btn = getByTestId('MoviesCard');
  fireEvent.press(btn);
  expect(onPressMock).toHaveBeenCalled();
});
