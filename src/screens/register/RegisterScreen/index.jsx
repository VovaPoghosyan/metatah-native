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
import Notifications from "./components/notifications";
import Agree from "./components/agree";
import Toast from "react-native-toast-message";
import Spinner from "react-native-loading-spinner-overlay";

const RegisterScreen = () => {
	// useState
	const [data, setData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		country_code: "+374",
		phone_number: "",
		password: "",
		password_confirmation: "",
		profile_picture: undefined,
		role: "",
		job_title: "",
		company_name: "",
		linkedin_profile: "",
		email_notifications: 1,
		push_notifications: 1,
	});
	const [activePage, setActivePage] = useState(1);
	const [cameraOpen, setCameraOpen] = useState(false);
	const [agreeToTerms, setAgreeToTerms] = useState(false);
	const [agreeToPrivacyPolicy, setAgreeToPrivacyPolicy] = useState(false);
	const [personalInfoErrors, setPersonalInfoErrors] = useState({});
	const [passwordErrors, setPasswordErrors] = useState({});
	const [userId, setUserId] = useState(null);

	// useCameraPermission
	const { hasPermission, requestPermission } = useCameraPermission();

	// useCameraDevice
	const device = useCameraDevice("front");

	useEffect(() => {
		if (hasPermission === false) {
			requestPermission();
		}
	}, [hasPermission]);

	// useRef
	const camera = useRef(null);

	// functions
	const validatePersonalInfo = () => {
		let errors = {};

		if (!data.first_name.trim())
			errors.first_name = "first name is required";
		if (!data.last_name.trim()) errors.last_name = "last name is required";
		if (data.phone_number && !/^\d+$/.test(data.phone_number)) {
			errors.phone_number = "phone must contain only numbers";
		}
		if (!data.email.trim()) {
			errors.email = "email is required";
		} else if (!/\S+@\S+\.\S+/.test(data.email)) {
			errors.email = "email is not valid";
		}

		setPersonalInfoErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const validateMinLength = (password) => {
		return password.length >= 8;
	};

	const validateLowercase = (password) => {
		return /[a-z]/.test(password);
	};

	const validateUppercase = (password) => {
		return /[A-Z]/.test(password);
	};

	const validateSymbol = (password) => {
		return /[#?!@$%^&*-]/.test(password);
	};

	const validatePassword = () => {
		let errors = {};

		if (!data.password) {
			errors.password = "password is required";
		} else {
			if (!validateMinLength(data.password)) {
				errors.password = "password must be at least 8 characters";
			} else if (!validateLowercase(data.password)) {
				errors.password =
					"password must contain at least one lowercase";
			} else if (!validateUppercase(data.password)) {
				errors.password =
					"password must contain at least one uppercase";
			} else if (!validateSymbol(data.password)) {
				errors.password = "password must contain at least one symbol";
			}
		}

		if (data.password !== data.password_confirmation) {
			errors.password_confirmation = "passwords do not match";
		}

		setPasswordErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const onChange = (key, value) => {
		setData({ ...data, [key]: value });

		if (personalInfoErrors[key] || passwordErrors[key]) {
			if (key in personalInfoErrors) {
				setPersonalInfoErrors({
					...personalInfoErrors,
					[key]: undefined,
				});
			}
			if (key in passwordErrors) {
				setPasswordErrors({ ...passwordErrors, [key]: undefined });
			}
		}
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

	const onPressNext = () => {
		if (activePage === 1) {
			if (!validatePersonalInfo()) return;
			mutateRegisterUser.mutate({
				data: {
					first_name: data.first_name,
					last_name: data.last_name,
					email: data.email,
					country_code: data.country_code,
					phone_number: data.phone_number,
				},
				step: "one",
			});
		}

		if (activePage === 2) {
			if (!validatePassword()) return;
			mutateRegisterUser.mutate({
				data: {
					user_id: userId,
					password: data.password,
					password_confirmation: data.password_confirmation,
				},
				step: "two",
			});
		}

		if (activePage === 3) {
			const formData = new FormData();
			formData.append("user_id", userId);
			formData.append("profile_picture", data.profile_picture);

			mutateRegisterUser.mutate({ data: formData, step: "three" });
		}

		if (activePage === 4) {
			mutateRegisterUser.mutate({
				data: {
					user_id: userId,
					role: data.role,
					job_title: data.job_title,
					company_name: data.company_name,
					linkedin_profile: data.linkedin_profile,
				},
				step: "four",
			});
		}

		if (activePage === 5) {
			mutateRegisterUser.mutate({
				data: {
					user_id: userId,
					email_notifications: data.email_notifications,
					push_notifications: data.push_notifications,
				},
				step: "five",
			});
		}
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
						errors={personalInfoErrors}
					/>
				);
			case 2:
				return (
					<CreatePassword
						data={data}
						onChange={onChange}
						errors={passwordErrors}
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
					<Notifications
						data={data}
						onChange={onChange}
					/>
				);
			case 6:
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
		onSuccess: ({ data }) => {
			data?.user && setUserId(data.user.id);
			data?.token
				? navigation.navigate("AboutWelcome")
				: setActivePage((prev) => prev + 1);
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
						activePage === 6 &&
						(!agreeToTerms || !agreeToPrivacyPolicy)
					}
					isLast={activePage === 6}
					onPressBack={onPressBack}
					onPressNext={onPressNext}
					mutateRegisterUser={mutateRegisterUser}
					userId={userId}
				/>
			</View>
		</View>
	);
};

export default RegisterScreen;
