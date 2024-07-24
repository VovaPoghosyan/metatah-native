import React, { useCallback, useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import {
    Camera,
    useCameraDevice,
    useCameraPermission,
} from 'react-native-vision-camera';
import { styles } from './styles';
import globalStyles from '../../assets/globalStyles';
import Background from '../../components/Background';
import { Icon } from 'react-native-elements'
import Svg, { Circle } from 'react-native-svg';

import { Colors, Window } from '../../constants';
import { Button } from '../../components/Buttons/Button';

const CreateProfileStep1 = () => {
    const circleRadius = (Window.width - 100) / 2;
    const strokeWidth = 3;
    const dashLength = 250;
    const dashGap = 40;

    const { hasPermission, requestPermission } = useCameraPermission();
    const [cameraOpen, setCameraOpen] = useState(false);

    const camera = useRef(null);
    const [initialising, setInitialising] = useState(true);
    const [flash, setFlash] = useState('off');

    if (hasPermission === false) {
        requestPermission();
    }

    const device = useCameraDevice('back')
    const [capturedPhoto, setCapturedPhoto] = useState(null);

    const takePhoto = async () => {
      if (camera.current) {
        try {
          const photo = await camera.current.takePhoto({
            quality: 'High',
            saveToAlbum: true,
          });
          console.log('Photo saved:', photo);
          setCapturedPhoto(photo.path); // Store the URI of the captured photo
          setCameraOpen(false);
        } catch (e) {
          console.error('Error taking photo:', e);
        }
      }
    };
    
    const onError = useCallback((error) => {
        console.log('Camera error!');
        console.error(error);
    }, []);
    
    const onCameraInitialized = useCallback(() => {
        console.log('Camera initialized!');
        setInitialising(false);
    }, []);

    

    if (cameraOpen && device !== null)
        return (
            <>
                <Camera
                    onError={onError}
                    style={styles.absoluteFill}
                    device={device}
                    isActive={true}
                    onInitialized={onCameraInitialized}
                    photo
                    ref={camera}
                />
                <View style={styles.captureButtonContainer}>
                    <TouchableOpacity onPress={takePhoto} style={styles.captureButton} />
                </View>
            </>
        );

    return (
        <View style={globalStyles.containerFluid}>
            <View style={globalStyles.container}>
                <Background />
                <ScrollView>
                    <View style={styles.linesContainer}>
                        <Icon
                            name='horizontal-rule'
                            type='material'
                            size={80}
                            style={{ height: 41 }}
                            color={Colors.ui_purple}
                        />
                        <Icon
                            name='horizontal-rule'
                            type='material'
                            size={80}
                            style={{ height: 41 }}
                            color={Colors.ui_white}
                        />
                        <Icon
                            name='horizontal-rule'
                            type='material'
                            size={80}
                            style={{ height: 41 }}
                            color={Colors.ui_white}
                        />
                        <Icon
                            name='horizontal-rule'
                            type='material'
                            size={80}
                            style={{ height: 41 }}
                            color={Colors.ui_white}
                        />
                    </View>

                    <View style={styles.TitleContainer}>
                        <Text style={styles.Title}>create profile</Text>
                        <Text style={styles.SecondTitle}>upload a photo</Text>
                    </View>
                    <View style={styles.UploadContainer}>
                        <Svg
                            width={circleRadius * 2}
                            height={circleRadius * 2}
                            style={{
                                backgroundColor: '#ffffff44',
                                borderRadius: 300,
                            }}
                        >
                            {capturedPhoto && (
                                <Image source={{ uri: 'file://' + capturedPhoto }} style={styles.capturedImage} />
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
                    <View style={styles.IconsContainer}>
                        <TouchableOpacity style={styles.IconContainer} onPress={() => setCameraOpen(true)}>
                            <Icon
                                name='photo-camera'
                                type='material'
                                size={40}
                                color={Colors.ui_white}
                            />
                            <Text style={styles.iconTitle}>camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconContainer} onPress={() => chooseImage()}>
                            <Icon
                                name='smartphone'
                                type='material'
                                size={40}
                                color={Colors.ui_white}
                            />
                            <Text style={styles.iconTitle}>phone</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ButtonContainer}>
                        <Button
                            title={'Next'}
                            buttonWidth={'98%'}
                            borderWidth={0}
                            fontSize={20}
                            fontWeight={'bold'}
                            alignItems={'flex-end'}
                            paddingHorizontal={10}
                            lineHeight={24}
                            type={'primary'}
                            icon={'chevron-right'}
                            isIcon={true}
                        />
                        <Button
                            title={'Skip'}
                            buttonWidth={'98%'}
                            borderWidth={0}
                            fontSize={20}
                            fontWeight={'bold'}
                            alignItems={'flex-end'}
                            paddingHorizontal={10}
                            lineHeight={24}
                            type={'light'}
                            icon={'chevron-right'}
                            isIcon={true}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default CreateProfileStep1;