import react, { useState, useEffect, useContext } from "react"

import {
	StyleSheet,
	Text,
	View,
	Button,
	ScrollView,
	TouchableOpacity,
	FlatList,
} from "react-native"

import { AntDesign } from "@expo/vector-icons"

import NoCard from "./noCard"
import Card from "./card"
import TrashCard from "./trashCard"

import { Context } from "../context/DataContext"

import useSpeech from "../hooks/useSpeech"

export default function Header() {
	const {
		sentence,
		activeSentence,
		addToSentence,
		removeFromSentence,
		removeAll,
	} = useContext(Context)
	const [text, setText] = useState(
		activeSentence.map((item) => item.name).join(" ")
	)

	const [cards, setCards] = useState(activeSentence)

	useEffect(() => {
		setText(activeSentence.map((item) => item.name).join(" "))
		setCards(activeSentence)
	}, [activeSentence, removeFromSentence])

	const pressHandler = () => {
		useSpeech(sentence, { languages: "pl-PL" })
	}

	const renderItem = ({ item }) => (
		<>
			{item ? (
				<TouchableOpacity
					onPress={() => {
						removeFromSentence(item.id)
					}}>
					<Card type={item.rodzaj} text={item.pl} />
				</TouchableOpacity>
			) : (
				<NoCard />
			)}
		</>
	)

	return (
		<View style={styles.header}>
			<View style={styles.headerTextContent}>
				<ScrollView horizontal style={styles.sentenceContener}>
					<Text style={styles.sentence}>{sentence}</Text>
				</ScrollView>
			</View>
			<TouchableOpacity onPress={pressHandler}>
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
			<View style={styles.cardContener}>
				{cards.length > 0 ? (
					<View style={styles.cardList}>
						<TouchableOpacity onPress={removeAll}>
							<TrashCard />
						</TouchableOpacity>
						<FlatList
							data={cards}
							renderItem={renderItem}
							horizontal={true}
							keyExtractor={(item) => item.id}
						/>
					</View>
				) : (
					<NoCard />
				)}
			</View>
		</View>
	)
}




const styles = StyleSheet.create({
	header: {
		height: 250,
		backgroundColor: "#A4C3B2",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	headerTextContent: {
		padding: 30,
		paddingBottom: 20,
		paddingTop: 45,
		marginLeft: 32,
		marginRight: 32,
		backgroundColor: "#EAF4F4",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	sentence: {
		fontSize: 20,
		color: "#6B9080",
		minWidth: "100%",
	},
	sentenceContener: {
		borderColor: "#A4C3B2",
		borderStyle: "solid",
		borderBottomWidth: 2,
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
})
