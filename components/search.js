import react, {useState} from "react";

import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from "react-native-gesture-handler";

import Card from "./card";

export default function Search({onFocusHandler, cardsData}) {
  const [search, setText] = useState('');
  const [cards, setCards] = useState(cardsData)

  
  const onFocus = () => {
    onFocusHandler(true)
  };

  const offFocus = () => {
    onFocusHandler(false)
  }

  return (
    <View style={styles.main}>  
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={search}
        onPressIn={onFocus}
        onSubmitEditing={offFocus}
        placeholder="Wyszukaj..."
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cardScroll} row vertical>
        {cards.map((card) => (<Card size={90} text={card.name} />))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingLeft: 32,
    paddingTop: 10,
    paddingRight: 32,
  },
  input: {
    minHeight: 36,
    borderStyle: 'solid',
    borderColor: '#A4C3B2',
    borderRadius: 9,
    borderWidth: 2,
    padding: 5,
    paddingLeft: 15,
    marginBottom: 15,
  },
});