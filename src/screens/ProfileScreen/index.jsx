import React from "react";
import Spinner from "react-native-loading-spinner-overlay";
import globalStyles from "../../assets/globalStyles";
import Background from "../../components/Background";
import { Image, Text, Pressable, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useLogoutUser } from "../../state/hooks/mutations/user/logoutUser";
import { useQueryClient } from "@tanstack/react-query";

const items = [
	{
		id: 1,
		title: "edit profile",
		icon: require("../../assets/icon/edit.png"),
		// TODO changeable
		route_name: "edit",
	},
	{
		id: 2,
		title: "change password",
		icon: require("../../assets/icon/edit.png"),
		route_name: "edit",
	},
	{
		id: 3,
		title: "terms of use",
		icon: require("../../assets/icon/edit.png"),
		route_name: "TermsConditions",
	},
	{
		id: 4,
		title: "about metatah",
		icon: require("../../assets/icon/edit.png"),
		route_name: "AboutLearn",
	},
];

const ProfileScreen = () => {
	const queryClient = useQueryClient();

	const navigation = useNavigation();

	const logout = () => {
		mutateLogoutUser.mutate();
	};

	const mutateLogoutUser = useLogoutUser({
		onSuccess: () => {
			queryClient.clear();
			navigation.navigate("Login");
			console.log("User logged out successfully");
		},
		onError: (error) => {
			Toast.show({
				type: "error",
				text1: error.response.data.message,
			});
		},
	});

	const navigateToPage = (routeName) => {
		navigation.navigate(routeName);
	}

	return (
		<View style={globalStyles.containerFluid}>
			{/* TODO: add data loading */}
			<Spinner visible={mutateLogoutUser.isPending} />
			<View style={globalStyles.container}>
				<Background imageName="mr-bg" />
				<View style={styles.profileContainer}>
					<View style={styles.avatarBlock}>
						<View style={styles.avatar}>
							<Image
								source={require("../../assets/icon/user.png")}
								style={{
									width: 56,
									height: 56,
								}}
							/>
						</View>
						<Text style={styles.userName}>Nora Galfayan</Text>
					</View>
					<View>
						{items.map((item) => (
							<Pressable onPress={() => navigateToPage(item.route_name)}>
								<View
									key={item.id}
									style={styles.item}>
									<Image
										source={item.icon}
										style={{
											width: 28,
											height: 28,
											marginRight: 8,
										}}
									/>
									<Text style={styles.itemTitle}>
										{item.title}
									</Text>
								</View>
							</Pressable>
						))}
					</View>
					<Pressable onPress={logout}>
						<View style={styles.logout}>
							<Image
								source={require('../../assets/icon/logout-primary.png')}
								style={{
									width: 32,
									height: 32,
									marginRight: 8,
								}}
							/>
							<Text style={styles.itemTitle}>
								Log out
							</Text>
						</View>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default ProfileScreen;
