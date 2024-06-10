import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import TasksScreen from '../screens/TasksScreen';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tasks" component={TasksScreen} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
}