import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { Colors } from "../../../../../constants";
import { styles } from "./styles";
import { styles as registerStyles } from "../../styles";
import RNSTextInput from "../../../../../components/TextInput";

function CreatePassword({ data, onChange }) {
	return (
		<ScrollView>
			<View style={registerStyles.titleContainer}>
				<Text style={registerStyles.titleBold}>create a password</Text>
			</View>

			<RNSTextInput
				name="password"
				type="password"
				placeholder="create a strong password"
				value={data.password}
				onChangeText={(value) => onChange("password", value)}
				style={registerStyles.textInput}
				autoCapitalize="none"
			/>

			<RNSTextInput
				name="confirm-password"
				type="password"
				placeholder="confirm your password"
				value={data.password_confirmation}
				onChangeText={(value) =>
					onChange("password_confirmation", value)
				}
				style={registerStyles.textInput}
				autoCapitalize="none"
			/>

			<View style={styles.passwordFooterBlock}>
				{/* <View style={styles.rememberBlock}>
					<CheckBox
						center
						title="remember me"
						checked={data.remember}
						onPress={() => onChange("remember", !data.remember)}
						checkedColor={Colors.ui_purple}
						uncheckedColor={Colors.ui_purple}
						textStyle={styles.rememberText}
						containerStyle={styles.rememberContainer}
					/>
				</View> */}
				<View style={styles.forgotBlock}>
					<TouchableOpacity
					// onPress={onPressForgot}
					>
						<Text style={styles.forgotText}>forgot password?</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}

export default CreatePassword;
