import React, { useState } from "react";
import { Box, Text, Input, Button, ModalBackdrop, Heading, StatusBar, Image, Pressable} from "native-base";
import { registerUser } from "../../src/actions/AuthAction";

const Register = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const onRegister = async () => {
    if (nama && email && password) {
      const data = {
        nama: nama,
        email: email,
        status: "user",
      };

      console.log(data);

      try {
        const user = await registerUser(data, password);
        navigation.replace("LoginScreen");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap");
}
};
  
  return (  
  <Box mt={12} >
      <StatusBar backgroundColor="#343A40" barStyle="dark-content" />
      <Box>
        <Heading fontSize={"4xl"} mt={2} alignSelf={"center"}>
          Registrasi
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
        Silahkan melakukan Registrasi
      </Heading>
    </Box>

    <Box>
    <Box mt={"6"} ml={7} mr={7} borderWidth={""}>
          <Heading fontSize={18} fontWeight={"thin"}>
            Masukan Username
          </Heading>
        </Box>

        <Box h={"12"} bgColor={"info.200"} borderColor={"blue.300"} borderWidth={""} mt={1} ml={5} mr={5} borderRadius={20} shadow={"4"}>
        <Input borderColor={"blue.200"} h={12} mt={""} borderWidth={"2"} borderRadius={20}
        placeholder="" fontSize={22} onChangeText={(nama) => setNama(nama)}/>
        </Box>

        <Box mt={"1"} ml={7} mr={7} borderWidth={""}>
          <Heading fontSize={18} fontWeight={"thin"}>
            Masukan Email
          </Heading>
        </Box>

        <Box h={"12"} bgColor={"info.200"} borderColor={"blue.300"} borderWidth={""} mt={1} ml={5} mr={5} borderRadius={20} shadow={"4"}>
        <Input borderColor={"blue.200"} h={12} mt={""} borderWidth={"2"} borderRadius={20}
        placeholder="" fontSize={22}  onChangeText={(email) => setEmail(email)}/>
        </Box>

        <Box mt={"1"} ml={7} mr={7} borderWidth={""}>
          <Heading fontSize={18} fontWeight={"thin"}>
            Masukan Password
          </Heading>
        </Box>

        <Box h={"12"} bgColor={"info.200"} borderColor={"blue.300"} borderWidth={""} mt={1} ml={5} mr={5} borderRadius={20} shadow={"4"}>
        <Input borderColor={"blue.200"} h={12} mt={""} borderWidth={"2"} borderRadius={20}
        placeholder="" fontSize={22} secureTextEntry={"true"} onChangeText={(password) => setPassword(password)} />
        </Box>

        <Box mt={"1"} ml={7} mr={7} borderWidth={""}>
          <Heading fontSize={18} fontWeight={"thin"}>
            Konfirmasi Password
          </Heading>
        </Box>

        <Box h={"12"} bgColor={"info.200"} borderColor={"blue.300"} borderWidth={""} mt={1} ml={5} mr={5} borderRadius={20} shadow={"4"}>
        <Input borderColor={"blue.200"} h={12} mt={""} borderWidth={"2"} borderRadius={20}
        placeholder="" fontSize={22} secureTextEntry={"true"} onChangeText={(password) => setPassword(password)} />
        </Box>
        
        <Pressable>
        <Button h={12} borderColor={"info.400"} bgColor={"white"} borderWidth={"2"} 
        ml={5} mr={5} fontSize={18} mt={10} borderRadius={20} shadow={"6"}
            onPress={() => navigation.navigate("login")}>
          
          <Heading size="md" color={"blue.400"}>
            Registrasi
          </Heading>
        </Button>
        </Pressable>
    </Box>

    </Box>
    </Box>

    
  );
};
  
  export default Register;