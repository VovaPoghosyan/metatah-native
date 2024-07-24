import { ScrollView, Text, View } from "react-native";
import { languagesData, timezonesData } from "../../../../../constants";
import { styles as registerStyles } from "../../styles";
import Select from "../../../../../components/Select";

function Preferences({ data, onChange }) {
	return (
		<ScrollView>
			<View style={{ marginBottom: 32 }}>
				<View style={registerStyles.titleContainer}>
					<Text style={registerStyles.titleBold}>preferences</Text>
				</View>
			</View>

			<View style={{ marginBottom: 32 }}>
				<Select
					data={timezonesData}
					placeholder="select your timezone"
					value={data.timezone}
					onChange={(value) => onChange("timezone", value)}
				/>
			</View>

			<Select
				data={languagesData}
				placeholder="select your preferred language"
				value={data.language}
				onChange={(value) => onChange("language", value)}
			/>
		</ScrollView>
	);
}

export default Preferences;
