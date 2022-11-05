import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "./screens/homeScreen"
import FirstScreen from "./screens/firstScreen"
import GameScreen from "./screens/gameScreen"

import { useFonts } from "expo-font"
import GameStack from "./components/GameStack"
// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator()

export default function App() {
	const [loaded] = useFonts({
		Itim: require("./assets/fonts/Itim-Regular.ttf"),
	})

	if (!loaded) {
		return null
	}

	return (
		<NavigationContainer>
			<Tab.Navigator
				tabBarOptions={{
					showLabel: false,
				}}
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarStyle: {
						height: 60,
						backgroundColor: "#A4C3B2",
						position: "absolute",
						borderTopWidth: 0,
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
					},
				})}
				initialRouteName='Game'>
				<Tab.Screen
					options={{ headerShown: false }}
					name='First'
					component={FirstScreen}
				/>
				<Tab.Screen
					options={{ headerShown: false }}
					name='Home'
					component={HomeScreen}
				/>
				<Tab.Screen
					options={{ headerShown: false }}
					name='Game'
					component={GameStack}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	tab: {
		backgroundColor: "red",
	},
})
