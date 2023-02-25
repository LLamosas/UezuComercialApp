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
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import {loginStyles, generalStyles} from '../../../modules/resources/styles';

import {generatePDF} from '../../../modules/core/User/actions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//COMPONENTS
import Header from '../../components/Header';
import Title from '../../components/Title';
import Loader from '../../components/Loader';

const imagePickerOptions = {
  mediaType: 'photo',
  maxWidth: 600,
  maxHeight: 600,
  includeBase64: true,
};

class Foto extends Component {
  state = {
    showPassword: false,
    arrPhotos: [],
    textInputs: [],
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
        console.log('Camera permission given');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  _takePhoto() {
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
  _selectPhoto() {
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
    launchImageLibrary(imagePickerOptions, imgPickerResponse);
  }

  componentDidMount() {
    this.requestCameraPermission();
  }
  renderHeader() {
    return (
      <>
        <View
          style={{
            width: '100%',
            marginTop: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() => this._takePhoto()}>
            <Text style={generalStyles.textColor}>Tomar Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._selectPhoto()}>
            <Text style={generalStyles.textColor}>Elegir Foto</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
  renderFooter() {
    return (
      <View
        style={{
          flex: 0,
          alignItems: 'center',
          width: '100%',
          marginTop: 40,
        }}>
        <TouchableOpacity
          style={[loginStyles.button, {marginBottom: 20}]}
          onPress={() => {
            this.props.generatePDF({
              token: this.props.token,
              idUser: this.props.user.id,
              codSofya: this.props.codSofya,
              local: this.props.local,
              idClienteSelect: this.props.idClienteSelect,
              direccion: this.props.direccion,
              idSupervisorSelect: this.props.idSupervisorSelect.value,
              ubicacion: this.props.ubicacion,
              fecha: this.props.fecha,
              horInicio: this.props.horInicio,
              horFin: this.props.horFin,
              idMarcaAir: this.props.idMarcaAir.value,
              idTipoAir: this.props.idTipoAir.value,
              capacidadAir: this.props.capacidadAir,
              energiaAir: this.props.energiaAir,
              refrigeranteAir: this.props.refrigeranteAir,
              idMarcaVen: this.props.idMarcaVen.value,
              idTipoVen: this.props.idTipoVen.value,
              capacidadVen: this.props.capacidadVen,
              energiaVen: this.props.energiaVen,
              idEquipoGen: this.props.idEquipoGen.value,
              modeloGen: this.props.modeloGen,
              serieGen: this.props.serieGen,
              idEquipoTwoGen: this.props.idEquipoTwoGen.value,
              modeloTwoGen: this.props.modeloTwoGen,
              serieTwoGen: this.props.serieTwoGen,
              observaciones: this.props.observaciones,
              recomendaciones: this.props.recomendaciones,
              compresor1: this.props.compresor1,
              compresor2: this.props.compresor2,
              compresor3: this.props.compresor3,
              ventiladorCon1: this.props.ventiladorCon1,
              ventiladorCon2: this.props.ventiladorCon2,
              ventiladorCon3: this.props.ventiladorCon3,
              ventilador1: this.props.ventilador1,
              ventilador2: this.props.ventilador2,
              ventilador3: this.props.ventilador3,
              amperaje1: this.props.amperaje1,
              amperaje2: this.props.amperaje2,
              amperaje3: this.props.amperaje3,
              altaInicial: this.props.altaInicial,
              altaFinal: this.props.altaFinal,
              bajaInicial: this.props.bajaInicial,
              bajaFinal: this.props.bajaFinal,
              Voltaje1: this.props.Voltaje1,
              Voltaje2: this.props.Voltaje2,
              Voltaje3: this.props.Voltaje3,
              temperatura: this.props.temperatura,
              manoMarca: this.props.manoMarca,
              manoModelo: this.props.manoModelo,
              manoSerie: this.props.manoSerie,
              pinzaMarca: this.props.pinzaMarca,
              pinzaModelo: this.props.pinzaModelo,
              pinzaSerie: this.props.pinzaSerie,
              termoMarca: this.props.termoMarca,
              termoModelo: this.props.termoModelo,
              termoSerie: this.props.termoSerie,
              arrPhotos: this.state.arrPhotos,
              textInputs: this.state.textInputs,
              nomCli: this.props.nomCli,
              dniCli: this.props.dniCli,
              cargoCli: this.props.cargoCli,
              callback: idReport => {
                this.props.navigation.navigate('Viewer', {idReport, from: 'T'});
              },
            });
          }}>
          <Text style={{color: 'white'}}>Generar PDF</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Header backable goBack={() => this.props.navigation.goBack()} />
          <Title title={'Galería de fotos'} />
          <FlatList
            style={{flex: 1, padding: 10}}
            ListHeaderComponent={() => this.renderHeader()}
            data={this.state.arrPhotos}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={{flex: 1, alignItems: 'center', margin: 5}}>
                  <Image
                    source={{uri: item.photo}}
                    style={{width: 150, height: 150}}
                  />
                  <TextInput
                    style={{
                      backgroundColor: '#ECECEC',
                      borderRadius: 5,
                      fontSize: 18,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      height: 80,
                      borderWidth: 3,
                      borderColor: '#B1B1B1',
                      width: 150,
                      marginTop: 10,
                    }}
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
        {this.renderFooter()}
        <Loader isVisible={this.props.loading} />
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
    idMarcaAir,
    idTipoAir,
    capacidadAir,
    energiaAir,
    refrigeranteAir,
    idMarcaVen,
    idTipoVen,
    capacidadVen,
    energiaVen,
    idEquipoGen,
    modeloGen,
    serieGen,
    idEquipoTwoGen,
    modeloTwoGen,
    serieTwoGen,
    observaciones,
    recomendaciones,
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
    manoMarca,
    manoModelo,
    manoSerie,
    pinzaMarca,
    pinzaModelo,
    pinzaSerie,
    termoMarca,
    termoModelo,
    termoSerie,
    local,
    loading,
    nomCli,
    dniCli,
    cargoCli,
  } = state.user;

  console.log('idClienteSelect', idClienteSelect);
  return {
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
    idMarcaAir,
    idTipoAir,
    capacidadAir,
    energiaAir,
    refrigeranteAir,
    idMarcaVen,
    idTipoVen,
    capacidadVen,
    energiaVen,
    idEquipoGen,
    modeloGen,
    serieGen,
    idEquipoTwoGen,
    modeloTwoGen,
    serieTwoGen,
    observaciones,
    recomendaciones,
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
    manoMarca,
    manoModelo,
    manoSerie,
    pinzaMarca,
    pinzaModelo,
    pinzaSerie,
    termoMarca,
    termoModelo,
    termoSerie,
    local,
    loading,
    nomCli,
    dniCli,
    cargoCli,
  };
};
export default connect(mapStateProps, {generatePDF})(Foto);
