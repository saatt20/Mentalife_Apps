import { StatusBar, Image, Box, Heading, Text, ScrollView, Pressable } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons"
import { Header } from "../components";
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation();
  return (
    <>
    <ScrollView>
    <Header title={"Profile"} withBack={"true"} />
    <SafeAreaView>
        <StatusBar backgroundColor= "#ffffff" barStyle='dark-content'/>
            <Box mt={"-79"} padding={"0"} w="100%">
                <Image
                    source={require("../assets/RS.jpeg")} 
                    blurRadius={2} borderRadius={5} resizeMode="cover" h={200} w= "100%"/>
            </Box>
                
            <Box flex={1} alignItems={"center"}>
                <Image
                    source={require("../assets/beckham.jpg")}
                    h={120} w={120} mt={-90} borderRadius={"full"} borderColor={"light.100"}/>
            </Box>

            {/*Identitas */}
        <Box alignSelf="center" w={"90%"} bgColor={"info.100"} h={"31%"}  mt={"-16"} 
            shadow={"9"} mb={280} borderColor={"white"} borderWidth={"1"} borderRadius={10}>

            <Box alignItems={"start"} >
                <Box alignItems={"center"} w={58} h={58} bgColor={"blue.400"} borderRadius={90} borderColor={"blue.100"} borderWidth={8} mt={1} ml={2}>
                    <Ionicons name="person-circle-outline" color={"white"} size={39}
                    />
                </Box>
                        <Heading shadow={5} alignSelf={"center"} ml={8} mt={-41} fontSize={20} fontWeight={"extrabold"} color={"black"}>
                            David Beckham El Matadore
                        </Heading>

                <Box alignContent={"flex-start"} mt={2} ml={"16"}>
                    <Ionicons name="location-outline" color={"gray"} size={28}
                    />
                </Box>

                <Box >
                    <Text alignSelf={"flex-start"}  ml={"24"} mt={-7} fontSize={14} fontWeight={"normal"} 
                        color={"gray.400"}>
                        Jl. Ketintang 100 Surabaya, Jawa Timur 60231
                    </Text>
                </Box>

                <Box alignContent={"flex-start"} mt={2} ml={"16"}>
                    <Ionicons name="call-outline" color={"gray"} size={28}
                    />
                </Box>

                <Box >
                    <Text alignSelf={"flex-start"}  ml={"24"} mt={-6} fontSize={16} fontWeight={"normal"} 
                        color={"gray.400"}>
                        867092635156
                    </Text>
                </Box>

                <Box alignSelf={"center"} mt={""} ml={"0"}>
                    <Box h={16} w={372} bgColor={"blue.100"} shadow={"2"} borderWidth={"8"} borderRadius={5} borderColor={"blue.100"}>
                        <Pressable onPress={() => navigation.navigate("Edit")} >
                            
                            <Box alignContent={"center"} w={"100%"} h={"100%"} mt={"0"} bgColor={"darkBlue.200"} borderRadius={5}>
                                <Heading ml={2} mt={3} fontSize={20} fontWeight={"bold"} color={"light.100"}>
                                Identitas Pasien
                                </Heading>

                                <Box alignSelf={"flex-end"} mt={"-6"} mr={"4"}>
                                    <Ionicons name="chevron-forward-circle-outline" color={"white"} size={28}
                                    />
                                </Box>
                            </Box>

                        </Pressable>
                    </Box>
                </Box>
            </Box>

            <Box alignSelf="center" w={"100%"} bgColor={"info.100"} h={"70%"}  mt={"5"} 
                shadow={"9"} mb={"0"} borderColor={"white"} borderWidth={"1"} borderRadius={10}>
            
            </Box>

            <Box alignSelf="center" w={"100%"} bgColor={"info.100"} h={"31%"}  mt={"5"} 
            shadow={"9"} mb={"0"} borderColor={"white"} borderWidth={"1"} borderRadius={10}>
                
                <Pressable onPress={() => navigation.navigate("Transaksi")} >
                            
                            <Box alignContent={"center"} w={"100%"} h={"100%"} mt={"0"}>
                                <Heading ml={2} mt={5} fontSize={20} fontWeight={"bold"} color={"gray.500"}>
                                Riwayat Transaksi
                                </Heading>

                                <Box alignSelf={"flex-end"} mt={"-7"} mr={"4"}>
                                    <Ionicons name="time-outline" color={"gray"} size={28}
                                    />
                                </Box>
                            </Box>
                </Pressable>
            </Box>

            <Box alignSelf="center" w={"100%"} bgColor={"red.500"} h={"31%"}  mt={"5"} 
            shadow={"9"} mb={"0"} borderColor={"white"} borderWidth={"1"} borderRadius={10}>
                
                <Pressable onPress={() => navigation.navigate("Logout")} >
                            
                            <Box alignContent={"center"} w={"100%"} h={"100%"} mt={"0"}>
                                <Heading ml={2} mt={5} fontSize={20} fontWeight={"bold"} color={"white"}>
                                Log Out
                                </Heading>

                                <Box alignSelf={"flex-end"} mt={"-7"} mr={"4"}>
                                    <Ionicons name="chevron-forward-circle-outline" color={"white"} size={28}
                                    />
                                </Box>
                            </Box>
                </Pressable>

            </Box>
            </Box>
    </SafeAreaView>
    </ScrollView>
    </>
  );
};

