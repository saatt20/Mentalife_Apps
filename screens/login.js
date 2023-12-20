import { Text, Button, Box, VStack, Input, Heading, FormControl, 
  Pressable, StatusBar, Image, HStack, Center} from "native-base";
import { useState } from "react";
import { loginUser } from "../src/actions/AuthAction";
import { storeData } from "../src/utils/localStorage";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [formError, setFormError] = useState('');
   const [isModalVisible, setModalVisible] = useState(false);


 
   const toggleModal = () => {
     setModalVisible(!isModalVisible);
   };

const login = () => {
  if (email && password) {
    loginUser(email, password)
      .then(async (user) => {   
        // Check if the user is an admin
        if (user.status === 'admin') {
          // Save the admin status to AsyncStorage
          await storeData('adminStatus', true);
          // Navigate to the admin page
          navigation.replace('AdminTabs');
        } else {
          // Save the admin status to AsyncStorage (optional, for future reference)
          await storeData('adminStatus', false);
          // Navigate to the regular user page
          navigation.replace('Tabs');
        }
      })
      .catch((error) => {
        console.log('Error', error.message);
        setFormError('Email atau Password salah, Harap masukan Email atau Password dengan benar');
        toggleModal();
      });
  } else {
    setFormError('Harap isi form login dengan lengkap dan benar');
    toggleModal();
  }
};
        const Register = () => {
          navigation.navigate("Register")
        };

    return (
    <SafeAreaView>
      <Box mt={"0"}  bgColor={"blue.100"}>
      <StatusBar backgroundColor="" barStyle="dark-content" />

      <Box alignItems={"flex-end"}
      w={"container"} mr={-5} mt={0} h={"container"}>
        <Box alignItems="center" mb={1} mt={12}>
          <Image source={require("../assets/logo1.png")}
            w={200} h={100} alt="image1"/>
        </Box>
      </Box>

      <Box>
        <Heading fontSize={"3xl"} ml={"8"} mt={-11} color={"info.400"} alignSelf={"flex-start"}>
          LOGIN
        </Heading>
      </Box>

      <Center>
        <Box bgColor={"info.400"} mt={4} width={"400"} h={"full"} 
          borderTopLeftRadius={"50"} borderTopRightRadius={"50"} shadow={"4"}>
          
        <Box mt={"6"} alignSelf={"start"} ml={4} >
          <Heading fontSize={"2xl"} color={"white"} fontWeight={"light"} shadow={"4"} >
            Silahkan melakukan Login
          </Heading>
        </Box>  

        <Box>    
            <VStack space={3} mt="3">
              
              <FormControl>
                <Box mt={0} ml={7}>
                <FormControl.Label> Email</FormControl.Label>
                </Box>
                <Box h={"12"} bgColor={"info.200"} borderColor={"blue.300"} 
                    mt={0} ml={5} mr={5} borderRadius={20} shadow={"4"}>
                <Input h={12} mt={""} borderColor={"blue.200"} borderWidth={"2"} borderRadius={20} fontSize={"md"}
                placeholder="Masukan Email" value={email} onChangeText={(email) => setEmail(email)}/>
                </Box>
              </FormControl>
              

              <FormControl>
                <Box mt={0} ml={7}>
                <FormControl.Label> Password</FormControl.Label>
                </Box>
                <Box h={"12"} bgColor={"info.200"} borderColor={"blue.300"} 
                    mt={0} ml={5} mr={5} borderRadius={20} shadow={"4"}>
                <Input borderColor={"blue.200"} h={12} mt={""} borderWidth={"2"} borderRadius={20} fontSize={"md"}
                placeholder="Masukan Password" value={password} onChangeText={(password) => setPassword(password)} secureTextEntry/>
                </Box>
              </FormControl>

            <Button h={12} borderColor={"info.400"} bgColor={"white"} borderWidth={"2"} ml={5} mr={5}
              fontSize={18} borderRadius={20} shadow={"6"} mt={5} 
              onPress={() => login()}>
             <Text color={"blue.400"} fontSize={"md"}>Login</Text>
           </Button>

           <Box mt={"12"} alignSelf={"center"} ml={""} >
      <Heading fontSize={16} color={"white"} fontWeight={"light"} shadow={"4"} >
      _______ Login menggunakan Akun Sosial Media _______
      </Heading>
    </Box>

    <Pressable>
    <Box h={"12"}  borderColor={"white"} borderWidth={"1"} 
      mt={4} ml={5} mr={5} borderRadius={20} shadow={""}>
      <Text fontSize={18} mt={"2"} alignSelf={"center"} ml={"7"} fontWeight={"semibold"}>
        Facebook
      </Text>
      
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/145/145802.png'}} 
            alignSelf={"center"} mr={"20"} mt={"-6"} h={6} w={6} alt="image2"/>
    </Box>
    </Pressable>

    <Pressable>
    <Box h={"12"}  borderColor={"white"} borderWidth={"1"} 
      mt={4} ml={5} mr={5} borderRadius={20} shadow={""}>
      <Text fontSize={18} mt={"2"} alignSelf={"center"} ml={"7"} fontWeight={"semibold"}>
        Google
      </Text>
      
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/300/300221.png'}} 
            alignSelf={"center"} mr={"16"} mt={"-6"} h={6} w={6} alt="image3"/>
    </Box>
    </Pressable>

              <HStack mt="-1" justifyContent="center">
                <Text fontSize={15} color={"white"} fontWeight={"light"} shadow={"4"}>
                Belum memiliki Akun?
                </Text>
                <Pressable onPress={Register} ml={0} mt={-1} h={""}backgroundColor={"#38bdf8"}>
                  <Text fontStyle={"italic"} ml={1} mt={"1"} fontSize={15} color={"blue.600"} 
                      fontWeight={"light"} shadow={"4"}> Registrasi</Text>
                </Pressable>
              </HStack>
            </VStack>
            </Box>
          </Box>
          </Center>
          </Box>  
          </SafeAreaView>
            );
          };

