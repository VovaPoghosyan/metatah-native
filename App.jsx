import React, { createRef, useEffect, useState } from "react";
import StackNavigator from "./src/Navigation/StackNavigator";
import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { getToken, removeToken } from "./src/state/helpers/auth";
import { NavigationContainer } from "@react-navigation/native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { View, Text, AppState, Platform } from "react-native";
import { Icon } from "react-native-elements";
import { focusManager } from "@tanstack/react-query";
import { Colors, publicRoutes } from "./src/constants";
import FlashMessage from "react-native-flash-message";
import FooterMenu from "./src/components/FooterMenu";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const navigationRef = createRef();

const redirectToLoginPage = (errorMessage) => {
	if (errorMessage.includes("Unauthenticated")) {
		removeToken();
		navigationRef.current?.navigate("Login");
	}
};

// queryClient
const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => {
			const errorMessage =
				error?.response?.data?.message ||
				error?.message ||
				"Unknown error";

			redirectToLoginPage(errorMessage);

			Toast.show({
				type: "error",
				text1: "API Error",
				text2: errorMessage,
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
			});
		},
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
	const [currentRoute, setCurrentRoute] = useState(null);

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

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<FlashMessage position="top" />
			<NavigationContainer
				ref={navigationRef}
				onStateChange={async (state) => {
					const accessToken = await checkToken();
					const routeName = state.routes[state.index].name;

					setCurrentRoute(routeName);

					if (!publicRoutes.includes(routeName) && !accessToken) {
						navigationRef.current?.navigate("Login");
					}
				}}
				screenOptions={{
					contentStyle: { paddingBottom: 120 }, // Applying padding to the screen
				}}>
				<QueryClientProvider client={queryClient}>
					{/* <ReactQueryDevtools initialIsOpen={false} /> */}
					<StackNavigator />
					{!publicRoutes.includes(currentRoute) && (
						<FooterMenu currentRoute={currentRoute} />
					)}
				</QueryClientProvider>
			</NavigationContainer>
			<Toast config={toastConfig} />
		</GestureHandlerRootView>
	);
};

export default App;
