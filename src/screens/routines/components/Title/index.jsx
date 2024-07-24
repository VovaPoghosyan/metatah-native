import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./styles";

const Title = ({ title, subtitle, Subtitle2, description, CustomTitle }) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.lines}>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
      </View>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <Text style={styles.title}>{title}</Text>
      {Subtitle2}
      {CustomTitle}
      {description && 
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      }
    </View>
  );
};

export default Title;
