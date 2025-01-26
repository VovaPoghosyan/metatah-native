import React, { useState } from "react";
import Toast from "react-native-toast-message";
import RNSTextInput from "../../../components/TextInput";
import Spinner from "react-native-loading-spinner-overlay";
import Background from "../../../components/Background";
import globalStyles from "../../../assets/globalStyles";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUpdatePassword } from "../../../state/hooks/mutations/user/updatePassword";
import { styles } from "./styles";

const ChangePasswordScreen = () => {
	// useNavigation
	const navigation = useNavigation();

	// useState
	const [data, setData] = useState({
		old_password: '',
		password: '',
		password_confirmation: '',
	});

	// mutations
	const mutateChangePassword = useUpdatePassword({
		onSuccess: () => {
			Toast.show({
				type: "success",
				text1: "Password updated successfully",
			});
			navigation.navigate("Profile")
		},
		onError: (error) => {
			Toast.show({
				type: "error",
				text1: error.response.data.message,
			});
		},
	});

	// functions
	const onChange = (key, value) => {
		setData({ ...data, [key]: value });
	};

	const handleUpdatePassword = () => {
		mutateChangePassword.mutate(data);
	}

	return (
		<View style={globalStyles.containerFluid}>
			{/* TODO: add mutation loading */}
			<Spinner visible={false} />
			<View style={globalStyles.container}>
				<Background imageName="mr-bg" />
				<View style={styles.passwordContainer}>
					<View>
						<RNSTextInput
							name="old_password"
							type="password"
							placeholder="old password"
							value={data.old_password}
							onChangeText={(value) => onChange("old_password", value)}
							style={styles.textInput}
							autoCapitalize="none"
						/>
						<RNSTextInput
							name="password"
							type="password"
							placeholder="new password"
							value={data.password}
							onChangeText={(value) => onChange("password", value)}
							style={styles.textInput}
							autoCapitalize="none"
						/>
						<RNSTextInput
							name="password_confirmation"
							type="password"
							placeholder="confirm new password"
							value={data.password_confirmation}
							onChangeText={(value) => onChange("password_confirmation", value)}
							style={styles.textInput}
							autoCapitalize="none"
						/>
					</View>
					<View style={styles.footer}>
						<Pressable onPress={() => navigation.navigate("Profile")}>
							<Text style={styles.footerText}>cancel</Text>
						</Pressable>
						<Pressable onPress={handleUpdatePassword}>
							<Text style={styles.footerText}>save</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ChangePasswordScreen;
