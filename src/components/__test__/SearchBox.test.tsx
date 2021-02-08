import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SearchBox } from '../SearchBox';

test('make sure that search box has it props ', () => {
  const onChangeTextMoch = jest.fn();
  const { getByTestId } = render(
    <SearchBox placeholder="Search" onChangeText={onChangeTextMoch} value={'movie'} />,
  );
  const props = getByTestId('SearchBox').props;
  expect(props).toEqual(
    expect.objectContaining({
      placeholder: 'Search',
      value: 'movie',
      onChangeText: onChangeTextMoch,
    }),
  );
  fireEvent.changeText(getByTestId('SearchBox'), 'movie');

  expect(onChangeTextMoch).toHaveBeenCalled();
  expect(onChangeTextMoch).toHaveBeenCalledWith('movie');
});

test('make sure that search box onChangeText has been called with right value', () => {
  const onChangeTextMoch = jest.fn();
  const { getByTestId } = render(<SearchBox onChangeText={onChangeTextMoch} />);

  fireEvent.changeText(getByTestId('SearchBox'), 'movie');

  expect(onChangeTextMoch).toHaveBeenCalled();
  expect(onChangeTextMoch).toHaveBeenCalledWith('movie');
});
