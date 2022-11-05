import react, { useEffect, useState } from "react"
import { data } from "../components/words"
import {
	StyleSheet,
	Text,
	View,
	Button,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

export default function GuessGame() {
	const [imageToPlay, setImageToPlay] = useState({})
	const [shuffledAns, setShuffledAns] = useState([])
	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
		return array
	}

	function pickImage() {
		const randomIndex = Math.floor(Math.random() * data.length)

		const answers = []

		for (let i = 0; i < 3; i++) {
			const random = Math.floor(Math.random() * data.length)
			answers.push(data[random].pl)
		}
		const img = data.filter((card, index) => {
			if (index === randomIndex) {
				if (card?.link == undefined) {
					pickImage()
				} else if (card.pl.split(" ").length >= 2) {
					pickImage()
				} else {
					answers.push(card.pl)
					return true
				}
			} else {
				return false
			}
		})
		console.log(img[0] == undefined)
		setShuffledAns(shuffle(answers))
		if (img[0] == undefined) {
			return pickImage()
		} else {
			return img[0]
		}
	}

	useEffect(() => {
		setImageToPlay(pickImage)
	}, [])

	function checkAnswer(userAnswer) {
		if (imageToPlay?.pl == undefined) {
			pickImage()
		} else {
			if (imageToPlay.pl === userAnswer) {
				setImageToPlay(pickImage())
			} else {
				setShuffledAns((prevAns) =>
					prevAns.filter((ans) => {
						return ans === userAnswer ? false : true
					})
				)
			}
		}
	}

	const ansObj = shuffledAns.map((ans) => {
		return (
			<TouchableOpacity
				style={styles.answer}
				onPress={() => {
					checkAnswer(ans)
				}}>
				<Text style={{color: "#6B9080",
		fontFamily: "Itim", fontSize: 24}}>{ans}</Text>
			</TouchableOpacity>
		)
	})
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={imageToPlay?.link} style={styles.img} />
			</View>
			<View style={styles.answers}>{ansObj}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	imageContainer: {
		width: 250,
		height: 250,
	},
	img: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	answers: {
		marginTop: 10,
		padding: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
	},
	answer: {
		margin: 15,
		width: 150,
		height: 75,
		backgroundColor: "#A4C3B2",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
	},
})
