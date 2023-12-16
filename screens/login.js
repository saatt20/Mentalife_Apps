import { Text, Button, Box, VStack, Input, Heading, FormControl, HStack, Center} from "native-base";
import { useState } from "react";
import { loginUser } from "../src/actions/AuthAction";
import { storeData } from "../src/utils/localStorage";

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
          <Box flex={1} bgColor={"gray.300"}>
          <Center>
          <Box 
          bgColor={"white"}
          borderRadius={"xl"}
          mt={40}
          width={325}
          h={"63%"}
          >
            <Box marginLeft={5} mr={5} my={2}>
            <Heading mt={5} size="xl" fontWeight="600" color="coolGray.800" _dark={{
            color: "warmGray.50"
          }} >
              MENTALIFE
            <Heading/>
            </Heading>
            <Heading mt="2" _dark={{
            color: "warmGray.200"
          }} color="coolGray.600" fontWeight="medium" size="sm">
              Masukan Akun Anda
            </Heading>
            <VStack space={3} mt="3">
              <FormControl>
                <FormControl.Label ml={1}>Email</FormControl.Label>
                <Input placeholder="Masukan Email" value={email} onChangeText={(email) => setEmail(email)}/>
              </FormControl>
              <FormControl>
                <FormControl.Label ml={1}>Password</FormControl.Label>
                <Input
                  placeholder="Masukan Password"
                  value={password} onChangeText={(password) => setPassword(password)} secureTextEntry/>
              </FormControl>
              <Button backgroundColor={"#38bdf8"} mt={5} onPress={() => login()}>
             <Text bold color={"white"}>Login</Text>
           </Button>

              <HStack mt="6" justifyContent="center">
                <Text mt={2} fontSize="sm" color="coolGray.600" bold  _dark={{
                color: "warmGray.500"
              }}>
                  I'm a new user.
                </Text>
                <Button onPress={Register} ml={3} backgroundColor={"#38bdf8"}>
                  <Text bold>Sign Up</Text>
                </Button>
              </HStack>
            </VStack>
            </Box>
          </Box>
          </Center>
          </Box>  
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