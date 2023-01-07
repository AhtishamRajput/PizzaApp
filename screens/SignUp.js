import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import React, {useState} from 'react';
import Styles from '../config/Styles';
import MyButton from '../compnents/MyButton';
import MyInput from '../compnents/MyInput';
import bgImg from '../images/mainbg.jpg';

const SignUp = ({navigation}) => {
  let [model, setModel] = useState({});
  let [loder, setloder] = useState(false);

  let SignUpUser = () => {
    setloder(true);
    auth()
      .createUserWithEmailAndPassword(model.email, model.password)
      .then(res => {
        console.log('Sign In User');
        database()
          .ref(`users/${res.user.uid}`)
          .set(model)
          .then(() => {
            navigation.navigate('Login');
            setloder(false);
          })
          .catch(errr => {
            console.log(errr);
          });
      })
      .catch(err => {
        ToastAndroid.show(
          'Wrong Email & Password',
          ToastAndroid.CENTER,
          ToastAndroid.SHORT,
        );
        setloder(false);
        console.log(err);
      });
  };
  return (
    <>
      <ImageBackground style={[Styles.w100]} source={bgImg}>
        <ScrollView style={[Styles.h100]}>
          <View style={[Styles.mt5, Styles.pt5]}>
            <Text
              style={[
                Styles.fs5,
                Styles.textBold,
                Styles.textCenter,
                Styles.textWhite,
              ]}>
              Pls... Sign Up P 4 Pizza{' '}
            </Text>
            <Text
              style={[
                Styles.fs1,
                Styles.textBold,
                Styles.textCenter,
                Styles.textWhite,
              ]}>
              SignUp
            </Text>
            <View style={[Styles.w100, Styles.p2]}>
              <MyInput
                onChangeText={e => setModel({...model, name: e})}
                label="User Name"
              />
            </View>
            <View style={[Styles.w100, Styles.p2]}>
              <MyInput
                keyboardType={'email-address'}
                onChangeText={e => setModel({...model, email: e})}
                label="email"
              />
            </View>
            <View style={[Styles.w100, Styles.p2]}>
              <MyInput
                onChangeText={e => setModel({...model, password: e})}
                label="Password"
              />
            </View>
            <View style={[Styles.w100, Styles.px4]}>
              {loder ? (
                <View>
                  <ActivityIndicator size={50} color="#fff" />
                </View>
              ) : (
                <MyButton onPress={SignUpUser} label="Sign Up" />
              )}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default SignUp;
