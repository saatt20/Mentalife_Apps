import { Button, Box, VStack, Input, Center, Heading, Pressable, Text, HStack } from "native-base";
import { registerUser } from "../src/actions/AuthAction";
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

const Register = ({ navigation }) => { // Tambahkan parameter props
  const [name, setName] = useState('');
  const [nomorhp, setNomorhp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onRegister = async () => {
    if (name && email && nomorhp && password) {
      const data = {
        name: name,
        email: email,
        nomorhp: nomorhp,
        password: password,
        status: "user",
      };

      console.log(data);

      try {
        const user = await registerUser(data, password);
        navigation.replace("Tabs");
      } catch (error) {
        console.log("Error", error.message);
        setFormError(error.message);
        toggleModal();
      }
    } else {
      setFormError("Harap isi form dengan lengkap dan benar");
      toggleModal();
    }
  };

  return (
    <>
        <Pressable
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box p={5} bgColor={"blue.400"}>
                    <HStack>
                  <Ionicons name="arrow-back-outline" size={32} color="black"/>
                  <Text ml={2}  bold p={1} fontSize={"lg"}>Login</Text>
                  </HStack>
                </Box>
              </Pressable>
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        
        <Heading size="xl" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="bold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="md">
          Daftar Akun MENTALIFE!
        </Heading>
        <VStack space={1} mt="4">
          <Input mt={3} h={"15%"} placeholder="Masukan Nama" value={name} onChangeText={(name) => setName(name)} />
          <Input mt={3} h={"15%"} placeholder="Masukan No Telepon" value={nomorhp} onChangeText={(nomorhp) => setNomorhp(nomorhp)} />
          <Input mt={3} h={"15%"} placeholder="Masukan Email" value={email} onChangeText={(email) => setEmail(email)} />
          <Input
            placeholder="Masukan Password"
            mt={3} value={password} h={"15%"}  onChangeText={(password) => setPassword(password)} secureTextEntry
          />
          <Button onPress={() => {
            onRegister();
          }} mt={5} bgColor={"blue.400"}> Sign up 
          </Button>
        </VStack>
      </Box>
    </Center>
    </>

  );
}

export default Register;
