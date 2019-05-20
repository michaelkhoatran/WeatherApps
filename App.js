import React from "react";
import { Image } from "react-native";
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import Controls from "./assets/components/Controls";
import Home from "./assets/components/Home";
import Settings from "./assets/components/Settings";
import WeatherDetails from "./assets/components/WeatherDetails";

const HomeStack = createStackNavigator(
	{
		Home: { screen: Home },
		WeatherDetails: { screen: WeatherDetails }
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#000080"
			},
			headerTitleStyle: {
				textAlign: "center",
				flexGrow: 1,
				alignSelf: "center"
			},
			headerTintColor: "#ffffff",
			title: "Weather Apps"
		}
	}
);

const ControlsStack = createStackNavigator(
	{
		Controls: { screen: Controls }
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#000080"
			},
			headerTintColor: "#ffffff",
			title: "Controls"
		}
	}
);

const SettingsStack = createStackNavigator(
	{
		Settings: { screen: Settings }
	},
	{
		tabBarOptions: {
			activeBackgroundColor: "#000080",
			inactiveBackgroundColor: "#000080"
		}
	}
);

const App = createBottomTabNavigator(
	{
		"Weather Details": { screen: HomeStack },
		Controls: { screen: ControlsStack },
		Settings: { screen: SettingsStack }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === "Weather Details") {
					iconName = require("./assets/icons/cloudy_and_sunny.png");
				} else if (routeName === "Controls") {
					iconName = require("./assets/icons/controls.png");
				} else if (routeName === "Settings") {
					iconName = require("./assets/icons/settings.png");
				}
				return (
					<Image
						source={iconName}
						resizeMode={"contain"}
						style={{ width: 20, height: 20, tintColor: "#ffffff" }}
					/>
				);
			}
		}),
		tabBarOptions: {
			showIcon: true,
			activeTintColor: "#ffffff",
			inactiveTintColor: "#808080",
			activeBackgroundColor: "#000080",
			inactiveBackgroundColor: "#000080",
			labelStyle: {
				fontSize: 12
			}
		}
	}
);

export default createAppContainer(App);
