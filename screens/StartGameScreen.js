import { StyleSheet, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

import { plumpColors, accentColors } from '../constants/colors';

function StartGameScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState('');

	function numberInputHandler(enteredText) {
		setEnteredNumber(enteredText);
	}

	function resetInputHandler() {
		setEnteredNumber('');
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
			Alert.alert(
				'Invlid Input from player',
				'Input has to be a number between 1 and 99',
				[{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
			);
			return;
		}

		onPickNumber(chosenNumber);
	}

	return (
		<View style={styles.rootContainer}>
			<Title>Guess My Number</Title>
			<Card>
				<InstructionText>Enter a Number</InstructionText>
				<TextInput
					style={styles.inputText}
					maxLength={2}
					keyboardType={'number-pad'}
					value={enteredNumber}
					onChangeText={numberInputHandler}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>Cofirm</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center',
	},
	inputText: {
		height: 50,
		width: 60,
		fontSize: 32,
		borderColor: plumpColors.primary300,
		borderBottomColor: accentColors.accent300,
		borderWidth: 2,
		color: accentColors.accent300,
		marginVertical: 9,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	buttonContainer: { flex: 1 },
});

/*



*/
