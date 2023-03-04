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
  ActivityIndicator,
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
import DatePicker from 'react-native-date-picker';

import {
  setInputUser,
  getInitialDataApp,
  logOut,
} from '../../../modules/core/User/actions';
import moment from 'moment';
//COMPONENTS
import Header from '../../components/Header';
import Title from '../../components/Title';
import DropDown from '../../components/DropDown';
import ListFilter from '../../components/ListFilter';
import SelectInput from '../../components/Select';

////// UTIL
import {showAlert, isEmpty} from '../../../modules/resources/util';

class Usuario extends Component {
  state = {
    showPassword: false,
    selectClient: [],
    selectSupervisor: [{key: '0', value: 0, label: 'Seleccione un Supervisor'}],
    dataFilter: [],
    filter: '',
    openDate1: false,
    openDate2: false,
    openDate3: false,
  };

  componentDidMount() {
    this.props.getInitialDataApp({
      token: this.props.token,
      callback: () => {
        let clients = [];
        if (this.props.clients.length > 0) {
          this.props.clients.map(c =>
            clients.push({key: `${c.id}`, value: c.id, label: c.name}),
          );
          this.setState({selectClient: clients, dataFilter: clients});
        }

        let supervisors = [
          {key: '0', value: 0, label: 'Seleccione un Supervisor'},
        ];
        if (this.props.supervisors.length > 0) {
          this.props.supervisors.map(s =>
            supervisors.push({
              key: `${s.id}`,
              value: s.id,
              label: `${s.alias}`,
            }),
          );
          this.setState({selectSupervisor: supervisors});
        }
      },
    });
  }
  render() {
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
          />
          <View style={{flex: 1}}>
            <Title title={'Datos del Usuario'} />
            <Text style={generalStyles.textTitle}>Codigo Sofya</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Cod. Sofya'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.codSofya}
              onChangeText={text =>
                this.props.setInputUser({prop: 'codSofya', value: text})
              }
            />

            <Text style={generalStyles.textTitle}>Cliente</Text>
            {this.state.selectClient.length > 0 ? (
              <DropDown
                data={this.state.selectClient}
                onSelect={item =>
                  this.props.setInputUser({
                    prop: 'idClienteSelect',
                    value: item.value,
                  })
                }
                selected={this.props.idClienteSelect}
              />
            ) : (
              <ActivityIndicator />
            )}
            <Text style={generalStyles.textTitle}>Nombre Cliente</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Nombre'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.nomCli}
              onChangeText={text =>
                this.props.setInputUser({prop: 'nomCli', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>DNI Cliente</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'DNI cliente'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.dniCli}
              onChangeText={text =>
                this.props.setInputUser({prop: 'dniCli', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Cargo Cliente</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Cargo cliente'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.cargoCli}
              onChangeText={text =>
                this.props.setInputUser({prop: 'cargoCli', value: text})
              }
            />

            <Text style={generalStyles.textTitle}>Nombre Local</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'local'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.local}
              onChangeText={text =>
                this.props.setInputUser({prop: 'local', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Dirección</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Dirección'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.direccion}
              onChangeText={text =>
                this.props.setInputUser({prop: 'direccion', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Supervisor</Text>
            <SelectInput
              style={[userStyles.textInput, {paddingLeft: 0}]}
              value={this.props.idSupervisorSelect.label}
              options={this.state.selectSupervisor}
              onChange={v => {
                this.props.setInputUser({prop: 'idSupervisorSelect', value: v});
              }}
            />
            <Text style={generalStyles.textTitle}>Ubicación del equipo</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Ubicación Equipo'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={this.props.ubicacion}
              onChangeText={text =>
                this.props.setInputUser({prop: 'ubicacion', value: text})
              }
            />
            <Text style={generalStyles.textTitle}>Fecha de Supervisión</Text>
            <TouchableOpacity
              onPress={() => this.setState({openDate1: true})}
              style={[userStyles.textInput, {justifyContent: 'center'}]}>
              <Text>{this.props.fecha || 'Ingresar Fecha'}</Text>
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
                this.props.setInputUser({prop: 'fecha', value: newDate});
                this.setState({openDate1: false});
              }}
              onCancel={() => {
                this.setState({openDate1: false});
              }}
            />

            <Text style={generalStyles.textTitle}>Hora de Inicio</Text>
            <TouchableOpacity
              onPress={() => this.setState({openDate2: true})}
              style={[userStyles.textInput, {justifyContent: 'center'}]}>
              <Text>{this.props.horInicio || 'Ingresar Hora Inicio'}</Text>
            </TouchableOpacity>
            <DatePicker
              date={new Date()}
              open={this.state.openDate2}
              locale="es"
              mode="time"
              modal
              title="Seleccionar Hora de Inicio"
              onConfirm={date => {
                const newDate = moment(date).format('HH:mm');
                this.props.setInputUser({prop: 'horInicio', value: newDate});
                this.setState({openDate2: false});
              }}
              onCancel={() => {
                this.setState({openDate2: false});
              }}
            />
            <Text style={generalStyles.textTitle}>Hora de Fin</Text>
            <TouchableOpacity
              onPress={() => this.setState({openDate3: true})}
              style={[userStyles.textInput, {justifyContent: 'center'}]}>
              <Text>{this.props.horFin || 'Ingresar Hora Inicio'}</Text>
            </TouchableOpacity>
            <DatePicker
              date={new Date()}
              open={this.state.openDate3}
              locale="es"
              mode="time"
              modal
              title="Seleccionar Hora de Inicio"
              onConfirm={date => {
                const newDate = moment(date).format('HH:mm');
                this.props.setInputUser({prop: 'horFin', value: newDate});
                this.setState({openDate3: false});
              }}
              onCancel={() => {
                this.setState({openDate3: false});
              }}
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
                this.props.navigation.push('Equipo');
                // if(isEmpty (this.props.codSofya) || isEmpty (this.props.ubicacion) ||isEmpty (this.props.fecha) ||isEmpty (this.props.horInicio)  ||isEmpty (this.props.horFin) || this.props.idClienteSelect == 0 ||  this.props.idSupervisorSelect == 0 ){
                //     showAlert({msj:'Es necesario seleccionar todos los campos',type:2})
                // }else{

                // }
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
  const {
    user,
    token,
    codSofya,
    idClienteSelect,
    direccion,
    idSupervisorSelect,
    ubicacion,
    fecha,
    horInicio,
    horFin,
    clients,
    supervisors,
    local,
    nomCli,
    dniCli,
    cargoCli,
  } = state.user;
  return {
    user,
    codSofya,
    token,
    idClienteSelect,
    direccion,
    idSupervisorSelect,
    ubicacion,
    fecha,
    horInicio,
    horFin,
    clients,
    supervisors,
    local,
    nomCli,
    dniCli,
    cargoCli,
  };
};
export default connect(mapStateProps, {
  setInputUser,
  getInitialDataApp,
  logOut,
})(Usuario);
