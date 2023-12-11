import { Box, Text, Image, HStack, Button, Heading, Stack, ScrollView, Seg, Center } from "native-base";
import { Hi_profile } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { VStack } from 'native-base';
import { AspectRatio } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView>
        <Center>
          <Hi_profile title={"Halo, Belinda Agni"} />
          <Stack flexDirection="row-reverse">

            <Box flex={1} ml={5} bg={"#7dd3fc"} w={"150"} borderRadius={"30"} h={48} mr={5} mt={5} >

              <HStack>
                <Box justifyContent={"center"} alignItems={"center"} >
                  <Text bold fontSize={"16"} color={"black"} ml={5} textAlign={"left"}>What is Mental health? </Text>
                  <Text fontSize={"14"} mt={2} ml={5} textAlign={"center"}>Let's find our information </Text>
                  <Text fontSize={"14"} ml={5} textAlign={"left"}>about Mental health </Text>

                </Box>
                <Image source={{ uri: "https://i.pinimg.com/564x/ff/56/8c/ff568cd703f5ac83c8f37590f489a321.jpg" }}
                  w={"32"}
                  h={"32"}
                  mr={5}
                  mt={9}
                  ml={5}
                  borderRadius={20}
                  alignSelf={"flex-end"}
                  alignContent={"center"}
                  alt="image">
                </Image>
              </HStack>
            </Box>
          </Stack>
        </Center>

        <Text bold fontSize={15} w={"300"} pt={"5"} mt={5} ml={6}>Komunikasi Dengan Cara Pilihanmu</Text>
        <Text fontSize={13} mb={5} ml={6}> Konseling yang efektif dari rasa nyaman.</Text>
        <Center>
          <Box w={300} h={90} borderRadius={10} borderWidth={2} p={3} backgroundColor={"#e0f2fe"} justifyContent={'center'}>
            <HStack>
              <Ionicons name="heart-outline" size={30} />
              <VStack flex={1} ml={5}>
                <Text bold >Pilih Psikolog</Text>
                <Text>Bantuan Konseling</Text>
              </VStack>
              <Ionicons name="chevron-forward-outline" color={"#0369a1"} size={30}></Ionicons>
            </HStack>
          </Box>


          <TouchableOpacity onPress={() => { navigation.navigate('Hospital'); }}>
            <Box w={300} h={90} borderRadius={10} borderWidth={2} mt={3} p={3} backgroundColor={"#e0f2fe"} justifyContent={'center'}>
              <HStack>
                <Ionicons name="business-outline" size={30} />
                <VStack flex={1} ml={5}>
                  <Text bold >Pilih Rumah Sakit</Text>
                  <Text>untuk penanganan lebih</Text>
                </VStack>
                <Ionicons name="chevron-forward-outline" color={'#0369a1'} size={30}></Ionicons>
              </HStack>
            </Box>
          </TouchableOpacity>
        </Center>


        <Text bold fontSize={15} w={"300"} pt={"3"} textAlign={"start"} mt={3} ml={5}>Berbagi Cerita Yuk</Text>

        <ScrollView horizontal={true} m={1} >
          <TouchableOpacity onPress={() => { navigation.navigate('Berita'); }}>
            <Box alignItems="center">
              <Box m={5} maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
              }} _web={{
                shadow: 2,
                borderWidth: 0
              }} _light={{
                backgroundColor: "gray.50"
              }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                      uri: "https://th.bing.com/th/id/OIP.lM1ffiBHufvi4v63481EsgAAAA?pid=ImgDet&rs=1"
                    }} alt="image" />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      hal ini, yang bisa mencegah dan mengurangi risiko bunuh diri.
                    </Heading>
                    <Text fontSize="xs" _light={{
                      color: "blue.400"
                    }} _dark={{
                      color: "blue.300"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                      Demetrius Adyatma Pangestu
                    </Text>
                  </Stack>

                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600" _dark={{
                        color: "warmGray.200"
                      }} fontWeight="200">
                        6 mins ago
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </Box>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('Berita'); }}>
          <Box alignItems="center">
            <Box maxW="80" rounded="lg" mt={5} overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700"
            }} _web={{
              shadow: 2,
              borderWidth: 0
            }} _light={{
              backgroundColor: "gray.50"
            }}>
              <Box >
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image source={{
                    uri: "https://rm.id/files/konten/berita/menkes-jaga-kesehatan-itu-mudah-cukup-atur-2-hal-ini_196639.jpg"
                  }} alt="image" />
                </AspectRatio>
              </Box>
              <Stack p="4" space={2}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    cara memilih terapi yang paling sesuai untukmu
                  </Heading>
                  <Text fontSize="xs" _light={{
                    color: "blue.400"
                  }} _dark={{
                    color: "blue.300"
                  }} fontWeight="500" ml="-0.5" mt="-1">
                    Oktavian Dewangga
                  </Text>
                </Stack>
                <HStack alignItems="center" space={2} justifyContent="space-between">
                  <HStack alignItems="center">
                    <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="200">
                      6 mins ago
                    </Text>
                  </HStack>
                </HStack>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                  <HStack alignItems="center">

                  </HStack>
                </HStack>
              </Stack>
            </Box>
          </Box>
          </TouchableOpacity>

        </ScrollView>

      </ScrollView>

    </>
  );
};

export default Home;
