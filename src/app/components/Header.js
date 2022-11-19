import React, {Component} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {logo_white, back, logout, send} from '../../modules/resources/images';
import {headerStyles, generalStyles} from '../../modules/resources/styles';

class Header extends Component {
  render() {
    return (
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
            <TouchableOpacity onPress={() => this.props.sendReport()}>
              <Image
                source={send}
                style={[generalStyles.icon, headerStyles.rightIcon]}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

export default Header;
