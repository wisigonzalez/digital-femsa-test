import {StyleSheet} from 'react-native';

export const ListItemStyles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 10,
  },
  leftContentSide: {
    flexDirection: 'row',
    flex: 1,
  },
  rightContentSide: {
    marginTop: -4,
  },
  title: {
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
  },
  date: {
    marginTop: 16,
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
  },
  points: {
    marginTop: 10,
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
  },
  positive: {
    color: '#00B833',
  },
  negative: {
    color: '#FF0000',
  },
  arrow: {
    marginLeft: 20,
    marginTop: 8,
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 19,
  },
});
