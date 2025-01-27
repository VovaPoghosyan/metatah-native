import React, { useCallback, useEffect, useRef, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../../state/hooks/query/user/useUser";
import { API_URL } from "../../../state/utils/constants";
import { useUpdateUser } from "../../../state/hooks/mutations/user/updateUser";
import { useCameraDevice, useCameraPermission, Camera } from "react-native-vision-camera";
import { Icon } from "react-native-elements";
import { Colors } from "../../../constants";
import { launchImageLibrary } from "react-native-image-picker";
import { styles } from "./styles";
import Spinner from "react-native-loading-spinner-overlay";
import Background from "../../../components/Background";
import globalStyles from "../../../assets/globalStyles";
import RNSTextInput from "../../../components/TextInput";
import Phone from "../../register/RegisterScreen/components/phone";
import Toast from "react-native-toast-message";

const EditProfileScreen = () => {
	// useCameraPermission
	const { hasPermission, requestPermission } = useCameraPermission();

	// useCameraDevice
	const device = useCameraDevice("front");

	// useNavigation
	const navigation = useNavigation();

	// useState
	const [cameraOpen, setCameraOpen] = useState(false);
	const [userData, setUserData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		country_code: '+374',
		phone: '',
	});
	const [errors, setErrors] = useState({
		first_name: '',
		last_name: '',
		email: '',
		country_code: '',
		phone: '',
	});

	// useRef
	const camera = useRef(null);

	// useQuery
	const { data, isLoading } = useUser();

	useEffect(() => {
		navigation.setParams({ hidePageFrame: false });
	}, [])

	// useEffect
	useEffect(() => {
		if (data) {
			setUserData({
				...userData,
				first_name: data.first_name,
				last_name: data.last_name,
				email: data.email,
				country_code: data.country_code,
				phone: data.phone,
			})
		}
	}, [data])

	// functions
	const onChange = (key, value) => {
		setUserData({ ...userData, [key]: value });

		if (key in errors) {
			setErrors({ ...errors, [key]: "" });
		}
	}

	const saveUserData = () => {
		const changedFields = hasChanged(data, userData);

		if (Object.keys(changedFields).length === 0) {
			Toast.show({
				type: "info",
				text1: "No changes detected",
			});
			return;
		}

		if (userData.profile_picture) {
			const formData = new FormData();
			formData.append("profile_picture", userData.profile_picture);
			Object.entries(changedFields).forEach(([key, value]) => {
				formData.append(key, value);
			});

			mutateUpdateUser.mutate(formData);
		} else {
			mutateUpdateUser.mutate(changedFields);
		}
	}

	const handleEditProfilePicture = () => {
		if (hasPermission) {
			navigation.setParams({ hidePageFrame: true });
			setCameraOpen(true);
		} else {
			requestPermission().then(() => {
				navigation.setParams({ hidePageFrame: true });
				setCameraOpen(true);
			});
		}
	}

	const mutateUpdateUser = useUpdateUser({
		onSuccess: (data) => {
			navigation.navigate("Profile");
			console.log("Updated successfully", data);
		},
		onError: (error) => {
			setErrors(error.response.data.data);
		},
	});

	const hasChanged = (original, updated) => {
		return Object.entries(updated).reduce((acc, [key, value]) => {
			if (original[key] !== value) {
				acc[key] = value;
			}
			return acc;
		}, {});
	};

	const takePhoto = async () => {
		if (camera.current) {
			try {
				const photo = await camera.current.takePhoto({
					quality: "High",
					saveToAlbum: true,
				});
				console.log("Photo saved:", photo);

				navigation.setParams({ hidePageFrame: false });
				setCameraOpen(false);
				setUserData({
					...userData,
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

				setUserData({
					...userData,
					profile_picture: {
						uri: imageUri,
						type: "image/jpeg",
						name: "photo.jpg",
					},
				});

				navigation.setParams({ hidePageFrame: false });
				setCameraOpen(false);
			}
		});
	};

	const onError = useCallback((error) => {
		console.log("Camera error!");
		console.error(error);
	}, []);

	const closeCamera = () => {
		navigation.setParams({ hidePageFrame: false });
		setCameraOpen(false);
	}

	if (cameraOpen && hasPermission && device !== null) {
		return (
			<>
				<View
					style={{
						zIndex: 2,
						flexDirection: "row",
						justifyContent: "flex-end",
						paddingTop: 56,
						paddingRight: 24,
					}}>
					<Pressable onPress={closeCamera}>
						<Icon
							name="close"
							type="material"
							size={32}
							color={Colors.ui_white}
						/>
					</Pressable>
				</View>
				<Camera
					photo
					isActive
					ref={camera}
					device={device}
					style={styles.absoluteFill}
					onError={onError}
				/>
				<View style={styles.captureButtonContainer}>
					<Pressable
						style={styles.galleryIcon}
						onPress={() => chooseImage()}>
						<Icon
							name="collections"
							type="material"
							size={32}
							color={Colors.ui_white}
						/>
					</Pressable>

					<View style={styles.captureBorder}>
						<Pressable
							onPress={takePhoto}
							style={styles.captureButton}
						/>
					</View>
				</View>
			</>
		);
	}

	return (
		<View style={globalStyles.containerFluid}>
			<Spinner visible={isLoading || mutateUpdateUser.isLoading} />
			{data && (
				<View style={globalStyles.container}>
					<Background imageName="mr-bg" />
					<View style={styles.editProfileContainer}>
						<View style={styles.avatarBlock}>
							<View style={styles.avatar}>
								{userData.profile_picture ? (
									<Image
										source={userData.profile_picture}
										style={styles.profilePicture}
									/>
								) :
									data.profile_picture ? (
										<Image
											source={{ uri: `${API_URL}/${data.profile_picture}` }}
											style={styles.profilePicture}
										/>
									) : (
										<Image
											source={require("../../../assets/icon/user-primary.png")}
											style={{
												width: 56,
												height: 56,
											}}
										/>
									)}
							</View>
							<Pressable
								onPress={handleEditProfilePicture}
								style={styles.editIcon}
							>
								<Image
									style={{
										width: 24,
										height: 24,
									}}
									resizeMode="contain"
									source={require("../../../assets/icon/edit.png")}
								/>
							</Pressable>
						</View>
						<View style={{ flex: 1 }}>
							<RNSTextInput
								name="first-name"
								type="text"
								placeholder="first name*"
								value={userData.first_name}
								onChangeText={(value) => onChange("first_name", value)}
								error={errors.first_name}
								style={styles.textInput}
							/>

							<RNSTextInput
								name="last-name"
								type="text"
								placeholder="last name*"
								value={userData.last_name}
								onChangeText={(value) => onChange("last_name", value)}
								error={errors.last_name}
								style={styles.textInput}
							/>

							<RNSTextInput
								name="email"
								type="text"
								placeholder="email address*"
								value={userData.email}
								onChangeText={(value) => onChange("email", value)}
								error={errors.email}
								autoCapitalize="none"
								style={styles.textInput}
							/>

							<Phone
								data={userData}
								error={errors.phone}
								onChange={onChange}
							/>
						</View>
						<View style={styles.footer}>
							<Pressable onPress={() => navigation.navigate("Profile")}>
								<Text style={styles.footerText}>cancel</Text>
							</Pressable>
							<Pressable onPress={saveUserData}>
								<Text style={styles.footerText}>save</Text>
							</Pressable>
						</View>
					</View>
				</View>
			)}
		</View>
	);
};

export default EditProfileScreen;
