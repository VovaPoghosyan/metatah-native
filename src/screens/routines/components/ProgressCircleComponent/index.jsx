import React from 'react';
import ProgressCircle from 'react-native-progress-circle';
import { Text, TouchableOpacity } from 'react-native';
import { Colors } from "../../../../constants";

const ProgressCircleComponent = ({ percent, circleBorderColor, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ProgressCircle
          percent={percent}
          radius={30}
          borderWidth={4}
          color={circleBorderColor}
          shadowColor={Colors.ui_gray_2}
          bgColor={Colors.ui_white}
      >
        <Text style={{ fontSize: 14, color: Colors.ui_black }}>{`${percent}%`}</Text>
      </ProgressCircle>
    </TouchableOpacity>
  );
};

export default ProgressCircleComponent;