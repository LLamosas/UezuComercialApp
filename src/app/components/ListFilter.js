import React, {PureComponent} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

class ListFilter extends PureComponent {
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
            width: 300,
            height: 500,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <FlatList
            data={this.props.data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <Text>Texto</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default ListFilter;
