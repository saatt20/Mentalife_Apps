import { Box, Text, Image, HStack, Button, Heading, Stack, ScrollView, Seg, Center, Link, Pressable } from "native-base";
import { Header } from "../components";
import { MaterialIcons, Ionicons, FontAwesome5,MaterialCommunityIcons  } from '@expo/vector-icons';
import { VStack } from 'native-base';
import { AspectRatio } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, {useEffect, useState} from "react";
import { getData } from "../src/utils/localStorage";

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


  return (
    <>
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
              <Box >
                {/* <HStack>
                  <VStack>
                    <Image source={{ uri: "https://i.pinimg.com/originals/e3/eb/c7/e3ebc7d142c98b1ea141a8797d934f37.jpg" }} w={"32"}
                      h={"32"}
                      m={2}
                      borderRadius={20}
                      alignSelf={"flex-end"}
                      alignContent={"center"}
                      alt="image" />
                    <Text bold fontSize={15} w={"20"} ml={6} textAlign={"center"}>Depresi</Text>
                  </VStack>
                  <VStack>
                    <Image source={{ uri: "https://i.pinimg.com/originals/e3/eb/c7/e3ebc7d142c98b1ea141a8797d934f37.jpg" }} w={"32"}
                      h={"32"}
                      m={2}
                      borderRadius={20}
                      alignContent={"center"}
                      alt="image" />
                    <Text bold fontSize={15} w={"20"} ml={6} textAlign={"center"}>Depresi</Text>
                  </VStack>
                  <VStack>
                    <Image source={{ uri: "https://i.pinimg.com/originals/e3/eb/c7/e3ebc7d142c98b1ea141a8797d934f37.jpg" }} w={"32"}
                      h={"32"}
                      m={2}
                      borderRadius={20}
                      alignContent={"center"}
                      alt="image" />
                    <Text bold fontSize={15} w={"20"} ml={6} textAlign={"center"}>Depresi</Text>
                  </VStack>

                </HStack> */}
              </Box>
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
              <HStack mt={10}>
                <Box ml={5} >
                  <MaterialIcons name="article" size={30} color="#28AADC" />
                </Box>
                <VStack flex={2}>
                  <Text bold fontSize={20} w={"300"}  > Article</Text>
                  <Text fontSize={12} mb={5} color={'#A49999'} ml={1}> Information & Article on mental health</Text>
                </VStack>
                <Box flex={1}>
                  <Pressable onPress={() => alert('See all')}>
                    <Text bold marginLeft={7} color={'#28AADC'}>See all</Text>
                  </Pressable>
                </Box>
              </HStack>
              <ScrollView horizontal marginLeft={6} showsHorizontalScrollIndicator={false}>
                <Pressable onPress={() => { navigation.navigate('berita'); }}>
                <VStack maxW={'200'} marginRight={3} >
                  <AspectRatio w="100%" ratio={16/ 9}>
                    <Image source={{
                      uri: "https://i.pinimg.com/564x/d5/74/2b/d5742b0380120719cf10fd95818716fb.jpg"
                    }} alt="image" rounded={15} />
                  </AspectRatio>
                  <Text mt={2} bold>Cara tetap produktif di tempat kerja saat pikiran kacau</Text>
                </VStack>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate('berita'); }}>
                <VStack maxW={'200'} marginRight={3} >
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                      uri: "https://rm.id/files/konten/berita/menkes-jaga-kesehatan-itu-mudah-cukup-atur-2-hal-ini_196639.jpg"
                    }} alt="image" rounded={15} />
                  </AspectRatio>
                  <Text mt={2} bold>New Therapist for mental health</Text>
                </VStack>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate('berita'); }}>
                <VStack maxW={'200'} marginRight={3} >
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                      uri: "https://rm.id/files/konten/berita/menkes-jaga-kesehatan-itu-mudah-cukup-atur-2-hal-ini_196639.jpg"
                    }} alt="image" rounded={15} />
                  </AspectRatio>
                  <Text mt={2} bold>New Therapist for mental health</Text>
                </VStack>
                </Pressable>
              </ScrollView>
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
                          <MaterialIcons name="medical-services"  size={40} color={'#28AADC'} />
                        </Box>
                        <VStack ml={5} mr={10} flex={2}>
                          <Text bold color={"#28AADC"} >Medication</Text>
                          <Text color={"white"}>rumah sakit terdekat </Text>
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

    </>
  );
};

export default Home;





// import { Box, Text, Image, HStack, Button, Heading, Stack, ScrollView, Center} from "native-base";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { Header } from "../components";
// import { VStack } from 'native-base';
// import { AspectRatio } from "native-base";
// import { TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const Home = () => {
//   const navigation = useNavigation();

//   return (
//     <>
//     <Header title={"Home"} />
//       <ScrollView>

//           <Box borderWidth={"2"} >
//             <Text fontWeight={"bold"} fontStyle={"italic"} color={"black"}>
//               Halo, Selamat Datang
//             </Text>
//           </Box>
//           <Stack flexDirection="row-reverse">

          
          
//             <Box flex={1} ml={5} bg={"#7dd3fc"} w={"150"} borderRadius={"30"} h={48} mr={5} mt={5} >

//               <HStack>
//                 <Box justifyContent={"center"} alignItems={"center"} >
//                   <Text bold fontSize={"16"} color={"black"} ml={5} textAlign={"left"}>What is Mental health? </Text>
//                   <Text fontSize={"14"} mt={2} ml={5} textAlign={"center"}>Let's find our information </Text>
//                   <Text fontSize={"14"} ml={5} textAlign={"left"}>about Mental health </Text>

