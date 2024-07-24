import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles as registerStyles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

function ReadTerms() {
	const navigation = useNavigation();

	return (
		<ScrollView>
			<View style={{ marginBottom: 100 }}>
				<View style={registerStyles.titleContainer}>
					<Text style={registerStyles.titleBold}>
						terms & conditions
					</Text>
				</View>
			</View>
			<View>
				<Text style={styles.text}>please read and accept our</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate("TermsConditions")}>
					<Text style={styles.textLink}>terms and conditions</Text>
				</TouchableOpacity>
				<Text style={styles.text}>and</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate("PrivacyPolicy")}>
					<Text style={styles.textLink}>privacy policy</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

export default ReadTerms;
