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

import {
  userStyles,
  loginStyles,
  generalStyles,
} from '../../../../../modules/resources/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import SelectInput from 'react-native-select-input-ios';
import DatePicker from 'react-native-date-picker';

import {logOut} from '../../../../../modules/core/User/actions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//COMPONENTS
import Header from '../../../../components/Header';
import Title from '../../../../components/Title';

const imagePickerOptions = {
  mediaType: 'photo',
  maxWidth: 600,
  maxHeight: 600,
  includeBase64: true,
};

class Step3Calidad extends Component {
  state = {
    responsable1: '',
    responsable2: '',
    responsable3: '',
    responsable4: '',
    telefono1: '',
    telefono2: '',
    telefono3: '',
    telefono4: '',
    califica1: '',
    califica2: '',
    califica3: '',
    califica4: '',
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
      responsable1,
      responsable2,
      responsable3,
      responsable4,
      telefono1,
      telefono2,
      telefono3,
      telefono4,
      califica1,
      califica2,
      califica3,
      califica4,
    } = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView>
          <Header backable goBack={() => this.props.navigation.goBack()} />
          <View style={{flex: 1}}>
            <Title title={'Datos del contratista'} />
            <Title title={'Contrata ductos 1'} />
            <Text style={generalStyles.textTitle}>Responsable</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el responsable'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={responsable1}
              onChangeText={text => this.setttingParam('responsable1', text)}
            />

            <Text style={generalStyles.textTitle}>Tel??fono</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el telefono'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={telefono1}
              onChangeText={text => this.setttingParam('telefono1', text)}
            />
            <Text style={generalStyles.textTitle}>
              Califica su trabajo del 1 al 5
            </Text>
            <TextInput
              style={[userStyles.textInput, {marginBottom: 20}]}
              placeholder={'Escriba su calificaci??n'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={califica1}
              onChangeText={text => this.setttingParam('califica1', text)}
            />
            <Title title={'Contrata ductos 2'} />
            <Text style={generalStyles.textTitle}>Responsable</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el responsable'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={responsable2}
              onChangeText={text => this.setttingParam('responsable2', text)}
            />

            <Text style={generalStyles.textTitle}>Tel??fono</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el telefono'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={telefono2}
              onChangeText={text => this.setttingParam('telefono2', text)}
            />
            <Text style={generalStyles.textTitle}>
              Califica su trabajo del 1 al 5
            </Text>
            <TextInput
              style={[userStyles.textInput, {marginBottom: 20}]}
              placeholder={'Escriba su calificaci??n'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={califica2}
              onChangeText={text => this.setttingParam('califica2', text)}
            />

            <Title title={'Contrata HVAC 1'} />
            <Text style={generalStyles.textTitle}>Responsable</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el responsable'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={responsable3}
              onChangeText={text => this.setttingParam('responsable3', text)}
            />

            <Text style={generalStyles.textTitle}>Tel??fono</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el telefono'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={telefono3}
              onChangeText={text => this.setttingParam('telefono3', text)}
            />
            <Text style={generalStyles.textTitle}>
              Califica su trabajo del 1 al 5
            </Text>
            <TextInput
              style={[userStyles.textInput, {marginBottom: 20}]}
              placeholder={'Escriba su calificaci??n'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={califica3}
              onChangeText={text => this.setttingParam('califica3', text)}
            />

            <Title title={'Contrata HVAC 2'} />
            <Text style={generalStyles.textTitle}>Responsable</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el responsable'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={responsable4}
              onChangeText={text => this.setttingParam('responsable4', text)}
            />

            <Text style={generalStyles.textTitle}>Tel??fono</Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba el telefono'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={telefono4}
              onChangeText={text => this.setttingParam('telefono4', text)}
            />
            <Text style={generalStyles.textTitle}>
              Califica su trabajo del 1 al 5
            </Text>
            <TextInput
              style={userStyles.textInput}
              placeholder={'Escriba su calificaci??n'}
              placeholderTextColor="rgb(113, 109, 109)"
              value={califica4}
              onChangeText={text => this.setttingParam('califica4', text)}
            />
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
                const beforeData = this.props.route.params.beforeData;
                const allData = {...beforeData, ...this.state};
                console.log('allData', allData);
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
  const {user, token} = state.user;
  return {
    user,
    token,
  };
};

export default connect(mapStateProps, {logOut})(Step3Calidad);
