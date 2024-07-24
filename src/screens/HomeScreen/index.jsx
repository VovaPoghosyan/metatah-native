import React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../assets/globalStyles';
import Background from '../../components/Background';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.containerFluid}>
      <View style={globalStyles.container}>
        <Background />
        <View style={styles.content}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View>
              <Text style={styles.title}>Welcome to the Home Screen</Text>
              <Text style={styles.subtitle}>This is where you can start your journey</Text>
              <Button title="Go to Welcome" onPress={() => navigation.navigate('Welcome')} />
            </View>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;