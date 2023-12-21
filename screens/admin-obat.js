import { Heading, Image, Box, Input, Pressable, Button,HStack,Text, ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

const AdminBerita = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
      <SafeAreaView>
      <Pressable activeOpacity={0.5} onPress={() => navigation.goBack()}>
        <Box p={-1} bgColor={"blueGray.100"}>
            <HStack>
                  <Ionicons name="arrow-back-outline" size={32} color="black"/>
                  <Text ml={2}  bold p={1} fontSize={"lg"}>Login</Text>
            </HStack>
        </Box>
        </Pressable>
      <Box mt={-20} borderWidth={"0"} borderColor={"black"} >

      <Box mt={"0"} padding={"0"} w="100%">
          <Image source={require("../assets/RS.jpeg")} blurRadius={2} borderRadius={0} resizeMode="cover" h={180} w= "100%"/>
      </Box>

      <Box borderColor={"black"} borderWidth={"0"} flex={""} alignItems={"flex-start"} ml={4}
          h={32} w={32} mt={"-20"} borderRadius={"full"} shadow={"7"} > 
                <Image
                    source={require("../assets/beckham.jpg")} h={"32"} w={"32"} mt={"-6"} borderRadius={"full"} borderColor={"light.100"}/>
      </Box>

      <Box alignSelf="center" w={"100%"} bgColor={"white"} h={110}  mt={"-2"} 
          shadow={""} mb={"0"} borderBottomWidth={"1"} borderBottomColor={"gray.500"}  borderRadius={0}>
                
          <Box alignContent={"center"} w={"100%"} h={"100%"} mt={"0"}>
                <Heading ml={6} mt={2} fontSize={27} fontWeight={"thin"} color={"gray.500"}>
                  Nama Obat
                </Heading>

                <Input borderColor={"white"} ml={5} mt={"4"} w={"85%"}
                color={"blue.400"} fontWeight={"semibold"}  placeholder="Input" fontSize={23}/>

          </Box>

      </Box>
      
      <Box alignSelf="center" w={"100%"} bgColor={"white"} h={110}  mt={"3"} 
          shadow={""} mb={"0"} borderBottomWidth={"1"} borderBottomColor={"gray.500"}  borderRadius={0}>
                
          <Box alignContent={"center"} w={"100%"} h={"100%"} mt={"0"}>
                <Heading ml={6} mt={2} fontSize={27} fontWeight={"thin"} color={"gray.500"}>
                  keterangan Obat
                </Heading>

                <Input borderColor={"white"} ml={5} mt={"4"} w={"85%"}
                color={"blue.400"} fontWeight={"semibold"}  placeholder="input" fontSize={23}/>

          </Box>

      </Box>

        <Pressable>
              <Button alignSelf={"flex-end"} p={4} mt={"6"} mr={2} w={"48"} mb={-20} title="Back" color={"amber.200"} borderColor={"white"}
                shadow={"4"}  borderWidth={1} bgColor={"white"}
                  onPress={() => navigation.navigate("Profile")}>
                
                <Heading size="md" color={"black"}>
                  Save Change
                </Heading>
      
              </Button>
            </Pressable>

      

      </Box>
      </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default AdminBerita;