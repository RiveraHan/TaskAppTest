import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../src/screens/HomeScreen';
import TasksScreen from '../../../src/screens/TasksScreen';

const mockStore = configureStore([]);
const Stack = createStackNavigator();

const renderWithNavigation = (initialState: any) => {
  const store = mockStore(initialState);
  return render(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Tasks" component={TasksScreen} />
          <Stack.Screen name="List" component={TasksScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

describe('Navigation', () => {
  it('should navigate from Home to TasksScreen', () => {
    const { getByText } = renderWithNavigation({ tasks: { tasks: [] } });

    fireEvent.press(getByText('Tasks'));
    expect(getByText('Add new task')).toBeTruthy();
  });
});
