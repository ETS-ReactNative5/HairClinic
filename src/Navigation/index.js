import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appointment, Home, Profile, Search, ClinicDetailPage } from '../Screen';
import CustomIcon from '../Components/CustomIcon';
import { Colors, Fonts } from '../Themes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeContainer = createStackNavigator();
const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();

const screenOptions = (focused, route, color) => {
  let iconName;

  switch (route.name) {
    case 'HomeContainerScreen':
      iconName = 'home';
      title = 'HomeContainerScreen';
      break;
    case 'Appointment':
      iconName = 'Appointment';
      title = 'Appointment';
      break;
    case 'Search':
      iconName = 'Search';
      title = 'Search';
      break;
    case 'Profile':
      iconName = 'search';
      title = 'Profil';
      break;
    default:
      break;
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <CustomIcon
        name={iconName}
        color={focused ? Colors.green.pure : Colors.grey.grey80}
        size={26}
      />
      {focused && (
        <View
          style={{
            width: 4,
            height: 4,
            backgroundColor: Colors.green.pure,
            borderRadius: 2,
            marginTop: 5
          }}
        />
      )}
    </View>
  );
};

const HomeBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => screenOptions(focused, route, color),
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10
        }
      })}
    >
      <Tab.Screen
        name='HomeContainerScreen'
        title='HomeContainerScreen'
        component={Home}
        options={{
          tabBarShowLabel: false
        }}
      />
      <Tab.Screen
        name='Appointment'
        title='Appointment'
        component={Appointment}
        options={{
          tabBarShowLabel: false
        }}
      />
      <Tab.Screen
        name='Search'
        title='Search'
        component={Search}
        options={{
          tabBarShowLabel: false
        }}
      />
      <Tab.Screen
        name='Profile'
        title='Profile'
        component={Profile}
        options={{
          tabBarShowLabel: false
        }}
      />
    </Tab.Navigator>
  );
};
const HomeContainerScreen = () => {
  return (
    <HomeContainer.Navigator screenOptions={{ headerShown: false }}>
      <HomeContainer.Screen name='Main' component={HomeBottomTab} />
      <HomeContainer.Screen name='ClinicDetail' component={ClinicDetailPage} />
    </HomeContainer.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff'
          },
          animationEnabled: false,
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={HomeContainerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
