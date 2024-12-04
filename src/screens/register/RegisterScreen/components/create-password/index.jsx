import { ScrollView, Text, View } from "react-native";
import { styles as registerStyles } from "../../styles";
import RNSTextInput from "../../../../../components/TextInput";

function CreatePassword({ data, onChange, errors }) {
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
                error={errors.password}
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
                error={errors.password_confirmation}
				style={registerStyles.textInput}
				autoCapitalize="none"
			/>
		</ScrollView>
	);
}

export default CreatePassword;
