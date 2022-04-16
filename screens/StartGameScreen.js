import { StyleSheet, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';

import PrimaryButton from '../components/PrimaryButton';

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
		<View style={styles.interactiveContainer}>
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
		</View>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	interactiveContainer: {
		alignItems: 'center',
		marginHorizontal: 24,
		borderRadius: 8,
		padding: 18,
		marginTop: 100,
		backgroundColor: '#5e002b',
		elevation: 4,
		// adding shadow around a view
		shadowColor: 'black',
		shadowOffset: { width: 10, height: 10 },
		shadowRadius: 10,
		shadowOpacity: 0.25,
	},
	inputText: {
		height: 50,
		width: 60,
		fontSize: 32,
		borderColor: '#5e002b',
		borderBottomColor: '#ddb52f',
		borderWidth: 2,
		color: '#ddb52f',
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
#74063d
#690034
#5e002b
#530023
#48001b
#3e0012

#430017
#74063d
#a73f67
#06743d
#004715

#a12b07
#c76e14
#ddb531
#d6db59
#c0dc7f
#bcdfa2

*/
