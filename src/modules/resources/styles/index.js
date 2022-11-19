import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors} from '../color';

export const splashStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '70%',
    resizeMode: 'contain',
  },
});

export const loginStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 40,
    backgroundColor: colors.containerColor,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: colors.textInput,
  },
  imgBackground: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
    height: 70,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: colors.bg_blue,
    width: '40%',
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.bg_blue,
    flexDirection: 'row',
  },
  iconView: {
    width: '20%',
    justifyContent: 'center',
  },
  lefIcon: {
    marginLeft: 10,
  },
  rightIcon: {
    marginRight: 15,
    alignSelf: 'flex-end',
  },
  centerIcon: {
    resizeMode: 'contain',
    width: '80%',
    height: 54,
    alignSelf: 'center',
  },
  centerView: {
    width: '60%',
    justifyContent: 'center',
  },
});

export const titleStyles = StyleSheet.create({
  container: {
    height: 35,
    width: '100%',
    backgroundColor: colors.bg_blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export const userStyles = StyleSheet.create({
  textInput: {
    width: '80%',
    height: 40,
    backgroundColor: colors.containerColor,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    color: colors.textInput,
    alignSelf: 'center',
  },
});
export const pruebasStyles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: colors.containerColor,
    padding: 5,
  },
  miniContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: colors.containerColor,
    borderRadius: 5,
  },
  airView: {
    width: '80%',
    marginTop: 20,
    backgroundColor: colors.containerColor,
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: '10%',
  },
});

export const generalStyles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  textColor: {
    color: colors.bg_blue,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
  textTitle: {
    marginLeft: '10%',
    marginTop: 10,
    marginBottom: -5,
  },
});
