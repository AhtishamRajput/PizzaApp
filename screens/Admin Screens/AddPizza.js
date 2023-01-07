import React, {useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import bgImg from '../../images/homeBg.jpg';
import Styles from '../../config/Styles';
import MyButton from '../../compnents/MyButton';
import MyInput from '../../compnents/MyInput';
import database from '@react-native-firebase/database';

const AddPizza = () => {
  let [model, setModel] = useState({});
  let [loder, setloder] = useState(false);
  let [pizzaName, setpizzaName] = useState('');
  let [flavour, setflavour] = useState('');
  let [size, setsize] = useState('');
  let [price, setprice] = useState('');

  let addPizza = () => {
    setloder(true);
    model.id = database().ref('Pizzas/').push().key;
    database()
      .ref(`Pizzas/${model.id}`)
      .set(model)
      .then(() => {
        setloder(false);
        ToastAndroid.show('Added', ToastAndroid.CENTER, ToastAndroid.SHORT);
      })
      .catch(err => {
        setloder(false);
        ToastAndroid.show('Wrong ', ToastAndroid.CENTER, ToastAndroid.SHORT);
        console.log(err);
      });
    setpizzaName('');
    setflavour('');
    setsize('');
    setprice('');
  };
  return (
    <>
      <ImageBackground source={bgImg} style={[Styles.h100, Styles.w100]}>
        <View style={[Styles.mt3, Styles.pt3]}>
          <Text
            style={[
              Styles.textBlack,
              Styles.textWhite,
              Styles.textCenter,
              Styles.fs3,
              Styles.textBold,
            ]}>
            Hy Admin Add New Pizza...
          </Text>
          <ScrollView
            style={[Styles.rounded, Styles.m1, Styles.px1, Styles.h75]}>
            <View style={[Styles.m1]}>
              <View style={[Styles.py2]}>
                <MyInput
                  value={pizzaName}
                  onChangeText={e => {
                    setpizzaName(e);
                    setModel({...model, pizzaName: e});
                  }}
                  label="pizza Name"
                />
              </View>
              <View style={[Styles.py2]}>
                <MyInput
                  value={flavour}
                  onChangeText={e => {
                    setflavour(e);
                    setModel({...model, flavour: e});
                  }}
                  label="Flavour"
                />
              </View>
              <View style={[Styles.py2]}>
                <MyInput
                  value={size}
                  onChangeText={e => {
                    setsize(e);
                    setModel({...model, size: e});
                  }}
                  label="Size"
                />
              </View>
              <View style={[Styles.py2]}>
                <MyInput
                  value={price}
                  onChangeText={e => {
                    setprice(e);
                    setModel({...model, price: e});
                  }}
                  label="Price"
                />
              </View>
              <View style={[Styles.py2]}>
                {loder ? (
                  <View>
                    <ActivityIndicator size={50} color="#fff" />
                  </View>
                ) : (
                  <MyButton onPress={addPizza} label="Add" />
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
};

export default AddPizza;
