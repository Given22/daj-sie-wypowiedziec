import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Ionicons } from '@expo/vector-icons'; 

import HomeScreen from "./screens/homeScreen"
import FirstScreen from "./screens/firstScreen"
import GameScreen from "./screens/gameScreen"

import { useFonts } from "expo-font"
import GameStack from "./components/GameStack"
// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator()

export default function App() {

  const [loaded] = useFonts({
   Itim: require('./assets/fonts/Itim-Regular.ttf'),
  });


  if (!loaded) {
    return null;
  }

	const createButton = ({iconName}) => {
		return (
			<View style={styles.button}>
				<Ionicons name={iconName} size={24} color='#CCE3DE' />
			</View>
		)
	}
	

	return (
		<NavigationContainer>
			<Tab.Navigator
				tabBarOptions={{
					showLabel: false,
          keyboardHidesTabBar: true,
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
					tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Game') {
              iconName = focused ? 'game-controller' : 'game-controller-outline';
            }

            // You can return any component that you like here!
            return createButton({iconName});
          },
				})}
				initialRouteName='Home'>
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
	)}

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight || 0,
	},
	tab: {
		backgroundColor: "red",
	},
	button: {
		backgroundColor: "#6B9080",
		// flex: 1,
		width: "70%",
		position: "absolute",
		bottom: 0,
		height: '70%',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
	},
})
