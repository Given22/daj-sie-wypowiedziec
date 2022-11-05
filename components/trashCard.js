import react from "react";

import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

export default function TrashCard({size=60}) {

  const width = size
  const height = size * 1.4

  return (
    <View style={[styles.card, {width: width, height: height}]}>
      <View style={styles.cardIcon}>
        <Ionicons style={styles.Icon} name="trash" size={35} color="#EAF4F4" />
      </View>
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
  cardIcon: {
    judtifyContent: 'center', 
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});