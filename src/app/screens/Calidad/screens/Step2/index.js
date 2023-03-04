import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  loginStyles,
  generalStyles,
  userStyles,
} from '../../../../../modules/resources/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {logOut} from '../../../../../modules/core/User/actions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//COMPONENTS
import Header from '../../../../components/Header';
import Title from '../../../../components/Title';

import {
  camera,
  gallery,
  trash,
  close,
} from '../../../../../modules/resources/images';
import {styles} from './styles';

const imagePickerOptions = {
  mediaType: 'photo',
  maxWidth: 600,
  maxHeight: 600,
  includeBase64: true,
  selectionLimit: 0,
};

class Step2Calidad extends Component {
  state = {
    planoProyecto: null,
    planoAvance: null,
    textCausa: '',
    causas: [],
    textObservacion: '',
    pendientes: '',
    conclusiones: '',
    observaciones: [],
    arrPhotos: [],
    textInputs: [],
  };

  takePhotoList() {
    const imgPickerResponse = response => {
      if (!response.didCancel && !response.error) {
        let arrPhotos = this.state.arrPhotos;
        arrPhotos.push({
          photo: response.assets[0].uri,
          photoData: response.assets[0].base64,
        });

        this.setState({arrPhotos});
      }
    };
    launchCamera(imagePickerOptions, imgPickerResponse);
  }
  selectPhotoList() {
    const imgPickerResponse = response => {
      if (!response.didCancel && !response.error) {
        let arrPhotos = this.state.arrPhotos;

        response.assets.forEach(asset => {
          arrPhotos.push({
            photo: asset.uri,
            photoData: asset.base64,
          });
        });

        this.setState({arrPhotos});
      }
    };
    launchImageLibrary(imagePickerOptions, imgPickerResponse);
  }

  _takePhoto(prop) {
    const imgPickerResponse = response => {
      if (!response.didCancel && !response.error) {
        this.setState({
          [prop]: {
            base64: response.assets[0].base64,
            uri: response.assets[0].uri,
          },
        });
      }
    };
    launchCamera(imagePickerOptions, imgPickerResponse);
  }
  _selectPhoto(prop) {
    const imgPickerResponse = response => {
      if (!response.didCancel && !response.error) {
        this.setState({
          [prop]: {
            base64: response.assets[0].base64,
            uri: response.assets[0].uri,
          },
        });
      }
    };
    launchImageLibrary(imagePickerOptions, imgPickerResponse);
  }

  componentDidMount() {}

  setttingParam(prop, value) {
    this.setState({[prop]: value});
  }

  renderHeader() {
    return (
      <>
        <View style={styles.container}>
          <Text>Imágenes del proyecto</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity
              style={styles.mrgnIconCamera}
              onPress={() => this.takePhotoList()}>
              <Image source={camera} style={styles.iconCamera} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.selectPhotoList()}>
              <Image source={gallery} style={styles.iconCamera} />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  render() {
    const {
      planoProyecto,
      planoAvance,
      textCausa,
      causas,
      textObservacion,
      observaciones,
      arrPhotos,
      pendientes,
      conclusiones,
    } = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <Header backable goBack={() => this.props.navigation.goBack()} />
          <View style={styles.mainContainer}>
            <Title title={'Datos datos adicionales'} />
            <View style={styles.container}>
              <Text>Imagen de plano proyecto</Text>
              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.mrgnIconCamera}
                  onPress={() => this._takePhoto('planoProyecto')}>
                  <Image source={camera} style={styles.iconCamera} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this._selectPhoto('planoProyecto')}>
                  <Image source={gallery} style={styles.iconCamera} />
                </TouchableOpacity>
              </View>
            </View>

            {planoProyecto ? (
              <View style={styles.image}>
                <TouchableOpacity
                  style={{
                    right: 40,
                    position: 'absolute',
                    zIndex: 10,
                    elevation: 10,
                  }}
                  onPress={() => this.setState({planoProyecto: ''})}>
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
                  source={{uri: planoProyecto ? planoProyecto.uri : null}}
                  style={planoProyecto ? styles.image : null}
                />
              </View>
            ) : null}

