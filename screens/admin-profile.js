import { Box, Text, Image, VStack, ScrollView, Pressable, Heading } from "native-base"
import FIREBASE from '../config/FIREBASE';
import { clearStorage, getData } from "../src/utils/localStorage";
import React, { useState, useEffect } from "react";

const AdminProfile = ({ navigation }) => {
  const [AdminProfile, setAdminProfile] = useState(null);

  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setAdminProfile(data);
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

  // KODE UNTUK MELAKUKAN LOG OUT
  const onSubmit = (AdminProfile) => {
    if (AdminProfile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.replace("Login");
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.replace("Login");
    }
  };

  return (
    <Box
      mt={"5"}
      mx={"5"}
      backgroundColor="blueGray100"
      flex={1}
      marginTop={"20"}
      flexDirection="column"
    >
      <ScrollView>
        <VStack backgroundColor="blueGray100" width={"full"} mb={"10"}>
          <Image
            source={require("../assets/mental.jpg")}
            size="2xl"
            borderRadius={"full"}
            bgColor={"black"}
            alignSelf="center"
            alt="Foto Profil"
          />
          <Text
            fontSize={"xl"}
            alignSelf="center"
            marginTop={"4"}
            fontWeight="bold"
          >
            {AdminProfile?.name}
          </Text>
        </VStack>
        <Box
        mt={-7}
          flexDirection="column"
          bgColor="white"
          shadowColor="black"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={"25"}
          shadowRadius={"3.5"}
          justifyContent="space-evenly"
          p={"5"}
          borderRadius={"lg"}
        >
          <Text color="black" fontWeight="semibold" fontSize={"xl"}alignSelf={"center"}>
            Data Pribadi Admin
          </Text>
          <Box mt={"4"}>
            <Text color="black" fontSize={"lg"} bold>
              Email
            </Text>
            <Text color="black" fontSize={"lg"} mt={"2"}>
              {AdminProfile?.email}
            </Text>
          </Box>
          <Box mt={"3"}>
            <Text color="black" fontSize={"lg"} bold>
              Nomor Ponsel
            </Text>
            <Text color="black" fontSize={"lg"} mt={"2"}>
              {AdminProfile?.nomorhp}
            </Text>
          </Box>
        </Box>
        <Box w={"100%"} bgColor={"red.500"} h={"75"} mt={"5"}
          shadow={"9"} mb={"0"} borderColor={"white"} borderWidth={"1"} borderRadius={10}>
          <Pressable onPress={() => onSubmit(AdminProfile)} >
              <Heading mt={5} fontSize={20} fontWeight={"bold"} color={"white"} alignSelf={"center"}>
                Log Out
              </Heading>
          </Pressable>
        </Box>
      </ScrollView>
    </Box>
  );
}

export default AdminProfile;