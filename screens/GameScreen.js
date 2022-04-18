import {
	StyleSheet,
	View,
	Alert,
	FlatList,
	useWindowDimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';

import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

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
	const [guessRounds, setGuessRounds] = useState([initialGuess]);
	const { width, height } = useWindowDimensions();

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRounds.length);
		}
	}, [currentGuess, userNumber, onGameOver]);

	useEffect(() => {
		(minBoundary = 1), (maxBoundary = 100);
	}, []);

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
		setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
	}

	const guessRoundsListLength = guessRounds.length;

	let content = (
		<>
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
		</>
	);

	if (width > 500) {
		content = (
			<>
				<View style={styles.buttonsContainerWide}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuesshandler.bind(this, 'lower')}>
							<Feather name='minus' size={48} color={accentColors.accent600} />
						</PrimaryButton>
					</View>
					<NumberContainer>{currentGuess}</NumberContainer>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuesshandler.bind(this, 'greater')}>
							<Feather name='plus' size={48} color={accentColors.accent600} />
						</PrimaryButton>
					</View>
				</View>
			</>
		);
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{content}
			<View style={styles.listContainer}>
				<FlatList
					data={guessRounds}
					renderItem={({ item, index }) => (
						<GuessLogItem
							roundNumber={guessRoundsListLength - index}
							guess={item}
						/>
					)}
					keyExtractor={(item) => {
						return item;
					}}
				/>
			</View>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
		alignItems: 'center',
	},
	instructionText: { marginBottom: 12 },
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	buttonsContainerWide: { flexDirection: 'row', alignItems: 'center' },
	buttonContainer: { flex: 1 },
	listContainer: {
		flex: 1,
		padding: 16,
	},
});