//                 </Box>
//                 <Image source={{ uri: "https://i.pinimg.com/564x/ff/56/8c/ff568cd703f5ac83c8f37590f489a321.jpg" }}
//                   w={"32"}
//                   h={"32"}
//                   mr={5}
//                   mt={9}
//                   ml={5}
//                   borderRadius={20}
//                   // alignSelf={"flex-end"}
//                   // alignContent={"center"}
//                   alt="image">
//                 </Image>
//               </HStack>
//             </Box>
//           </Stack>

//         <Text bold fontSize={15} w={"300"} pt={"5"} mt={5} ml={6}>Komunikasi Dengan Cara Pilihanmu</Text>
//         <Text fontSize={13} mb={5} ml={6}> Konseling yang efektif dari rasa nyaman.</Text>
//         <Center>
//           <Box w={300} h={90} borderRadius={10} borderWidth={2} p={3} backgroundColor={"#e0f2fe"} justifyContent={"center"}>
//             <HStack>
//               <Ionicons name="heart-outline" size={30} />
//               <VStack flex={1} ml={5}>
//                 <Text bold >Pilih Psikolog</Text>
//                 <Text>Bantuan Konseling</Text>
//               </VStack>
//               <Ionicons name="chevron-forward-outline" color={"#0369a1"} size={30}></Ionicons>
//             </HStack>
//           </Box>


//           <TouchableOpacity onPress={() => { navigation.navigate('Hospital'); }}>
//             <Box w={300} h={90} borderRadius={10} borderWidth={2} mt={3} p={3} backgroundColor={"#e0f2fe"} justifyContent={'center'}>
//               <HStack>
//                 <Ionicons name="business-outline" size={30} />
//                 <VStack flex={1} ml={5}>
//                   <Text bold >Pilih Rumah Sakit</Text>
//                   <Text>untuk penanganan lebih</Text>
//                 </VStack>
//                 <Ionicons name="chevron-forward-outline" color={'#0369a1'} size={30}></Ionicons>
//               </HStack>
//             </Box>
//           </TouchableOpacity>
//         </Center>


//         <Text bold fontSize={20} w={"300"} pt={"3"} alignSelf={"flex-start"} mt={3} ml={5}>Berbagi Cerita Yuk</Text>

//         <ScrollView horizontal={true} m={1} >
//           <TouchableOpacity onPress={() => { navigation.navigate('Berita'); }}>
//             <Box alignItems="center">
//               <Box m={5} maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
//                 borderColor: "coolGray.600",
//                 backgroundColor: "gray.700"
//               }} _web={{
//                 shadow: 2,
//                 borderWidth: 0
//               }} _light={{
//                 backgroundColor: "gray.50"
//               }}>
//                 <Box>
//                   <AspectRatio w="100%" ratio={16 / 9}>
//                     <Image source={{
//                       uri: "https://th.bing.com/th/id/OIP.lM1ffiBHufvi4v63481EsgAAAA?pid=ImgDet&rs=1"
//                     }} alt="image" />
//                   </AspectRatio>
//                 </Box>
//                 <Stack p="4" space={3}>
//                   <Stack space={2}>
//                     <Heading size="sm" ml="-1">
//                       hal ini, yang bisa mencegah dan mengurangi risiko bunuh diri.
//                     </Heading>
//                     <Text fontSize="xs" _light={{
//                       color: "blue.400"
//                     }} _dark={{
//                       color: "blue.300"
//                     }} fontWeight="500" ml="-0.5" mt="-1">
//                       Demetrius Adyatma Pangestu
//                     </Text>
//                   </Stack>

//                   <HStack alignItems="center" space={4} justifyContent="space-between">
//                     <HStack alignItems="center">
//                       <Text color="coolGray.600" _dark={{
//                         color: "warmGray.200"
//                       }} fontWeight="200">
//                         6 mins ago
//                       </Text>
//                     </HStack>
//                   </HStack>
//                 </Stack>
//               </Box>
//             </Box>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => { navigation.navigate('Berita'); }}>
//           <Box alignItems="center">
//             <Box maxW="80" rounded="lg" mt={5} overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
//               borderColor: "coolGray.600",
//               backgroundColor: "gray.700"
//             }} _web={{
//               shadow: 2,
//               borderWidth: 0
//             }} _light={{
//               backgroundColor: "gray.50"
//             }}>
              
//               <Box>
//                 <AspectRatio w="100%" ratio={16 / 9}>
//                   <Image source={{
//                     uri: "https://rm.id/files/konten/berita/menkes-jaga-kesehatan-itu-mudah-cukup-atur-2-hal-ini_196639.jpg"
//                   }} alt="image" />
//                 </AspectRatio>
//               </Box>
//               <Stack p="4" space={2}>
//                 <Stack space={2}>
//                   <Heading size="sm" ml="-1">
//                     cara memilih terapi yang paling sesuai untukmu
//                   </Heading>
//                   <Text fontSize="xs" _light={{
//                     color: "blue.400"
//                   }} _dark={{
//                     color: "blue.300"
//                   }} fontWeight="500" ml="-0.5" mt="-1">
//                     Oktavian Dewangga
//                   </Text>
//                 </Stack>
//                 <HStack alignItems="center" space={2} justifyContent="space-between">
//                   <HStack alignItems="center">
//                     <Text color="coolGray.600" _dark={{
//                       color: "warmGray.200"
//                     }} fontWeight="200">
//                       6 mins ago
//                     </Text>
//                   </HStack>
//                 </HStack>
//                 <HStack alignItems="center" space={4} justifyContent="space-between">
//                   <HStack alignItems="center">

//                   </HStack>
//                 </HStack>
//               </Stack>
//             </Box>
//           </Box>
//           </TouchableOpacity>

//         </ScrollView>

//       </ScrollView>

//     </>
//   );
// };

// export default Home;
