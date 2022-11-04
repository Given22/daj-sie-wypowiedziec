import react from "react"

import { StyleSheet, Text, View, Button, ScrollView } from "react-native"

export default function Game({ name, icon }) {
	return (
		<View style={styles.game}>
			<Text style={styles.gameName}>{name}</Text>
			{icon}
		</View>
	)
}

const styles = StyleSheet.create({
	game: {
		height: 200,
		width: 150,

		borderRadius: 20,
		backgroundColor: "#6B9080",
		display: "flex",

		alignItems: "center",
	},
	gameName: {
		marginTop: 20,
		marginBottom: 20,
		fontSize: 20,
		textAlign: "center",
		color: "#F6FFF8",
	},
})
