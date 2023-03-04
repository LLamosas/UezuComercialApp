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
// import SelectInput from 'react-native-select-input-ios';
import SelectInput from '../../components/Select';
import {setInputUser} from '../../../modules/core/User/actions';

//COMPONENTS
import Header from '../../components/Header';
import Title from '../../components/Title';

////// UTIL
import {showAlert, isEmpty} from '../../../modules/resources/util';

class Generales extends Component {
  state = {
    showPassword: false,
    selectAccesorie: [{key: '0', value: 0, label: 'Seleccione un Accesorio'}],
  };

  componentDidMount() {
    let accesorie = [{key: '0', value: 0, label: 'Seleccione un Accesorio'}];
    if (this.props.accesories.length > 0) {
      this.props.accesories.map(c =>
        accesorie.push({key: `${c.id}`, value: c.id, label: c.name}),
      );
      this.setState({selectAccesorie: accesorie});
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView>
          <Header backable goBack={() => this.props.navigation.goBack()} />
          <View style={{flex: 1}}>
            <Title title={'Datos Generales'} />
            <Text style={generalStyles.textTitle}>Accesorio</Text>
            <SelectInput
              style={[userStyles.textInput, {paddingLeft: 0}]}
              value={this.props.idEquipoGen.label}
              labelStyle={{textAlign: 'left', color: '#000000'}}
              options={this.state.selectAccesorie}
              onChange={v => {
                this.props.setInputUser({prop: 'idEquipoGen', value: v});
              }}
            />
            <Text style={generalStyles.textTitle}>Modelo</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Modelo'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.modeloGen}
              onChangeText={text =>
                this.props.setInputUser({prop: 'modeloGen', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Serie</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Serie'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.serieGen}
              onChangeText={text =>
                this.props.setInputUser({prop: 'serieGen', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Accesorio</Text>
            <SelectInput
              style={[userStyles.textInput, {paddingLeft: 0}]}
              value={this.props.idEquipoTwoGen.label}
              labelStyle={{textAlign: 'left', color: '#000000'}}
              options={this.state.selectAccesorie}
              onChange={v => {
                this.props.setInputUser({prop: 'idEquipoTwoGen', value: v});
              }}
            />
            <Text style={generalStyles.textTitle}>Modelo</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Modelo'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.modeloTwoGen}
              onChangeText={text =>
                this.props.setInputUser({prop: 'modeloTwoGen', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Serie</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Serie'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.serieTwoGen}
              onChangeText={text =>
                this.props.setInputUser({prop: 'serieTwoGen', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Observaciones</Text>
            <TextInput
              style={[userStyles.textInput, {height: 120}]}
              placeholder={'Observaciones'}
              multiline
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.observaciones}
              onChangeText={text =>
                this.props.setInputUser({prop: 'observaciones', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>
              Recomendaciones y Sugerencia
            </Text>

            <TextInput
              style={[userStyles.textInput, {height: 120}]}
              placeholder={'Recomendaciones y sugerencias'}
              placeholderTextColor="rgb(113, 109, 109)"
              multiline
              value={this.props.recomendaciones}
              onChangeText={text =>
                this.props.setInputUser({prop: 'recomendaciones', value: text})
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
                this.props.navigation.push('Pruebas');
                // if (this.props.idEquipoGen != 0 || !isEmpty(this.props.modeloGen) || !isEmpty(this.props.serieGen)) {

                //     if (this.props.idEquipoGen == 0 || isEmpty(this.props.modeloGen) || isEmpty(this.props.serieGen)) {
                //         showAlert({ msj: 'Es necesario seleccionar todos los campos', type: 2 })
                //     } else {
                //         if (this.props.idEquipoTwoGen != 0 || !isEmpty(this.props.modeloTwoGen) || !isEmpty(this.props.serieTwoGen)) {
                //             if (this.props.idEquipoTwoGen == 0 || isEmpty(this.props.modeloTwoGen) || isEmpty(this.props.serieTwoGen)) {
                //                 showAlert({ msj: 'Es necesario seleccionar todos los campos', type: 2 })
                //             } else {
                //                 this.props.navigation.navigate('Pruebas')
                //             }
                //         } else {
                //             this.props.navigation.navigate('Pruebas')
                //         }
                //     }

                // } else if (this.props.idEquipoTwoGen != 0 || !isEmpty(this.props.modeloTwoGen) || !isEmpty(this.props.serieTwoGen)) {
                //     if (this.props.idEquipoTwoGen == 0 || isEmpty(this.props.modeloTwoGen) || isEmpty(this.props.serieTwoGen)) {
                //         showAlert({ msj: 'Es necesario seleccionar todos los campos', type: 2 })
                //     } else {
                //         if (this.props.idEquipoGen != 0 || !isEmpty(this.props.modeloGen) || !isEmpty(this.props.serieGen)) {

                //             if (this.props.idEquipoGen == 0 || isEmpty(this.props.modeloGen) || isEmpty(this.props.serieGen)) {
                //                 showAlert({ msj: 'Es necesario seleccionar todos los campos', type: 2 })
                //             } else {
                //                 this.props.navigation.navigate('Pruebas')
                //             }

                //         } else {
                //             this.props.navigation.navigate('Pruebas')
                //         }
                //     }

                // } else {
                //     showAlert({ msj: 'Es necesario seleccionar todos los campos', type: 2 })
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
    idEquipoGen,
    modeloGen,
    serieGen,
    idEquipoTwoGen,
    modeloTwoGen,
    serieTwoGen,
    observaciones,
    recomendaciones,
    accesories,
  } = state.user;
  return {
    user,
    idEquipoGen,
    modeloGen,
    serieGen,
    idEquipoTwoGen,
    modeloTwoGen,
    serieTwoGen,
    observaciones,
    recomendaciones,
    accesories,
  };
};
export default connect(mapStateProps, {setInputUser})(Generales);
