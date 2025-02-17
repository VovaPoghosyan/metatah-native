import { ScrollView, View, Text } from "react-native";
import { styles } from "../styles";

function PrivacyPolicy() {
	return (
		<ScrollView contentContainerStyle={{ padding: 24 }}>
			<Text style={styles.pageTitle}>Metatah Privacy Policy</Text>
			<Text style={styles.pageSubtitle}>Generic Privacy Policy</Text>
			<Text style={styles.updatedDate}>Last updated: January 2022</Text>
			<View style={styles.subSection}>
				<Text style={styles.title}>
					Information that is gathered from visitors
				</Text>
				<Text style={styles.text}>
					In common with other websites, log files are stored on the
					web server saving details such as the visitor's IP address,
					browser type, referring page and time of visit.
				</Text>
				<Text style={styles.text}>
					Where registration is required, the visitor's email and a
					username will be stored on the server.
				</Text>
			</View>
			<View style={styles.subSection}>
				<Text style={styles.title}>How the Information is used</Text>
				<Text style={styles.text}>
					The information is used to enhance the visitor’s experience
					when using the website to display personalized content and
					possibly advertising.
				</Text>
				<Text style={styles.text}>
					E-mail addresses will not be sold, rented or leased to 3rd
					parties.
				</Text>
				<Text style={styles.text}>
					E-mail may be sent to inform you of news of our services or
					offers by us or our affiliates.
				</Text>
			</View>
			<View style={styles.subSection}>
				<Text style={styles.title}>Visitor Options</Text>
				<Text style={styles.text}>
					If you have subscribed to one of our services, you may
					unsubscribe by following the instructions which are included
					in e-mail that you receive.
				</Text>
				<Text style={styles.text}>
					You may be able to block cookies via your browser settings
					but this may prevent you from access to certain features of
					the website.
				</Text>
			</View>
			<View style={styles.subSection}>
				<Text style={styles.title}>Cookies</Text>
				<Text style={styles.text}>
					Cookies are small digital signature files that are stored by
					your web browser that allow your preferences to be recorded
					when visiting the website. Also, they may be used to track
					your return visits to the website. 3rd party advertising
					companies may also use cookies for tracking purposes.
				</Text>
			</View>
			<View style={styles.subSection}>
				<Text style={styles.title}>Google Ads</Text>
				<Text style={styles.text}>
					Google, as a third-party vendor, uses cookies to serve ads.
				</Text>
				<Text style={styles.text}>
					Google's use of the DART cookie enables it to serve ads to
					visitors based on their visit to sites they visit on the
					Internet.
				</Text>
				<Text style={styles.text}>
					Website visitors may opt out of the use of the DART cookie
					by visiting the Google ad and content network privacy
					policy.
				</Text>
			</View>
		</ScrollView>
	);
}

export default PrivacyPolicy;
