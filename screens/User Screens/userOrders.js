import MyButton from '../../compnents/MyButton';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import bgImg from '../../images/homeBg.jpg';
import Styles from '../../config/Styles';

import MyInput from '../../compnents/MyInput';
import database from '@react-native-firebase/database';

const UserOrders = ({navigation, route}) => {
  let Orders = route.params;

  let [model, setModel] = useState({});
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');
  let [loder, setLoder] = useState(false);
  let [pizzaName, setPizzaName] = useState('');
  let [flavour, setFlavour] = useState('');
  let [size, setSize] = useState('');
  let [price, setPrice] = useState('');

  let BuyOrder = () => {
    setLoder(true);
    model.id = database().ref('Details/').push().key;
    database()
      .ref(`Details/${model.id}`)
      .set(model)
      .then(res => {
        navigation.navigate('OrderSecond', Orders);
        setLoder(false);
      })
      .catch(errr => {
        console.log(errr);
        setLoder(false);
      });
    setUserName('');
    setUserContact('');
    setUserAddress('');
  };
  useEffect(() => {
    setModel({
      pizzaName: Orders.pizzaName,
      flavour: Orders.flavour,
      size: Orders.size,
      price: Orders.price,
    });
    setPizzaName(Orders.pizzaName);
    setFlavour(Orders.flavour);
    setSize(Orders.size);
    setPrice(Orders.price);
  }, []);

  return (
    <ImageBackground source={bgImg} style={[Styles.w100, Styles.h100]}>
      <ScrollView>
        <View style={[Styles.p1, Styles.p2, Styles.ms3]}>
          <Text style={[Styles.fs1, Styles.textWarning]}>Personal Details</Text>
        </View>
        <View>
          <View style={[Styles.p1, Styles.px2]}>
            <MyInput
              value={userName}
              onChangeText={e => {
                setUserName(e);
                setModel({...model, UserName: e});
              }}
              label="Name"
            />
          </View>
          <View style={[Styles.p1, Styles.px2]}>
            <MyInput
              value={userContact}
              onChangeText={e => {
                setUserContact(e);
                setModel({...model, UserContact: e});
              }}
              label="Contact"
            />
          </View>
          <View style={[Styles.p1, Styles.px2]}>
            <MyInput
              value={userAddress}
              onChangeText={e => {
                setUserAddress(e);
                setModel({...model, UserAddress: e});
              }}
              label="Address"
            />
          </View>
        </View>
        {/* Piiza deatil */}
        <View style={[Styles.p1, Styles.p2, Styles.ms3]}>
          <Text style={[Styles.fs1, Styles.textWarning]}>Pizza Details</Text>
        </View>
        <View>
          <View style={[Styles.p1, Styles.px2]}>
            <MyInput
              label={Orders.pizzaName}
              value={pizzaName}
              disabled={false}
              onChangeText={e => {
                setPizzaName(e);
                setModel({...model, pizzaName: e});
              }}
            />
          </View>

          <View style={[Styles.p1, Styles.px2]}>
            <MyInput
              label={Orders.flavour}
              disabled={false}
              value={flavour}
              onChangeText={e => {
                setFlavour(e);
                setModel({...model, flavour: e});
              }}
            />
          </View>
          <View style={[Styles.p1, Styles.px2]}>
            <MyInput
              label={Orders.size}
              disabled={false}
              value={size}
              onChangeText={e => {
                setSize(e);
                setModel({...model, size: e});
              }}
            />
          </View>
          <View style={[Styles.p1, Styles.px2]}>
            <MyInput
              label={Orders.price}
              disabled={false}
              value={price}
              onChangeText={e => {
                setPrice(e);
                setModel({...model, price: e});
              }}
            />
          </View>
        </View>
        {loder ? (
          <View>
            <ActivityIndicator size={50} color="#fff" />
          </View>
        ) : (
          <View style={[Styles.p2, Styles.mx2]}>
            <MyButton onPress={BuyOrder} label=" Submit" />
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default UserOrders;
