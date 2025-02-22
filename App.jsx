import React, { createRef, useEffect, useState } from "react";
import StackNavigator from "./src/Navigation/StackNavigator";
import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { getToken, removeToken } from "./src/state/helpers/auth";
import { NavigationContainer } from "@react-navigation/native";
import Toast, { BaseToast, ErrorToast, InfoToast } from "react-native-toast-message";
import { View, Text, AppState, Platform } from "react-native";
import { Icon } from "react-native-elements";
import { focusManager } from "@tanstack/react-query";
import { publicRoutes } from "./src/constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FlashMessage from "react-native-flash-message";
import FooterMenu from "./src/components/FooterMenu";

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
				text1: errorMessage,
			});
		},
	}),
});

// toast config
const toastConfig = {
	success: (props) => (
		<BaseToast
			{...props}
			style={{ borderLeftColor: "#28a745" }}
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
	info: (props) => (
		<InfoToast
			{...props}
			text1Style={{
				fontSize: 15,
				fontWeight: "400",
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

		return token || null;
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
					const route = state.routes[state.index];

					console.log(route, "++++", route.params?.hidePageFrame);

					setCurrentRoute(route);

					console.log("///", !publicRoutes.includes(currentRoute?.name) || !currentRoute?.params?.hidePageFrame)

					if (!publicRoutes.includes(route.name) && !accessToken) {
						navigationRef.current?.navigate("Login");
					}
				}}
				screenOptions={{
					contentStyle: { paddingBottom: 120 },
				}}>
				<QueryClientProvider client={queryClient}>
					{/* <ReactQueryDevtools initialIsOpen={false} /> */}
					<StackNavigator />
					{!(!publicRoutes.includes(currentRoute?.name) && currentRoute?.params?.hidePageFrame) && (
						<FooterMenu currentRoute={currentRoute} />
					)}
				</QueryClientProvider>
			</NavigationContainer>
			<Toast config={toastConfig} />
		</GestureHandlerRootView>
	);
};

export default App;
