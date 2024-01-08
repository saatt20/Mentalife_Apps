import { Box, Text, Image, HStack, Button, Heading, FlatList, ScrollView, Center, Link, Pressable } from "native-base";
import { MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { VStack } from 'native-base';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { getData } from "../src/utils/localStorage";
import databerita from "../databerita";
import datapsikolog from "../datapsikolog";
import FIREBASE from "../config/FIREBASE";

const Home = () => {
  const navigation = useNavigation();
  const [Home, setHome] = useState(null);

  const getUserData = async () => {
    try {
      const userData = await getData("user");

      if (userData) {
        // Fetch the latest data from Firebase
        const userRef = FIREBASE.database().ref(`users/${userData.uid}`);
        const snapshot = await userRef.once("value");
        const updatedUserData = snapshot.val();

        if (updatedUserData) {
          console.log("Updated user data:", updatedUserData);
          setHome(updatedUserData);
        } else {
          console.log("User data not found");
        }
      } else {
        // Handle the case when user data is not available
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", getUserData);

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  return (
    <SafeAreaView >
      <ScrollView >
        <Box flex={1} background={'#27AAE1'}>
          <Box m={5} mt={18}>
            <Text fontWeight={'bold'} fontSize={20} marginBottom={1} color={'white'}>HI {Home?.name}</Text>
            <Text fontSize={20} color={'white'} marginBottom={1}>Selamat Datang Di Mentalife</Text>
          </Box>
          <Box background={'white'} w={'100%'} borderTopRadius={40} >
            <Box alignItems={'center'}>
              <Box bg={"#28AADC"} w={'90%'} mt={5} rounded={20}>
                <HStack>
                  <Box flex={1}>
                    <Text bold fontSize={"20"} color={"white"} ml={5} mt={7} mr={3}  >Dr. Ramelan</Text>
                    <Text fontSize={"14"} color={"white"} ml={5} mt={1} mr={3} textAlign={"left"}>Kini RS Dr.Ramelan tersedia untuk layanan kesehatan mental </Text>
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
              <Box bg={"#28AADC"} w={'90%'} mt={1} rounded={20}>
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
                    <Button width={'50%'} shadow={3} rounded={20} bgColor={'white'} height={10} mt={2}
                     onPress={() =>
                      navigation.navigate("article")
                    }><Text bold>Let’s Go!</Text></Button>
                  </Box>
                </HStack>
              </Box>
            </Box>

            {/* Popular Psikolog */}

            <Box py={"3"} bg={"#C4E9F5"} mt={10}>
              <Text bold fontSize={20} w={"300"} ml={6} >Popular Psikolog</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {datapsikolog.slice(4).map((item, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      key={index}
                      onPress={() =>
                        navigation.navigate("about-psikolog", { item: item })
                      }
                    >
                      <Box w={"48"} mr={"4"} mt={4} ml={index == 0 ? "4" : "0"}>
                        <Image
                          source={{ uri: item.image }}
                          alignSelf={"center"}
                          size={"xl"}
                          alt="Image Data"
                          mb={"2"}
                          borderRadius={10}
                        />
                        <Heading
                          fontSize={"md"}
                          lineHeight={"xs"}
                          ellipsizeMode="tail"
                          numberOfLines={1}
                          bold
                          alignSelf={"center"}
                        >
                          {item.title}
                        </Heading>
                        <Text fontSize={"xs"} color="black" ml={3} numberOfLines={1}>
                          {item.keahlian}
                        </Text>
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
              <TouchableOpacity onPress={() => navigation.navigate("article")}>
                <Box w={350} h={70} mt={15} borderRadius={10} p={3} backgroundColor={"#C4E9F5"}  >
                  <Center>
                    <HStack>
                      <Box mt={1} flex={1} alignItems={'center'} >
                        <FontAwesome5 name="newspaper" size={34} color={'#28AADC'} />
                      </Box>
                      <VStack ml={5} mr={10} flex={2}>
                        <Text bold color={"#28AADC"} >Artikel Mentalife</Text>
                        <Text color={"white"}>Berita dan Informasi </Text>
                      </VStack>
                      <Box mt={1} flex={1}>
                        <Ionicons name="chevron-forward-outline" color={"#28AADC"} size={30} />
                      </Box>
                    </HStack>
                  </Center>
                </Box>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { navigation.navigate('user-hospital'); }}>
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


export default Home;