import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {userStyles} from '../../modules/resources/styles';
import {close} from '../../modules/resources/images';

class Dropdown extends Component {
  state = {
    selectClient: null,
    dataFilter: this.props.data,
    filter: '',
    visibleModal: false,
  };

  filterClient = text => {
    let newData = this.props.data.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.label ? item.label.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({filter: text, dataFilter: newData});
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {label = 'Seleccionar Cliente', onSelect, selected} = this.props;
    const {visibleModal, filter, dataFilter, selectClient} = this.state;
    return (
      <>
        <TouchableOpacity
          style={[userStyles.textInput, {justifyContent: 'center'}]}
          onPress={() => this.setState({visibleModal: !visibleModal})}>
          <Text style={{justifyContent: 'center', alignItems: 'center'}}>
            {selected !== 0 && selectClient !== null
              ? selectClient.label
              : label}
          </Text>
        </TouchableOpacity>
        <Modal transparent={true} visible={visibleModal}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 20,
              top: 40,
              zIndex: 20,
              elevation: 20,
            }}
            onPress={() => this.setState({visibleModal: false})}>
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: 'white',
              }}
              source={close}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                width: '80%',
                backgroundColor: 'white',
                height: 400,
                borderRadius: 8,
              }}>
              <View style={{width: '100%', height: 40}}>
                <TextInput
                  onChangeText={text => this.filterClient(text)}
                  value={filter}
                  placeholder="Buscar Cliente"
                />
              </View>
              <View
                style={{
                  width: '100%',
                  borderTopColor: '#CCC',
                  borderTopWidth: 1,
                }}
              />
              <ScrollView>
                {dataFilter.map(item => (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({visibleModal: false, selectClient: item});
                      onSelect(item);
                    }}
                    style={{
                      width: '100%',
                      padding: 5,
                      borderBottomColor: '#CCC',
                      borderBottomWidth: 0.5,
                    }}>
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}

export default Dropdown;
