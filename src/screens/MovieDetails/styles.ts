import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../common';
import { normalizeHeight } from '../../utils';
const { height } = Dimensions.get('screen');
export default StyleSheet.create({
  image: {
    height: height * 0.4,
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalizeHeight(5),
    marginVertical: normalizeHeight(5),
  },
  title: {
    fontSize: normalizeHeight(20),
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: COLORS.dark,
    marginHorizontal: 10,
  },
  language: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    borderTopColor: COLORS.offWhite,
    borderTopWidth: 1,
  },
  date: {
    color: COLORS.gray,
    fontSize: normalizeHeight(15),
    textAlign: 'center',
    marginBottom: normalizeHeight(10),
  },
  vote: {
    color: COLORS.dark,
    fontSize: normalizeHeight(15),
    textAlign: 'center',
    marginBottom: normalizeHeight(10),
  },
  icon: {
    right: normalizeHeight(15),
    top: normalizeHeight(45),
    position: 'absolute',
  },
  overview: {
    color: COLORS.dark,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cicle: {
    alignSelf: 'center',
    bottom: 2,
    left: 20,
  },
});
