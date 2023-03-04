import {StyleSheet} from 'react-native';
import {colors} from '../../../../../modules/resources/color';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  mainContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCamera: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  mrgnIconCamera: {
    marginRight: 10,
  },
  btnContainer: {
    flex: 0,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  textBtn: {
    color: 'white',
  },
  textInputFoto: {
    backgroundColor: '#ECECEC',
    borderRadius: 5,
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 80,
    borderWidth: 3,
    borderColor: '#B1B1B1',
    width: 150,
    marginTop: 10,
  },
});
