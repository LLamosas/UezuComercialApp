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
import {setInputUser} from '../../../modules/core/User/actions';
//COMPONENTS
import Header from '../../components/Header';
import Title from '../../components/Title';
import SelectInput from '../../components/Select';

////// UTIL
import {showAlert, isEmpty} from '../../../modules/resources/util';

class Equipo extends Component {
  state = {
    showPassword: false,
    selectbrandCon: [{key: '0', value: 0, label: 'Seleccione un Marca'}],
    selectbrandAir: [{key: '0', value: 0, label: 'Seleccione un Marca'}],
    selectTypeCon: [{key: '0', value: 0, label: 'Seleccione un Tipo'}],
    selectTypeAir: [{key: '0', value: 0, label: 'Seleccione un Tipo'}],
  };

  componentDidMount() {
    let brandCon = [{key: '0', value: 0, label: 'Seleccione un Marca'}];
    if (this.props.brandsCon.length > 0) {
      this.props.brandsCon.map(c =>
        brandCon.push({key: `${c.id}`, value: c.id, label: c.name}),
      );
      this.setState({selectbrandCon: brandCon});
    }

    let brandAir = [{key: '0', value: 0, label: 'Seleccione un Marca'}];
    if (this.props.brandsAir.length > 0) {
      this.props.brandsAir.map(c =>
        brandAir.push({key: `${c.id}`, value: c.id, label: c.name}),
      );
      this.setState({selectbrandAir: brandAir});
    }

    let equipAir = [{key: '0', value: 0, label: 'Seleccione un Tipo'}];
    if (this.props.equipAir.length > 0) {
      this.props.equipAir.map(c =>
        equipAir.push({key: `${c.id}`, value: c.id, label: c.name}),
      );
      this.setState({selectTypeAir: equipAir});
    }

    let equipCon = [{key: '0', value: 0, label: 'Seleccione un Tipo'}];
    if (this.props.equipCon.length > 0) {
      this.props.equipCon.map(c =>
        equipCon.push({key: `${c.id}`, value: c.id, label: c.name}),
      );
      this.setState({selectTypeCon: equipCon});
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView>
          <Header backable goBack={() => this.props.navigation.goBack()} />
          <View style={{flex: 1}}>
            <Title title={'Equipo aire acondicionado'} />
            <Text style={generalStyles.textTitle}>Marca</Text>
            <SelectInput
              style={[userStyles.textInput, {paddingLeft: 0}]}
              value={this.props.idMarcaAir.label}
              labelStyle={{textAlign: 'left', color: '#000000'}}
              options={this.state.selectbrandCon}
              onChange={v => {
                this.props.setInputUser({prop: 'idMarcaAir', value: v});
              }}
            />
            <Text style={generalStyles.textTitle}>Tipo</Text>
            <SelectInput
              style={[userStyles.textInput, {paddingLeft: 0}]}
              value={this.props.idTipoAir.label}
              labelStyle={{textAlign: 'left', color: '#000000'}}
              options={this.state.selectTypeCon}
              onChange={v => {
                this.props.setInputUser({prop: 'idTipoAir', value: v});
              }}
            />

            <Text style={generalStyles.textTitle}>Capacidad</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Capacidad'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.capacidadAir}
              onChangeText={text =>
                this.props.setInputUser({prop: 'capacidadAir', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Energia</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Energia'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.energiaAir}
              onChangeText={text =>
                this.props.setInputUser({prop: 'energiaAir', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Refrigerante</Text>
            <TextInput
              style={[userStyles.textInput, {marginBottom: 20}]}
              placeholder={'Refrigerante'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.refrigeranteAir}
              onChangeText={text =>
                this.props.setInputUser({prop: 'refrigeranteAir', value: text})
              }
            />

            <Title title={'Equipo de Ventilación Mecánica'} />

            <Text style={generalStyles.textTitle}>Marca</Text>
            <SelectInput
              style={[userStyles.textInput, {paddingLeft: 0}]}
              value={this.props.idMarcaVen.label}
              labelStyle={{textAlign: 'left', color: '#000000'}}
              options={this.state.selectbrandAir}
              onChange={v => {
                this.props.setInputUser({prop: 'idMarcaVen', value: v});
              }}
            />
            <Text style={generalStyles.textTitle}>Tipo</Text>
            <SelectInput
              style={[userStyles.textInput, {paddingLeft: 0}]}
              value={this.props.idTipoVen.label}
              labelStyle={{textAlign: 'left', color: '#000000'}}
              options={this.state.selectTypeAir}
              onChange={v => {
                this.props.setInputUser({prop: 'idTipoVen', value: v});
              }}
            />

            <Text style={generalStyles.textTitle}>Motor</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Motor'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.capacidadVen}
              onChangeText={text =>
                this.props.setInputUser({prop: 'capacidadVen', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Energia</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Energia'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.energiaVen}
              onChangeText={text =>
                this.props.setInputUser({prop: 'energiaVen', value: text})
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
                this.props.navigation.push('Generales');

                // if (this.props.idMarcaAir != 0 || this.props.idTipoAir != 0 || !isEmpty(this.props.capacidadAir) || !isEmpty(this.props.energiaAir) || !isEmpty(this.props.refrigeranteAir)) {

                //     if (this.props.idMarcaAir == 0 || this.props.idTipoAir == 0 || isEmpty(this.props.capacidadAir) || isEmpty(this.props.energiaAir) || isEmpty(this.props.refrigeranteAir)) {
                //         showAlert({ msj: 'Es necesario seleccionar todos los campos', type: 2 })
                //     } else {
                //         if (this.props.idMarcaVen != 0 || this.props.idTipoVen != 0 || !isEmpty(this.props.capacidadVen) || !isEmpty(this.props.energiaVen)) {
                //             if (this.props.idMarcaVen == 0 || this.props.idTipoVen == 0 || isEmpty(this.props.capacidadVen) || isEmpty(this.props.energiaVen)) {
                //                 showAlert({ msj: 'Es necesario seleccionar todos los campos', type: 2 })
                //             } else {
                //                 this.props.navigation.navigate('Generales')
                //             }
                //         } else {
                //             this.props.navigation.navigate('Generales')
                //         }
                //     }

                // } else if (this.props.idMarcaVen != 0 || this.props.idTipoVen != 0 || !isEmpty(this.props.capacidadVen) || !isEmpty(this.props.energiaVen)) {
                //     if (this.props.idMarcaVen == 0 || this.props.idTipoVen == 0 || isEmpty(this.props.capacidadVen) || isEmpty(this.props.energiaVen)) {
                //         showAlert({ msj: 'Es necesario seleccionar todos los campos', type: 2 })
                //     } else {
                //         if (this.props.idMarcaAir != 0 || this.props.idTipoAir != 0 || !isEmpty(this.props.capacidadAir) || !isEmpty(this.props.energiaAir) || !isEmpty(this.props.refrigeranteAir)) {
                //             if (this.props.idMarcaAir == 0 || this.props.idTipoAir == 0 || isEmpty(this.props.capacidadAir) || isEmpty(this.props.energiaAir) || isEmpty(this.props.refrigeranteAir)) {
                //                 showAlert({ msj: 'Es necesario seleccionar todos los campos', type: 2 })
                //             } else {
                //                 this.props.navigation.navigate('Generales')
                //             }

                //         } else {
                //             this.props.navigation.navigate('Generales')
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
    idMarcaAir,
    idTipoAir,
    capacidadAir,
    energiaAir,
    refrigeranteAir,
    idMarcaVen,
    idTipoVen,
    capacidadVen,
    energiaVen,
    brandsCon,
    brandsAir,
    equipCon,
    equipAir,
  } = state.user;
  return {
    user,
    idMarcaAir,
    idTipoAir,
    capacidadAir,
    energiaAir,
    refrigeranteAir,
    idMarcaVen,
    idTipoVen,
    capacidadVen,
    energiaVen,
    brandsCon,
    brandsAir,
    equipCon,
    equipAir,
  };
};
export default connect(mapStateProps, {setInputUser})(Equipo);
