import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import bgImg from '../../images/homeBg.jpg';
import Styles from '../../config/Styles';
import pizzaImg from '../../images/pizza.jpg';

const UserHome = ({navigation}) => {
  let [list, setlist] = useState([]);
  let [loder, setLoder] = useState(true);
  let getAvailable = () => {
    database()
      .ref('Pizzas')
      .once('value', dt => {
        let li = Object.values(dt.val());
        setlist([...li]);
        setLoder(false);
      });
  };
  useEffect(() => {
    getAvailable();
  }, []);

  return (
    <>
      <ImageBackground source={bgImg} style={[Styles.h100, Styles.w100]}>
        <View style={[Styles.ms3, Styles.mt3]}>
          <Text style={[Styles.textBold, Styles.fs2, Styles.textWarning]}>
            {' '}
            Available Deals
          </Text>
        </View>
        {loder ? (
          <View style={[Styles.flexCenter, Styles.h100]}>
            <ActivityIndicator size={50} color={Styles._dark} />
          </View>
        ) : (
          <ScrollView style={[Styles.p2, Styles.mt2, Styles.textCenter]}>
            <View style={[Styles.pb5]}>
              {list &&
                list.map((e, i) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('UserOrders', e);
                    }}
                    style={[
                      Styles.bgPrimary,
                      Styles.shadow2,

                      Styles.my1,
                      {padding: 5},
                    ]}
                    key={i}>
                    <View style={[Styles.flexRow]}>
                      <View>
                        <Image
                          source={pizzaImg}
                          style={{width: 120, height: 100}}
                        />
                      </View>
                      <View
                        style={{margin: 5, marginStart: 15, paddingEnd: 15}}>
                        <Text
                          style={[
                            Styles.textBold,
                            Styles.fs5,
                            Styles.textWhite,
                          ]}>
                          Name:
                          <Text
                            style={[
                              Styles.textBold,
                              Styles.fs6,
                              Styles.textWarning,
                            ]}>
                            {' '}
                            {e.pizzaName}{' '}
                          </Text>
                        </Text>
                        <Text
                          style={[
                            Styles.textBold,
                            Styles.fs5,
                            Styles.textWhite,
                          ]}>
                          flavour :
                          <Text
                            style={[
                              Styles.textBold,
                              Styles.fs6,
                              Styles.textWarning,
                            ]}>
                            {' '}
                            {e.flavour}{' '}
                          </Text>
                        </Text>
                        <Text
                          style={[
                            Styles.textBold,
                            Styles.fs5,
                            Styles.textWhite,
                          ]}>
                          Size :
                          <Text
                            style={[
                              Styles.textBold,
                              Styles.fs6,
                              Styles.textWarning,
                            ]}>
                            {' '}
                            {e.size}{' '}
                          </Text>
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: 180,
                      }}>
                      <Text
                        style={[Styles.textBold, Styles.fs5, Styles.textWhite]}>
                        Rs /
                        <Text
                          style={[
                            Styles.textBold,
                            Styles.fs6,
                            Styles.textWarning,
                          ]}>
                          {' '}
                          {e.price} .{' '}
                        </Text>
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </ScrollView>
        )}
      </ImageBackground>
    </>
  );
};

export default UserHome;
