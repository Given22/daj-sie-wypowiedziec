import react from "react";

import { StyleSheet, Text, View, Button } from 'react-native';

const puzzle = (
	<MaterialCommunityIcons name='puzzle' size={70} color='#F6FFF8' />
)
const question = <FontAwesome name='question' size={70} color='#F6FFF8' />
export default function GameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Game Screen</Text>
      <Button title='go to home'onPress={() =>
        navigation.navigate('Home')
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});