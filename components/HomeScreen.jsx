import { Box, ScrollView, Text, VStack, View } from "native-base";
import React from "react";
import HomeItem from "./HomeItem";

const HomeScreen = () => {
  const homeItems = [
    { name: "Welcome", description: "This is the home page", color: "red" },
    { name: "Test", description: "This is a test", color: "green" },
    { name: "Hello!", description: "What's up?", color: "blue" },
  ];

  return (
    <ScrollView mt={4}>
      <VStack space={4} justifyContent="center" alignItems="center" px={4}>
        {homeItems.map((homeItem, i) => (
          <HomeItem key={i} item={homeItem} />
        ))}
      </VStack>
    </ScrollView>
  );
};

export default HomeScreen;
