import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import bgImg from '../../images/homeBg.jpg';
import Styles from '../../config/Styles';
import pizzaImg from '../../images/pizza.jpg';

const Available = () => {
  let [list, setlist] = useState([]);
  let [loder, setLoder] = useState(true);
  let [refresh, setRefresh] = useState(false);
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

  let Delete = e => {
    database().ref(`Pizzas/${e.id}`).remove();
  };

  let listRef = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  return (
    <>
      <ImageBackground source={bgImg} style={[Styles.h100, Styles.w100]}>
        {loder ? (
          <View style={[Styles.flexCenter, Styles.h100]}>
            <ActivityIndicator size={50} color={Styles._dark} />
          </View>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl onRefresh={listRef} refreshing={refresh} />
            }
            style={[Styles.p2, Styles.textCenter]}>
            <View style={[Styles.pb5]}>
              {list &&
                list.map((e, i) => (
                  <View
                    style={[
                      Styles.bgSecondary,
                      Styles.shadow2,
                      Styles.my1,
                      {padding: 5},
                    ]}
                    key={i}>
                    <TouchableOpacity
                      onPress={() => Delete(e)}
                      style={{alignItems: 'flex-end', marginEnd: 10}}>
                      <Text style={{color: 'white', fontSize: 25}}>x</Text>
                    </TouchableOpacity>
                    <View style={[Styles.flexRow]}>
                      <View>
                        <Image
                          source={pizzaImg}
                          style={{width: 120, height: 100}}
                        />
                      </View>
                      <View
                        style={{
                          margin: 5,

                          paddingEnd: 15,
                        }}>
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
                  </View>
                ))}
            </View>
          </ScrollView>
        )}
      </ImageBackground>
    </>
  );
};

export default Available;
