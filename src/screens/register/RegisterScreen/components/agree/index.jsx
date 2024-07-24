import { ScrollView, Text, View } from "react-native";
import { styles as registerStyles } from "../../styles";
import { CheckBox } from "react-native-elements";
import { Colors } from "../../../../../constants";
import { styles } from "./styles";
import { useState } from "react";

function Agree({
	agreeToTerms,
	setAgreeToTerms,
	agreeToPrivacyPolicy,
	setAgreeToPrivacyPolicy,
}) {
	
	return (
		<ScrollView>
			<View style={{ marginBottom: 32 }}>
				<View style={registerStyles.titleContainer}>
					<Text style={registerStyles.titleBold}>
						create an account
					</Text>
				</View>
			</View>

			<View style={{ marginTop: 56 }}>
				<Text style={styles.checkboxLabel}>
					by creating an account,
				</Text>
				<Text style={styles.checkboxLabel}>you agree to our</Text>
				<CheckBox
					size={26}
					title="terms and conditions and"
					checked={agreeToTerms}
					onPress={() => setAgreeToTerms(!agreeToTerms)}
					checkedColor={Colors.ui_purple}
					uncheckedColor={Colors.ui_purple}
					textStyle={styles.checkboxText}
					containerStyle={styles.checkboxContainer}
				/>
				<CheckBox
					title="privacy policy"
					size={26}
					checked={agreeToPrivacyPolicy}
					onPress={() =>
						setAgreeToPrivacyPolicy(!agreeToPrivacyPolicy)
					}
					checkedColor={Colors.ui_purple}
					uncheckedColor={Colors.ui_purple}
					textStyle={styles.checkboxText}
					containerStyle={styles.checkboxContainer}
				/>
			</View>
		</ScrollView>
	);
}

export default Agree;
