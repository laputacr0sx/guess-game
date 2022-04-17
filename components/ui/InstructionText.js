import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { accentColors } from '../../constants/colors';

function InstructionText({ children, style }) {
	return <Text style={[styles.text, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
	text: {
		fontFamily: 'open-sans',
		fontSize: 24,
		color: accentColors.accent300,
	},
});
