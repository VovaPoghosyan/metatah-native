import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    Image,
} from 'react-native';

export class Icon extends Component {
    constructor(props) {
        super(props);
    }

    getIcon(name) {
        switch (name) {
            case 'close-eye':
                return require('../../assets/icon/close-eye.png');
            case 'happy':
                return require('../../assets/icon/happy.png');
            case 'neutral':
                return require('../../assets/icon/neutral.png');
            case 'career':
                return require('../../assets/icon/career.png');
            case 'love':
                return require('../../assets/icon/love.png');
            case 'health':
                return require('../../assets/icon/health.png');
            case 'self-care':
                return require('../../assets/icon/self-care.png');
            case 'soul':
                return require('../../assets/icon/soul.png');
            case 'learning':
                return require('../../assets/icon/learning.png');
            case 'alone':
                return require('../../assets/icon/alone.png');
            case 'fitness':
                return require('../../assets/icon/fitness.png');
            case 'creativity':
                return require('../../assets/icon/creativity.png');
            case 'habit-improve':
                return require('../../assets/icon/habit-improve.png');
            case 'body':
                return require('../../assets/icon/body.png');
            case 'challenge':
                return require('../../assets/icon/challenge.png');
            case 'finance':
                return require('../../assets/icon/finance.png');
            case 'growth':
                return require('../../assets/icon/growth.png');
            case 'values':
                return require('../../assets/icon/values.png');
            case 'priority':
                return require('../../assets/icon/priority.png');
            case 'time':
                return require('../../assets/icon/time.png');
            default:
                return require('../../assets/icon/default-icon.png');
        }
    }

    render() {
        const {
            name,
            width,
            style,
            onPress,
            loading,
            disabled,
            paddingVertical,
            paddingHorizontal,
        } = this.props;

        const source = this.getIcon(name);

        return (
            <TouchableOpacity
                disabled={loading ? true : disabled}
                onPress={onPress}>
                <View style={{ flexDirection: 'row', opacity: loading ? 0.5 : 1 }}>
                    <Image source={source} style={[
                        {
                            width,
                            paddingVertical,
                            paddingHorizontal,
                        },
                        style
                    ]} />
                </View>
            </TouchableOpacity>
        );
    }
}

Icon.defaultProps = {
    width: 20,
    style: {},
    loading: false,
    disabled: false,
    name: 'default-icon',
    paddingVertical: 5,
    paddingHorizontal: 5,
    onPress: null,
};
