import React, { useState, useEffect } from "react";
import { StatusBar, Image, Box, Heading, Text, ScrollView, Pressable, Center } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons"
import { Header } from "../components";
import { useNavigation } from '@react-navigation/native';
import FIREBASE from "../config/FIREBASE";
import { clearStorage, getData } from "../src/utils/localStorage";

const Profile = ({navigation}) => {
    const [Profile, setProfile] = useState(null);
    const getUserData = () => {
        getData("user").then((res) => {
          const data = res;
          if (data) {
            console.log("isi data", data);
            setProfile(data);
          } else {
            // navigation.replace('Login');
          }
        });
      };

      const onSubmit = (Profile) => {
        if (Profile) {
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
    <Header title={"Profile"}/>
    <ScrollView h={"full"}>
    <SafeAreaView>
        <StatusBar backgroundColor= "#ffffff" barStyle='dark-content'/>
        <Box mt={-12} padding={"0"} w="100%">
                <Image
                    source={require("../assets/RS.jpeg")} alignSelf={"center"}
                    blurRadius={2} borderRadius={0} borderBottomRadius={60} resizeMode="cover" h={200} w= "100%"/>
            </Box>
                
            {/* <Box flex={1} alignItems={"center"}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/128/847/847969.png'}}
                    h={120} w={120} mt={-90} borderRadius={999} borderColor={"light.100"}/>
            </Box> */}
                
            {/*Identitas */}
        <Box mt={-8} alignSelf="center" w={"80%"} bgColor={"info.100"} h={"43%"} 
            shadow={"9"} borderColor={"white"} borderWidth={"1"} borderRadius={10}>

            <Box alignItems={"start"} >
                <Box alignItems={"center"} w={58} h={58} bgColor={"blue.400"} borderRadius={90} borderColor={"blue.100"} borderWidth={8} mt={1} ml={2}>
                    <Ionicons name="person-circle-outline" color={"white"} size={39}/>
                </Box>
                <Heading shadow={5} alignSelf={"center"} ml={8} mt={-41} fontSize={20} fontWeight={"extrabold"} color={"black"}>
                DETAIL USER
                </Heading>
            </Box>

                <Box marginTop={6} ml={"16"}>
                    <Ionicons name="information-circle-outline" color={"red"} size={28}
                    />
                    <Text ml={"10"} mt={-6} fontSize={14} fontWeight={"normal"} 
                        color={"black"}>
                        {Profile?.email}
                    </Text>
                </Box>

                <Box marginTop={"5"} ml={"16"}>
                    <Ionicons name="location-outline" color={"red"} size={28}/>
                    <Text ml={"10"} mt={-7} fontSize={14} fontWeight={"normal"} 
                        color={"black"}>
                        Jl. Ketintang 100 Surabaya, Jawa Timur 60231
                    </Text>
                </Box>

                <Box  marginTop={"3"} ml={"16"}>
                    <Ionicons name="call-outline" color={"red"} size={28}/>
                     <Text  ml={"10"} mt={"-6"} fontSize={16} fontWeight={"normal"} 
                        color={"black"}>
                        {Profile?.nomorhp}
                    </Text>
                </Box>
            </Box>

                    {/* Detail Profile */}
                <Box alignSelf={"center"} w={"80%"} bgColor={"blue.600"}  mt={"5"} 
                shadow={"9"} mb={"0"} borderColor={"white"} borderWidth={"1"} borderRadius={10}>  
                    <Pressable onPress={() => navigation.navigate("Logout")} >

                                <Box  w={"100%"} h={16} mt={"0"}>
                                    <Heading ml={2} mt={5} fontSize={20} fontWeight={"bold"} color={"white"} alignSelf={"center"} >
                                    Detail Profile
                                    </Heading>
                        </Box>
                        </Pressable>              
                    </Box>
                

                
                {/* Logout */}
                <Box w={"100%"} bgColor={"red.500"} h={"75"}  mt={"5"} 
                shadow={"9"} mb={"0"} borderColor={"white"} borderWidth={"1"} borderRadius={10}>  
                    <Pressable onPress={() => onSubmit(Profile)} >
                            
                                <Box w={"100%"} h={"100%"} mt={"0"}>
                                    <Heading ml={2} mt={5} fontSize={20} fontWeight={"bold"} color={"white"} alignSelf={"center"}>
                                    Log Out
                                    </Heading>
                                </Box>
                    </Pressable>
                </Box>
        
    </SafeAreaView>
    </ScrollView>
    </>
  );
};

export default Profile;

 {/* Riwayat Transaksi
            <Box alignSelf="center" w={"100%"} bgColor={"info.100"} h={"31%"}  mt={"3"} 
                shadow={"9"} mb={"0"} borderColor={"white"} borderWidth={"1"} borderRadius={10}>
                <Pressable onPress={() => navigation.navigate("Transaksi")} >
                <Box alignContent={"center"} w={"100%"} h={"100%"} mt={"0"}>
                <Heading ml={2} mt={5} fontSize={20} fontWeight={"bold"} color={"gray.500"}>
                 Riwayat Transaksi
                 </Heading>
                  <Box alignSelf={"flex-end"} mt={"-7"} mr={"4"}>
                  <Ionicons name="time-outline" color={"gray"} size={28}/>
                  </Box>
               </Box>
                </Pressable>
            </Box> */}
