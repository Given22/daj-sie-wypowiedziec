import react, {useState} from "react";

import { StyleSheet, Text, View, Button, ScrollView, Image, FlatList } from 'react-native';

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

  const renderItem = ({ item }) => (
    <Card text={item.name} size={90} />
  );

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
      <FlatList
        style={{width: '100%'}}
        data={cards}
        renderItem={renderItem}
        horizontal={false}
        numColumns={3}
        keyExtractor={item => item.name}
        columnWrapperStyle={{justifyContent: 'space-around'}}
      />
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