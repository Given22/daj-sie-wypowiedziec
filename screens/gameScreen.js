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
			<View style={styles.achievementsContainer}>
				<Text style={styles.achievements}>Osiągnięcia</Text>
				<Text style={styles.streak}>Dni z rzędu: 2</Text>
			</View>
			<View style={styles.trophyContainer}>
				<Text style={styles.trophy}>Trofea</Text>
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
	achievementsContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 20,
		paddingBottom: 20,
		width: "90%",
		borderBottomColor: "#A4C3B2",
		borderBottomWidth: 3,
		borderStyle: "dashed",
	},
	achievements: {
		fontSize: 32,
		color: "#A4C3B2",
	},
	streak: {
		marginTop: 10,
		fontSize: 24,
		color: "#A4C3B2",
	},
	trophy: {
		fontSize: 32,
		color: "#A4C3B2",
	},
	trophyContainer: {
		paddingTop: 20,
	},
})
