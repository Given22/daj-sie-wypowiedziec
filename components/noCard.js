import react from "react";

import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import { AntDesign } from '@expo/vector-icons'; 

export default function NoCard() {
  return (
    <View style={styles.card}>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 65,
    height: 90,
    borderStyle: 'dashed',
    borderColor: '#EAF4F4',
    borderWidth: 2,
    borderRadius: 12,
    marginRight: 15,
  },
});