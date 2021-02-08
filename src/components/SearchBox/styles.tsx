import { StyleSheet } from 'react-native';
import { COLORS, STYLES } from '../../common';
import { normalizeHeight, normalizeWidth } from '../../utils';

export default StyleSheet.create({
  search: {
    height: normalizeHeight(50),
    backgroundColor: COLORS.white,
    margin: normalizeHeight(20),
    borderRadius: normalizeHeight(10),
    paddingHorizontal: normalizeWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderWidth: normalizeWidth(1),
    borderColor: COLORS.offWhite,
    ...STYLES.shaddow,
  },
  leftIconPlacholder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: COLORS.gray,
    padding: normalizeHeight(5),
    flex: 1,
  },
  searchIcon: {
    marginRight: normalizeWidth(10),
  },
});
