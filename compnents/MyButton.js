import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../config/Styles';

function MyButton(props) {
  const {label, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={[styles.textWhite, styles.textCenter, styles.fs4]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default MyButton;
