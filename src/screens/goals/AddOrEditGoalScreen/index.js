import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useUser } from "../../../state/hooks/query/user/useUser";
import { useGoal } from "../../../state/hooks/query/goals/useGoal";
import { useCreateGoal } from "../../../state/hooks/mutations/goals/createGoal";
import { useEditGoal } from "../../../state/hooks/mutations/goals/editGoal";
import { Colors, desireItems, purposeItems } from "../../../constants";
import { styles } from "./styles";
import Notes from "../../../components/Notes";
import CalendarComponent from "../../../components/CalendarComponent";
import GoalTimeComponent from "../../../components/GoalTimeComponent";
import SelectPriority from "../../../components/SelectPriority";
import SelectItem from "../../../components/SelectItem";
import Background from "../../../components/Background";
import globalStyles from "../../../assets/globalStyles";
import Spinner from "react-native-loading-spinner-overlay";
import Layout from "../../../layouts/Layout";

function AddOrEditGoalScreen() {
	// useNavigation
	const navigation = useNavigation();

	// useRoute
	const route = useRoute();
	const id = route.params?.id;

	// useQuery
	const { data: userData, isLoading: isLoadingUser } = useUser();
	const goalData = id ? useGoal({ id }) : { data: null };

	// useState
	const [data, setData] = useState({
		title: "",
		note: "",
		priority: "",
		period: {
			startDate: null,
			endDate: null,
		},
		startTime: "00:00",
		endTime: "00:00",
		weekdays: [],
		interval: "",
		desire: null,
		purpose: null,
		reminder: false,
	});

	// useEffect
	useEffect(() => {
		if (!goalData.data) {
			return;
		}

		setData({ ...goalData.data });
	}, [goalData.data]);

	// functions
	const onChangeData = (value, key) => {
		const newData = { ...data };
		newData[key] = value;
		setData(newData);
	};

	const onPressWeekItem = (value) => {
		setData((prev) => {
			const updatedWeekdays = prev.weekdays?.includes(value)
				? prev.weekdays.filter((day) => day !== value)
				: [...prev.weekdays, value];

			return {
				...prev,
				weekdays: updatedWeekdays,
			};
		});
	};

	const handleCreateGoal = () => {
		mutateCreateGoal.mutate(data);
	};

	const handleEditGoal = () => {
		mutateEditGoal.mutate({ id, goalData: data });
	};

	const onPressReminder = () => {
		setData((prev) => {
			return {
				...prev,
				reminder: !prev.reminder,
			};
		});
	};

	// useMutation
	const mutateCreateGoal = useCreateGoal({
		onSuccess: (data) => {
			navigation.navigate("Goals");
			console.log(data);
		},
		onError: (error) => {
			showMessage({
				message: error.response.data.message,
				type: "danger",
				floating: true,
			});
		},
	});

	const mutateEditGoal = useEditGoal({
		onSuccess: (data) => {
			navigation.navigate("Goals");
			console.log(data);
		},
		onError: (error) => {
			showMessage({
				message: error.response.data.message,
				type: "danger",
				floating: true,
			});
		},
	});

	return (
		<Layout>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<Spinner
					visible={
						goalData.isLoading ||
						isLoadingUser ||
						mutateCreateGoal.isPending ||
						mutateEditGoal.isPending
					}
				/>
				<View style={styles.goalSection}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>
							hello, {userData?.first_name}
						</Text>
					</View>
					<ScrollView
						contentContainerStyle={styles.goalSectionContainer}>
						<Notes
							titleValue={data.title}
							noteValue={data.note}
							onChangeTitle={(value) =>
								onChangeData(value, "title")
							}
							onChangeValue={(value) =>
								onChangeData(value, "note")
							}
						/>

						<CalendarComponent
							period={data.period}
							changePeriod={(value) =>
								onChangeData(value, "period")
							}
						/>

						<View style={globalStyles.mt_10}>
							<GoalTimeComponent
								weekdays={data.weekdays}
								interval={data.interval}
								startTime={data.startTime}
								endTime={data.endTime}
								reminder={data.reminder}
								onPressReminder={onPressReminder}
								onPressWeekItem={(value) =>
									onPressWeekItem(value)
								}
								onPressPeriodItem={(value) =>
									onChangeData(value, "interval")
								}
								onChangeStartTime={(value) =>
									onChangeData(value, "startTime")
								}
								onChangeEndTime={(value) =>
									onChangeData(value, "endTime")
								}
							/>
						</View>

						<SelectPriority
							activeItem={data.priority}
							onChange={(value) =>
								onChangeData(value, "priority")
							}
						/>

						<SelectItem
							title="which desire corresponds the goal?"
							items={desireItems}
							activeItem={data.desire}
							onPress={(value) => onChangeData(value, "desire")}
							textSize={16}
							color={Colors.ui_purple}
							activeTextColor={Colors.ui_white}
							containerStyle={styles.goalTypeContent}
							itemStyle={styles.desireItem}
						/>
						<SelectItem
							title="this goal is for my"
							items={purposeItems}
							activeItem={data.purpose}
							onPress={(value) => onChangeData(value, "purpose")}
							textSize={16}
							color={Colors.ui_purple}
							activeTextColor={Colors.ui_white}
							containerStyle={{ borderRadius: 3 }}
							itemStyle={styles.goalTypeItem}
						/>
						<View style={styles.footer}>
							{id ? (
								<TouchableOpacity onPress={handleEditGoal}>
									<Text style={styles.addText}>edit</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity onPress={handleCreateGoal}>
									<Text style={styles.addText}>add</Text>
								</TouchableOpacity>
							)}

							<TouchableOpacity onPress={() => {}}>
								<Text style={styles.cancelText}>cancel</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</View>
			</View>
		</Layout>
	);
}

export default AddOrEditGoalScreen;
