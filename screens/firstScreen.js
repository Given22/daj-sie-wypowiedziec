import react from "react";

import { StyleSheet, Text, View, Button } from 'react-native';

export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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