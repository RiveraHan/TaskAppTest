import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from './routes/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App;