import React, {useEffect, useState} from "react";
import { Box, Image,Text, Heading, VStack,  ScrollView, Pressable} from "native-base";
import { getData } from "../src/utils/localStorage";
import { ImageBackground } from "react-native";
import { Header } from "../components";

const AdminHome = ({ navigation }) => {
  const [AdminHome, setAdminHome] = useState(null);

  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setAdminHome(data);
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
    <ScrollView>
    <Header title={"Mentalife"}/>
    <Box p={3} >

      <Box w={"100%"} h={"42%"} >
      <ImageBackground
      source={{ uri: 'https://i.pinimg.com/1200x/7f/98/02/7f9802af9537f3231ba27012c0ae6b7d.jpg'}}
      alt="-"
      resizeMode="cover"
      style={{ height: 250, width: '100%' }} 
      />
      </Box>

      <Box
        bg="blue.400" 
        bottom={0}
        mt={-5}
        w="full"
        h={20}
      >
        <Heading fontWeight={"bold"} alignSelf={"center"} fontSize={"2xl"} color={"white"} mt={2}>
       SELAMAT DATANG ADMIN
       </Heading>
       <Heading fontWeight={"bold"} alignSelf={"center"} fontSize={"2xl"} color={"white"} >
       {AdminHome?.name}
       </Heading>
      </Box>

      {/* Hospital Admin */}
      <Box shadow={"4"} alignSelf={"center"} w={"100%"} h={"32"} mt={5} 
      bgColor={"white"}>
        <Heading mt={2} fontWeight={"semibold"} fontSize={"xl"} ml={5}>
        Admin Hospital
        </Heading>
        <Pressable onPress={() => { navigation.navigate('AdminHospital'); }}>
        <Box alignSelf={"center"} mt={0} w={"90%"} h={"20"} 
          bgColor={"yellow.50"}>
          <Image h={16} w={16} ml={1} mt={2}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2197/2197059.png'}}alt="-"/>

        <Box ml={"24"} mt={"-16"}>
          <VStack space={""}>
          <Text  fontWeight={"semibold"} fontSize={"lg"}>
            Hospital MentaLife
          </Text>

          <Text color={"blue.600"} fontSize={12} fontWeight={"bold"}>
            Untuk mengelola data rumah sakit MentaLife 
          </Text>
          </VStack>
        </Box>

        </Box>
        </Pressable>

      </Box>

      {/* Obat Admin */}
      <Box shadow={"4"} alignSelf={"center"} mt={2} w={"100%"} h={"32"} mb={5}
      bgColor={"white"} >
        <Heading mt={2} fontWeight={"semibold"} fontSize={"xl"} ml={5} mb={1}>
         Admin Obat
        </Heading>

        <Pressable onPress={() => { navigation.navigate('admin-obat'); }}>
        <Box alignSelf={"center"} mt={0} w={"90%"} h={"20"} 
          bgColor={"yellow.50"} borderRadius={"5"}>
          <Image h={16} w={16} ml={1} mt={2}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/647/647237.png'}}alt="-"/>

        <Box ml={"24"} mt={"-16"}>
          <VStack>
          <Text  fontWeight={"semibold"} fontSize={"lg"}>
          Obat MentaLife
          </Text>

          <Text color={"blue.600"} fontSize={12} fontWeight={"bold"}>
            Untuk mengelola data obat MentaLife 
          </Text>
          </VStack>
        </Box>

        </Box>
        </Pressable>
      </Box>
      
    </Box>
    </ScrollView>

    
  );
};

export default AdminHome;