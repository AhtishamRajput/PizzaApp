import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import MyButton from '../../compnents/MyButton';
import bgImg from '../../images/mainbg.jpg';
import Styles from '../../config/Styles';
import pizzaImg from '../../images/pizza.jpg';

const UserSpalsh = ({navigation}) => {
  let [loder, setLoder] = useState(false);
  let goHomee = () => {
    setLoder(true);

    navigation.navigate('userHome');
    setLoder(false);
  };

  return (
    <ImageBackground source={bgImg} style={[Styles.h100, Styles.w100]}>
      <View style={[Styles.mt5, Styles.pt3, Styles.alignItemsCenter]}>
        <View style={[Styles.p2]}></View>
        <Image
          source={pizzaImg}
          style={{width: 200, height: 200, borderRadius: 100}}
        />
      </View>
      <Text
        style={[
          Styles.textCenter,
          Styles.fs1,
          Styles.textBold,
          Styles.textWhite,
        ]}>
        Welcome User For P 4 Pizza...
      </Text>
      {loder ? (
        <ActivityIndicator color={'#fff'} />
      ) : (
        <View style={[Styles.mx3, Styles.p2]}>
          <MyButton label="Get Started" onPress={goHomee} />
        </View>
      )}
    </ImageBackground>
  );
};

export default UserSpalsh;
