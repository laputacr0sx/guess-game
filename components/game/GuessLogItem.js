import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Orange } from '../../constants/colors';

function GuessLogItem({ roundNumber, guess }) {
	return (
		<View style={styles.listItem}>
			<Text style={styles.itemText}>#{roundNumber}</Text>
			<Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
		</View>
	);
}

export default GuessLogItem;

const styles = StyleSheet.create({
	listItem: {
		flex: 1,
		borderColor: Orange.Orange100,
		borderWidth: 1,
		borderRadius: 40,
		padding: 12,
		marginVertical: 4,
		backgroundColor: Orange.Orange900,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	itemText: {
		fontFamily: 'open-sans',
	},
});
