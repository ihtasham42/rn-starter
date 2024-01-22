import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestScreen from "./TestScreen";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
