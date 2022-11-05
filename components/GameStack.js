import { createStackNavigator } from "@react-navigation/stack"
import GuessGame from "../games/GuessGame"
import PuzzleGame from "../games/PuzzleGame"
import GameScreen from "../screens/gameScreen"
const Stack = createStackNavigator()
//test
export default function GameStack() {
	return (
		<Stack.Navigator
			initialRouteName='gameScreen'
			options={{ headerShown: false }}>
			<Stack.Screen
				name='gameScreen'
				options={{ headerShown: false }}
				component={GameScreen}
			/>
			<Stack.Screen name='Zgadywanka' component={GuessGame} />
			<Stack.Screen name='Układanka' component={PuzzleGame} />
		</Stack.Navigator>
	)
}
