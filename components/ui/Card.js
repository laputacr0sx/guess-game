import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

import { plumpColors, accentColors } from '../../constants/colors';

function Card({ children }) {
	return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
	card: {
		alignItems: 'center',
		marginHorizontal: 24,
		borderRadius: 8,
		padding: 18,
		marginTop: 36,
		backgroundColor: plumpColors.primary300,
		elevation: 4,

		// adding shadow around a view
		shadowColor: 'black',
		shadowOffset: { width: 10, height: 10 },
		shadowRadius: 10,
		shadowOpacity: 0.25,
	},
});
