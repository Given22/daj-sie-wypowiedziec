import react from "react";

import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

export default function Card({text, img, color='#FB5607', size}) {
  return (
    <View style={styles.card}>
      <Image source={img} style={styles.cardImg} />
      <View style={styles.cardFooter}>
        <Text numberOfLines={1} style={styles.cardText}>{text}</Text>
      </View>
      <View style={[styles.cardBorder, {borderColor: color}]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minWidth: 65,
    height: 90,
    marginRight: 10,
    backgroundColor: '#EAF4F4',
    borderRadius: 12,
    flex: 1,
  },
  cardFooter: {
    position: 'absolute',
    bottom: 0,
    minWidth: 65,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 3,
    backgroundColor: '#CCE3DE',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cardText: {
    fontSize: 12,
    color: '#6B9080',
    maxWidth: '100%',
    fontFamily: 'Itim',
  },
  cardBorder: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 12,
    marginRight: 15,
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});