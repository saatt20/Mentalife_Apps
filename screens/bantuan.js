import {
    Text, Box, Actionsheet, Button, useDisclose, CheckIcon, Modal,
    InfoIcon, Image, VStack, Heading, useBreakpointValue, View, FavouriteIcon
} from "native-base";
import { Header } from "../components";
import { useState, React, useEffect } from "react";
import {  getData } from "../src/utils/localStorage";

const Bantuan = ({navigation}) => {
    const flexDir = useBreakpointValue({
        base: "row",
        lg: "row"
    });
    const [modalVisible, setModalVisible] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclose();

    const [Bantuan, setBantuan] = useState(null);
    const getUserData = () => {
        getData("user").then((res) => {
          const data = res;
          if (data) {
            console.log("isi data", data);
            setBantuan(data);
          } else {
            // navigation.replace('Login');
          }
        });
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
            <Header title={"Mental Health"} withBack={true} />
            <Box flex={1}>
                <Heading p={5}>Bantuan</Heading>
                <Box alignSelf={"center"} w={"sm"}>
                    {/* TENTANG SAYA */}
                    <Button onPress={onOpen} marginBottom={5} bgColor={"blue.500"} >
                        <Text fontSize={"lg"} color={"white"}>Tentang Saya</Text>
                    </Button>
                    <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
                        <Actionsheet.Content>
                            <Box w="auto" h={60} px={4} justifyContent="center">
                                <Text fontSize="20" color="gray.600" bold _dark={{
                                    color: "gray.600"
                                }}>
                                    Tentang Saya
                                </Text>
                            </Box>
                            <Actionsheet.Item startIcon={<InfoIcon size="5" mt="0.5" color="blue.500" />} >
                            {Bantuan?.name}
                            </Actionsheet.Item>
                            <Actionsheet.Item startIcon={<FavouriteIcon size="5" mt="0.5" color="blue.500" />} >
                            {Bantuan?.nomorhp}
                            </Actionsheet.Item>
                            <Actionsheet.Item startIcon={<CheckIcon size="5" mt="0.5" color="blue.500" />} >
                            {Bantuan?.email}
                            </Actionsheet.Item>
                        </Actionsheet.Content>
                    </Actionsheet>

                    {/* HUBUNGI KAMI */}
                    <Button  marginBottom={5} bgColor={"blue.500"} onPress={() => { setModalVisible(!modalVisible); }}>
                        <Text fontSize={"lg"} color={"white"}>Hubungi Kami</Text>
                    </Button>
                    <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="center" bottom="4" size="lg">
                        <Modal.Content>
                            <Modal.CloseButton />
                            <Modal.Header>
                                <Text fontSize={"lg"} bold>Hubungi Customer Support</Text>   
                           </Modal.Header>
                            <Modal.Body >
                                <Text fontSize={"lg"}>Anda dapat menghubungi kami melalui email "mentalife@gmail.com" atau melalui telepon "031-129915"</Text>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button bgColor={"blue.500"} onPress={() => { setModalVisible(false); }}>Kembali </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>

                    {/* KEBIJAKAN DUMMY */}
                    <Button marginBottom={5} bgColor={"blue.500"}
                        onPress={() => { }}>
                        <Text fontSize={"lg"} color={"white"}>Kebijakan Privasi Mentalife</Text>
                    </Button>
                    <Button  bgColor={"blue.500"}
                        onPress={() => { }}>
                        <Text fontSize={"lg"} color={"white"}>Ketentuan Penggunaan Mentalife</Text>
                    </Button>
                    
                </Box>

                {/* FOOTER */}
                <VStack mt={20} h={"40%"} space={10} bgColor={"gray.400"} paddingLeft={8} paddingRight={8} alignItems="center" justifyContent="center">
                    <Heading fontSize={"2xl"} marginBottom={-5} >Kenapa Mentalife?</Heading>
                    <View style={{
                        flexDirection: flexDir
                    }}>
                        <VStack m="1" w={105} borderRadius="xl" p="3" bg={"black"} alignItems="center" justifyContent="center">
                            <Image
                                size="sm"
                                borderRadius="lg"
                                source={{ uri: "https://icon-library.com/images/trusted-icon/trusted-icon-3.jpg" }}
                                alt="-"
                                role="img">
                            </Image>
                            <Text fontSize="md" textAlign="center" color={"white"} _dark={{ color: "coolGray.800" }}>
                                Terpercaya
                            </Text>
                        </VStack>

                        <VStack m="1" w={100} borderRadius="xl" p="3" bg="black" space={1} alignItems="center" justifyContent="center">
                            <Image
                                size="sm"
                                source={{ uri: "https://cdn.icon-icons.com/icons2/2265/PNG/512/doctor_avatar_medical_icon_140443.png" }}
                                alt="-"
                                role="img">
                            </Image>
                            <Text fontSize="md" textAlign="center" color={"white"} _dark={{ color: "coolGray.800" }}>
                                Dokter Berlisensi
                            </Text>
                        </VStack>

                        <VStack m="1" w={100} borderRadius="xl" p="3" bg="black" alignItems="center" justifyContent="center">
                            <Image
                                size="sm"
                                source={{ uri: "https://cdn-icons-png.flaticon.com/512/6603/6603918.png" }}
                                alt="-"
                                role="img">
                            </Image>
                            <Text fontSize="md" textAlign="center" color={"white"} _dark={{ color: "coolGray.800" }}>
                                Fleksibel
                            </Text>
                        </VStack>
                    </View>
                </VStack>
            </Box>
        </>
    )
}

export default Bantuan;