import react, {useState} from "react";

import { AntDesign } from "@expo/vector-icons"

import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import useSpeech from '../hooks/useSpeech'


export default function FirstScreen({ navigation }) {
  const [text, setText] = useState('');

  const pressHandler = () => {
		useSpeech(text)
	}

  return (
    <View style={styles.container}>
    <KeyboardAvoidingView style={styles.block}>
      <View style={styles.header}>

      <Text style={{fontSize: 24, color: '#6B9080', width: '100%'}}>Wpisz coś a ja to powiem</Text>
      <TextInput
        style={styles.input}
        placeholder='Wpisz coś'
        onChangeText={(val) => setText(val)}
        />
        </View>
      <TouchableOpacity style={styles.buttonContener} onPress={pressHandler}>
				<View style={styles.headerButtonContent}>
					<View style={styles.headerButton}>
						<AntDesign
							style={styles.icon}
							name='caretright'
							size={20}
							color='black'
						/>
					</View>
				</View>
			</TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCE3DE",
    alignItems: "center",
    justifyContent: "center",
  },
	block: {
    width: "80%",
    minHeight: "30%",
		backgroundColor: "#A4C3B2",
    padding: 30,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
	},
	
	headerButton: {
		backgroundColor: "#6B9080",
		borderRadius: 8,
		height: 25,
		width: 200,
		alignItems: "center",
		justifyContent: "center",
	},
	headerButtonContent: {
		marginTop: 15,
		alignItems: "center",
	},
	icon: {
		color: "#EAF4F4",
	},
	cardContener: {
		flexDirection: "row",
		marginTop: 15,
		marginLeft: 32,
		marginRight: 32,
		marginBottom: 15,
	},
	cardList: {
		flexDirection: "row",
	},
  input: {
    minHeight: 36,
    backgroundColor: "#EAF4F4",
    borderStyle: 'solid',
    borderColor: '#6B9080',
    borderRadius: 9,
    borderWidth: 2,
    padding: 5,
    paddingLeft: 15,
    marginBottom: 15,
  },
  buttonContener: {
    alignItems: "center",
    // position: "absolute",
    width: "100%",
    // bottom: 30,
    justifyContent: "center",
  },
})

