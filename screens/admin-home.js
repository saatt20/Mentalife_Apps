import React, {useEffect, useState} from "react";
import { Box, Image,Text, Heading, StatusBar, VStack,  ScrollView, Pressable} from "native-base";
import { getData } from "../src/utils/localStorage";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";

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
    <SafeAreaView>
    <StatusBar barStyle="dark-content" />
    <Box marginTop="0" >

      <Box w={"100%"} h={"40%"} >
      <ImageBackground
      source={{ uri: 'https://i.pinimg.com/1200x/7f/98/02/7f9802af9537f3231ba27012c0ae6b7d.jpg'}}
      alt="-"
      resizeMode="cover"
      style={{ height: 250, width: '100%' }}

    >
      <Box
        position="absolute"
        bg="blue.400" 
        bottom={0}
        p={3}
        w="full"
      >
        <Heading fontWeight={"bold"} alignSelf={"center"} fontSize={"2xl"} color={"white"} >
       SELAMAT DATANG ADMIN
       </Heading>
       <Heading fontWeight={"bold"} alignSelf={"center"} fontSize={"2xl"} color={"white"} >
       {AdminHome?.name}
       </Heading>
      </Box>
    </ImageBackground>

       

      </Box>
      <Box shadow={"4"} alignSelf={"center"} w={"100%"} h={"32"} mt={-2} 
      bgColor={"white"}>
        <Heading mt={2} fontWeight={"semibold"} fontSize={"2xl"} ml={5}>
          Berita
        </Heading>

        <Pressable onPress={() => { navigation.navigate('admin-berita'); }}>
        <Box alignSelf={"center"} mt={0} w={"90%"} h={"20"} 
          bgColor={"info.50"}>
          <Image h={16} w={16} ml={1} mt={2}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2540/2540832.png'}}alt="-"/>

        <Box ml={"24"} mt={"-16"}>
          <VStack space={""}>
          <Text  fontWeight={"semibold"} fontSize={"xl"}>
            Berita MentaLife
          </Text>

          <Text color={"blue.600"} fontSize={12} fontWeight={"bold"}>
            Untuk mengelola berita yang ditampilkan pada pengguna 
          </Text>
          </VStack>
        </Box>

        </Box>
        </Pressable>

      </Box>

      <Box shadow={"4"} alignSelf={"center"} mt={2} w={"100%"} h={"32"} 
      bgColor={"white"} >
        <Heading mt={2} fontWeight={"semibold"} fontSize={"2xl"} ml={5}>
          Psikolog
        </Heading>

        <Pressable onPress={() => { navigation.navigate('admin-psikolog'); }}>
        <Box alignSelf={"center"} mt={0} w={"90%"} h={"20"} 
          bgColor={"green.50"} borderRadius={"5"}>
          <Image h={16} w={16} ml={1} mt={2}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3997/3997819.png'}}alt="-"/>

        <Box ml={"24"} mt={"-16"}>
          <VStack >
          <Text fontWeight={"semibold"} fontSize={"xl"}>
            Psikolog MentaLife
          </Text>

          <Text color={"blue.600"} fontSize={12} fontWeight={"bold"}>
            Untuk mengelola psikolog yang ditampilkan pada pengguna 
          </Text>
          </VStack>
        </Box>
        </Box>
        </Pressable>
        
      </Box>
     
      <Box shadow={"4"} alignSelf={"center"} mt={2} w={"100%"} h={"32"} 
      bgColor={"white"} >
        <Heading mt={2} fontWeight={"semibold"} fontSize={"2xl"} ml={5}>
          Resep & Obat
        </Heading>

        <Pressable onPress={() => { navigation.navigate('admin-obat'); }}>
        <Box alignSelf={"center"} mt={0} w={"90%"} h={"20"} 
          bgColor={"yellow.50"} borderRadius={"5"}>
          <Image h={16} w={16} ml={1} mt={2}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/647/647237.png'}}alt="-"/>

        <Box ml={"24"} mt={"-16"}>
          <VStack>
          <Text  fontWeight={"semibold"} fontSize={"xl"}>
            Resep dan Obat MentaLife
          </Text>

          <Text color={"blue.600"} fontSize={12} fontWeight={"bold"}>
            Untuk mengelola resep dan obat yang ditampilkan pada pengguna 
          </Text>
          </VStack>
        </Box>

        </Box>
        </Pressable>
      </Box>

    </Box>
    </SafeAreaView>
    </ScrollView>

    
  );
};

export default AdminHome;