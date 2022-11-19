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

import PDFView from 'react-native-view-pdf';

import {sendReport} from '../../../modules/core/User/actions';
//COMPONENTS
import Header from '../../components/Header';
import Title from '../../components/Title';

/// COMPONENTS
import Loader from '../../components/Loader';

class Viewer extends Component {
  state = {
    showPassword: false,
    selectClient: [{key: '0', value: 0, label: 'Seleccione un Cliente'}],
    selectSupervisor: [{key: '0', value: 0, label: 'Seleccione un Supervisor'}],
  };

  componentDidMount() {}
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          backable
          goBack={() => this.props.navigation.goBack()}
          sendable
          sendReport={() =>
            this.props.sendReport({
              token: this.props.token,
              idReport: this.props.navigation.getParam('idReport'),
              callback: () => {
                this.props.navigation.navigate('Usuario');
              },
            })
          }
        />

        <View style={{flex: 1}}>
          <PDFView
            fadeInDuration={250.0}
            style={{flex: 1}}
            resource={`http://api.tekkoperu.com/${this.props.navigation.getParam(
              'idReport',
            )}.pdf`}
            resourceType={'url'}
            onLoad={() => console.log('PDF rendered from')}
            onError={error => console.log('Cannot render PDF', error)}
          />
        </View>
        <Loader isVisible={this.props.loading} />
      </SafeAreaView>
    );
  }
}
const mapStateProps = state => {
  const {user, token, loading} = state.user;
  return {
    user,
    token,
    loading,
  };
};
export default connect(mapStateProps, {sendReport})(Viewer);
