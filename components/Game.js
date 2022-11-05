import react from "react"

import {
	StyleSheet,
	Text,
	View,
	Button,
	ScrollView,
	TouchableOpacity,
} from "react-native"

export default function Game({ name, icon, handle }) {
	return (
		<TouchableOpacity style={styles.game} onPress={handle}>
			<Text style={styles.gameName}>{name}</Text>
			{icon}
		</TouchableOpacity>
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
		fontFamily: 'Itim',
		marginTop: 20,
		marginBottom: 20,
		fontSize: 20,
		textAlign: "center",
		color: "#F6FFF8",
	},
})
