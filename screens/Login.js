import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Styles from '../config/Styles';
import MyInput from '../compnents/MyInput';
import MyButton from '../compnents/MyButton';
import auth from '@react-native-firebase/auth';
import bgImg from '../images/mainbg.jpg';

const Login = ({navigation}) => {
  let [model, setModel] = useState({});
  let [loder, setloder] = useState(false);
  let [mail, setMail] = useState(false);
  let [Pass, setPass] = useState(false);

  let LoginUser = () => {
    if (
      model.email === 'admin@gmail.com' ||
      (model.email === 'Admin@gmail.com' && model.password === '123456')
    ) {
      setloder(true);
      auth()
        .signInWithEmailAndPassword(model.email, model.password)
        .then(res => {
          let UserId = res.user.uid;
          navigation.navigate('AdminHome', UserId);
          setMail('');
          setPass('');
          console.log('res');
          setloder(false);
        })
        .catch(err => {
          ToastAndroid.show(
            'Wrong Email & Password',
            ToastAndroid.CENTER,
            ToastAndroid.SHORT,
          );
          setloder(false);
        });
    } else {
      setloder(true);
      auth()
        .signInWithEmailAndPassword(model.email, model.password)
        .then(res => {
          let userId = res.user.uid;
          navigation.navigate('UserSpalsh', userId);
          setMail('');
          setPass('');
          setloder(false);
          console.log('login');
        })
        .catch(err => {
          ToastAndroid.show('Wrong Email or Password', ToastAndroid.SHORT);
          setloder(false);
        });
    }
  };

  return (
    <>
      <ImageBackground source={bgImg} style={[Styles.h100, Styles.w100]}>
        <View style={[Styles.mt5, Styles.pt5]}>
          <Text
            style={[
              Styles.pt5,
              Styles.fs5,
              Styles.textBold,
              Styles.textCenter,
              Styles.textWhite,
            ]}>
            Get Login P 4 Pizza...{' '}
          </Text>
          <Text
            style={[
              Styles.fs1,
              Styles.textBold,
              Styles.textCenter,
              Styles.textWhite,
            ]}>
            Login
          </Text>
          <View style={[Styles.w100, Styles.px2, Styles.p2]}>
            <MyInput
              value={mail}
              keyboardType={'email-address'}
              onChangeText={e => {
                setMail(e);
                setModel({...model, email: e});
              }}
              label="email"
            />
          </View>
          <View style={[Styles.w100, Styles.px2, Styles.p1]}>
            <MyInput
              value={Pass}
              onChangeText={e => {
                setPass(e);
                setModel({...model, password: e});
              }}
              label="Password"
            />
          </View>
          <View style={[Styles.flexRow, Styles.px2]}>
            <View style={[Styles.p1, Styles.w50]}>
              <MyButton
                onPress={() => navigation.navigate('SignUp')}
                label="Sign Up"
              />
            </View>
            <View style={[Styles.p1, Styles.w50]}>
              {loder ? (
                <View>
                  <ActivityIndicator size={50} color="#fff" />
                </View>
              ) : (
                <MyButton onPress={LoginUser} label="Login" />
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Login;
