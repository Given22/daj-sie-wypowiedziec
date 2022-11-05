import react, {useState} from "react";

import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import Header from "../components/header";
import Last from "../components/last";
import Search from "../components/search";

export default function HomeScreen({ navigation }) {
  const [lastCards, setLastCards] = useState([{name: 'test'}, {name: 'good morning'}])
  const [cards, setCards] = useState([{name: 'test'}, {name: 'good morning'}])
  const [searchFocus, setSearchFocus] = useState(false);
  
  const onFocusHandler = (state) => {
    setSearchFocus(state)
  }

  return (
    <View style={styles.container}>
      <Header text='lorem'/>
      {lastCards && !searchFocus &&(
        <Last cards={lastCards} />
      )}
      <Search onFocusHandler={onFocusHandler} cardsData={cards} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF4F4",
  },
  header: {
    height: 250,
    backgroundColor: '#A4C3B2',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTextContent: {
    padding: 30,
    marginLeft: 32,
    marginRight: 32,
    backgroundColor: '#EAF4F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sentence: {
    fontSize: 24,
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
    width: "100%",
    height: 25,
    width: 100,
  },
  headerButtonContent: {
    marginTop: 15,
    alignItems: 'center',
  }
});