import React, { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import globalStyles from "../../../assets/globalStyles";
import Background from "../../../components/Background";
import { Image, Text, Pressable, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useLogoutUser } from "../../../state/hooks/mutations/user/logoutUser";
import { useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../state/hooks/query/user/useUser";
import { API_URL } from "../../../state/utils/constants";

const items = [
	{
		id: 1,
		title: "edit profile",
		icon: require("../../../assets/icon/edit.png"),
		route_name: "EditProfile",
	},
	{
		id: 2,
		title: "change password",
		icon: require("../../../assets/icon/locker.png"),
		// TODO: changeable
		route_name: "edit",
	},
	{
		id: 3,
		title: "terms of use",
		icon: require("../../../assets/icon/terms.png"),
		route_name: "TermsConditions",
	},
	{
		id: 4,
		title: "about metatah",
		icon: require("../../../assets/icon/about.png"),
		route_name: "AboutLearn",
	},
];

const ProfileScreen = () => {
	// useQueryClient
	const queryClient = useQueryClient();

	// useNavigation
	const navigation = useNavigation();

	// useState
	const [enableUserQuery, setEnableUserQuery] = useState(true);

	// query
	const { data, isLoading, isFetching } = useUser({ enabled: enableUserQuery });

	// mutations
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

	// functions
	const logout = () => {
		setEnableUserQuery(false)
		mutateLogoutUser.mutate();
	};

	const navigateToPage = (routeName) => {
		navigation.navigate(routeName);
	}

	return (
		<View style={globalStyles.containerFluid}>
			<Spinner visible={isLoading || isFetching || mutateLogoutUser.isPending} />
			{data && (
				<View style={globalStyles.container}>
					<Background imageName="mr-bg" />
					<View style={styles.profileContainer}>
						<View style={styles.avatarBlock}>
							<View style={styles.avatar}>
								{data.profile_picture ? (
									<Image
										source={{ uri: `${API_URL}/${data.profile_picture}` }}
										style={{
											width: '100%',
											height: '100%',
										}}
									/>
								) : (
									<Image
										source={require("../../../assets/icon/user-primary.png")}
										style={{
											width: 56,
											height: 56,
										}}
									/>
								)}
							</View>
							<Text style={styles.userName}>{data?.first_name} {data?.last_name}</Text>
						</View>
						<View>
							{items.map((item) => (
								<Pressable
									key={item.id}
									onPress={() => navigateToPage(item.route_name)}
								>
									<View style={styles.item}>
										<Image
											source={item.icon}
											style={{
												width: 24,
												height: 24,
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
									source={require('../../../assets/icon/logout.png')}
									style={{
										width: 28,
										height: 28,
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
			)}
		</View>
	);
};

export default ProfileScreen;
