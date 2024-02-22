import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuPage from './MenuPage';
import UserPersonalInfo from './UserPersonalInfo';
import UserCarInfo from './UserCarInfo';
import UserAdditionalInfo from './UserAdditionalInfo';
import UserSecurityInfo from './UserSecurityInfo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MenuPage" component={MenuPage} options={{ title: 'Welcome' }} />
        <Stack.Screen name="UserPersonalInfo" component={UserPersonalInfo} options={{ title: 'User Personal Information' }} />
        <Stack.Screen name="UserCarInfo" component={UserCarInfo} options={{ title: 'User Car Information' }} />
        <Stack.Screen name="UserAdditionalInfo" component={UserAdditionalInfo} options={{ title: 'User Additional Information' }} />
        <Stack.Screen name="UserSecurityInfo" component={UserSecurityInfo} options={{ title: 'Security Info' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
