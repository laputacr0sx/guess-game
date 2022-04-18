import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	useWindowDimensions,
} from 'react-native';
import React from 'react';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

import { Orange } from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
	const { width, height } = useWindowDimensions();

	let imageSize = 300;

	if (width < 300) {
		imageSize = 150;
	}
	if (height < 500) {
		imageSize = 80;
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};

	let content = (
		<>
			<View style={styles.rootContainerLandscape}>
				<Title>Game Over!</Title>
				<View style={styles.elementsContainerLandscape}>
					<View style={[styles.imageContainer, imageStyle]}>
						<Image
							style={styles.image}
							source={require('../assets/images/success.jpg')}
						/>
					</View>
					<Text style={styles.summaryText}>
						Your phone needed{' '}
						<Text style={styles.highligh}>{roundsNumber}</Text> round to guess
						the number <Text style={styles.highligh}>{userNumber}</Text>.
					</Text>
					<PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
				</View>
			</View>
		</>
	);

	let portraitContent = (
		<>
			<View style={styles.rootContainer}>
				<Title>Game Over!</Title>
				<View style={[styles.imageContainer, imageStyle]}>
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
		</>
	);

	return <>{height < 500 ? content : portraitContent}</>;
}

export default GameOverScreen;

const styles = StyleSheet.create({
	rootContainerLandscape: { flex: 1 },
	elementsContainerLandscape: { flex: 1, flexDirection: 'row' },
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
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
		overflow: 'scroll',
	},
	highligh: {
		fontFamily: 'open-sans-bold',
		color: Orange.Orange200,
	},
});
