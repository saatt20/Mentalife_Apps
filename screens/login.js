// import React, { useState } from "react";
// import {
//   Alert,
//   Box,
//   Text,
//   FormControl,
//   Heading,
//   AlertText,
//   Modal,
//   ModalBackdrop,
// } from "@gluestack-ui/themed";
// import { Input, Button } from "../../components";
// import { loginUser } from "../../actions/AuthAction";

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("");

//   const toggleAlert = (message) => {
//     setShowAlert(!showAlert);
//     setAlertMessage(message);
//   };

//   const login = () => {
//     if (email && password) {
//       loginUser(email, password)
//         .then((user) => {
//           // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
//           navigation.replace("MainApp");
//         })
//         .catch((error) => {
//           // Terjadi kesalahan saat login, tampilkan pesan kesalahan
//           console.log("Error", error.message);
//           toggleAlert(error.message);
//         });
//     }
//   };

//   return (
//     <Box flex={1} backgroundColor="$blue400" justifyContent="center">
//       <Box
//         shadowColor="$black"
//         shadowOffset={{ width: 0, height: 2 }}
//         shadowOpacity={"$25"}
//         shadowRadius={"$3.5"}
//         elevation={"$5"}
//         backgroundColor="$white"
//         borderRadius={"$md"}
//         marginTop={"$10"}
//         marginHorizontal={"$6"}
//         p={"$5"}
//       >
//         <Heading size="3xl" color="$black">
//           Welcome
//         </Heading>
//         <Text size="sm" color="$black" my={"$1"}>
//           Sign in to continue!
//         </Text>
//         <FormControl>
//           <Input
//             label={"Login"}
//             width={"$full"}
//             height={"$10"}
//             onChangeText={(text) => setEmail(text)} // Set email ke dalam state
//             value={email}
//           />
//           <Input
//             label="Password"
//             width={"$full"}
//             height={"$10"}
//             secureTextEntry={true}
//             onChangeText={(text) => setPassword(text)} // Set password ke dalam state
//             value={password}
//           />
//         </FormControl>
//         <Box flexDirection="column" my={"$5"}>
//           <Button
//             title="Login"
//             type="text"
//             padding={"$3"}
//             onPress={() => login()}
//           />
//           <Text size="sm" color="$black" mt={"$4"}>
//             Don't have an account?
//           </Text>
//           <Button
//             title="Register"
//             type="text"
//             padding={"$3"}
//             onPress={() => {
//               navigation.navigate("Register");
//             }}
//           />
//         </Box>
//       </Box>

//       {/* show Alert */}
//       {showAlert && (
//         <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
//           <ModalBackdrop />
//           <Alert mx="$4" action="error" variant="solid">
//             <AlertText fontWeight="$bold">Error!</AlertText>
//             <AlertText>{alertMessage}</AlertText>
//           </Alert>
//         </Modal>
//       )}
//     </Box>
//   );
// };

// export default Login;

import { Text, Button, Box, VStack, Input } from "native-base";
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
    // const checkAdminStatus = async () => {
    //     try {
    //       const isAdmin = await getData('adminStatus');
    
    //       if (isAdmin) {
    //         navigation.replace('AdminTabs');
    //       } else {
    //         navigation.replace('Tabs');
    //       }
    //     } catch (error) {
    //       console.error('Error checking admin status:', error);
    //       navigation.replace('Tabs');
    //     }
    //   };
    
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
        <>
        <Text>HALO INI LOGIN</Text>

        <Box my={"20"}>
            <VStack>
            <Input placeholder="Masukan Email" value={email} onChangeText={(email) => setEmail(email)}>

</Input>
<Input
    placeholder="Masukan Password"
    mt={10} value={password} onChangeText={(password) => setPassword(password)} secureTextEntry>

</Input>
<Button backgroundColor={"#38bdf8"} mt={10} onPress={() => login()}>
            <Text bold color={"white"}>Login</Text>
          </Button>
            <Button onPress={Register}>

            </Button>
            </VStack>
        </Box>
        </>
    );
}

export default Login;