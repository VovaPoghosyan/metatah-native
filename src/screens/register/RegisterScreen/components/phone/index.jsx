import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CountryPicker from "react-native-country-picker-modal";
import RNSTextInput from "../../../../../components/TextInput";
import { styles as registerStyles } from "../../styles";
import { Colors } from "../../../../../constants";

const Phone = ({ data, error, onChange }) => {
	const [country, setCountry] = useState({
		cca2: "AM",
		callingCode: ["374"],
	});
	const [countryCode, setCountryCode] = useState("+374");
	const [isVisible, setIsVisible] = useState(false);

	const onSelect = (country) => {
		setCountry(country);

		if (country.callingCode[0]) {
			setCountryCode("+" + country.callingCode[0]);
			onChange("country_code", `+${country.callingCode[0]}`);
		} else {
			setCountryCode("");
		}
		setIsVisible(false);
	};

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					borderBottomWidth: 2,
					borderBottomColor: Colors.ui_purple,
					marginRight: 10,
					marginTop: 8,
					height: 41,
				}}>
				<CountryPicker
					countryCode={country ? country.cca2 : "AM"}
					withFlag
					withCallingCode
					withFilter
					onSelect={onSelect}
					visible={isVisible}
					onClose={() => setIsVisible(false)}
				/>

				<TouchableOpacity onPress={() => setIsVisible(true)}>
					{country && (
						<Text
							style={{
								fontSize: 18,
								lineHeight: 32,
								color: Colors.ui_purple,
							}}>
							{countryCode}
						</Text>
					)}
				</TouchableOpacity>
			</View>

			<View style={{ flex: 1 }}>
				<RNSTextInput
					name="phone"
					type="number"
					keyboardType="phone-pad"
					placeholder="phone number"
					value={data.phone}
					onChangeText={(value) => onChange("phone", value)}
					error={error}
					style={registerStyles.textInput}
				/>
			</View>
		</View>
	);
};

export default Phone;