export default Profile;
                

                {/* <Box alignSelf={"flex-start"} mt={1} ml={3} borderWidth={1} borderColor={"white"} >
                    <Ionicons
                        name="location-outline"  size={35}
                    />
                </Box>
                <Box >
                    <Text alignSelf={"flex-start"} ml={"16"} mt={-10} fontSize={15} fontWeight={"normal"} 
                        color={"gray.400"} borderWidth={1} borderColor={"white"}>
                        Jl. yang pernah kita lewati bersama Surabaya, Jawa Timur 60231
                    </Text>
                </Box>

                <Box alignSelf={"flex-start"} mt={1} ml={3} borderWidth={1} borderColor={"white"} >
                    <Ionicons
                        name="finger-print-outline" barStyle={"dark-content"} size={35}
                    />
                </Box>
                <Box >
                    <Text alignSelf={"flex-start"} ml={"16"} mt={-8} fontSize={18} fontWeight={"normal"} 
                        color={"gray.400"} borderWidth={1} borderColor={"white"}>
                        Laki-laki, 18 Tahun
                    </Text>
                </Box>

                <Box alignSelf={"flex-start"} mt={1} ml={3} borderWidth={1} borderColor={"white"} >
                    <Ionicons
                        name="clipboard-outline" barStyle={"dark-content"} size={35}
                    />
                </Box>
                <Box >
                    <Text alignSelf={"flex-start"} ml={"16"} mt={-8} fontSize={18} fontWeight={"normal"} 
                        color={"gray.400"} borderWidth={1} borderColor={"white"}>
                        Pasien
                    </Text>
                </Box>

                <Box alignSelf={"flex-start"} mt={1} ml={3} borderWidth={1} borderColor={"white"} >
                    <Ionicons
                        name="call-outline" barStyle={"dark-content"} size={35}
                    />
                </Box>
                <Box >
                    <Text alignSelf={"flex-start"} ml={"16"} mt={-9} fontSize={20} fontWeight={"normal"} 
                        color={"gray.400"} borderWidth={1} borderColor={"white"}>
                        987514237909
                    </Text>
                </Box> */}
           

            {/* <Box alignSelf={"center"} w={"100%"} h={"30%"}  mt={"27"} bgColor={"info.100"} borderRadius={20} borderColor={"info.200"} borderWidth={3} >
                <Box alignSelf={"flex-end"} mr={6} mt={3}>
                    <Ionicons
                        name="time-outline" barStyle={"dark-content"} size={40}
                    />
                </Box >
                    <Heading ml={2} mt={-10} fontSize={30} fontWeight={"bold"} color={"gray.400"}>
                         Riwayat Transaksi
                    </Heading>
            </Box>

            <Pressable onPress={() => navigation.navigate("Edit")} >
            <Box alignContent={"center"} w={"100%"} h={"50%"} mt={"14"} bgColor={"info.100"} borderRadius={20} borderColor={"info.200"} borderWidth={3} >
                <Box alignSelf={"flex-end"} mr={6} mt={3}>
                    <Ionicons
                        name="settings-outline" barStyle={"dark-content"} size={40}
                    />
                </Box >
                    <Heading ml={2} mt={-10} fontSize={30} fontWeight={"bold"} color={"gray.400"}>
                        Edit Profile
                    </Heading>
            </Box>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Logout")}>
            <Box alignContent={"center"} w={"100%"} h={"64%"} mt={"-42"} bgColor={"red.600"} borderRadius={20} borderColor={"white"} borderWidth={3} >
                <Box alignSelf={"flex-end"} mr={6}  mt={3}>
                    <Ionicons
                        name="exit-outline" size={40}
                    />
                </Box >
                    <Heading ml={2} mt={-10} fontSize={30} fontWeight={"bold"} color={"white"}>
                        Log Out
                    </Heading>
            </Box>
            </Pressable> */}


                {/* alamat */}
                {/* <Box alignSelf={"flex-start"} mt={1} ml={2}>
                    <Ionicons
                        name="location-outline" barStyle={"dark-content"} size={50}
                    />
                </Box>
                <Box >
                    <Text ml={16} mt={-10} fontSize={15} fontWeight={"normal"} color={"blue.400"}>
                        Jl. yang pernah kita lewati bersama Surabaya, Jawa Timur 60231
                    </Text>
                </Box> */}

                {/* gender */}
                {/* <Box alignSelf={"flex-start"} mt={1} ml={2}>
                    <Ionicons
                        name="people-outline" barStyle={"dark-content"}size={50}
                    />
                </Box>
                <Box>
                    <Text ml={16} mt={-10} fontSize={20} fontWeight={"bold"}color={"blue.400"}>
                        Laki-laki, 18 Tahun
                    </Text>
                </Box> */}
            
                {/* keterangan */}
                {/* <Box alignSelf={"flex-start"} mt={1} ml={2}>
                    <Ionicons
                        name="clipboard-outline" barStyle={"dark-content"} size={50}
                    />
                </Box>
                <Box>
                    <Text ml={16} mt={-10} fontSize={20} fontWeight={"bold"} color={"blue.400"}>
                        Pasien
                    </Text>
                </Box> */}

                {/* no telepon */}
                {/* <Box alignSelf={"flex-start"} mt={1} ml={2}>
                    <Ionicons
                        name="call-outline" barStyle={"dark-content"} size={50}
                    />
                </Box>
                <Box >
                    <Text ml={16} mt={-10} fontSize={20} fontWeight={"normal"} color={"blue.400"}>
                        987514237909
                    </Text>
                </Box> */}
              
        