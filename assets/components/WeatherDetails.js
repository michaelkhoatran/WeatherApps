import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default class WeatherDetails extends React.Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = ({ navigation }) => {
		return {
			title: "Weather in " + navigation.getParam("city"),
			headerTitleStyle: {
				textAlign: "center",
				flexGrow: 1,
				alignSelf: "center"
			},
			headerStyle: {
				backgroundColor: "#000080"
			},

			headerLeft: (
				<TouchableOpacity
					style={{
						flexDirection: "row",
						marginLeft: 5,
						justifyContent: "center"
					}}
					onPress={() => navigation.goBack()}
				>
					<Image
						source={require("../icons/back.png")}
						resizeMode={"contain"}
						style={{ width: 30, height: 30 }}
						tintcolor={"#fff"}
					/>
					<Text
						style={{
							color: "white",
							fontSize: 20,
							marginLeft: 5
						}}
					>
						Back
          </Text>
				</TouchableOpacity>
			)
		};
	};

	render() {
		const city = this.props.navigation.getParam("city");
		const temperature = this.props.navigation.getParam("temperature");
		const humidity = this.props.navigation.getParam("humidity");
		const status = this.props.navigation.getParam("status");
		let image;
		if (status === "Sunny") {
			image = (
				<Image
					source={require("../icons/sunny.png")}
					style={{
						width: 100,
						marginTop: 10,
						height: 100,
						alignSelf: "center"
					}}
					resizeMode={"contain"}
				/>
			);
		} else if (status === "Windy") {
			image = (
				<Image
					source={require("../icons/windy.png")}
					style={{
						width: 100,
						marginTop: 10,
						height: 100,
						alignSelf: "center"
					}}
					resizeMode={"contain"}
				/>
			);
		} else if (status === "Rainy") {
			image = (
				<Image
					source={require("../icons/rainy.png")}
					style={{
						width: 100,
						marginTop: 10,
						height: 100,
						alignSelf: "center"
					}}
					resizeMode={"contain"}
				/>
			);
		} else if (status === "Cloudy") {
			image = (
				<Image
					source={require("../icons/cloudy.png")}
					style={{
						width: 100,
						marginTop: 10,
						height: 100,
						alignSelf: "center"
					}}
					resizeMode={"contain"}
				/>
			);
		} else if (status === "Cloudy and Sunny") {
			image = (
				<Image
					source={require("../icons/cloudy_and_sunny.png")}
					style={{
						width: 100,
						marginTop: 10,
						height: 100,
						alignSelf: "center"
					}}
					resizeMode={"contain"}
				/>
			);
		} else
			image = (
				<Image
					source={require("../icons/cloudy_and_sunny.png")}
					style={{
						width: 100,
						marginTop: 10,
						height: 100,
						alignSelf: "center"
					}}
					resizeMode={"contain"}
				/>
			);

		return (
			<View style={{ flex: 1 }}>
				<Text style={{ fontSize: 45, marginTop: 20, alignSelf: "center" }}>
					{city}
				</Text>
				<Text style={{ fontSize: 25, alignSelf: "center" }}>VIETNAM</Text>
				{image}
				<View
					style={{
						flexDirection: "row",
						marginTop: 20,
						justifyContent: "space-around"
					}}
				>
					<View>
						<Text style={{ fontSize: 45, fontWeight: "bold" }}>
							{temperature}°C
            </Text>
						<Text style={{ fontSize: 15 }}>TEMPERATURE</Text>
					</View>

					<View>
						<Text style={{ fontSize: 45, fontWeight: "bold" }}>
							{humidity}%
            </Text>
						<Text style={{ fontSize: 15 }}>HUMIDITY</Text>
					</View>
				</View>
			</View>
		);
	}
}
