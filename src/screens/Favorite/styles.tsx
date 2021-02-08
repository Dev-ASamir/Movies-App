import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { normalizeHeight } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
  },
  list: {
    paddingBottom: normalizeHeight(40),
    padding: normalizeHeight(20),
    borderRadius: normalizeHeight(5),
    overflow: 'hidden',
  },
});

export default styles;
