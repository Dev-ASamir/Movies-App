import { StyleSheet } from 'react-native';
import { COLORS, STYLES } from '../../common';
import { normalizeHeight, normalizeWidth } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: COLORS.white,
    marginBottom: normalizeHeight(20),
    borderRadius: normalizeHeight(10),
    ...STYLES.shaddow,
    width: normalizeWidth(300),
    height: normalizeHeight(400),
  },
  image: {
    width: normalizeWidth(300),
    height: normalizeHeight(300),
    borderTopLeftRadius: normalizeHeight(10),
    borderTopRightRadius: normalizeHeight(10),
    marginBottom: normalizeHeight(10),
  },
  title: {
    fontSize: normalizeHeight(16),
    paddingHorizontal: normalizeWidth(10),
    fontWeight: 'bold',
    width: normalizeWidth(280),
  },
  language: {
    fontSize: normalizeHeight(16),
    color: COLORS.black,
    fontWeight: 'normal',
  },
  textContainer: {
    marginVertical: normalizeHeight(20),
  },
  releaseDate: {
    fontSize: normalizeHeight(16),
    paddingHorizontal: normalizeWidth(10),
    width: normalizeWidth(280),
    color: COLORS.gray,
    marginTop: normalizeHeight(5),
  },
  icon: {
    right: normalizeHeight(15),
    top: normalizeHeight(15),
    position: 'absolute',
  },
  cicle: {
    left: normalizeHeight(15),
    bottom: normalizeHeight(75),
    position: 'absolute',
  },
});
