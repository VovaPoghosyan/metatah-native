import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { styles as registerStyles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import RNSTextInput from "../../../../../components/TextInput";

function PersonalInfo({ data, onChange }) {
	const navigation = useNavigation();

	return (
		<ScrollView>
			<View style={registerStyles.titleContainer}>
				<Text style={registerStyles.title}>welcome to metatah!</Text>
				<Text style={registerStyles.title}>let's get started by</Text>
				<Text style={registerStyles.titleBold}>
					creating your profile
				</Text>
				<Text
					style={{
						...registerStyles.titleBold,
						marginTop: 24,
					}}>
					personal information
				</Text>
			</View>

			<RNSTextInput
				name="first-name"
				type="text"
				placeholder="first name"
				value={data.first_name}
				onChangeText={(value) => onChange("first_name", value)}
				style={registerStyles.textInput}
			/>

			<RNSTextInput
				name="last-name"
				type="text"
				placeholder="last name"
				value={data.last_name}
				onChangeText={(value) => onChange("last_name", value)}
				style={registerStyles.textInput}
			/>

			<RNSTextInput
				name="email"
				type="text"
				placeholder="your email address"
				value={data.email}
				onChangeText={(value) => onChange("email", value)}
				autoCapitalize="none"
				style={registerStyles.textInput}
			/>

			<RNSTextInput
				name="phone"
				type="text"
				keyboardType="name-phone-pad"
				placeholder="your mobile phone number"
				value={data.phone}
				onChangeText={(value) => onChange("phone", value)}
				style={registerStyles.textInput}
			/>

			<View style={styles.anotherOption}>
				<Text style={styles.anotherOptionText}>
					already have an account?
				</Text>

				<TouchableOpacity onPress={() => navigation.navigate("Login")}>
					<Text style={styles.anotherOptionLink}>log In</Text>
				</TouchableOpacity>
			</View>

			{/* <TouchableOpacity
        style={styles.datepickerContainer}
        onPress={() => setOpen(true)}
        activeOpacity={0.8}>
        <Text style={styles.dobLabel}>Date of Birth:</Text>
        <View
            pointerEvents="none"
            style={styles.datepickerInputContainer}>
            <TextInput
                style={styles.dobInput}
                value={dobDay}
                placeholder="DD"
                maxLength={2}
                keyboardType="numeric"
                placeholderTextColor={Colors.ui_white}
            />
            <TextInput
                style={styles.dobInput}
                value={dobMonth}
                placeholder="MM"
                maxLength={2}
                keyboardType="numeric"
                placeholderTextColor={Colors.ui_white}
            />
            <TextInput
                style={styles.dobInput}
                value={dobYear}
                placeholder="YYYY"
                maxLength={4}
                keyboardType="numeric"
                placeholderTextColor={Colors.ui_white}
            />
        </View>
    </TouchableOpacity>
    <DatePicker
        modal
        open={open}
        mode="date"
        date={dateOfBirth}
        minimumDate={new Date("1900-01-01")}
        maximumDate={new Date()}
        onConfirm={(date) => {
            setDobDay(date.getDay().toString());
            setDobMonth(date.getMonth().toString());
            setDobYear(date.getFullYear().toString());
            setOpen(false);
            setDateOfBirth(date);
        }}
        onCancel={() => {
            setOpen(false);
        }}
    /> */}

			{/* <RNSTextInput
        name="password"
        type="password"
        label="Password:"
        placeholder="Please write your password"
        onChangeText={setPassword}
        value={password}
    />

    <RNSTextInput
        name="confirm-password"
        type="password"
        label="Confirm Password:"
        placeholder="Please confirm your password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
    /> */}

			{/* <View style={styles.actionsContainer}>
        <CheckBox
            center
            title="I agree to the privacy policy and terms of use."
            checked={agree}
            onPress={() => setAgree(!agree)}
            checkedColor={Colors.ui_white}
            uncheckedColor={Colors.ui_white}
            textStyle={styles.rememberText}
            containerStyle={styles.agreeContainer}
        />
    </View> */}
		</ScrollView>
	);
}

export default PersonalInfo;
