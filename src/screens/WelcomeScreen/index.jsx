import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import Background from '../../components/Background';
import globalStyles from '../../assets/globalStyles';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.containerFluid}>
      <View style={globalStyles.container}>
        <Background />
        <View style={styles.welcome_container}>
          <Text style={styles.welcome}>welcome to</Text>
        </View>
        <Text style={styles.title}>metatah</Text>
        <View style={styles.description_container}>
          <Text style={styles.description_text}>
            metatah is a productivity app for
            <Text style={globalStyles.bold}> a woman </Text>
            to utilize time
            <Text style={globalStyles.bold}> for her body and soul</Text>
            {'\n'}and then optimize it{'\n'}
            <Text style={globalStyles.bold}>for eternity in her spirit</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.next}
          onPress={() => navigation.navigate('AboutWelcome')}
        >
          <Text style={globalStyles.text}>next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;