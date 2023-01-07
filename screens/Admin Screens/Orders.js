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

const Orders = () => {
  let [list, setlist] = useState([]);

  let [loder, setLoder] = useState(true);
  let getAvailable = () => {
    database()
      .ref('Details')
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
        {loder ? (
          <View style={[Styles.flexCenter, Styles.h100]}>
            <ActivityIndicator size={50} color={Styles._dark} />
          </View>
        ) : (
          <ScrollView style={[Styles.m2]}>
            <View style={[Styles.bgTransparent, Styles.p1]}>
              {list &&
                list.map((e, i) => (
                  <>
                    <View
                      style={[
                        Styles.border2,
                        Styles.rounded,
                        {borderColor: Styles._dark},
                        Styles.p1,
                        Styles.m1,
                      ]}
                      key={i}>
                      <Text
                        style={[
                          Styles.fs3,
                          Styles.textCenter,
                          Styles.textWarning,
                        ]}>
                        Pizza Details
                      </Text>
                      <Text style={[Styles.fs4, Styles.textWhite]}>
                        Name : {e.pizzaName}
                      </Text>
                      <Text style={[Styles.fs4, Styles.textWhite]}>
                        Flavour : {e.flavour}
                      </Text>
                      <Text style={[Styles.fs4, Styles.textWhite]}>
                        Size : {e.size}
                      </Text>
                      <Text style={[Styles.fs4, Styles.textWhite]}>
                        Price : {e.price}
                      </Text>

                      <Text
                        style={[
                          Styles.fs3,
                          Styles.textCenter,
                          Styles.textWarning,
                        ]}>
                        Clint Details
                      </Text>
                      <Text style={[Styles.fs4, Styles.textWhite]}>
                        Name : {e.UserName}
                      </Text>
                      <Text style={[Styles.fs4, Styles.textWhite]}>
                        Contact : {e.UserContact}
                      </Text>
                      <Text style={[Styles.fs4, Styles.textWhite]}>
                        Address : {e.UserAddress}
                      </Text>
                    </View>
                  </>
                ))}
            </View>
          </ScrollView>
        )}
      </ImageBackground>
    </>
  );
};

export default Orders;
