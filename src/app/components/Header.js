import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Modal,
  Text,
  Platform,
  Linking,
} from 'react-native';
import {
  logo_white,
  back,
  logout,
  share,
  close,
} from '../../modules/resources/images';
import {colors} from '../../modules/resources/color';
import {
  headerStyles,
  generalStyles,
  loginStyles,
} from '../../modules/resources/styles';

import Input from './Input';
class Header extends Component {
  state = {
    showOptions: false,
    input: '',
    option: 1,
    caption: '',
    errorInput: false,
  };

  sendWhatsApp(phone) {
    if (phone.length !== 9) {
      this.setState({
        caption: 'Ingrese un número de telefono correcto',
        errorInput: true,
      });
      return;
    }
    let msg = `Hola te enviamos! el reporte para que lo pueda viasualizar o descargar ${this.props.pdfLink}`;
    let phoneWithCountryCode = `51${phone}`;
    let mobile =
      Platform.OS === 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;

    let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened', data);
        this.setState({showOptions: false});
      })
      .catch(() => {
        console.log('no tienes whatsaoo');
      });
  }

  onPressSend(text) {
    const {option} = this.state;
    if (option === 1) {
      this.sendWhatsApp(text);
    } else if (option === 2) {
      const emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (emailRegex.test(text)) {
        this.props.sendReport(text);
        this.setState({showOptions: false});
      } else {
        this.setState({
          caption: 'Ingrese un correo correcto',
          errorInput: true,
        });
      }
    } else {
      this.props.sendReport(null);
      this.setState({showOptions: false});
    }
  }

  showInputs() {
    const {input, option, caption, errorInput} = this.state;
    return (
      <View style={{padding: 8}}>
        <View style={{marginTop: 5, width: '100%'}}>
          {option === 3 ? (
            <Text>
              Se enviará a los correos configurados previamente en el servidor
            </Text>
          ) : (
            <Input
              label={
                option === 1 ? 'Ingrese número telefónico' : 'Ingrese correo'
              }
              prefix={option === 1 ? '+51' : null}
              value={input}
              keyboardType={option === 1 ? 'number-pad' : 'default'}
              onChangeText={text => this.setState({input: text})}
              caption={caption}
              type={errorInput ? 'error' : 'default'}
              maxLength={option === 1 ? 9 : undefined}
              autoCapitalize="none"
            />
          )}
        </View>
        <View style={{marginTop: 10, width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => this.onPressSend(input)}
            style={loginStyles.button}>
            <Text style={{color: 'white'}}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  onPressShowOptions() {
    const {option, showOptions} = this.state;
    return (
      <Modal visible={showOptions} animationType="fade" transparent>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,.4)',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '90%',
              minHeight: 200,
              backgroundColor: 'white',
              borderRadius: 16,
            }}>
            <TouchableOpacity
              style={{position: 'absolute', right: 8, top: 8}}
              onPress={() => this.setState({showOptions: false})}>
              <Image
                source={close}
                style={{
                  width: 16,
                  height: 16,
                  resizeMode: 'contain',
                  tintColor: colors.bg_blue,
                }}
              />
            </TouchableOpacity>
            <View style={{width: '100%', padding: 8, marginTop: 20}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      option: 1,
                      caption: '',
                      errorInput: false,
                      input: '',
                    })
                  }
                  style={{
                    width: 80,
                    borderBottomColor: colors.bg_blue,
                    borderBottomWidth: option === 1 ? 4 : 0,
                    justifyContent: 'center',
                  }}>
                  <Text>Whatsapp</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      option: 2,
                      caption: '',
                      errorInput: false,
                      input: '',
                    })
                  }
                  style={{
                    width: 60,
                    borderBottomColor: colors.bg_blue,
                    borderBottomWidth: option === 2 ? 4 : 0,
                    justifyContent: 'center',
                  }}>
                  <Text>Correo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      option: 3,
                      caption: '',
                      errorInput: false,
                      input: '',
                    })
                  }
                  style={{
                    width: '33%',
                    borderBottomColor: colors.bg_blue,
                    borderBottomWidth: option === 3 ? 4 : 0,
                    justifyContent: 'center',
                  }}>
                  <Text>Correos Configurados</Text>
                </TouchableOpacity>
              </View>
            </View>
            {this.showInputs()}
          </View>
        </View>
      </Modal>
    );
  }
  render() {
    return (
      <>
        {this.onPressShowOptions()}
        <View style={headerStyles.container}>
          <View style={headerStyles.iconView}>
            {this.props.backable ? (
              <TouchableOpacity onPress={() => this.props.goBack()}>
                <Image
                  source={back}
                  style={[generalStyles.icon, headerStyles.lefIcon]}
                />
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={headerStyles.centerView}>
            <Image source={logo_white} style={headerStyles.centerIcon} />
          </View>
          <View style={headerStyles.iconView}>
            {this.props.exitable ? (
              <TouchableOpacity onPress={() => this.props.getOut()}>
                <Image
                  source={logout}
                  style={[generalStyles.icon, headerStyles.rightIcon]}
                />
              </TouchableOpacity>
            ) : this.props.sendable ? (
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    showOptions: !this.state.showOptions,
                  })
                }>
                <Image
                  source={share}
                  style={[generalStyles.icon, headerStyles.rightIcon]}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </>
    );
  }
}

export default Header;
