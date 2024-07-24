import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    View,
} from 'react-native';
import { Colors } from '../../constants';
import { Icon } from 'react-native-elements';

export class Button extends Component {
    constructor(props) {
        super(props);
    }

    getButtonColor(type) {
        switch (type) {
            case 'primary':
                return Colors.ui_purple;
            case 'secondary':
                return Colors.ui_white;
            case 'white':
                return Colors.ui_white;
            case 'light':
                return 'transparent';
            default:
                return Colors.ui_grey_05;
        }
    }

    getTitleColor(type) {
        switch (type) {
            case 'primary':
                return Colors.ui_white;
            case 'secondary':
            case 'light':
                return Colors.ui_purple;
            case 'white':
            case 'outline':
                return Colors.ui_purple;
            default:
                return 'black';
        }
    }

    getBorderColor(type) {
        switch (type) {
            case 'primary':
                return 'transparent';
            case 'secondary':
                return 'white';
            case 'outline':
                return this.getTitleColor(type);
            default:
                return 'white';
        }
    }

    render() {
        const {
            title,
            onPress,
            buttonWidth,
            borderWidth,
            disabled,
            paddingVertical,
            paddingHorizontal,
            type,
            loading,
            isIcon,
            icon,
            margin,
            marginBottom,
            marginTop,
            fontSize,
            fontWeight,
            lineHeight,
            textTransform,
            alignSelf,
            alignItems,
        } = this.props;

        return (
            <TouchableOpacity
                disabled={loading ? true : disabled}
                style={[
                    styles.Container,
                    {
                        width: buttonWidth,
                        alignSelf: alignSelf ? alignSelf : 'center',
                        alignItems: alignItems ? alignItems : 'center',
                        backgroundColor: disabled
                            ? Colors.ui_main_bg
                            : this.getButtonColor(type),
                        paddingVertical: paddingVertical,
                        paddingHorizontal: paddingHorizontal,
                        borderColor: disabled ? Colors.ui_main_bg : this.getBorderColor(type),
                        borderWidth: borderWidth,
                        margin: margin == undefined ? 10 : margin,
                        marginBottom: marginBottom == undefined ? 0 : marginBottom,
                        marginTop: marginTop == undefined ? 0 : marginTop,
                    },
                ]}
                onPress={onPress}>
                <View style={{ flexDirection: 'row', opacity: loading ? 0.5 : 1 }}>
                    <Text
                        style={[
                            styles.ButtonTitle,
                            {
                                color: disabled ? Colors.ui_grey_10 : this.getTitleColor(type),
                                fontSize: fontSize || 20,
                                lineHeight: lineHeight,
                                fontWeight: fontWeight,
                                textTransform: textTransform || 'none',
                            },
                        ]}>
                        {title}
                    </Text>
                    {isIcon ? <Icon name={icon} type='material' color={this.getTitleColor(type)}/> : null}
                    {loading && (
                        <ActivityIndicator color={Colors.white} style={{ marginStart: 5 }} />
                    )}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        margin: 10,
        paddingVertical: 10,
        borderRadius: 6,
        alignSelf: 'center',
    },
    ButtonTitle: {
        fontSize: 20,
        // fontFamily: Fonts.antipasto,
        textAlign: 'center',
    },
    IconStyle: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginEnd: 10,
    },
});

Button.defaultProps = {
    type: 'primary',
    title: 'Submit',
    buttonWidth: '100%',
    borderWidth: 0.9,
    disabled: false,
    loading: false,
    isIcon: false,
    paddingVertical: 12,
    lineHeight: 24,
    onPress: null,
    fontWeight: 'normal',
};
