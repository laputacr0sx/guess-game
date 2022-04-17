import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

import { Orange } from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
	return (
		<View style={styles.rootContainer}>
			<Title>Game Over!</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/success.jpg')}
				/>
			</View>
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.highligh}>{roundsNumber}</Text>{' '}
				round to guess the number{' '}
				<Text style={styles.highligh}>{userNumber}</Text>.
			</Text>
			<PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
		</View>
	);
}

export default GameOverScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: Orange.Orange700,
		overflow: 'hidden',
		margin: 36,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 24,
	},
	highligh: {
		fontFamily: 'open-sans-bold',
		color: Orange.Orange200,
	},
});
