import react from "react";

import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContent}>
          <ScrollView horizontal style={styles.sentenceContener}>
            <Text style={styles.sentence}>John Doe lorem30 asdasd asd</Text>
          </ScrollView>
        </View>
        <TouchableOpacity>
          <View style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Play</Text>
          </View>
        </TouchableOpacity>
      </View>
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
});