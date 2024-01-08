import {
    Text,
    Box,
    Button,
    useDisclose,
    Switch,
    Image,
    VStack,
    Heading,
    useBreakpointValue,
    View,
    Modal,
} from "native-base";
import { Header } from "../components";
import React, { useState } from "react";

const Pengaturan = () => {
    const flexDir = useBreakpointValue({
        base: "row",
        lg: "row",
    });
    const [settingEnabled, setSettingEnabled] = useState(false);
    const [settingEnabled1, setSettingEnabled1] = useState(false);
    const { isOpen: isOpenNotifikasi, onOpen: onOpenNotifikasi, onClose: onCloseNotifikasi } = useDisclose();
    const { isOpen: isOpenBahasa, onOpen: onOpenBahasa, onClose: onCloseBahasa } = useDisclose();

    const toggleSetting = () => {
        setSettingEnabled(!settingEnabled);
    };
    const toggleSetting1 = () => {
        setSettingEnabled1(!settingEnabled1);
    };

    return (
        <>
            <Header title={"Mental Health"} withBack={true} />
            <Box flex={1}>
                <Heading p={5}>Pengaturan</Heading>

                <Box alignSelf={"center"} w={"sm"}>
                    {/* Notifikasi*/}
                    <Button marginBottom={5} bgColor={"blue.500"} onPress={onOpenNotifikasi}>
                        <Text fontSize={"lg"} color={"white"}>
                            Pengaturan Notifikasi
                        </Text>
                    </Button>

                    {/* Modal for Pengaturan Notifikasi */}
                    <Modal isOpen={isOpenNotifikasi} onClose={onCloseNotifikasi}>
                        <Modal.Content >
                            <Modal.CloseButton />
                            <Modal.Header bgColor={"blue.500"}>
                                <Text color={"white"} fontSize={"lg"}>Pengaturan Notifikasi</Text>
                            </Modal.Header>
                            <Modal.Body>
                                <Text fontSize="lg" mb={4}>
                                    Hidupkan Notifikasi
                                </Text>
                                <Switch
                                    size="lg"
                                    isChecked={settingEnabled}
                                    onToggle={toggleSetting}
                                    accessibilityLabel="Toggle Setting"
                                    alignSelf={"center"}
                                />
                                <Text fontSize="md" mt={2}>
                                    {settingEnabled ? "Notifikasi: On" : "Notifikasi: Off"}
                                </Text>
                            </Modal.Body>
                        </Modal.Content>
                    </Modal>

                    {/* Bahasa*/}
                    <Button marginBottom={5} bgColor={"blue.500"} onPress={onOpenBahasa}>
                        <Text fontSize={"lg"} color={"white"}>
                            Pengaturan Bahasa
                        </Text>
                    </Button>

                    {/* Modal for Pengaturan Bahasa */}
                    <Modal isOpen={isOpenBahasa} onClose={onCloseBahasa}>
                        <Modal.Content >
                            <Modal.CloseButton />
                            <Modal.Header bgColor={"blue.500"}>
                                <Text color={"white"} fontSize={"lg"}>Pengaturan Bahasa</Text>
                            </Modal.Header>
                            <Modal.Body>
                                <Text fontSize="lg" mb={4}>
                                    Ganti Bahasa
                                </Text>
                                <Switch
                                    size="lg"
                                    isChecked={settingEnabled1}
                                    onToggle={toggleSetting1}
                                    accessibilityLabel="Toggle Setting"
                                    alignSelf={"center"}
                                />
                                <Text fontSize="md" mt={2}>
                                    {settingEnabled1 ? "English" : "Bahasa Indonesia"}
                                </Text>
                            </Modal.Body>
                        </Modal.Content>
                    </Modal>

                    {/* KEBIJAKAN DUMMY */}
                    <Button bgColor={"blue.500"}>
                        <Text fontSize={"lg"} color={"white"}>
                            Pengaturan Privasi
                        </Text>
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