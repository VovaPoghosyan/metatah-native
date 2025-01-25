import { Camera } from "react-native-vision-camera";
import { Alert, Linking, Platform } from "react-native";
import { useEffect, useState } from "react";

export const useCameraPermission = () => {
    const [hasPermission, setHasPermission] = useState < "authorized" | "denied" | "not-determined" > ("not-determined");

    const requestPermission = async () => {
        const status = await Camera.requestCameraPermission();
        setHasPermission(status);

        if (status === "denied") {
            showSettingsAlert();
        }
        return status;
    };

    useEffect(() => {
        const checkPermission = async () => {
            const status = await Camera.getCameraPermissionStatus();
            setHasPermission(status);
        };
        checkPermission();
    }, []);

    const showSettingsAlert = () => {
        Alert.alert(
            "Camera Permission Required",
            "To use this feature, please allow camera access in your device's settings.",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Open Settings",
                    onPress: () => {
                        Linking.openSettings();
                    },
                },
            ]
        );
    };

    return { hasPermission, requestPermission };
};
