import react from "react";

import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import { AntDesign } from '@expo/vector-icons'; 

export default function Header({ text }) {

  const pressHandler = () => {
    console.log('pressed');
  }

  return (
    <View style={styles.header}>
      <View style={styles.headerTextContent}>
        <ScrollView horizontal style={styles.sentenceContener}>
          <Text style={styles.sentence}>{text}</Text>
        </ScrollView>
      </View>
      <View style={styles.headerButtonContent}>   
        <TouchableOpacity onPress={pressHandler}>
          <View style={styles.headerButton}>
            <AntDesign style={styles.icon} name="caretright" size={20} color="black" />
          </View>
        </TouchableOpacity>
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
  }
});