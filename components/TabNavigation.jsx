import React from "react";
import HomeScreen from "./HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnotherHomeScreen from "./AnotherHomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AnotherHome" component={AnotherHomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
