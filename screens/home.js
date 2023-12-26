import { Box, Text, Image, HStack, Button, Heading, FlatList, ScrollView, Center, Link, Pressable } from "native-base";
import { Header } from "../components";
import { MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { VStack } from 'native-base';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { getData } from "../src/utils/localStorage";
import databerita from "../databerita";

const Home = () => {
  const navigation = useNavigation();
  const [Home, setHome] = useState(null);

  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setHome(data);
      } else {
        // navigation.replace('Login');
      }
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const renderitem = ({ item }) => {
    return (
      <SafeAreaView >
        <ScrollView >
          <Box flex={1} background={'#27AAE1'}>
            <Box m={5} mt={20}>
              <Text fontWeight={'bold'} fontSize={20} marginBottom={1} color={'white'}>HI {Home?.name}</Text>
              <Text fontSize={20} color={'white'} marginBottom={8}>Selamat Datang Di Mentalife</Text>
            </Box>
            <Box background={'white'} w={'100%'} borderTopRadius={40} >
              <Box alignItems={'center'}>
                <Box bg={"#28AADC"} w={'90%'} mt={5} rounded={20}>
                  <HStack>
                    <Box flex={1}>
                      <Text bold fontSize={"20"} color={"white"} ml={5} mt={7} mr={3}  >Dr. Ramelan</Text>
                      <Text fontSize={"14"} color={"white"} ml={5} mt={3} mr={3} textAlign={"left"}>Now The Dr. Ramelan is ready available for mental health services</Text>
                    </Box>
                    <Box flex={1}>
                      <Image source={{ uri: "https://i.pinimg.com/564x/ff/56/8c/ff568cd703f5ac83c8f37590f489a321.jpg" }}
                        w={"32"}
                        h={"32"}
                        m={5}
                        borderRadius={20}
                        alignSelf={"flex-end"}
                        alignContent={"center"}
                        alt="image" />
                    </Box>
                  </HStack>
                </Box>
              </Box>
              <Box marginLeft={6} marginTop={10}>
                <Text bold fontSize={18}>Mental health Patient Care</Text>
              </Box>
              <HStack marginLeft={3} marginTop={2}>
                <VStack alignItems={'center'}>
                  <Image source={{ uri: "https://i.pinimg.com/originals/e3/eb/c7/e3ebc7d142c98b1ea141a8797d934f37.jpg" }} w={'90'}
                    h={'90'}
                    borderRadius={20}
                    alt="image" />
                  <Text fontSize={13} w={"20"} color={'#A49999'} textAlign={"center"}>Depresi</Text>
                </VStack>
                <VStack alignItems={'center'}>
                  <Image source={{ uri: "https://i.pinimg.com/originals/e3/eb/c7/e3ebc7d142c98b1ea141a8797d934f37.jpg" }} w={'90'}
                    h={'90'}
                    borderRadius={20}
                    alt="image" />
                  <Text fontSize={13} w={"20"} color={'#A49999'} textAlign={"center"}>Psikosis</Text>
                </VStack>
                <VStack alignItems={'center'}>
                  <Image source={{ uri: "https://i.pinimg.com/originals/e3/eb/c7/e3ebc7d142c98b1ea141a8797d934f37.jpg" }} w={'90'}
                    h={'90'}
                    borderRadius={20}
                    alt="image" />
                  <Text fontSize={13} w={"20"} color={'#A49999'} textAlign={"center"}>Skizofrenia</Text>
                </VStack>
                <VStack alignItems={'center'}>
                  <Image source={{ uri: "https://i.pinimg.com/originals/e3/eb/c7/e3ebc7d142c98b1ea141a8797d934f37.jpg" }} w={'90'}
                    h={'90'}
                    borderRadius={20}
                    alt="image" />
                  <Text fontSize={13} w={"20"} color={'#A49999'} textAlign={"center"}>Demensia</Text>
                </VStack>


              </HStack>

              <Text bold fontSize={20} w={"300"} pt={"5"} mt={5} ml={6}><Ionicons name="information-circle" size={20} color="#28AADC" /> About Mental health</Text>
              <Text fontSize={13} mb={5} marginLeft={12} color={'#A49999'} ml={6}> Education about Mental health</Text>
              <Box alignItems={'center'}>
                <Box bg={"#28AADC"} w={'90%'} mt={5} rounded={20}>
                  <HStack>
                    <Box flex={1}>
                      <Image source={{ uri: "https://i.pinimg.com/564x/ff/56/8c/ff568cd703f5ac83c8f37590f489a321.jpg" }}
                        w={"32"}
                        h={"32"}
                        m={5}
                        paddingLeft={10}
                        borderRadius={20}
                        alignSelf={"flex-start"}
                        alignContent={"center"}
                        alt="image" />
                    </Box>
                    <Box flex={1} justifyContent={'center'}>
                      <Text bold fontSize={"15"} color={"white"}>What is Mental health? </Text>
                      <Text fontSize={13} color={"white"}> Let’s find out information about mental health</Text>
                      <Button width={'50%'} shadow={3} rounded={20} bgColor={'white'} height={10} mt={2}><Text bold>Let’s Go!</Text></Button>
                    </Box>
                  </HStack>
                </Box>
              </Box>

              {/* Popular Psikolog */}
              <Text bold fontSize={20} w={"300"} pt={"5"} mt={5} ml={6} >Popular Psikolog</Text>
              <HStack marginLeft={6} mt={5} space={2}>
                <VStack bgColor={'#28AADC'} rounded={20} width={'30%'} >
                  <Box mt={3} alignItems={'center'}>
                    <Image source={{ uri: "https://media.licdn.com/dms/image/D4E03AQFwuUyfXHCeew/profile-displayphoto-shrink_800_800/0/1697614422617?e=2147483647&v=beta&t=j229bYy5NfolBOZeHVLEG0WfoIS4HnNyDRu6DOO6NFI" }} w={'100'}
                      h={'100'}
                      borderRadius={20}
                      alt="image" />
                  </Box>
                  <Box bgColor={'#C4E9F5'} p={3} alignItems={'center'} rounded={20}>
                    <Text bold fontSize={10} >Psikologi Klinis anak dan remaja</Text>
                  </Box>
                </VStack>
                <VStack bgColor={'#28AADC'} rounded={20} width={'30%'}  >
                  <Box mt={3} alignItems={'center'}>
                    <Image source={{ uri: "https://media.licdn.com/dms/image/D4E03AQFwuUyfXHCeew/profile-displayphoto-shrink_800_800/0/1697614422617?e=2147483647&v=beta&t=j229bYy5NfolBOZeHVLEG0WfoIS4HnNyDRu6DOO6NFI" }} w={'100'}
                      h={'100'}
                      borderRadius={20}
                      alt="image" />
                  </Box>
                  <Box bgColor={'#C4E9F5'} p={3} alignItems={'center'} rounded={20}>
                    <Text bold fontSize={10} >Psikologi Klinis anak dan remaja</Text>
                  </Box>
                </VStack>
                <VStack bgColor={'#28AADC'} rounded={20} width={'30%'} >
                  <Box mt={3} alignItems={'center'}>
                    <Image source={{ uri: "https://media.licdn.com/dms/image/D4E03AQFwuUyfXHCeew/profile-displayphoto-shrink_800_800/0/1697614422617?e=2147483647&v=beta&t=j229bYy5NfolBOZeHVLEG0WfoIS4HnNyDRu6DOO6NFI" }} w={'100'}
                      h={'100'}
                      borderRadius={20}
                      alt="image" />
                  </Box>
                  <Box bgColor={'#C4E9F5'} p={3} alignItems={'center'} rounded={20}>
                    <Text bold fontSize={10} >Psikologi Klinis anak dan remaja</Text>
                  </Box>
                </VStack>
              </HStack>

              {/* Article */}
              <HStack mt={10}>
                <Box ml={5} >
                  <MaterialIcons name="article" size={30} color="#28AADC" />
                </Box>
                <VStack flex={2}>
                  <Text bold fontSize={20} w={"300"}  > Article</Text>
                  <Text fontSize={12} mb={5} color={'#A49999'} ml={1}> Information & Article on mental health</Text>
                </VStack>
                <Box flex={1}>
                  <Pressable onPress={() => navigation.navigate("article")}>

                    <Text bold marginLeft={7} color={'#28AADC'}>See all</Text>
                  </Pressable>
                </Box>
              </HStack>
              
              <Box py={"4"} bg={"#C4E9F5"}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {databerita.slice(0).map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                onPress={() =>
                  navigation.navigate("Article", { item: item })
                }
              >
                <Box w={"48"} mr={"4"} ml={index == 0 ? "4" : "0"}>
                  <Image
                    source={{ uri: item.image }}
                    w="full"
                    h="24"
                    alt="Image Data"
                    mb={"2"}
                  />
                  <Text fontSize={"xs"} color="black">
                    {item.date}
                  </Text>
                  <Heading
                    fontSize={"sm"}
                    lineHeight={"xs"}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    bold
                  >
                    {item.title}
                  </Heading>
                </Box>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        </Box>



              {/* Emergency */}
              <HStack mt={10}>
                <Box ml={5} >
                  <Ionicons name="megaphone-outline" size={30} color="#28AADC" />
                </Box>
                <VStack flex={2}>
                  <Text bold fontSize={20} w={"300"}  >Emergency</Text>
                  <Text fontSize={13} mb={5} color={'#A49999'} ml={1}> Information & Article on mental health</Text>
                </VStack>
              </HStack>


              <Center mb={150}>
                <TouchableOpacity onPress={() => { navigation.navigate('Psikolog'); }}>
                  <Box w={350} h={70} mt={15} borderRadius={10} p={3} backgroundColor={"#C4E9F5"}  >
                    <Center>
                      <HStack>
                        <Box mt={1} flex={1} alignItems={'center'} >
                          <FontAwesome5 name="brain" size={34} color={'#28AADC'} />
                        </Box>
                        <VStack ml={5} mr={10} flex={2}>
                          <Text bold color={"#28AADC"} >Choose Psikolog</Text>
                          <Text color={"white"}>bantuan konseling</Text>
                        </VStack>
                        <Box mt={1} flex={1}>
                          <Ionicons name="chevron-forward-outline" color={"#28AADC"} size={30} />
                        </Box>

                      </HStack>
                    </Center>
                  </Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Hospital'); }}>
                  <Box w={350} h={70} mt={15} borderRadius={10} p={3} backgroundColor={"#C4E9F5"}  >
                    <Center>
                      <HStack>
                        <Box mt={1} flex={1} alignItems={'center'} >
                          <MaterialCommunityIcons name="hospital-building" size={40} color={'#28AADC'} />
                        </Box>
                        <VStack ml={5} mr={10} flex={2}>
                          <Text bold color={"#28AADC"} >Choose Hospital</Text>
                          <Text color={"white"}>rumah sakit terdekat </Text>
                        </VStack>
                        <Box mt={1} flex={1}>
                          <Ionicons name="chevron-forward-outline" color={"#28AADC"} size={30} />
                        </Box>

                      </HStack>
                    </Center>
                  </Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('obat'); }}>
                  <Box w={350} h={70} mt={15} borderRadius={10} p={3} backgroundColor={"#C4E9F5"}  >
                    <Center>
                      <HStack>
                        <Box mt={1} flex={1} alignItems={'center'} >
                          <MaterialIcons name="medical-services" size={40} color={'#28AADC'} />
                        </Box>
                        <VStack ml={5} mr={10} flex={2}>
                          <Text bold color={"#28AADC"} >Medication</Text>
                          <Text color={"white"}>Apotek 24 Jam </Text>
                        </VStack>
                        <Box mt={1} flex={1}>
                          <Ionicons name="chevron-forward-outline" color={"#28AADC"} size={30} />
                        </Box>

                      </HStack>
                    </Center>
                  </Box>
                </TouchableOpacity>
              </Center>
            </Box>
          </Box>
        </ScrollView >
      </SafeAreaView >
    );
  };

  return (
    <>
      <FlatList
        data={databerita}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Home;