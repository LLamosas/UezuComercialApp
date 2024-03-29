import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {bg_login, logo_blue} from '../../../modules/resources/images';
import {loginStyles} from '../../../modules/resources/styles';
import {userLogin} from '../../../modules/core/User/actions';
import Loader from '../../components/Loader';

class Login extends Component {
  state = {
    showPassword: false,
    user: '',
    clave: '',
    loader: false,
  };

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      this.requestCameraPermission();
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground style={loginStyles.imgBackground} source={bg_login}>
          <View style={loginStyles.container}>
            <View style={loginStyles.box}>
              <Image source={logo_blue} style={loginStyles.logo} />
              <TextInput
                style={loginStyles.textInput}
                placeholder={'Usuario'}
                placeholderTextColor="#FFF"
                value={this.state.user}
                onChangeText={user => this.setState({user})}
                autoCapitalize={'none'}
                autoCorrect={false}
              />
              <TextInput
                style={loginStyles.textInput}
                placeholder={'Password'}
                placeholderTextColor="#FFFFFF"
                secureTextEntry={true}
                value={this.state.clave}
                onChangeText={clave => this.setState({clave})}
              />
              <TouchableOpacity
                style={loginStyles.button}
                onPress={async () => {
                  this.setState({loader: true});
                  this.props.userLogin({
                    user: this.state.user,
                    password: this.state.clave,
                    callback: user => {
                      this.setState({loader: false});
                      if (user) {
                        if (user.fk_idUserType === 6) {
                          this.props.navigation.replace('UsuarioIngeniero');
                        } else if (user.fk_idUserType === 4) {
                          this.props.navigation.replace('UsuarioCalidad');
                        } else {
                          this.props.navigation.replace('UsuarioTecnico');
                        }
                      }
                    },
                  });
                }}>
                <Text style={{color: 'white'}}>Ingresar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <Loader isVisible={this.state.loader} />
      </SafeAreaView>
    );
  }
}
const mapStateProps = state => {
  const {user, token, loading} = state.user;
  return {user, token, loading};
};
export default connect(mapStateProps, {userLogin})(Login);
