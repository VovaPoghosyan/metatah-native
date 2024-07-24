import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants";
import { Button } from "../../components/Buttons/Button";
import { CheckBox } from "@rneui/themed";
import { useLoginUser } from "../../state/hooks/mutations/user/loginUser";
import { showMessage } from "react-native-flash-message";
import {
	getUserLoginData,
	getCheckStatus,
	storeCheckStatus,
	storeUserLoginData,
	clearUserLoginData,
} from "../../state/async-storage/asyncStorage";
import Spinner from "react-native-loading-spinner-overlay";
import RNSTextInput from "../../components/TextInput";
import globalStyles from "../../assets/globalStyles";
import Background from "../../components/Background";

const LoginScreen = () => {
	// useNavigation
	const navigation = useNavigation();

	// useState
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const [remember, setRemember] = useState(false);

	// mutation
	const mutateLoginUser = useLoginUser({
		onSuccess: () => {
			navigation.navigate("AboutWelcome");
			storeUserLoginData({ email: data.email, password: data.password });
			console.log("User logged in successfully");
		},
		onError: () => {
			showMessage({
				message: "Oops! Something went wrong.",
				type: "danger",
				floating: true,
			});
		},
	});

	// functions
	const handleLoginUser = () => {
		mutateLoginUser.mutate(data);
	};

	const onChange = (key, value) => {
		setData({ ...data, [key]: value });
	};

	const handleRemember = async () => {
		setRemember(!remember);
		await storeCheckStatus(!remember);
	};

	// useEffect
	useEffect(() => {
		const fetchValuesFromStorage = async () => {
			try {
				const { email, password } = await getUserLoginData();
				const { checkValue } = await getCheckStatus();
				setRemember(checkValue);
				setData({ ...data, email, password });
				if (!checkValue) {
					clearUserLoginData();
				}
			} catch (error) {
				console.error("Error fetching checkValue or email:", error);
			}
		};
		fetchValuesFromStorage();
	}, []);

	return (
		<View style={globalStyles.containerFluid}>
			<Spinner visible={mutateLoginUser.isPending} />
			<View style={globalStyles.container}>
				<Background imageName="mr-bg" />
				<ScrollView>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>log in</Text>
					</View>

					<RNSTextInput
						name="email"
						type="text"
						placeholder="email"
						value={data.email}
						onChangeText={(value) => onChange("email", value)}
						style={styles.textInput}
						autoCapitalize="none"
					/>

					<RNSTextInput
						name="password"
						type="password"
						placeholder="password"
						value={data.password}
						onChangeText={(value) => onChange("password", value)}
						style={styles.textInput}
						autoCapitalize="none"
					/>

					<View style={styles.buttonContainer}>
						<Button
							title="Log in"
							borderWidth={0}
							fontSize={20}
							fontWeight="bold"
							alignItems="flex-end"
							paddingHorizontal={10}
							lineHeight={24}
							type="primary"
							onPress={handleLoginUser}
							icon="chevron-right"
							isIcon
						/>
					</View>

					<View style={styles.actionsContainer}>
						<CheckBox
							center
							title="remember me"
							checked={remember}
							onPress={handleRemember}
							checkedColor={Colors.ui_purple}
							uncheckedColor={Colors.ui_purple}
							textStyle={styles.agreeText}
							containerStyle={styles.agreeContainer}
						/>

						<TouchableOpacity>
							<Text style={styles.forgot}>forgot password?</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.anotherOption}>
						<Text style={styles.anotherOptionText}>
							Already have an account?
						</Text>

						<TouchableOpacity
							onPress={() => navigation.navigate("Register")}>
							<Text style={styles.anotherOptionLink}>
								register
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default LoginScreen;
