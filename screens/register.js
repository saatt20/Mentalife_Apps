import { Button, Box, VStack, Input, Center, Image, Heading, Pressable, StatusBar, ScrollView, Text, HStack } from "native-base";
import { registerUser } from "../src/actions/AuthAction";
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal } from "native-base";

const Register = ({ navigation }) => { // Tambahkan parameter props
  const [name, setName] = useState('');
  const [nomorhp, setNomorhp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  // const [showModal, setShowModal] = useState(false);

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
    
    <SafeAreaView>
    <ScrollView h={"full"}>
    <StatusBar barStyle="dark-content" />
        <Pressable
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box p={-1} bgColor={"blueGray.100"}>
                    <HStack>
                  <Ionicons name="arrow-back-outline" size={32} color="black"/>
                  <Text ml={2}  bold p={1} fontSize={"lg"}>Login</Text>
                  </HStack>
                </Box>
              </Pressable>
      
      <Box bgColor={"blueGray.100"}>

      <Box alignItems={"flex-end"} w={"container"} mr={-5} mt={0} h={"container"}>
        <Box alignItems="center" mb={1} mt={2}>
          <Image shadow={"4"} source={require("../assets/logo1.png")}
            w={200} h={100}/>
        </Box>
      </Box>

      <Box>
        <Heading fontSize={"3xl"} ml={"8"} mt={-11} color={"info.400"} alignSelf={"start"}>
          Registrasi
        </Heading>
      </Box>

      <Box mt={"1"} alignSelf={"start"} ml={8} >
          <Heading fontSize={"2xl"} color={"blue.300"} fontWeight={"light"} shadow={"4"} >
            Silahkan melakukan Registrasi
          </Heading>
      </Box>
      
      <Box mt={"5"}>
        <Image  source={require("../assets/RS.jpeg")} borderTopLeftRadius={"30"} borderTopRightRadius={"30"} shadow={"4"} 
        borderBottomLeftRadius={"30"} borderBottomRightRadius={"30"} blurRadius={2} borderRadius={5} resizeMode="cover" 
        opacity={"20"} alignSelf={"center"} h={450} w={350}/>
        
      <Box mt={-450}  alignSelf={"center"} h={450} w={350} bgColor={""} 
      borderTopLeftRadius={"30"} borderTopRightRadius={"30"} shadow={"4"} borderBottomLeftRadius={"30"} borderBottomRightRadius={"30"} >
        <VStack space={4} mt="0">

          <Input alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"} 
          bgColor={"info.100"} mt={5} h={"12%"} placeholder="Masukan Nama" value={name} onChangeText={(name) => setName(name)} />
          
          <Input alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"} 
          bgColor={"info.100"} mt={5} h={"12%"} placeholder="Masukan No Telepon" value={nomorhp} onChangeText={(nomorhp) => setNomorhp(nomorhp)} />

          <Input alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"} 
          bgColor={"info.100"} mt={5} h={"12%"} placeholder="Masukan Email" value={email} onChangeText={(email) => setEmail(email)} />
          
          <Input alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"} 
          bgColor={"info.100"} mt={5} h={"12%"} placeholder="Masukan Password" value={password} onChangeText={(password) => setPassword(password)} secureTextEntry
          />
          <Button alignSelf={"center"} bgColor={"white"} w={300} borderColor={"indigo.300"} borderWidth={"2"} borderRadius={15} fontSize={"xl"} 
          mt={5} h={"12%"} onPress={() => { onRegister();}} > 
            <Text color={"blue.400"} fontWeight={"semibold"} fontSize={"xl"}>Sign Up</Text>
          </Button>
      </VStack>
      </Box>
      </Box>

      <Box mt={2}>
        <Text alignSelf={"center"} fontSize={"md"} ml={0}>
          Harap mengisikan 
          <Text color={"red.500"} fontWeight={"bold"}> Datadiri </Text> 
          dengan baik dan benar!
        </Text>
      </Box>

      </Box>
      </ScrollView>
    </SafeAreaView>
    </>

  );
}

export default Register;


{/* <Button alignSelf={"center"} bgColor={"violet.100"} w={300} borderColor={"indigo.200"} borderWidth={"2"} borderRadius={15} fontSize={"xl"} 
          mt={-9} h={"12%"} onPress={() => setShowModal(true)}></Button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Sub Total</Text>
                <Text color="blueGray.400">$298.77</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Tax</Text>
                <Text color="blueGray.400">$38.84</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Total Amount</Text>
                <Text color="green.500">$337.61</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => {
            setShowModal2(true);
          }}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>  */}