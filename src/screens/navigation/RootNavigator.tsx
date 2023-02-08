import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import SettingScreen from '../SettingScreen';
import FriendsScreen from '../friends/Friends';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {ActivityIndicator, Linking} from 'react-native';
import AddFriendScreen from '../friends/AddFriendScreen';
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const linking = {
  prefixes: ['friendsapp://'],
  config: {
    screens: {
      Home: {
        path: 'home',
      },
      Friends: {
        path: 'friends',
      },
      AddFriends: {
        path: 'addfriends/:id?',
        parse: {
          id: (id: String) => `${id}`,
        },
      },
      Settings: {
        path: 'settings',
      },
    },
  },
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};

const FriendsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen name="AddFriends" component={AddFriendScreen} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  console.log("Linking url : ", Linking.getInitialURL());
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <BottomTab.Navigator
        initialRouteName="Friends"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let routeName = route.name;
            let iconName;
            if (routeName === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (routeName === 'Friends') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (routeName === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}>
        <BottomTab.Screen name="Home" component={HomeStack} />
        <BottomTab.Screen name="Friends" component={FriendsStack} />
        <BottomTab.Screen name="Settings" component={SettingStack} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
