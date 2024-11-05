import React, { useRef, useCallback, useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Steps from "../components/Steps";
import PageNavigate from "../components/PageNavigate";
import Background from "../../../components/Background";
import {
	Camera,
	useCameraDevice,
	useCameraPermission,
} from "react-native-vision-camera";
import { useNavigation } from "@react-navigation/native";
import { useRegisterUser } from "../../../state/hooks/mutations/user/registerUser";
import { launchImageLibrary } from "react-native-image-picker";
import { Colors } from "../../../constants";
import { Icon } from "react-native-elements";
import PersonalInfo from "./components/personal-info";
import CreatePassword from "./components/create-password";
import ProfessionalInfo from "./components/professional-info";
import ProfilePicture from "./components/profile-picture";
import Preferences from "./components/preferences";
import Notifications from "./components/notifications";
import ReadTerms from "./components/readTerms";
import Agree from "./components/agree";
import Toast from "react-native-toast-message";
import Spinner from "react-native-loading-spinner-overlay";

const RegisterScreen = () => {
	// useState
	const [data, setData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		password: "",
		password_confirmation: "",
		profile_picture: undefined,
		role: "",
		job_title: "",
		company_name: "",
		linkedin_profile: "",
		timezone: "",
		language: "",
		email_notifications: 1,
		push_notifications: 1,
	});
	const [activePage, setActivePage] = useState(1);
	const [cameraOpen, setCameraOpen] = useState(false);
	const [agreeToTerms, setAgreeToTerms] = useState(false);
	const [agreeToPrivacyPolicy, setAgreeToPrivacyPolicy] = useState(false);
	const [isValidPassword, setIsValidPassword] = useState(true);
	const [invalidMessage, setInvalidMessage] = useState("");
	const [invalidMessageTitle, setInvalidMessageTitle] = useState("");

	// useCameraPermission
	const { hasPermission, requestPermission } = useCameraPermission();

	useEffect(() => {
		if (hasPermission === false) {
			requestPermission();
		}
	}, [hasPermission]);

	// useCameraDevice
	const device = useCameraDevice("back");

	// useRef
	const camera = useRef(null);

	// functions
	const onChange = (key, value) => {
		setData({ ...data, [key]: value });
	};

	const takePhoto = async () => {
		if (camera.current) {
			try {
				const photo = await camera.current.takePhoto({
					quality: "High",
					saveToAlbum: true,
				});
				console.log("Photo saved:", photo);

				setCameraOpen(false);
				setData({
					...data,
					profile_picture: {
						uri: `file://${photo.path}`,
						type: "image/jpeg",
						name: "photo.jpg",
					},
				});
			} catch (e) {
				console.error("Error taking photo:", e);
			}
		}
	};

	const chooseImage = () => {
		const options = {
			mediaType: "photo",
			includeBase64: false,
			maxHeight: 2000,
			maxWidth: 2000,
		};

		launchImageLibrary(options, (response) => {
			if (response.didCancel) {
				console.log("User cancelled image picker");
			} else if (response.error) {
				console.log("Image picker error: ", response.error);
			} else {
				let imageUri = response.uri || response.assets?.[0]?.uri;

				setData({
					...data,
					profile_picture: {
						uri: imageUri,
						type: "image/jpeg",
						name: "photo.jpg",
					},
				});

				setCameraOpen(false);
			}
		});
	};

	const onError = useCallback((error) => {
		console.log("Camera error!");
		console.error(error);
	}, []);

	const validatePassword = () => {
		setIsValidPassword(true);
		setInvalidMessage("");
		setInvalidMessageTitle("");

		const passwordRegex =
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

		if (!data.password.length) {
			setIsValidPassword(false);
			setInvalidMessageTitle("please fill in all the fields");
		}

		if (data.password.length && !passwordRegex.test(data.password)) {
			setIsValidPassword(false);
			setInvalidMessageTitle("password should contain");
			setInvalidMessage(
				"• 9-15 characters\n• at least one uppercase letter\n• at least one lowercase letter\n• at least one special character\n• at least one number"
			);
			return;
		}

		if (
			data.password.length &&
			data.password_confirmation.length &&
			data.password !== data.password_confirmation
		) {
			setIsValidPassword(false);
			setInvalidMessageTitle("passwords do not match");
			return;
		}
	};

	const onPressNext = () => {
		if (activePage === 1) {
			if (
				!data.first_name.length ||
				!data.last_name.length ||
				!data.email.length ||
				!data.phone.length
			) {
				Toast.show({
					type: "customErrorToast",
					text1: "please fill in all the fields",
					position: "bottom",
					bottomOffset: 120,
				});
				return;
			}
		}

		if (activePage === 2) {
			if (!isValidPassword) {
				Toast.show({
					type: "customErrorToast",
					text1: invalidMessageTitle,
					text2: invalidMessage,
					position: "bottom",
					bottomOffset: 120,
				});

				return;
			}
		}

		if (activePage === 3) {
			if (!data.profile_picture) {
				Toast.show({
					type: "customErrorToast",
					text1: "profile picture is required",
					position: "bottom",
					bottomOffset: 120,
				});

				return;
			}
		}

		if (activePage === 4) {
			if (
				!data.role.length ||
				!data.job_title.length ||
				!data.company_name.length
			) {
				Toast.show({
					type: "customErrorToast",
					text1: "please fill in the role, job title, and company name fields",
					position: "bottom",
					bottomOffset: 120,
				});

				return;
			}
		}

		if (activePage === 5) {
			if (!data.timezone.length || !data.language.length) {
				Toast.show({
					type: "customErrorToast",
					text1: "please fill in all the fields",
					position: "bottom",
					bottomOffset: 120,
				});

				return;
			}
		}

		if (activePage === 8) {
			if (agreeToTerms && agreeToPrivacyPolicy) {
				console.log("created");
			}

			return;
		}
		setActivePage((prev) => prev + 1);
	};

	const onPressBack = () => {
		setActivePage((prev) => prev - 1);
	};

	function showActivePage() {
		switch (activePage) {
			case 1:
				return (
					<PersonalInfo
						data={data}
						onChange={onChange}
					/>
				);
			case 2:
				return (
					<CreatePassword
						data={data}
						onChange={onChange}
					/>
				);
			case 3:
				return (
					<ProfilePicture
						data={data}
						openCamera={() => setCameraOpen(true)}
						chooseImage={chooseImage}
					/>
				);
			case 4:
				return (
					<ProfessionalInfo
						data={data}
						onChange={onChange}
					/>
				);
			case 5:
				return (
					<Preferences
						data={data}
						onChange={onChange}
					/>
				);
			case 6:
				return (
					<Notifications
						data={data}
						onChange={onChange}
					/>
				);
			case 7:
				return <ReadTerms />;
			case 8:
				return (
					<Agree
						agreeToTerms={agreeToTerms}
						setAgreeToTerms={setAgreeToTerms}
						agreeToPrivacyPolicy={agreeToPrivacyPolicy}
						setAgreeToPrivacyPolicy={setAgreeToPrivacyPolicy}
					/>
				);
		}
	}

	// useNavigation
	const navigation = useNavigation();

	// useMutation
	const mutateRegisterUser = useRegisterUser({
		onSuccess: () => {
			navigation.navigate("AboutWelcome");
			console.log("registered user successfully");
		},
		onError: (error) => {
			Toast.show({
				type: "customErrorToast",
				text1: `${Object.values(error.response.data.data).join("\n")}`,
				position: "bottom",
				bottomOffset: 120,
			});
		},
	});

	// useEffect
	useEffect(() => {
		showActivePage();
	}, [activePage]);

	useEffect(() => {
		validatePassword();
	}, [data.password, data.password_confirmation]);

	if (cameraOpen && hasPermission && device !== null) {
		return (
			<>
				<View
					style={{
						zIndex: 1,
						flexDirection: "row",
						justifyContent: "flex-end",
						paddingTop: 12,
						paddingRight: 12,
					}}>
					<TouchableOpacity onPress={() => setCameraOpen(false)}>
						<Icon
							name="close"
							type="material"
							size={32}
							color={Colors.ui_white}
						/>
					</TouchableOpacity>
				</View>
				<Camera
					photo
					isActive
					ref={camera}
					device={device}
					style={styles.absoluteFill}
					onError={onError}
					// onInitialized={onCameraInitialized}
				/>
				<View style={styles.captureButtonContainer}>
					<TouchableOpacity
						style={styles.galleryIcon}
						onPress={() => chooseImage()}>
						<Icon
							name="collections"
							type="material"
							size={32}
							color={Colors.ui_white}
						/>
					</TouchableOpacity>

					<View style={styles.captureBorder}>
						<TouchableOpacity
							onPress={takePhoto}
							style={styles.captureButton}
						/>
					</View>
				</View>
			</>
		);
	}

	return (
		<View style={styles.registerScreen}>
			<Spinner visible={mutateRegisterUser.isPending} />
			<Background imageName="mr-bg" />
			<Steps page={activePage} />
			<View style={styles.registerScreenContainer}>
				{showActivePage()}
				<PageNavigate
					data={data}
					isNotFirst={activePage > 1}
					disabled={
						activePage === 8 &&
						(!agreeToTerms || !agreeToPrivacyPolicy)
					}
					isLast={activePage === 8}
					onPressBack={onPressBack}
					onPressNext={onPressNext}
					mutateRegisterUser={mutateRegisterUser}
				/>
			</View>
		</View>
	);
};

export default RegisterScreen;
