import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  columns: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
    borderColor: '#fff',
  },
  onedaycolumn: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 10,
    borderColor: '#fff',
    marginLeft: 20,
  },
  text: {
    textAlign: 'center',
    color: '#4A4A4A',
  },
  CircleShapeView: {
    width: 40,
    justifyContent: 'center',
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#7ed221'
  },
  oneDayTitleView: {
    width: 40,
    justifyContent: 'center',
    height: 40,
    borderRadius: 40 / 2
  },
  daynametext: {
    width: 40,
    textAlign: 'center',
    color: '#7ed221',
    fontWeight: 'bold',
  },
});

export default styles;