export default Login;

// import { Text, Button, Box, VStack, Input } from "native-base";
// import { useState } from "react";
// import { loginUser } from "../src/actions/AuthAction";
// import { storeData } from "../src/utils/localStorage";

// const Login = ({navigation}) => {
//  const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [formError, setFormError] = useState('');
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
//     const checkAdminStatus = async () => {
//         try {
//           const isAdmin = await getData('adminStatus');
    
//           if (isAdmin) {
//             navigation.replace('AdminTabs');
//           } else {
//             navigation.replace('Tabs');
//           }
//         } catch (error) {
//           console.error('Error checking admin status:', error);
//           navigation.replace('Tabs');
//         }
//       };
    
//       const login = () => {
//         if (email && password) {
//           loginUser(email, password)
//             .then(async (user) => {   
//               // Check if the user is an admin
//               if (user.status === 'admin') {
//                 // Save the admin status to AsyncStorage
//                 await storeData('adminStatus', true);
//                 // Navigate to the admin page
//                 navigation.replace('AdminTabs');
//               } else {
//                 // Save the admin status to AsyncStorage (optional, for future reference)
//                 await storeData('adminStatus', false);
//                 // Navigate to the regular user page
//                 navigation.replace('Tabs');
//               }
//             })
//             .catch((error) => {
//               console.log('Error', error.message);
//               setFormError('Email atau Password salah, Harap masukan Email atau Password dengan benar');
//               toggleModal();
//             });
//         } else {
//           setFormError('Harap isi form login dengan lengkap dan benar');
//           toggleModal();
//         }
//       };
//     const Register = () => {
//         navigation.navigate("Register")
//     };


//     return (
//         <>
//         <Text>HALO INI LOGIN</Text>

//         <Box my={"20"}>
//             <VStack>
//             <Input placeholder="Masukan Email" value={email} onChangeText={(email) => setEmail(email)}>

// </Input>
// <Input
//     placeholder="Masukan Password"
//     mt={10} value={password} onChangeText={(password) => setPassword(password)} secureTextEntry>

// </Input>
// <Button backgroundColor={"#38bdf8"} mt={10} onPress={() => login()}>
//             <Text bold color={"white"}>Login</Text>
//           </Button>
//             <Button onPress={Register}>

//             </Button>
//             </VStack>
//         </Box>
//         </>
//     );
// }

// export default Login;