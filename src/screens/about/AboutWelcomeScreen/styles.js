import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants';

export const styles = StyleSheet.create({
    aboutWelcome: {
        width: '100%',
        height: '100%',
    },

    content: {
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
    },

    contentText: {
        paddingHorizontal: 24,
        alignItems: 'center',
    },

    subTitle: {
        color: Colors.ui_white,
        fontSize: 32,
        fontWeight: '300',
        textAlign: 'right',
    },

    title: {
        color: Colors.ui_white,
        fontSize: 72,
        fontWeight: '400',
        lineHeight: 64,
    },

    description: {
        color: Colors.ui_white,
        fontSize: 24,
        fontWeight: '400',
        marginTop: 24,
    },

    logo: {
        width: 700,
        height: 400,
        position: 'absolute',
        left: -300,
        bottom: -156,
        zIndex: -1
    },

    buttonNext: {
        position: 'absolute',
        left: 166,
        bottom: 16,
    },
});
