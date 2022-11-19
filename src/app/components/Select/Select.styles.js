import {StyleSheet} from 'react-native';

const theme = {
  text: 'rgb(18, 18, 18)',
  text70: 'rgb(57, 56, 56)',
  text50: 'rgb(113, 109, 109)',
  text40: 'rgb(140, 138, 138)',
  text30: 'rgb(205, 203, 203)',
  error: 'rgb(195, 0, 0)',
  approved: 'rgb(119, 162, 30)',
};
const baseStyles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  input__holder: {
    borderRadius: 12,
    // borderWidth: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    height: '100%',
    justifyContent: 'space-between',
  },
  caption: {
    marginTop: 8,
  },
});

export const getStyles = () => {
  return StyleSheet.create({
    input__container: {
      width: '100%',
    },
    input__label__default: {
      ...baseStyles.label,
      color: theme.text,
    },
    input__label__error: {
      ...baseStyles.label,
      color: theme.error,
    },
    input__label__approved: {
      ...baseStyles.label,
      color: theme.approved,
    },

    input__holder__default: {
      ...baseStyles.input__holder,
      borderColor: '#0B509C',
    },
    input__label__defaultValue: {
      color: theme.text50,
    },
    input__holder__error: {
      ...baseStyles.input__holder,
      borderColor: theme.error,
    },
    input__holder__approved: {
      ...baseStyles.input__holder,
      borderColor: theme.approved,
    },
    input__holder__focus: {
      borderColor: '#181840',
    },
    input__holder__disabled: {
      backgroundColor: '#0B509C',
      borderColor: '#0B509C',
    },
    input: {
      color: theme.text,
    },
    input__icon: {
      marginRight: 12,
      width: 16,
      height: 16,
    },
    input__disabled: {
      color: theme.text50,
    },
    input__caption__default: {
      ...baseStyles.caption,
      color: theme.text,
    },
    input__caption__error: {
      ...baseStyles.caption,
      color: theme.error,
    },
    input__caption__approved: {
      ...baseStyles.caption,
      color: theme.approved,
    },
    options__modal: {
      backgroundColor: 'rgba(18, 18, 18, 0.85)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    options__container: {
      backgroundColor: '#FFF',
      width: 280,
      borderRadius: 6,
      maxHeight: '65%',
      overflow: 'hidden',
    },
    menuItem__container: {
      paddingHorizontal: 16,
      backgroundColor: '#FFF',
      height: 48,
      alignItems: 'center',
      flexDirection: 'row',
    },
    menuItem__separator: {
      borderBottomColor: '#0B509C',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
};
