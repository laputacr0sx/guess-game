import React, { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import { accentColors } from './constants/colors';

export default function App() {
	const [userNumber, setUserNumber] = useState(null);
	const [gameIsOver, setGameIsOver] = useState(true);
	const [guessRounds, setGuessRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	function startnewGameHandler() {
		setUserNumber(null);
		setGuessRounds(0);
	}

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	}

	function gameOverHandler(numberOfRounds) {
		setGameIsOver(true);
		setGuessRounds(numberOfRounds);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	}

	if (gameIsOver && userNumber) {
		screen = (
			<GameOverScreen
				roundsNumber={guessRounds}
				userNumber={userNumber}
				onStartNewGame={startnewGameHandler}
			/>
		);
	}

	return (
		<LinearGradient
			colors={[accentColors.accent100, accentColors.accent500]}
			style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/images/cards.jpg')}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
