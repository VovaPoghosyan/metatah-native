import { ScrollView, Text, View } from "react-native";
import { styles as registerStyles } from "../../styles";
import { CheckBox } from "react-native-elements";
import { Colors } from "../../../../../constants";
import { styles } from "./styles";

function Notifications({ data, onChange }) {
	return (
		<ScrollView>
			<View style={{ marginBottom: 32 }}>
				<View style={registerStyles.titleContainer}>
					<Text style={registerStyles.titleBold}>notifications</Text>
				</View>
			</View>

			<View style={{ marginBottom: 42 }}>
				<Text style={styles.checkboxLabel}>
					receive email notifications
				</Text>
				<View style={styles.notificationBlock}>
					<CheckBox
						size={26}
						title="yes"
						checked={data.email_notifications}
						onPress={() => onChange("email_notifications", 1)}
						checkedColor={Colors.ui_purple}
						uncheckedColor={Colors.ui_purple}
						textStyle={styles.checkboxText}
						containerStyle={styles.checkboxContainer}
					/>

					<CheckBox
						title="no"
						size={26}
						checked={!data.email_notifications}
						onPress={() => onChange("email_notifications", 0)}
						checkedColor={Colors.ui_purple}
						uncheckedColor={Colors.ui_purple}
						textStyle={styles.checkboxText}
						containerStyle={styles.checkboxContainer}
					/>
				</View>
			</View>

			<View>
				<Text style={styles.checkboxLabel}>
					receive app push notifications
				</Text>
				<View style={styles.notificationBlock}>
					<CheckBox
						size={26}
						title="yes"
						checked={data.push_notifications}
						onPress={() => onChange("push_notifications", 1)}
						checkedColor={Colors.ui_purple}
						uncheckedColor={Colors.ui_purple}
						textStyle={styles.checkboxText}
						containerStyle={styles.checkboxContainer}
					/>

					<CheckBox
						title="no"
						size={26}
						checked={!data.push_notifications}
						onPress={() => onChange("push_notifications", 0)}
						checkedColor={Colors.ui_purple}
						uncheckedColor={Colors.ui_purple}
						textStyle={styles.checkboxText}
						containerStyle={styles.checkboxContainer}
					/>
				</View>
			</View>
		</ScrollView>
	);
}

export default Notifications;
