import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.inputText}
				maxLength={2}
				keyboardType={'number-pad'}
			/>
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Cofirm</PrimaryButton>
		</View>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
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
		shadowOpacity: 0.22,
	},
	inputText: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderColor: '#5e002b',
		borderBottomColor: '#ddb52f',
		borderWidth: 2,
		color: '#ddb52f',
		marginVertical: 9,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

/*
#74063d
#690034
#5e002b
#530023
#48001b
#3e0012

#430017
#a73f67
#74063d
#06743d
#004715

#a12b07
#c76e14
#ddb531
#d6db59
#c0dc7f
#bcdfa2

*/
