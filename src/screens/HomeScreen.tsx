import React from 'react';
import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../theme/theme';
import PrimaryButton from '../components/shared/PrimaryButton';
import { RootStackParamList } from '../types';


const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={globalStyles.container}>

      <PrimaryButton
        onPress={() => navigation.navigate('Tasks')}
        label='Tasks' />
      <PrimaryButton
        onPress={() => navigation.navigate('List')}
        label='List' />
    </View>
  );
};

export default HomeScreen;
