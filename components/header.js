import react, { useState } from "react";

import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

import NoCard from "./noCard";
import Card from "./card";

export default function Header() {
  const [text, setText] = useState()

  const [cards, setCards] = useState([{name: 'test'}, {name: 'good morning'}, {}])

  const pressHandler = () => {
    setText('lorem')
  }

  const renderItem = ({ item }) => (
    <>
      {item ? <Card text={item.name}/> : <NoCard />}
    </>
  );

  return (
    <View style={styles.header}>
      <View style={styles.headerTextContent}>
        <ScrollView horizontal style={styles.sentenceContener}>
          <Text style={styles.sentence}>{text}</Text>
        </ScrollView>
      </View>
        <TouchableOpacity onPress={pressHandler}>
          <View style={styles.headerButtonContent}>   
              <View style={styles.headerButton}>
                <AntDesign style={styles.icon} name="caretright" size={20} color="black" />
              </View>
          </View>
        </TouchableOpacity>
      <View style={styles.cardContener}>
        {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.cardScroll} horizontal>
          {cards.map((card) => (
            <View>
              {card.name ? <Card text={card.name} /> : <NoCard />}
            </View>
          ))}
        </ScrollView> */}
        <FlatList
        data={cards}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.name}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 250,
    backgroundColor: '#A4C3B2',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTextContent: {
    padding: 30,
    paddingBottom: 20,
    paddingTop: 45,
    marginLeft: 32,
    marginRight: 32,
    backgroundColor: '#EAF4F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sentence: {
    fontSize: 20,
    color: '#6B9080',
    minWidth: "100%",
  },
  sentenceContener: {
    borderColor: '#A4C3B2',
    borderStyle: 'solid',
    borderBottomWidth: 2,
  },
  headerButton: {
    backgroundColor: '#6B9080',
    borderRadius: 8,
    height: 25,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtonContent: {
    marginTop: 15,
    alignItems: 'center',
  },
  icon: {
    color: '#EAF4F4',
  },
  cardContener: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 32,
    marginBottom: 15,
  }
});