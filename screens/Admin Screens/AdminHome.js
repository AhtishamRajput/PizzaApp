import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import bgImg from '../../images/mainbg.jpg';
import Styles from '../../config/Styles';
import MyButton from '../../compnents/MyButton';

function AdminHome({navigation}) {
  return (
    <>
      <ImageBackground source={bgImg} style={[Styles.h100, Styles.w100]}>
        <View style={[Styles.mt5, Styles.pt5]}>
          <View style={[Styles.p2]}>
            <MyButton
              onPress={() => navigation.navigate('AddPizza')}
              label="Add Pizzas"
            />
          </View>
          <View style={[Styles.p2]}>
            <MyButton
              onPress={() => navigation.navigate('Orders')}
              label="Orders"
            />
          </View>

          <View style={[Styles.p2]}>
            <MyButton
              onPress={() => navigation.navigate('Available')}
              label="Available "
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default AdminHome;
