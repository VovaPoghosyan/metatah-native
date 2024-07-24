import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Colors, Window } from "../../../../../constants";
import { Circle, Svg } from "react-native-svg";
import { Icon } from "react-native-elements";
import { styles } from "./styles";
import { styles as registerStyles } from "../../styles";

function ProfilePicture({ data, openCamera, chooseImage }) {
	// constants
	const circleRadius = (Window.width - 100) / 2;
	const strokeWidth = 3;
	const dashLength = 250;
	const dashGap = 40;

	return (
		<ScrollView>
			<View style={registerStyles.titleContainer}>
				<Text style={registerStyles.titleBold}>profile picture</Text>
			</View>
			<View
				style={{
					width: "100%",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<View
					style={[
						styles.uploadContainer,
						{
							width: circleRadius * 2,
							height: circleRadius * 2,
							marginTop: 48,
						},
					]}>
					<Svg
						width="100%"
						height="100%"
						style={{
							backgroundColor: "#ffffff44",
							borderRadius: 300,
						}}>
						{data.profile_picture && (
							<Image
								source={{
									uri: "file://" + data.profile_picture.uri,
								}}
								style={styles.capturedImage}
							/>
						)}
						<Circle
							cx={circleRadius}
							cy={circleRadius}
							r={circleRadius - strokeWidth / 2}
							fill="none"
							stroke={Colors.ui_purple}
							strokeWidth={strokeWidth}
							strokeDasharray={`${dashLength} ${dashGap}`}
							strokeDashoffset={dashGap / 2}
						/>
					</Svg>
				</View>
				<View style={styles.iconsContainer}>
					<View style={{ width: "50%" }}>
						<TouchableOpacity onPress={() => openCamera()}>
							<Icon
								name="photo-camera"
								type="material"
								size={40}
								color={Colors.ui_purple}
							/>
							<Text style={styles.iconTitle}>camera</Text>
						</TouchableOpacity>
					</View>
					<View style={{ width: "50%" }}>
						<TouchableOpacity onPress={() => chooseImage()}>
							<Icon
								name="collections"
								type="material"
								size={40}
								color={Colors.ui_purple}
							/>
							<Text style={styles.iconTitle}>gallery</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

export default ProfilePicture;
