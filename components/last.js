import react, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";

import NoCard from "./noCard";
import Card from "./card";
import { useContext } from "react/cjs/react.development";
import { Context } from "../context/DataContext";

export default function Last() {
  const { lastCards, addToSentence } = useContext(Context);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      pressDuration={0}
      onPress={() => {
        addToSentence(item);
      }}
    >
      <Card text={item.pl} type={item.rodzaj} size={80} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.last}>
      <Text style={styles.lastText}>OSTATNIE</Text>
      <View style={styles.cardScroll}>
        <FlashList
          data={lastCards}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={(item) => item.id}
          estimatedItemSize={100}
          extraData={lastCards}
        />
      </View>
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
    color: "#6B9080",
    fontFamily: "Itim",
  },
  line: {
    borderColor: "#A4C3B2",
    borderStyle: "dashed",
    borderBottomWidth: 3,
    marginTop: 10,
    width: "100%",
  },
  cardScroll: {
    displayDirection: "row",
    minHeight: 100,
    width: "100%",
  },
});
