import React, { useState } from "react";
import { VStack, Text, Center, Divider, Card, FlatList, HStack, Box,Ionicons,Button } from "native-base";
import { Header } from '../components';
import { useNavigation } from "@react-navigation/native";
import datas from "../datas";

const HospitalList = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      
      
      <Box background={'#C4E9F5'} w={'100%'} borderTopRadius={0} >
      <HStack
        marginX={5}
        mt={30}
        backgroundColor='#28AADC'
        shadow={2}
      >
        <HStack space={2} flex={3} p={2}>
          <Box>
            <Text color="white" fontSize={20} fontWeight="bold">{item.hospital}</Text>
            <Text color="black" fontSize={12} fontWeight={500} pt={2}>{item.location}</Text>
            <Text color="#7F7F7F" fontSize={12} fontWeight={500} pt={3}>
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
      </Box>
    );
  };

  return (
    
    <VStack flex={1}>
      <Header withBack={true}  />
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </VStack>
    
  );
};

export default HospitalList;