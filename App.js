import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, View, extendTheme } from "native-base";
import React from "react";
import StackNavigation from "./components/StackNavigation";


const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
