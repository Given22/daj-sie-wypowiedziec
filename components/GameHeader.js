import react from "react"
import { StatusBar } from "expo-status-bar"

import { StyleSheet, Text, View, Button, ScrollView } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function GameHeader() {
	return (
		<View style={styles.header}>
			<MaterialCommunityIcons
				style={styles.icon}
				name='gamepad-variant'
				size={100}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 150,
		width: "100%",
		backgroundColor: "#A4C3B2",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderTopWidth: 0,
		elevation: 8,
		marginTop: 32,
	},

	icon: {
		color: "#F6FFF8",
	},
})
