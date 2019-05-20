import React from "react";
import { Animated, Text, View } from "react-native";

let randomHex = () => {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

export default class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.Animation = new Animated.Value(0);
		this.state = {
			backgroundColor: randomHex()
		};
	}

	componentDidMount() {
		this.StartBackgroundColorAnimation();
	}

	StartBackgroundColorAnimation = () => {
		this.Animation.setValue(0);

		Animated.timing(this.Animation, {
			toValue: 1,
			duration: 3000
		}).start(() => {
			this.StartBackgroundColorAnimation();
		});
	};

	static navigationOptions = ({ navigation }) => {
		return {
			header: null
		};
	};
	render() {
		const BackgroundColorConfig = this.Animation.interpolate({
			inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
			outputRange: [
				"#FFEB3B",
				"#CDDC39",
				"#009688",
				"#03A9F4",
				"#3F51B5",
				"#98FFFC"
			]
		});

		return (
			<View style={{ flex: 1, backgroundColor: "#ffffff" }}>
				<View style={{ marginLeft: 10 }}>
					<Text
						style={{
							marginTop: 70,
							color: "#cb58d8",
							fontSize: 25,
							fontWeight: "bold"
						}}
					>
						Weather
          </Text>
					<Text
						style={{
							fontSize: 20,
							color: "#000",
							marginTop: 20,
							fontWeight: "bold"
						}}
					>
						Temperature
          </Text>
					<Text style={{ marginTop: 5, fontSize: 16 }}>
						Current Information: °C
          </Text>

					<Text
						style={{
							fontSize: 20,
							color: "#000",
							marginTop: 15,
							fontWeight: "bold"
						}}
					>
						Network Refresh
          </Text>
					<Text style={{ marginTop: 5, fontSize: 16 }}>
						Current Information: Real-time
          </Text>

					<Text
						style={{
							marginTop: 25,
							color: "#cb58d8",
							fontSize: 25,
							fontWeight: "bold"
						}}
					>
						ABOUT
          </Text>
					<Text
						style={{
							fontSize: 20,
							color: "#000",
							marginTop: 20,
							fontWeight: "bold"
						}}
					>
						TRAN NGUYEN DANG KHOA | 1552175
          </Text>

					{/* <View style={{ marginTop: 20, flexDirection: "row" }}>
						<View>
							<Text style={{ fontSize: 30, fontWeight: "bold" }}>Student Name:</Text>
							<Text style={{ fontSize: 30, fontWeight: "bold" }}>Student ID:</Text>
						</View>

						<View>
							<Animated.Text
								style={{
									fontWeight: "bold",
									fontSize: 30,
									marginLeft: 20,
									color: BackgroundColorConfig
								}}
							>
								TRAN NGUYEN DANG KHOA
              </Animated.Text>

							<Animated.Text
								style={{
									fontWeight: "bold",
									fontSize: 30,
									marginLeft: 20,
									color: BackgroundColorConfig
								}}
							>
								1552175
              </Animated.Text>
						</View>
					</View> */}
				</View>
			</View>
		);
	}
}
