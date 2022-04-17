import { StyleSheet, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

import { Feather } from '@expo/vector-icons';
import { accentColors } from '../constants/colors';

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);

	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver();
		}
	}, [currentGuess, userNumber, onGameOver]);

	function nextGuesshandler(direction) {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert("Don't Lie!", 'You know that this is wrong ...');
			return;
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newRndNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRndNumber);
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>
					Higher or Lower?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuesshandler.bind(this, 'lower')}>
							<Feather name='minus' size={48} color={accentColors.accent600} />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuesshandler.bind(this, 'greater')}>
							<Feather name='plus' size={48} color={accentColors.accent600} />
						</PrimaryButton>
					</View>
				</View>
			</Card>
			{/* <View>LOG ROUNDS</View> */}
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	instructionText: { marginBottom: 12 },
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	buttonContainer: { flex: 1 },
});
