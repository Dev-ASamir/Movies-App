import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import MoviesList from '../screens/MoviesList';
import MovieDetails from '../screens/MovieDetails';
import Favorite from '../screens/Favorite';
import { COLORS } from '../common';
import { StyleSheet } from 'react-native';
import { LeftHeader } from './LeftHeader';
import { normalizeHeight, normalizeWidth } from '../utils';

const MainStackNav = createStackNavigator();

const MainStack = () => {
  return (
    <MainStackNav.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerTruncatedBackTitle: '',
        headerBackTitle: '',
        headerTitleAlign: 'center',
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerLeftContainerStyle: styles.headerLeftContainerStyle,
      }}>
      <MainStackNav.Screen component={Splash} name="Splash" options={{ headerShown: false }} />
      <MainStackNav.Screen
        component={MoviesList}
        name="MoviesList"
        options={{
          headerLeft: () => <LeftHeader title={'Favorite'} color={COLORS.white} />,
        }}
      />
      <MainStackNav.Screen
        component={Favorite}
        name="Favorite"
        options={{
          title: 'Favorite List',
        }}
      />
      <MainStackNav.Screen
        component={MovieDetails}
        name="MovieDetails"
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
    </MainStackNav.Navigator>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.dark,
  },
  headerTitleStyle: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontSize: normalizeHeight(20),
    fontWeight: 'bold',
  },
  headerLeftContainerStyle: {
    marginLeft: normalizeWidth(10),
  },
});

export default MainStack;
