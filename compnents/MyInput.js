import React from 'react';
import {TextInput} from 'react-native';
import styles from '../config/Styles';

function MyInput(props) {
  const {label, onChangeText, value, keyboardType, disabled} = props;

  return (
    <TextInput
      style={[
        styles.input,
        styles.border2,
        styles.bgTransparent,
        {borderColor: '#ffff'},
      ]}
      editable={disabled}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={styles._white}
      placeholder={label}
    />
  );
}

export default MyInput;
