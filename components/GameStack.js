import { createStackNavigator } from "@react-navigation/stack"
import GuessGame from "../games/GuessGame"
import PuzzleGame from "../games/PuzzleGame"
import GameScreen from "../screens/gameScreen"
const Stack = createStackNavigator()

export default function GameStack() {
	return (
		<Stack.Navigator initialRouteName='gameScreen'>
			<Stack.Screen name='gameScreen' component={GameScreen} />
			<Stack.Screen name='Guess' component={GuessGame} />
			<Stack.Screen name='Puzzle' component={PuzzleGame} />
		</Stack.Navigator>
	)
}
