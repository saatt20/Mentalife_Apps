import {
    Text, Box, Actionsheet, Button, useDisclose, CheckIcon, Modal,
    InfoIcon, SunIcon, Image, VStack, Heading, useBreakpointValue, View, Center
} from "native-base";
import { Header } from "../components";
import { useState, React } from "react";

const Pengaturan = () => {
    const flexDir = useBreakpointValue({
        base: "row",
        lg: "row"
    });
    const [modalVisible, setModalVisible] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclose();
    return (
        <>
            <Header title={"Mental Health"} withBack={true} />
            <Box flex={1}>
                <Heading p={5}>Pengaturan</Heading>

                <Box alignSelf={"center"} w={"sm"}>
                    {/* TENTANG SAYA */}
                    <Button marginBottom={5} bgColor={"blue.500"} >
                        <Text fontSize={"lg"} color={"white"}>Pengaturan Bahasa</Text>
                    </Button>
                    

                    {/* HUBUNGI KAMI */}
                    <Button  marginBottom={5} bgColor={"blue.500"} onPress={() => { setModalVisible(!modalVisible); }}>
                        <Text fontSize={"lg"} color={"white"}>Pengaturan Privasi</Text>
                    </Button>

                    {/* KEBIJAKAN DUMMY */}
                    <Button  bgColor={"blue.500"}>
                        <Text fontSize={"lg"} color={"white"}>Pengaturan Notifikasi</Text>
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

export default Pengaturan;