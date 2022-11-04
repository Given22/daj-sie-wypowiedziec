import react from "react"

import { StyleSheet, Text, View, Button } from "react-native"
import GameHeader from "../components/GameHeader"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import Game from "../components/Game"

const puzzle = (
	<MaterialCommunityIcons name='puzzle' size={70} color='#F6FFF8' />
)
const question = <FontAwesome name='question' size={70} color='#F6FFF8' />
export default function GameScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<GameHeader />
			<View style={styles.flexContainer}>
				<Game name='Zgadywanka' icon={question} />
				<Game name='Układanka' icon={puzzle} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
	flexContainer: {
		paddingTop: 20,
		paddingBottom: 20,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "90%",
		borderBottomColor: "#A4C3B2",
		borderBottomWidth: 3,
		borderStyle: "dashed",
	},
})
