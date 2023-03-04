import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Switch,
  Image,
} from 'react-native';
import moment from 'moment';
import {
  userStyles,
  loginStyles,
  generalStyles,
} from '../../../../../modules/resources/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';

import {logOut} from '../../../../../modules/core/User/actions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//COMPONENTS
import Header from '../../../../components/Header';
import Title from '../../../../components/Title';
import Input from '../../../../components/Input';
import ListFilter from '../../../../components/ListFilter';
import SelectInput from '../../../../components/Select';

import {camera, gallery, close} from '../../../../../modules/resources/images';
import {styles} from './styles';

const imagePickerOptions = {
  mediaType: 'photo',
  maxWidth: 600,
  maxHeight: 600,
  includeBase64: true,
};

class Step1Ingeniero extends Component {
  state = {
    openDate1: false,
    date: '',
    sofya: '',
    cliente: '',
    ruc: '',
    representante: '',
    supervision: '',
    supervisor: '',
    proyecto: '',
    direccion: '',
    tiempoDuracion: '',
    cronograma: null,
    hitos: '',
    tiempoHitos: '',
    hitoActual: '',
    tieneRetraso: false,
    pathCrono: null,
  };

  _takePhoto() {
    const imgPickerResponse = response => {
      if (!response.didCancel && !response.error) {
        this.setState({
          cronograma: response.assets[0].base64,
          pathCrono: response.assets[0].uri,
        });
      }
    };
    launchCamera(imagePickerOptions, imgPickerResponse);
  }
  _selectPhoto() {
    const imgPickerResponse = response => {
      if (!response.didCancel && !response.error) {
        this.setState({
          cronograma: response.assets[0].base64,
          pathCrono: response.assets[0].uri,
        });
      }
    };
    launchImageLibrary(imagePickerOptions, imgPickerResponse);
  }

  componentDidMount() {}

  setttingParam(prop, value) {
    this.setState({[prop]: value});
  }
  render() {
    const {
      date,
      sofya,
      cliente,
      ruc,
      representante,
      supervision,
      supervisor,
      proyecto,
      direccion,
      tiempoDuracion,
      cronograma,
      hitos,
      tiempoHitos,
      hitoActual,
      tieneRetraso,
      pathCrono,
    } = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView>
          <Header
            exitable
            getOut={() => {
              this.props.logOut({
                token: this.props.token,
                callback: () => {
                  this.props.navigation.navigate('LogIn');
                },
              });
            }}
            sendable={false}
          />
          <View style={{flex: 1}}>
            <Title title={'Datos del Usuario'} />
            <Text style={generalStyles.textTitle}>Fecha de Informe</Text>
            <TouchableOpacity
              onPress={() => this.setState({openDate1: true})}
              style={[userStyles.textInput, {justifyContent: 'center'}]}>
              <Text>{date || 'Ingresar Fecha de Informe'}</Text>
            </TouchableOpacity>
            <DatePicker
              date={new Date()}
              open={this.state.openDate1}
              locale="es"
              mode="date"
              modal
              title="Seleccionar fecha"
              is24hourSource="locale"
              onConfirm={date => {
                const newDate = moment(date).format('DD/MM/YYYY');
                this.setState({openDate1: false, date: newDate});
              }}
              onCancel={() => {
                this.setState({openDate1: false});
              }}
            />
            <Text style={generalStyles.textTitle}>Codigo Sofya</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Cod. Sofya'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={sofya}
              onChangeText={text => this.setttingParam('sofya', text)}
            />

            <Text style={generalStyles.textTitle}>Cliente de Contrato</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el cliente de contrato'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={cliente}
              onChangeText={text => this.setttingParam('cliente', text)}
            />
            <Text style={generalStyles.textTitle}>Ruc</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el RUC'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={ruc}
              onChangeText={text => this.setttingParam('ruc', text)}
            />
            <Text style={generalStyles.textTitle}>
              Representante de Cliente
            </Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el representante'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={representante}
              onChangeText={text => this.setttingParam('representante', text)}
            />

            <Text style={generalStyles.textTitle}>Supervisión de Cliente</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba la supervisión del cliente'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={supervision}
              onChangeText={text => this.setttingParam('supervision', text)}
            />
            <Text style={generalStyles.textTitle}>Supervisor</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el supervidor'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={supervisor}
              onChangeText={text => this.setttingParam('supervisor', text)}
            />
            <Text style={generalStyles.textTitle}>Proyecto</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el proyecto'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={proyecto}
              onChangeText={text => this.setttingParam('proyecto', text)}
            />
            <Text style={generalStyles.textTitle}>Dirección</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba la dirección'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={direccion}
              onChangeText={text => this.setttingParam('direccion', text)}
            />

            <Text style={generalStyles.textTitle}>
              Tiempo de duración de la obra
            </Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el tiempo de duración'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={tiempoDuracion}
              onChangeText={text => this.setttingParam('tiempoDuracion', text)}
            />
            <View style={styles.container}>
              <Text>Cronograma</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{marginRight: 10}}
                  onPress={() => this._takePhoto()}>
                  <Image
                    source={camera}
                    style={{width: 16, height: 16, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._selectPhoto()}>
                  <Image
                    source={gallery}
                    style={{width: 16, height: 16, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {cronograma ? (
              <View style={styles.image}>
                <TouchableOpacity
                  style={{
                    right: 40,
                    position: 'absolute',
                    zIndex: 10,
                    elevation: 10,
                  }}
                  onPress={() => this.setState({cronograma: ''})}>
                  <Image
                    source={close}
                    style={{
                      width: 16,
                      height: 16,
                      resizeMode: 'contain',
                      tintColor: 'red',
                    }}
                  />
                </TouchableOpacity>
                <Image
                  source={{uri: pathCrono}}
                  style={cronograma ? styles.image : null}
                />
              </View>
            ) : null}
            <Text style={generalStyles.textTitle}>Cantidad de hitos</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba la cantidad de hitos'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={hitos}
              keyboardType="decimal-pad"
              onChangeText={text => this.setttingParam('hitos', text)}
            />

            <Text style={generalStyles.textTitle}>
              Tiempo estimado de hitos en dias
            </Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el tiempo Estimado (días)'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={tiempoHitos}
              keyboardType="decimal-pad"
              onChangeText={text => this.setttingParam('tiempoHitos', text)}
            />
            <Text style={generalStyles.textTitle}>
              En que hito te encuentras
            </Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el hito actual'}
              placeholderTextColor="rgb(113, 109, 109)"
              keyboardType="decimal-pad"
              value={hitoActual}
              onChangeText={text => this.setttingParam('hitoActual', text)}
            />
            <View style={styles.container}>
              <Text>Presenta atraso?</Text>
              <Switch
                value={tieneRetraso}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                onValueChange={nextValue =>
                  this.setttingParam('tieneRetraso', nextValue)
                }
              />
            </View>
          </View>

          <View
            style={{
              flex: 0,
              alignItems: 'center',
              width: '100%',
              marginTop: 20,
              marginBottom: 20,
            }}>
            <TouchableOpacity
              style={loginStyles.button}
              onPress={() => {
                const beforeData = this.state;
                this.props.navigation.push('step2Ingeniero', {
                  beforeData,
                });
              }}>
              <Text style={{color: 'white'}}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        <ListFilter data={this.state.dataFilter} />
      </SafeAreaView>
    );
  }
}

const mapStateProps = state => {
  const {user, token} = state.user;
  return {
    user,
    token,
  };
};

export default connect(mapStateProps, {logOut})(Step1Ingeniero);