            <View style={styles.container}>
              <Text>Imagen de plano de avance proyecto</Text>
              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.mrgnIconCamera}
                  onPress={() => this._takePhoto('planoAvance')}>
                  <Image source={camera} style={styles.iconCamera} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this._selectPhoto('planoAvance')}>
                  <Image source={gallery} style={styles.iconCamera} />
                </TouchableOpacity>
              </View>
            </View>

            {planoAvance ? (
              <View style={styles.image}>
                <TouchableOpacity
                  style={{
                    right: 40,
                    position: 'absolute',
                    zIndex: 10,
                    elevation: 10,
                  }}
                  onPress={() => this.setState({planoAvance: ''})}>
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
                  source={{uri: planoAvance ? planoAvance.uri : null}}
                  style={planoAvance ? styles.image : null}
                />
              </View>
            ) : null}

            <Text style={generalStyles.textTitle}>
              Causas de atraso en caso diga "Sí"
            </Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba la causa'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={textCausa}
              onChangeText={text => this.setttingParam('textCausa', text)}
              returnKeyLabel="Confirmar"
              returnKeyType="done"
              onSubmitEditing={() => {
                if (textCausa.length === 0) {
                  return;
                }
                let newCausas = causas;
                newCausas.push(textCausa);
                this.setState({textCausa: '', causas: newCausas});
              }}
            />

            {causas.map((item, index) => (
              <View style={styles.container}>
                <Text>{`${index + 1}. ${item}`}</Text>
                <TouchableOpacity
                  onPress={() => {
                    let newCausas = causas;
                    newCausas = newCausas.filter(
                      (_, position) => position !== index,
                    );
                    this.setState({causas: newCausas});
                  }}>
                  <Image source={trash} style={styles.iconCamera} />
                </TouchableOpacity>
              </View>
            ))}

            <Text style={generalStyles.textTitle}>Observaciones</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba su observación'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={textObservacion}
              onChangeText={text => this.setttingParam('textObservacion', text)}
              returnKeyLabel="Confirmar"
              returnKeyType="done"
              onSubmitEditing={() => {
                if (textObservacion.length === 0) {
                  return;
                }
                let newObseervaciones = observaciones;
                newObseervaciones.push(textObservacion);
                this.setState({
                  textObservacion: '',
                  observaciones: newObseervaciones,
                });
              }}
            />

            {observaciones.map((item, index) => (
              <View style={styles.container}>
                <Text>{`${index + 1}. ${item}`}</Text>
                <TouchableOpacity
                  onPress={() => {
                    let newObseervaciones = observaciones;
                    newObseervaciones = newObseervaciones.filter(
                      (_, position) => position !== index,
                    );
                    this.setState({observaciones: newObseervaciones});
                  }}>
                  <Image source={trash} style={styles.iconCamera} />
                </TouchableOpacity>
              </View>
            ))}

            <Text style={generalStyles.textTitle}>
              Pendientes y restricciones por obra Civil
            </Text>
            <TextInput
              style={[userStyles.textInput, userStyles.textInputArea]}
              placeholder={'Ingresar texto aquí'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={pendientes}
              multiline
              onChangeText={text => this.setttingParam('pendientes', text)}
            />
            <Text style={generalStyles.textTitle}>Conclusiones</Text>
            <TextInput
              style={[userStyles.textInput, userStyles.textInputArea]}
              placeholder={'Ingresar texto aquí'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={conclusiones}
              multiline
              onChangeText={text => this.setttingParam('conclusiones', text)}
            />

            <FlatList
              style={{flex: 0, padding: 10}}
              ListHeaderComponent={() => this.renderHeader()}
              data={arrPhotos}
              numColumns={2}
              renderItem={({item, index}) => {
                return (
                  <View style={{alignItems: 'center', margin: 5, width: '45%'}}>
                    <TouchableOpacity
                      style={{
                        right: -8,
                        top: -5,
                        position: 'absolute',
                        zIndex: 10,
                        elevation: 10,
                      }}
                      onPress={() => {
                        let newArrPhotos = this.state.arrPhotos;
                        newArrPhotos = newArrPhotos.filter(
                          (_, position) => index !== position,
                        );
                        this.setState({arrPhotos: newArrPhotos});
                      }}>
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
                      source={{uri: item.photo}}
                      style={{width: '100%', height: 150, marginTop: 10}}
                    />
                    <TextInput
                      style={styles.textInputFoto}
                      multiline={true}
                      onChangeText={text => {
                        let {textInputs} = this.state;
                        textInputs[index] = text;
                        this.setState({textInputs});
                      }}
                      value={this.state.textInputs[index]}
                    />
                  </View>
                );
              }}
            />
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={loginStyles.button}
              onPress={() => {
                const data = this.props.route.params.beforeData;
                const beforeData = {...data, ...this.state};
                this.props.navigation.push('step3Calidad', {
                  beforeData,
                });
              }}>
              <Text style={styles.textBtn}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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

export default connect(mapStateProps, {logOut})(Step2Calidad);
