import { ScrollView, Text, View } from "react-native";
import { rolesData } from "../../../../../constants";
import { styles as registerStyles } from "../../styles";
import RNSTextInput from "../../../../../components/TextInput";
import Select from "../../../../../components/Select";

function ProfessionalInfo({ data, onChange }) {
	return (
		<ScrollView>
			<View style={registerStyles.titleContainer}>
				<Text style={registerStyles.titleBold}>
					professional information
				</Text>
			</View>

			<Select
				data={rolesData}
				placeholder="role"
				value={data.role}
				onChange={(value) => onChange("role", value)}
			/>

			<RNSTextInput
				name="job-title"
				type="text"
				placeholder="job title"
				value={data.job_title}
				onChangeText={(value) => onChange("job_title", value)}
				style={registerStyles.textInput}
			/>

			<RNSTextInput
				name="company-name"
				type="text"
				placeholder="company name"
				value={data.company_name}
				onChangeText={(value) => onChange("company_name", value)}
				style={registerStyles.textInput}
			/>

			<RNSTextInput
				name="linkedin-profile"
				type="text"
				placeholder="your linkedin profile"
				value={data.linkedin_profile}
				onChangeText={(value) => onChange("linkedin_profile", value)}
				style={registerStyles.textInput}
			/>
		</ScrollView>
	);
}

export default ProfessionalInfo;
