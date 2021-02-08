import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { normalizeWidth, normalizeHeight } from '../utils';
import { useNavigation } from '@react-navigation/native';

interface LeftHeaderProps {
  title: string;
  color: string;
}
export const LeftHeader = ({ color, title }: LeftHeaderProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Favorite')}
      style={styles.headerRightButtonStyle}>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerRightButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: normalizeWidth(10),
  },
  text: {
    fontSize: normalizeHeight(16),
    fontWeight: 'bold',
  },
});
