import react, { useState } from "react";

import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

import NoCard from "./noCard";
import Card from "./card";

export default function Last() {
  const [cards, setCards] = useState([{name: 'test'}, {name: 'good morning'}])

  return (
    <View style={styles.last}>
      <Text style={styles.lastText}>OSTATNIE</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cardScroll} horizontal>
        {cards.map((card) => (<Card text={card.name} />))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  last: {
    paddingLeft: 32,
    paddingTop: 10,
  },
  lastText: {
    fontSize: 20,
    color: '#6B9080',
    fontFamily: 'Itim',
  },
});