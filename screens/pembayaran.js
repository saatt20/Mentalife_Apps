import { Box, Text, Image, HStack, Button, Heading, VStack, Alert, Select, CheckIcon, Modal, Radio } from "native-base";
import React, {useState} from "react";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Pembayaran = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
 
 
  return (
    <>
      <Header title={"Pembayaran"} withBack= {"true"} />
      <Box p={"4"} bg={"#28AADC"} >
        <HStack>
        <Image source={{ uri: "https://i.pinimg.com/564x/23/56/a9/2356a9f5370e67942a6c79a927fd30ad.jpg"}}
        w={"75"}
        h={"20"}
        borderRadius={10}
        alt="image"
        />
        <Heading textAlign={"left"} ml={"3"} mt={"3"} fontSize={"lg"} color={"white"} >Dr. Nadia Utami, M.Psi</Heading>
        </HStack>
        <Box>
          <VStack>
            <Text></Text>
          </VStack>
        </Box>
      </Box>
      <Box mt="5" bg={"#28AADC"} >
        <HStack>
          <Text color="white" textAlign={"left"} ml={"5"} fontSize={"sm"}>Biaya Sesi 60 Menit </Text>
          <Text color="white" textAlign={"left"} ml={"176"} fontSize={"sm"}>Rp.75.000 </Text>
        </HStack>
      </Box>
      <Box  bg={"#28AADC"} >
        <HStack>
          <Text color="white" textAlign={"left"} ml={"5"} fontSize={"sm"}>Biaya Layanan </Text>
          <Text color="white" textAlign={"left"} ml={"210"} fontSize={"sm"}>Rp.1.000 </Text>
        </HStack>
      </Box>
      <Box p={"1"}  bg={"#28AADC"} >
        <HStack>
          <Heading color="white" textAlign={"left"} ml={"4"} fontSize={"sm"}>Total Biaya </Heading>
          <Text color="white" textAlign={"left"} ml={"226"} fontSize={"sm"}>Rp.76.000 </Text>
        </HStack>
      </Box>
      <Box  p={"2"} mt={"5"} bg={"#D9E8ED"}  >
      <Button onPress={() => setShowModal(true)} bg={"#28AADC"}>Bayar Sekarang</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Sub Total</Text>
                <Text color="blueGray.400">Rp. 75.000</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Tax</Text>
                <Text color="blueGray.400">Rp. 1.000</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Total Amount</Text>
                <Text color="green.500">Rp. 76.000</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => {
            setShowModal2(true);
          }}>
              Pilih Pembayaran
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal isOpen={showModal2} size="lg" onClose={() => setShowModal2(false)}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Pilih Pembayaran</Modal.Header>
          <Modal.Body>
            <Radio.Group name="payment" size="sm">
              <VStack space={3}>
                <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="payment1">
                  M-Banking
                </Radio>
                <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="payment2">
                  Qris
                </Radio>
                <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="payment3">
                  LinkAja
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
          <Button flex="1" onPress={() => {
            setShowModal(false);
            setShowModal2(false);
            alert('Pembayaran Berhasil')
          }}>Bayar
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      </Box>
      <Box  p={"16"} mt={"72"} bg={"#D9E8ED"}>
      <Button onPress={() => navigation.navigate("Konsultasi")} bg={"#28AADC"}>Konsultasi Sekarang</Button > 
    </Box>
      </>
  );
};

export default Pembayaran;



{/* <Button onPress={() => navigation.navigate("Konsultasi")}>Bayar Sekarang</Button > */}




 /* <Box maxW="full" mt={"5"}>
        <Select accessibilityLabel="Choose Paymenrt" placeholder="Choose Payment" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1}>
          <Select label="Qris" value="ux" />
          <Select label="M-Banking" value="web" />
          <Select label="ShopeePay" value="cross" />
          <Select label="Dana" value="ui" />
          <Select label="LinkAja" value="backend" />
        </Select>
      </Box> */





// import { Heading, Center, Box, HStack, Text, Button, Input, ScrollView, FormControl, FlatList, Image } from "native-base";
// import { Header } from "../components";
// import { useNavigation } from "@react-navigation/native";
// import datas from "../datas";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { Select } from "native-base";

// const Konsultasi = () => {
//   const navigation = useNavigation();

//   const renderitem = ({ item }) => {
//     return (
//       <Box
//         activeOpacity={0.5}
//         onPress={() => navigation.navigate("News Detail", { item: item })}
//       >
//         <Box
//           p={"4"}
//           borderBottomColor={"coolGray.300"}
//           borderBottomWidth={1}
//           flexDirection="row"
//           flex={1}>

//           <Box flex={1}>
//             <Image
//               source={{ uri: item.image }}
//               w="75"
//               h="20"
//               borderRadius={10}
//               alt="Image Data"
//             />
//           </Box>
//           <Box flex={1} alignSelf={"center"}>
//             <Heading lineHeight={"md"} fontSize={"md"}>
//               {item.title}
//             </Heading>
//             {/* <Text fontSize={"sm"}>{item.job}</Text> */}
//             <Text fontSize={"sm"}>{item.keahlian}</Text>
//             {/* <Text fontSize={"sm"}>{item.harga}</Text> */}
//             <Button onPress={() => navigation.navigate("about-psikolog", {item:item} )}  alignSelf="flex-end"  borderRadius="full"  w={"100"} h={"10"} mt={"7"}>Konsultasi</Button>
//           </Box>
          
//         </Box>
//       </Box>
//     );
//   };

//   return (
//     <>
//       <Header title={"Psikolog"} withBack= {"true"}/>
//       <FlatList
//         data={datas}
//         renderItem={renderitem}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//         mt={-8}
//       />
//     </>
//   );
// };


// export default Konsultasi;

// import { Heading, Center, Text, Box, Image, ScrollView, Button, HStack } from "native-base";
// import { Header } from "../components";
// import { useNavigation } from "@react-navigation/native";
// import datas from "../datas";

// const Konsultasi = ({ route }) => {
//   const navigation = useNavigation();
//  const params = route.params.item;
 
//   return (
//     <>
//       <Header title={"About"} withBack="true"/>
//       <ScrollView>
//         <Image source={{uri: params.image}} w={"full"} h={"80"} alt="Image"/>
//         <Box  p={"4"} borderBottomColor={"coolGray.300"} borderBottomWidth={1}>
//           <Heading>{params.title}</Heading>
//           <Text>{params.job}</Text>
//           <Text>{params.keahlian}</Text>
//         </Box>
//         <Box p={"4"} bg={"#D9E8ED"} >
//           <Text bold fontSize={"17"}>
//             {params.harga}
//           </Text>

//         </Box>
//         <Box  p={"4"} >
//           <Text>
//             {params.content}
//           </Text>
//         </Box>
//         <Button onPress={() => navigation.navigate( "Konsultasi"  )}  alignSelf="flex-end"  borderRadius="full"  w={"150"} h={"12"} mr={"5"} mt={"2"}>Pembayaran</Button>
//         <Box  p={"4"}>
          
//         </Box>
//         </ScrollView>
//     </>
//   );
//   };


// export default Konsultasi;