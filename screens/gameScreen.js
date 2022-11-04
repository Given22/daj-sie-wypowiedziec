import react from "react"

import { StyleSheet, Text, View, Button } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import GameHeader from "../components/GameHeader"
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
			<View style={styles.achievmentsContainer}>
				<Text style={styles.achievments}>Osiągnięcia</Text>

				<View style={styles.streakComponent}>
					<Text style={styles.streak}>Dni nauki z rzędu: 2</Text>
				</View>
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
		display: "flex",
		alignItems: "center",
	},
	flexContainer: {
		width: "85%",
		paddingTop: 30,
		paddingBottom: 30,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",

		borderBottomColor: "#A4C3B2",
		borderStyle: "dashed",
		borderBottomWidth: 3,
	},
	achievmentsContainer: {
		marginTop: 15,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderBottomColor: "#A4C3B2",
		borderStyle: "dashed",
		borderBottomWidth: 3,
		width: "85%",
		paddingBottom: 30,
	},
	achievments: {
		fontSize: 32,
		color: "#A4C3B2",
	},
	streakComponent: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		marginTop: 20,
	},
	streak: {
		fontSize: 24,
		color: "#A4C3B2",
	},
	trophyContainer: {
		margin: 20,
	},
	trophy: {
		fontSize: 24,
		color: "#A4C3B2",
	},
})
