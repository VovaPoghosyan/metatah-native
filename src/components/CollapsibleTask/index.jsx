import React, { memo, useEffect, useRef, useState } from "react";
import { View, Text, Animated, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const CollapsibleTask = ({ taskData, editScreen }) => {
	const { id, title, priority, note, startTime, endTime, notify } = taskData;

	// useNavigation
	const navigation = useNavigation();

	// useState
	const [expanded, setExpanded] = useState(false);
	const contentHeight = useState(new Animated.Value(0))[0];
	const scrollViewRef = useRef(null);

	// useEffect
	useEffect(() => {
		if (scrollViewRef.current && expanded) {
			scrollViewRef.current.scrollTo({ y: 0, animated: true });
		}
	}, [expanded]);

	// functions
	const toggleExpand = () => {
		const initialValue = expanded ? 100 : 0;
		const finalValue = expanded ? 0 : 100;

		contentHeight.setValue(initialValue);
		Animated.timing(contentHeight, {
			toValue: finalValue,
			duration: 300,
			useNativeDriver: false,
		}).start(() => {
			setExpanded(!expanded);
		});
	};

	const getIcon = (name) => {
		switch (name) {
			case "low":
				return require("../../assets/icon/medium-priority.png");
			case "medium":
				return require("../../assets/icon/medium-priority.png");
			case "high":
				return require("../../assets/icon/high-priority.png");
			default:
				return require("../../assets/icon/medium-priority.png");
		}
	};

	const handleNavigateEditScreen = () => {
		if (!id) {
			return;
		}

		navigation.navigate(editScreen, { id });
	};

	return (
		<TouchableOpacity onPress={toggleExpand}>
			<View style={styles.taskBlock}>
				<View style={styles.taskBlockTitle}>
					<Text style={styles.title}>{title}</Text>
					<Image
						style={{ width: 18, height: 18, marginLeft: 8 }}
						resizeMode="contain"
						source={getIcon(priority)}
					/>
				</View>
				<Animated.View
					style={{ height: contentHeight, overflow: "hidden" }}>
					<ScrollView
						ref={scrollViewRef}
						style={{ overflow: "hidden" }}
						contentContainerStyle={{ flexGrow: 1 }}>
						<View style={styles.taskContent}>
							<View style={styles.taskContentNote}>
								<Text
									numberOfLines={1}
									style={styles.taskContentText}>
									{note}
								</Text>
								<TouchableOpacity
									onPress={handleNavigateEditScreen}>
									<Image
										style={styles.taskContentIcon}
										resizeMode="contain"
										source={require("../../assets/icon/edit.png")}
									/>
								</TouchableOpacity>
							</View>
							<View style={styles.taskContentDate}>
								<View style={{ flexDirection: "row" }}>
									<Image
										style={[
											styles.taskContentIcon,
											{ marginRight: 10 },
										]}
										resizeMode="contain"
										source={require("../../assets/icon/time.png")}
									/>
									<View>
										<Text style={styles.taskTime}>
											{startTime}
										</Text>
										<Text style={styles.taskTime}>
											{endTime}
										</Text>
									</View>
								</View>
								<View style={{ flexDirection: "row" }}>
									<Image
										style={{
											width: 24,
											height: 24,
										}}
										resizeMode="contain"
										source={require("../../assets/icon/off-notification.png")}
									/>
									<Text style={styles.taskContentText}>
										{notify ? "on" : "off"}
									</Text>
								</View>
							</View>
						</View>
					</ScrollView>
				</Animated.View>
			</View>
		</TouchableOpacity>
	);
};

export default memo(CollapsibleTask);
