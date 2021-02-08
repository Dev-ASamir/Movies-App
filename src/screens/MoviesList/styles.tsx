import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { normalizeHeight } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  list: {
    paddingBottom: normalizeHeight(40),
    padding: normalizeHeight(20),
    borderRadius: normalizeHeight(5),
    overflow: 'hidden',
  },
  indicator: {
    padding: normalizeHeight(10),
  },
});
