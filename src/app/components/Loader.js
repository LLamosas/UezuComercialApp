import React, {PureComponent} from 'react';
import {View, ActivityIndicator} from 'react-native';

class Loader extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.isVisible) {
      return null;
    }
    return (
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: '#00000060',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: 100,
            height: 100,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
  }
}

export default Loader;
