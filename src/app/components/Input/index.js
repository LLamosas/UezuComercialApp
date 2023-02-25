import {Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {getStyles} from './Input.styles';

const Input = ({
  label,
  value,
  caption,
  tooltip,
  secureText,
  type = 'default',
  testID = 'input',
  accessibilityLabel = 'input',
  style,
  onFocus,
  onBlur,
  editable = true,
  prefix,
  suffix,
  placeholder,
  onChangeText,
  maxLength,
  mask,
  placeholderTextColor = 'rgb(113, 109, 109)',
  keyboardType = 'default',
  ...otherProps
}) => {
  const styles = getStyles();
  const [focus, setFocus] = useState(false);

  const inputHolderStyle = [
    styles['input__holder__' + type],
    style,
    focus && type === 'default' ? styles.input__holder__focus : {},
    !editable ? styles.input__holder__disabled : null,
  ];
  const inputStyle = [styles.input, !editable ? styles.input__disabled : null];

  const getInputComponent = () => {
    return (
      <TextInput
        {...otherProps}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        placeholderTextColor={placeholderTextColor}
        numberOfLines={1}
        keyboardType={keyboardType}
        maxLength={maxLength}
        secureTextEntry={secureText}
        onChangeText={text => {
          /* istanbul ignore else */
          if (onChangeText) {
            onChangeText(text);
          }
        }}
        onFocus={e => {
          setFocus(true);
          /* istanbul ignore else */
          if (onFocus) {
            onFocus(e);
          }
        }}
        onBlur={e => {
          setFocus(false);
          /* istanbul ignore else */
          if (onBlur) {
            onBlur(e);
          }
        }}
        style={inputStyle}
        value={value}
      />
    );
  };

  /* istanbul ignore next */
  return (
    <View style={styles.input__container}>
      <Text style={styles['input__label__' + type]}>{label}</Text>
      <View style={inputHolderStyle}>
        {prefix ? <Text style={styles.input__prefix}>{prefix}</Text> : null}
        {getInputComponent()}
        {suffix ? <Text style={styles.input__suffix}>{suffix}</Text> : null}
      </View>
      <Text style={styles['input__caption__' + type]}>{caption}</Text>
    </View>
  );
};

export default Input;
