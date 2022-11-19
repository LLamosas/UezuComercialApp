import {
  ActionSheetIOS,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  Image,
} from 'react-native';
import {getStyles} from './Select.styles';
import {arrowDown} from '../../../modules/resources/images';
import React, {useState} from 'react';

const Select = ({
  label = '',
  caption,
  disabled = false,
  style,
  defaultValue = 'Por favor seleccione...',
  type = 'default',
  options,
  onChange,
  value,
  testID = 'select-control',
  accessibilityLabel = 'select-control',
}) => {
  const [visible, setVisible] = useState(false);

  const styles = getStyles();
  const inputHolderStyle = [
    styles['input__holder__' + type],
    disabled ? styles.input__holder__disabled : null,
  ];

  //Not reachable since ActionSheetIOS doesn't have mock support
  /* istanbul ignore next */
  const onOptionSelected = index => {
    if (options[index]) {
      onChange(options[index]);
    }
    setVisible(false);
  };

  //Not reachable since ActionSheetIOS doesn't have mock support
  /* istanbul ignore next */
  const displayOptions = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: [...options.map(o => o.label), 'Cancelar'],
          cancelButtonIndex: options.length,
        },
        onOptionSelected,
      );
    } else {
      setVisible(true);
    }
  };
  /* istanbul ignore next */
  return (
    <View style={style}>
      {label !== '' ? (
        <Text style={['input__label__' + type]}>{label}</Text>
      ) : null}
      <TouchableOpacity
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        disabled={disabled}
        onPress={displayOptions}
        style={inputHolderStyle}>
        <View>
          <Text
            style={[
              styles.input,
              value ? null : styles.input__label__defaultValue,
            ]}>
            {value || defaultValue}
          </Text>
        </View>
        <View>
          <Image
            source={arrowDown}
            style={styles.input__icon}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>

      <Text style={['input__caption__' + type]}>{caption}</Text>
      {Platform.select({
        ios: null,
        android: (
          <Modal animationType="fade" visible={visible} transparent>
            <TouchableWithoutFeedback onPress={() => setVisible(false)}>
              <View style={[StyleSheet.absoluteFill, styles.options__modal]}>
                <TouchableWithoutFeedback>
                  <View style={styles.options__container}>
                    <FlatList
                      data={options}
                      keyExtractor={item => `${item.value}`}
                      ItemSeparatorComponent={() => (
                        <View style={styles.menuItem__separator} />
                      )}
                      renderItem={({item, index}) => (
                        <TouchableNativeFeedback
                          background={TouchableNativeFeedback.SelectableBackground()}
                          onPress={() => onOptionSelected(index)}
                          accessibilityLabel={item.label}>
                          <View style={styles.menuItem__container}>
                            <Text>{item.label}</Text>
                          </View>
                        </TouchableNativeFeedback>
                      )}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        ),
      })}
    </View>
  );
};

export default Select;
