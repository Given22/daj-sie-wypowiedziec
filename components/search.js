import react, {useState, useContext} from "react";

import { StyleSheet, Text, View, Button, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from "react-native-gesture-handler";

import {Context} from "../context/DataContext";

import Card from "./card";

export default function Search({onFocusHandler}) {
  const { cards, addToSentence, addToLast } = useContext(Context);

  const [search, setText] = useState('');
  const [ showCards, setShowCards ] = useState(cards);


  const changeHandler = (val) => {
    setText(val)
    setShowCards(cards.filter((card) => (card.pl.toLowerCase()).includes(val.toLowerCase())))
  }

  const pressHandler = (id) => {

  }
  
  const onFocus = () => {
    onFocusHandler(true)
  };

  const offFocus = () => {
    onFocusHandler(false)
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {addToSentence(item); addToLast(item)}}>
      <Card text={item.pl} size={90} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        onChangeText={changeHandler}
        value={search}
        onPressIn={onFocus}
        onSubmitEditing={offFocus}
        placeholder="Wyszukaj..."
      />
      <View style={styles.cardContener}>

      <FlatList
        style={{width: '100%', marginBottom: 110}}
        data={showCards}
        renderItem={renderItem}
        horizontal={false}
        numColumns={3}
        keyExtractor={item => item.pl}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingLeft: 32,
    paddingTop: 10,
    paddingRight: 32,
    flex: 1,
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