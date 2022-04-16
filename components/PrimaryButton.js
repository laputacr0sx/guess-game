import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) => {
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer;
				}}
				onPress={onPress}
				android_ripple={{ color: '#48001b' }}>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		margin: 4,
		borderRadius: 28,
		paddingHorizontal: 20,
		paddingVertical: 8,
		overflow: 'hidden',
		backgroundColor: '#c76e14',
	},
	buttonInnerContainer: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
		opacity: 0.2,
	},
	buttonText: {
		color: '#c0dc7f',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.75,
	},
});
