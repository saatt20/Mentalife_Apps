import React, { useState } from "react";
import { StatusBar } from "native-base";
import { Image } from "native-base";
import { Pressable } from "native-base";
import { Box, Heading, FormControl, Input, Button, Alert, Modal, ModalBackdrop, AlertText, Text } from "native-base";
import { loginUser } from "../../src/actions/AuthAction";



const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (  
  <Box mt={12} >
      <StatusBar backgroundColor="#343A40" barStyle="dark-content" />
      <Box>
        <Heading fontSize={"4xl"} mt={2} alignSelf={"center"}>
          LOGIN
        </Heading>
      </Box>

    <Box alignItems={"center"} bgColor={"blueGray.30"}
      w={"container"} mt={1} h={"container"}>
        <Box alignItems="center" mb={1} mt={5}>
          <Image source={require("../../assets/logo1.png")}
            w={400} h={200}/>
        </Box>
    </Box>

    <Box h={"full"} bgColor={"info.400"} borderTopLeftRadius={"60"} borderTopRightRadius={"60"}>

    <Box mt={"9"} alignSelf={"start"} ml={8} >
      <Heading fontSize={"2xl"} color={"white"} fontWeight={"light"} shadow={"4"} >
        Silahkan melakukan Login
      </Heading>
    </Box>

    <Box>
        <Box h={"12"} bgColor={"info.200"} borderColor={"blue.300"} borderWidth={""} mt={8} ml={5} mr={5} borderRadius={20} shadow={"4"}>
        <Input borderColor={"blue.200"} h={12} mt={""} borderWidth={"2"} borderRadius={20}
        placeholder="Masukan Email" fontSize={22} onChangeText={(text) => setEmail(text)}/>
        </Box>

        <Box h={"12"} bgColor={"info.200"} borderColor={"blue.300"} borderWidth={""} mt={5} ml={5} mr={5} borderRadius={20} shadow={"4"}>
        <Input borderColor={"blue.200"} h={12} mt={""} borderWidth={"2"} borderRadius={20}
        placeholder="Masukan Password" fontSize={22} secureTextEntry={"true"} onChangeText={(text) => setPassword(text)} />
        </Box>
        
        
        <Pressable>
        <Button h={12} borderColor={"info.400"} bgColor={"white"} borderWidth={"2"} 
        ml={5} mr={5}  fontSize={18} mt={10} borderRadius={20} shadow={"6"}
            onPress={() => navigation.navigate("Tabs")}>
          
          <Heading size="md" color={"blue.400"}>
            Login
          </Heading>
        </Button>
        </Pressable>
    </Box>

    <Box mt={"6"} alignSelf={"center"} ml={""} >
      <Heading fontSize={16} color={"white"} fontWeight={"light"} shadow={"4"} >
      _______ Login menggunakan Akun Sosial Media _______
      </Heading>
    </Box>

    <Pressable>
    <Box h={"12"}  borderColor={"white"} borderWidth={"1"} 
      mt={6} ml={5} mr={5} borderRadius={20} shadow={""}>
      <Text fontSize={18} mt={"2"} alignSelf={"center"} ml={"7"} fontWeight={"semibold"}>
        Facebook
      </Text>
      
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/145/145802.png'}} 
            alignSelf={"center"} mr={"20"} mt={"-6"} h={6} w={6}/>
    </Box>
    </Pressable>

    <Pressable>
    <Box h={"12"}  borderColor={"white"} borderWidth={"1"} 
      mt={4} ml={5} mr={5} borderRadius={20} shadow={""}>
      <Text fontSize={18} mt={"2"} alignSelf={"center"} ml={"7"} fontWeight={"semibold"}>
        Google
      </Text>
      
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/300/300221.png'}} 
            alignSelf={"center"} mr={"16"} mt={"-6"} h={6} w={6}/>
    </Box>
    </Pressable>

    <Box mt={"2"} alignSelf={"center"} ml={""} >
      <Heading fontSize={15} color={"white"} fontWeight={"light"} shadow={"4"} >
      Belum memiliki Akun?
      
      <Pressable>
      
      <Text fontStyle={"italic"} ml={1} mt={"1"} fontSize={14} color={"blue.600"} 
       onPress={() => navigation.navigate("Register")} fontWeight={"light"} shadow={"4"}> 
        Registrasi
      </Text>
      </Pressable>

      </Heading>
    </Box>

    </Box>
    </Box>

    
  );
};
  
  export default Login;