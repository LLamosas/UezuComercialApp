import React, {useEffect} from 'react';
import {ImageBackground, Image} from 'react-native';
import {bg_splash, logo_blue} from '../../../modules/resources/images';
import {splashStyles} from '../../../modules/resources/styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LogIn');
    }, 2000);
  }, [navigation]);
  return (
    <ImageBackground style={splashStyles.background} source={bg_splash}>
      <Image source={logo_blue} style={splashStyles.image} />
    </ImageBackground>
  );
};

export default SplashScreen;
