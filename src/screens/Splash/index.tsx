import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, STRINGS } from '../../common';
import { normalizeHeight } from '../../utils';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ routes: [{ name: 'MoviesList' }] });
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{STRINGS.splash}</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: normalizeHeight(18),
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
