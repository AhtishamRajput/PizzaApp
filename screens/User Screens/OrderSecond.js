import MyButton from '../../compnents/MyButton';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';

import bgImg from '../../images/homeBg.jpg';
import Styles from '../../config/Styles';
import pizzaImg from '../../images/pizza.jpg';

import {useState} from 'react';

const OrderSecond = ({navigation, route}) => {
  let [loder, setLoder] = useState(false);
  let Orders = route.params;
  let doneOrd = () => {
    setLoder(true);
    setTimeout(() => {
      setLoder(false);
      navigation.navigate('UserSpalsh');
    }, 3000);
  };
  return (
    <ImageBackground source={bgImg} style={[Styles.w100, Styles.h100]}>
      <View style={[Styles.m2, Styles.rounded, Styles.bgPrimary]}>
        <View style={[Styles.alignItemsCenter]}>
          <View>
            <Image source={pizzaImg} style={{width: 255, height: 200}} />
          </View>
          <View style={{margin: 1}}>
            <Text style={[Styles.textBold, Styles.fs1, Styles.textWhite]}>
              Name:
              <Text style={[Styles.textBold, Styles.fs2, Styles.textWarning]}>
                {' '}
                {Orders.pizzaName}{' '}
              </Text>
            </Text>
            <Text style={[Styles.textBold, Styles.fs1, Styles.textWhite]}>
              flavour :
              <Text style={[Styles.textBold, Styles.fs2, Styles.textWarning]}>
                {' '}
                {Orders.flavour}{' '}
              </Text>
            </Text>
            <Text style={[Styles.textBold, Styles.fs1, Styles.textWhite]}>
              Size :
              <Text style={[Styles.textBold, Styles.fs2, Styles.textWarning]}>
                {' '}
                {Orders.size}{' '}
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            marginStart: 180,
            padding: 10,
          }}>
          <Text style={[Styles.textBold, Styles.fs5, Styles.textWhite]}>
            Rs /
            <Text style={[Styles.textBold, Styles.fs6, Styles.textWarning]}>
              {' '}
              {Orders.price} .{' '}
            </Text>
          </Text>
        </View>
      </View>
      {loder ? (
        <View style={{alignItems: 'center'}}>
          <ActivityIndicator size={50} color="#fff" />
          <Text style={[Styles.fs1, Styles.textWhite]}>
            Pls Wait For Call...
          </Text>
        </View>
      ) : (
        <View style={[Styles.p2, , Styles.pt5, Styles.mt5]}>
          <MyButton onPress={doneOrd} label=" BUY NOW" />
        </View>
      )}
    </ImageBackground>
  );
};

export default OrderSecond;
