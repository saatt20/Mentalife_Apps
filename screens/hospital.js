import React, { useState } from "react";
import { VStack, Text, Center, Divider, Card, FlatList, HStack, Box, Button } from "native-base";
import { Header } from '../components';
import { useNavigation } from "@react-navigation/native";
import datas from "../datas"

const HospitalList = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <HStack
        rounded={5}
        marginX={5}
        mt={30}
        backgroundColor='#ffffff'
        shadow={2}
      >
        <HStack space={5} flex={6} p={5}>
          <Box>
            <Text color="#0284c7" fontSize={20} fontWeight="bold">{item.hospital}</Text>
            <Text fontSize={11} fontWeight={500}>{item.desc}</Text>
            <Text color="black" fontSize={12} fontWeight={500} pt={2}>{item.location}</Text>
            <Text color="black" fontSize={12} fontWeight={500} pt={2}>{item.phone}</Text>
            <Text color="#7F7F7F" fontSize={12} fontWeight={500} pt={3}>
              Buka 24 jam {item.date}
            </Text>
            <Button
              width={75}
              height={35}
              backgroundColor="#FFFFFF"
              borderColor="#9CDEF2"
              borderWidth={1}
              mt={3}
              pt={2}
              onPress={() => { navigation.navigate('DetailScreen'); }}
            >
              <Text fontSize={9} color="black">Detail</Text>
            </Button>
          </Box>
        </HStack>
      </HStack>
    );
  };

  return (
    <VStack flex={1}>
      <Header title={"List Rumah Sakit"} withBack={true} />
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </VStack>
  );
};

export default HospitalList;