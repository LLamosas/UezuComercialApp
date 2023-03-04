import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View} from 'react-native';

import PDFView from 'react-native-view-pdf';

import {sendReportCalidad} from '../../../../../modules/core/User/actions';
//COMPONENTS
import Header from '../../../../components/Header';
import Loader from '../../../../components/Loader';
import {base} from '../../../../../modules/resources/strings';

class Viewer extends Component {
  state = {
    showPassword: false,
    selectClient: [{key: '0', value: 0, label: 'Seleccione un Cliente'}],
    selectSupervisor: [{key: '0', value: 0, label: 'Seleccione un Supervisor'}],
  };

  componentDidMount() {}
  render() {
    let folder = 'Tecnico';
    const type = this.props.route.params.from;
    switch (type) {
      case 'T':
        folder = 'Tecnico';
        break;
      case 'C':
        folder = 'Calidad';
        break;
      case 'I':
        folder = 'Ingeniero';
        break;
      default:
        folder = 'Tecnico';
        break;
    }
    const pdfLink = `${base}${folder}/${this.props.route.params.idReport}.pdf`;

    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          backable
          goBack={() => this.props.navigation.goBack()}
          sendable
          pdfLink={pdfLink}
          sendReport={correo =>
            this.props.sendReportCalidad({
              token: this.props.token,
              idReport: this.props.route.params.idReport,
              correo,
              callback: () => null,
            })
          }
          goHome={() => this.props.navigation.replace('step1Calidad')}
        />

        <View style={{flex: 1}}>
          <PDFView
            fadeInDuration={250.0}
            style={{flex: 1}}
            resource={`http://api.tekkoperu.com/${folder}/${this.props.route.params.idReport}.pdf`}
            //resource={pdfLink}
            resourceType={'url'}
            onLoad={() => null}
            onError={error => null}
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
export default connect(mapStateProps, {sendReportCalidad})(Viewer);
