import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			data: [
				{
					city: "HO CHI MINH",
					temperature: "25",
					humidity: "70",
					status: "Windy"
				},
				{
					city: "HANOI",
					temperature: "25",
					humidity: "50",
					status: "Cloudy"
				},
				{
					city: "HA NAM",
					temperature: "30",
					humidity: "75",
					status: "Rainy"
				},
				{
					city: "DA LAT",
					temperature: "20",
					humidity: "90",
					status: "Cloudy and Sunny"
				},
				{
					city: "VUNG TAU",
					temperature: "27",
					humidity: "50",
					status: "Sunny"
				}
			]
		};
	}

	AddItemsToArray = () => {
		this.state.data.push(this.state.text.toString());
		this.setState({
			data: this.state.data
		});
	};

	delete = index => {
		const lastItem = this.state.data[index];
		this.shiftItems(index);
		this.setState({
			data: this.state.data
		});
	};

	shiftItems = index => {
		for (let i = index; i < this.state.data.length - 1; i++) {
			this.state.data[i] = this.state.data[i + 1];
		}
		delete this.state.data[this.state.data.length - 1];
		this.state.data.length--;
	};

	renderItem = ({ item, index }) => {
		return (
			<View style={{ backgroundColor: "#ffffff" }}>
				<TouchableOpacity
					style={{ flexDirection: "row" }}
					onPress={() =>
						this.props.navigation.navigate("WeatherDetails", {
							city: item.city,
							temperature: item.temperature,
							humidity: item.humidity,
							status: item.status
						})
					}
				>
					{item.status === "Sunny" ? (
						<Image
							source={require("../icons/sunny.png")}
							style={{
								width: 30,
								marginLeft: 20,
								height: 30,
								alignSelf: "center"
							}}
							resizeMode={"contain"}
						/>
					) : item.status === "Rainy" ? (
						<Image
							source={require("../icons/rainy.png")}
							style={{
								width: 30,
								marginLeft: 20,
								height: 30,
								alignSelf: "center"
							}}
							resizeMode={"contain"}
						/>
					) : item.status === "Windy" ? (
						<Image
							source={require("../icons/windy.png")}
							style={{
								width: 30,
								marginLeft: 20,
								height: 30,
								alignSelf: "center"
							}}
							resizeMode={"contain"}
						/>
					) : item.status === "Cloudy" ? (
						<Image
							source={require("../icons/cloudy.png")}
							style={{
								width: 30,
								marginLeft: 20,
								height: 30,
								alignSelf: "center"
							}}
							resizeMode={"contain"}
						/>
					) : item.status === "Cloudy and Sunny" ? (
						<Image
							source={require("../icons/cloudy_and_sunny.png")}
							style={{
								width: 30,
								marginLeft: 20,
								height: 30,
								alignSelf: "center"
							}}
							resizeMode={"contain"}
						/>
					) : (
											<Image
												source={require("../icons/cloudy_and_sunny.png")}
												style={{
													width: 30,
													marginLeft: 20,
													height: 30,
													alignSelf: "center"
												}}
												resizeMode={"contain"}
											/>
										)}

					<View style={{ marginLeft: 20, flex: 1 }}>
						<View
							key={item}
							style={{
								flexDirection: "row",
								height: 70,
								justifyContent: "space-between",
								alignItems: "center"
							}}
						>
							<View>
								<Text style={{ fontWeight: "bold" }}>{item.city}</Text>
								<View style={{ flexDirection: "row" }}>
									<Text>{item.temperature}°C</Text>
									<Text style={{ marginLeft: 5 }}>{item.humidity}%</Text>
								</View>
							</View>
							<View style={{ flexDirection: "row", justifyContent: "center" }}>
								<TouchableOpacity>
									<Image
										source={require("../icons/refresh.png")}
										resizeMode={"contain"}
										style={{ height: 20, width: 20, marginRight: 20 }}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => this.delete(index)}>
									<Image
										source={require("../icons/delete.png")}
										resizeMode={"contain"}
										style={{ height: 20, width: 20, marginRight: 20 }}
									/>
								</TouchableOpacity>
							</View>
						</View>
						<View style={{ borderWidth: 0.2 }} />
					</View>
				</TouchableOpacity>
			</View>
		);
	};

	render() {
		return (
			<ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
				<FlatList
					data={this.state.data}
					renderItem={this.renderItem}
					keyExtractor={(item, index) => index.toString()}
					extraData={this.state}
				/>

				<View style={{ borderTopWidth: 0.8, alignItems: "center" }}>
					<TouchableOpacity style={{ flex: 1, justifyContent: "center" }}>
						<Text
							style={{
								color: "#000080",
								fontSize: 20,
								alignSelf: "center",
								marginVertical: 30
							}}
						>
							+ ADD LOCATION
            </Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: "#ffffff",
		padding: 10,
		width: 300,
		marginTop: 16
	}
});
