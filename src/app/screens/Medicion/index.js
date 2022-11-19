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
} from 'react-native';
import {
  bg_login,
  logo_blue,
  logo_white,
  back,
  logout,
} from '../../../modules/resources/images';
import {
  userStyles,
  loginStyles,
  generalStyles,
} from '../../../modules/resources/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {setInputUser} from '../../../modules/core/User/actions';

//COMPONENTS
import Header from '../../components/Header';
import Title from '../../components/Title';

////// UTIL
import {showAlert, isEmpty} from '../../../modules/resources/util';

class Medicion extends Component {
  state = {
    showPassword: false,
    selectClient: [{key: '0', value: 0, label: 'Seleccione un Cliente'}],
    selectSupervisor: [{key: '0', value: 0, label: 'Seleccione un Supervisor'}],
  };

  componentDidMount() {}
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView>
          <Header backable goBack={() => this.props.navigation.goBack()} />
          <View style={{flex: 1}}>
            <Title title={'Datos de instrumentos de medición'} />

            <View style={{width: '100%', marginTop: 10, alignItems: 'center'}}>
              <Text style={[generalStyles.textColor, generalStyles.title]}>
                Manómetro
              </Text>
            </View>

            <Text style={generalStyles.textTitle}>Marca</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Marca'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.manoMarca}
              onChangeText={text =>
                this.props.setInputUser({prop: 'manoMarca', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Modelo</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Modelo'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.manoModelo}
              onChangeText={text =>
                this.props.setInputUser({prop: 'manoModelo', value: text})
              }
            />

            <Text style={generalStyles.textTitle}>Serie</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Serie'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.manoSerie}
              onChangeText={text =>
                this.props.setInputUser({prop: 'manoSerie', value: text})
              }
            />

            <View style={{width: '100%', marginTop: 10, alignItems: 'center'}}>
              <Text style={[generalStyles.textColor, generalStyles.title]}>
                Pinza Amperimétrica
              </Text>
            </View>
            <Text style={generalStyles.textTitle}>Marca</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Marca'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.pinzaMarca}
              onChangeText={text =>
                this.props.setInputUser({prop: 'pinzaMarca', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Modelo</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Modelo'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.pinzaModelo}
              onChangeText={text =>
                this.props.setInputUser({prop: 'pinzaModelo', value: text})
              }
            />

            <Text style={generalStyles.textTitle}>Serie</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Serie'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.pinzaSerie}
              onChangeText={text =>
                this.props.setInputUser({prop: 'pinzaSerie', value: text})
              }
            />

            <View style={{width: '100%', marginTop: 10, alignItems: 'center'}}>
              <Text
                style={[
                  [generalStyles.textColor, generalStyles.title],
                  generalStyles.title,
                ]}>
                Termometro
              </Text>
            </View>
            <Text style={generalStyles.textTitle}>Marca</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Marca'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.termoMarca}
              onChangeText={text =>
                this.props.setInputUser({prop: 'termoMarca', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Modelo</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Modelo'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.termoModelo}
              onChangeText={text =>
                this.props.setInputUser({prop: 'termoModelo', value: text})
              }
            />

            <Text style={generalStyles.textTitle}>Serie</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Serie'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.termoSerie}
              onChangeText={text =>
                this.props.setInputUser({prop: 'termoSerie', value: text})
              }
            />
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              width: '100%',
              marginTop: 20,
              marginBottom: 20,
            }}>
            <TouchableOpacity
              style={loginStyles.button}
              onPress={() => {
                this.props.navigation.navigate('Foto');

                // if (isEmpty(this.props.manoMarca) ||
                //     isEmpty(this.props.manoModelo) ||
                //     isEmpty(this.props.manoSerie) ||
                //     isEmpty(this.props.pinzaMarca) ||
                //     isEmpty(this.props.pinzaModelo) ||
                //     isEmpty(this.props.pinzaSerie) ||
                //     isEmpty(this.props.termoMarca) ||
                //     isEmpty(this.props.termoModelo) ||
                //     isEmpty(this.props.termoSerie)
                // ) {

                //     showAlert({ msj: 'Es necesario seleccionar todos los campos', type: 2 })
                // } else {
                //     this.props.navigation.navigate('Foto')
                // }
              }}>
              <Text style={{color: 'white'}}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateProps = state => {
  const {
    user,
    manoMarca,
    manoModelo,
    manoSerie,
    pinzaMarca,
    pinzaModelo,
    pinzaSerie,
    termoMarca,
    termoModelo,
    termoSerie,
  } = state.user;
  return {
    user,
    manoMarca,
    manoModelo,
    manoSerie,
    pinzaMarca,
    pinzaModelo,
    pinzaSerie,
    termoMarca,
    termoModelo,
    termoSerie,
  };
};
export default connect(mapStateProps, {setInputUser})(Medicion);
