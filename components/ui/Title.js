import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Green } from '../../constants/colors';

const Title = ({ children, style }) => {
	return (
		<View>
			<Text style={[styles.title, style]}>{children}</Text>
		</View>
	);
};

export default Title;

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 26,
		color: Green.Green800,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Green.Green800,
		padding: 12,
		maxWidth: '80%',
		width: 300,
	},
});
