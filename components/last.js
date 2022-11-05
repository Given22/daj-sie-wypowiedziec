import react, { useState } from "react";

import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

import NoCard from "./noCard";
import Card from "./card";
import { useContext } from "react/cjs/react.development";
import { Context } from "../context/DataContext";

export default function Last() {
  const { lastCards } = useContext(Context)

  return (
    <View style={styles.last}>
      <Text style={styles.lastText}>OSTATNIE</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cardScroll} horizontal>
        {lastCards.map((card) => (<Card size={80} text={card.name} />))}
      </ScrollView>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  last: {
    paddingLeft: 32,
    paddingTop: 10,
    paddingRight: 32,
  },
  lastText: {
    fontSize: 20,
    color: '#6B9080',
    fontFamily: 'Itim',
  },
  line: {
    borderColor: '#A4C3B2',
    borderStyle: 'dashed',
    borderBottomWidth: 3,
    marginTop: 10,
    width: '100%',
  }
});