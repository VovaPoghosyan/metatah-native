import React, { useState } from "react";
import Toast from "react-native-toast-message";
import RNSTextInput from "../../../components/TextInput";
import Spinner from "react-native-loading-spinner-overlay";
import Background from "../../../components/Background";
import globalStyles from "../../../assets/globalStyles";
import * as validators from "../../../state/utils/validation";
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
	const [errors, setErrors] = useState({
		old_password: '',
		password: '',
		password_confirmation: '',
	});

	// mutations
	const mutateChangePassword = useUpdatePassword({
		onSuccess: (data) => {
			Toast.show({
				type: "success",
				text1: "Password updated successfully",
			});
			navigation.navigate("Profile");
			console.log("Updated successfully", data);
		},
		onError: (error) => {
			setErrors(error.response.data.data);
		},
	});

	// functions
	const onChange = (key, value) => {
		setData({ ...data, [key]: value });

		if (key in errors) {
			setErrors({ ...errors, [key]: "" });
		}
	};

	const validatePassword = () => {
		let validationErrors = {};
		const { old_password, password, password_confirmation } = data;

		if (!old_password || !password || !password_confirmation) {
			Toast.show({
				type: "info",
				text1: "Please fill out all the fields",
			});
			return;
		}

		if (!validators.validateMinLength(password)) {
			validationErrors.password = "password must be at least 8 characters";
		} else if (!validators.validateLowercase(password)) {
			validationErrors.password =
				"password must contain at least one lowercase";
		} else if (!validators.validateUppercase(password)) {
			validationErrors.password =
				"password must contain at least one uppercase";
		} else if (!validators.validateSymbol(password)) {
			validationErrors.password = "password must contain at least one symbol";
		}

		if (password !== password_confirmation) {
			validationErrors.password_confirmation = "passwords do not match";
		}

		setErrors(validationErrors);
		return Object.keys(errors).length === 0;
	};

	const handleUpdatePassword = () => {
		if (!validatePassword()) return;

		mutateChangePassword.mutate(data);
	}

	return (
		<View style={globalStyles.containerFluid}>
			<Spinner visible={mutateChangePassword.isLoading} />
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
							error={errors.old_password}
							style={styles.textInput}
							autoCapitalize="none"
						/>
						<RNSTextInput
							name="password"
							type="password"
							placeholder="new password"
							value={data.password}
							onChangeText={(value) => onChange("password", value)}
							error={errors.password}
							style={styles.textInput}
							autoCapitalize="none"
						/>
						<RNSTextInput
							name="password_confirmation"
							type="password"
							placeholder="confirm new password"
							value={data.password_confirmation}
							onChangeText={(value) => onChange("password_confirmation", value)}
							error={errors.password_confirmation}
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
