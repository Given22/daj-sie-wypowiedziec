import react from "react";

import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import { AntDesign } from '@expo/vector-icons'; 

export default function NoCard({size=60}) {

  const width = size
  const height = size * 1.4

  return (
    <View style={[styles.card, {width: width, height: height}]}>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderStyle: 'dashed',
    borderColor: '#EAF4F4',
    borderWidth: 2,
    borderRadius: 12,
    marginRight: 15,
  },
});