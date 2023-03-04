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
  pruebasStyles,
} from '../../../modules/resources/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {setInputUser} from '../../../modules/core/User/actions';
//COMPONENTS
import Header from '../../components/Header';
import Title from '../../components/Title';

////// UTIL
import {showAlert, isEmpty} from '../../../modules/resources/util';

class Pruebas extends Component {
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
            <Title title={'Parámetros de pruebas de funcionamiento'} />

            <View style={{width: '100%', marginTop: 10, alignItems: 'center'}}>
              <Text style={[generalStyles.textColor, generalStyles.title]}>
                Amperaje en Trabajo
              </Text>
            </View>

            <View style={{width: '80%', alignSelf: 'center', marginTop: 10}}>
              <Text style={generalStyles.textColor}>Compresor (A)</Text>

              <View style={pruebasStyles.conatiner}>
                <TextInput
                  style={{
                    width: '25%',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    padding: 3,
                  }}
                  value={this.props.compresor1}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'compresor1', value: text})
                  }
                />

                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.compresor2}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'compresor2', value: text})
                  }
                />

                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.compresor3}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'compresor3', value: text})
                  }
                />
              </View>
            </View>

            <View style={{width: '80%', alignSelf: 'center', marginTop: 10}}>
              <Text style={generalStyles.textColor}>
                Ventilador Condensadora (A)
              </Text>

              <View style={pruebasStyles.conatiner}>
                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.ventiladorCon1}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({
                      prop: 'ventiladorCon1',
                      value: text,
                    })
                  }
                />

                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.ventiladorCon2}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({
                      prop: 'ventiladorCon2',
                      value: text,
                    })
                  }
                />

                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.ventiladorCon3}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({
                      prop: 'ventiladorCon3',
                      value: text,
                    })
                  }
                />
              </View>
            </View>

            <View style={{width: '80%', alignSelf: 'center', marginTop: 10}}>
              <Text style={generalStyles.textColor}>
                Ventilador Evaporadora (A)
              </Text>

              <View style={pruebasStyles.conatiner}>
                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.ventilador1}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'ventilador1', value: text})
                  }
                />

                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.ventilador2}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'ventilador2', value: text})
                  }
                />

                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.ventilador3}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'ventilador3', value: text})
                  }
                />
              </View>
            </View>

            <View style={{width: '80%', alignSelf: 'center', marginTop: 10}}>
              <Text style={generalStyles.textColor}>Amperaje Total (A)</Text>

              <View style={pruebasStyles.conatiner}>
                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.amperaje1}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'amperaje1', value: text})
                  }
                />

                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.amperaje2}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'amperaje2', value: text})
                  }
                />

                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.amperaje3}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'amperaje3', value: text})
                  }
                />
              </View>
            </View>

            <View style={{width: '100%', marginTop: 10, alignItems: 'center'}}>
              <Text style={[generalStyles.textColor, generalStyles.title]}>
                Presión
              </Text>
            </View>

            <View style={{width: '80%', marginTop: 10, marginLeft: '10%'}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '40%'}}>
                  <Text style={generalStyles.textColor}>
                    Alta Inicial (PSI)
                  </Text>
                  <View style={pruebasStyles.miniContainer}>
                    <TextInput
                      style={{
                        width: '70%',
                        padding: 3,
                        backgroundColor: 'white',
                        textAlign: 'center',
                      }}
                      value={this.props.altaInicial}
                      keyboardType={'numeric'}
                      onChangeText={text =>
                        this.props.setInputUser({
                          prop: 'altaInicial',
                          value: text,
                        })
                      }
                    />
                  </View>
                </View>

                <View style={{width: '40%'}}>
                  <Text style={generalStyles.textColor}>
                    Baja Inicial (PSI)
                  </Text>
                  <View style={pruebasStyles.miniContainer}>
                    <TextInput
                      style={{
                        width: '70%',
                        padding: 3,
                        backgroundColor: 'white',
                        textAlign: 'center',
                      }}
                      value={this.props.bajaInicial}
                      keyboardType={'numeric'}
                      onChangeText={text =>
                        this.props.setInputUser({
                          prop: 'bajaInicial',
                          value: text,
                        })
                      }
                    />
                  </View>
                </View>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '40%'}}>
                  <Text style={generalStyles.textColor}>Alta Final (PSI)</Text>
                  <View style={pruebasStyles.miniContainer}>
                    <TextInput
                      style={{
                        width: '80%',
                        padding: 3,
                        backgroundColor: 'white',
                        textAlign: 'center',
                      }}
                      value={this.props.altaFinal}
                      keyboardType={'numeric'}
                      onChangeText={text =>
                        this.props.setInputUser({
                          prop: 'altaFinal',
                          value: text,
                        })
                      }
                    />
                  </View>
                </View>

                <View style={{width: '40%'}}>
                  <Text style={generalStyles.textColor}>Baja Final (PSI)</Text>
                  <View style={pruebasStyles.miniContainer}>
                    <TextInput
                      style={{
                        width: '80%',
                        padding: 3,
                        backgroundColor: 'white',
                        textAlign: 'center',
                      }}
                      value={this.props.bajaFinal}
                      keyboardType={'numeric'}
                      onChangeText={text =>
                        this.props.setInputUser({
                          prop: 'bajaFinal',
                          value: text,
                        })
                      }
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={{width: '80%', alignSelf: 'center', marginTop: 10}}>
              <Text style={generalStyles.textColor}> Voltaje (V)</Text>

              <View style={pruebasStyles.conatiner}>
                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.Voltaje1}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'Voltaje1', value: text})
                  }
                />

                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.Voltaje2}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'Voltaje2', value: text})
                  }
                />

                <TextInput
                  style={{
                    width: '25%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.Voltaje3}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'Voltaje3', value: text})
                  }
                />
              </View>
            </View>

            <View style={pruebasStyles.airView}>
              <View
                style={{
                  width: '70%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 12}}>
                  Temperatura de descarga de aire (Cº)
                </Text>
              </View>

              <View
                style={{
                  width: '30%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                }}>
                <TextInput
                  style={{
                    width: '90%',
                    padding: 3,
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                  value={this.props.temperatura}
                  keyboardType={'numeric'}
                  onChangeText={text =>
                    this.props.setInputUser({prop: 'temperatura', value: text})
                  }
                />
              </View>
            </View>
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
                this.props.navigation.push('Medicion');
                // if (
                //     this.props.compresor1 ==0 ||
                //     this.props.compresor2 ==0 ||
                //     this.props.compresor3 ==0 ||
                //     this.props.ventiladorCon1 ==0 ||
                //     this.props.ventiladorCon2 ==0 ||
                //     this.props.ventiladorCon3 ==0 ||
                //     this.props.ventilador1 ==0 ||
                //     this.props.ventilador2 ==0 ||
                //     this.props.ventilador3 ==0 ||
                //     this.props.amperaje1 ==0 ||
                //     this.props.amperaje2 ==0 ||
                //     this.props.amperaje3 ==0 ||
                //     this.props.altaInicial ==0 ||
                //     this.props.altaFinal ==0 ||
                //     this.props.bajaInicial ==0 ||
                //     this.props.bajaFinal ==0 ||
                //     this.props.Voltaje1 ==0 ||
                //     this.props.Voltaje2 ==0 ||
                //     this.props.Voltaje3 ==0 ||
                //     this.props.temperatura ==0
                // ) {
                //     showAlert({ msj: 'Es necesario seleccionar todos los campos', type: 2 })

                // } else {
                //     this.props.navigation.navigate('Medicion')
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
    compresor1,
    compresor2,
    compresor3,
    ventiladorCon1,
    ventiladorCon2,
    ventiladorCon3,
    ventilador1,
    ventilador2,
    ventilador3,
    amperaje1,
    amperaje2,
    amperaje3,
    altaInicial,
    altaFinal,
    bajaInicial,
    bajaFinal,
    Voltaje1,
    Voltaje2,
    Voltaje3,
    temperatura,
  } = state.user;
  return {
    user,
    compresor1,
    compresor2,
    compresor3,
    ventiladorCon1,
    ventiladorCon2,
    ventiladorCon3,
    ventilador1,
    ventilador2,
    ventilador3,
    amperaje1,
    amperaje2,
    amperaje3,
    altaInicial,
    altaFinal,
    bajaInicial,
    bajaFinal,
    Voltaje1,
    Voltaje2,
    Voltaje3,
    temperatura,
  };
};
export default connect(mapStateProps, {setInputUser})(Pruebas);
