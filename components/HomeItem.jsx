import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Image, Pressable, Text, VStack } from "native-base";
import React from "react";

const HomeItem = ({ item }) => {
  const { name, description, color } = item;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.push("Test");
  };

  return (
    <Box
      bg={`${color}.600`}
      py="4"
      px="3"
      borderRadius="5"
      rounded="md"
      width="100%"
    >
      <HStack justifyContent="space-between">
        <Box justifyContent="space-between">
          <VStack space="2">
            <Text fontSize="sm" color="white">
              {name}
            </Text>
            <Text color="white" fontSize="xl">
              {description}
            </Text>
          </VStack>
          <Pressable
            rounded="xs"
            bg={`${color}.400`}
            alignSelf="flex-start"
            py="1"
            px="3"
            onPress={handlePress}
          >
            <Text
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="white"
            >
              Remind me
            </Text>
          </Pressable>
        </Box>
        <Image
          source={{
            uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
          }}
          alt="Aang flying and surrounded by clouds"
          height="100"
          rounded="full"
          width="100"
        />
      </HStack>
    </Box>
  );
};

export default HomeItem;
