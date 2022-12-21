import react, { useState, useContext } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

import { Context } from "../context/DataContext";
import { FlashList } from "@shopify/flash-list";

import Card from "./card";

export default function Search({ onFocusHandler }) {
  const { cards, addToSentence, addToLast, debug } = useContext(Context);

  const [search, setText] = useState("");
  const [showCards, setShowCards] = useState(cards);

  const changeHandler = (val) => {
    setText(val);
    setShowCards(
      cards.filter((card) => card.pl.toLowerCase().includes(val.toLowerCase()))
    );
  };

  const onFocus = () => {
    onFocusHandler(true);
  };

  const offFocus = () => {
    onFocusHandler(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      pressDuration={0}
      onPress={() => {
        addToSentence(item);
        addToLast(item);
      }}
      // onPress={() => test(item)}
    >
      <Card text={item.pl} type={item.rodzaj} size={90} />
    </TouchableOpacity>
  );

  const test = (item) => {
    console.log(item);
  };

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
        <FlashList
          data={showCards}
          numColumns={3}
          refreshing={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem({ item })}
          estimatedItemSize={136}
          extraData={showCards}
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
    borderStyle: "solid",
    borderColor: "#A4C3B2",
    borderRadius: 9,
    borderWidth: 2,
    padding: 5,
    paddingLeft: 15,
    marginBottom: 15,
  },
  cardContener: {
    flex: 1,
    displayDirection: "row",
    width: "100%",
    alignSelf: "center",
  },
});
