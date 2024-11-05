import React, { useEffect, useRef } from "react";
import StackNavigator from "./src/Navigation/StackNavigator";
import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { getToken } from "./src/state/helpers/auth";
import { NavigationContainer } from "@react-navigation/native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { View, Text, AppState, Platform } from "react-native";
import { Icon } from "react-native-elements";
import { focusManager } from "@tanstack/react-query";
import { Colors } from "./src/constants";
import FlashMessage from "react-native-flash-message";

// queryClient
const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) =>
			Toast.show({
				type: "error",
				text1: "Something went wrong",
				text2: error,
				text1Style: {
					fontSize: 20,
					fontWeight: "400",
					color: Colors.ui_purple,
				},
				text2Style: {
					fontSize: 16,
					fontWeight: "400",
					color: Colors.ui_purple,
				},
			}),
	}),
});

// toast config
const toastConfig = {
	success: (props) => (
		<BaseToast
			{...props}
			style={{ borderLeftColor: "pink" }}
			contentContainerStyle={{ paddingHorizontal: 15 }}
			text1Style={{
				fontSize: 15,
				fontWeight: "400",
			}}
		/>
	),
	error: (props) => (
		<ErrorToast
			{...props}
			text1Style={{
				fontSize: 17,
			}}
			text2Style={{
				fontSize: 15,
			}}
		/>
	),
	customErrorToast: ({ text1, text2 }) => (
		<View
			style={{
				padding: 24,
				width: "100%",
				flexDirection: "row",
				alignItems: text2 ? "flex-start" : "center",
				// backgroundColor: "#D82424",
			}}>
			<Icon
				name="error"
				type="material"
				size={25}
				style={{ marginRight: 12, height: 36 }}
				color="#D82424"
			/>
			<View>
				<Text
					style={{
						color: "#D82424",
						fontSize: 17,
						fontWeight: "700",
					}}>
					{text1}
				</Text>
				<Text
					style={{
						color: "#D82424",
						fontSize: 15,
						fontWeight: "500",
						marginTop: text2 ? 12 : 0,
					}}>
					{text2}
				</Text>
			</View>
		</View>
	),
};

const App = () => {
	// useRef
	const navigationRef = useRef(null);

	// functions
	function onAppStateChange(status) {
		if (Platform.OS !== "web") {
			console.log("test focus");
			focusManager.setFocused(status === "active");
		}
	}

	const checkToken = async () => {
		const token = await getToken();

		return token;
	};

	// useEffect
	useEffect(() => {
		const subscription = AppState.addEventListener(
			"change",
			onAppStateChange
		);

		return () => subscription.remove();
	}, []);

	// constants
	const publicRoutes = ["Login", "Register", "TermsConditions", "PrivacyPolicy"];

	return (
		<>
			<FlashMessage position="top" />
			<NavigationContainer
				ref={navigationRef}
				onStateChange={async (state) => {
					const accessToken = await checkToken();
					const routeName = state.routes[state.index].name;

					if (!publicRoutes.includes(routeName) && !accessToken) {
						navigationRef.current?.navigate("Login");
					}
				}}>
				<QueryClientProvider client={queryClient}>
					{/* <ReactQueryDevtools initialIsOpen={false} /> */}
					<StackNavigator />
				</QueryClientProvider>
			</NavigationContainer>
			<Toast config={toastConfig} />
		</>
	);
};

export default App;
