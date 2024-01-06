import { Button, Box, VStack, Input, Center, Image, Heading, Pressable, StatusBar, ScrollView, Text, Alert } from "native-base";
import React, { useState, useEffect } from "react";
import { Header } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal } from "native-base";
import { addHospital, getHospital } from "../src/actions/AuthAction";

const AdminHospital = ({ navigation }) => { // Tambahkan parameter props
    const [namaRs, setNamaRs] = useState('');
    const [telepon, setTelepon] = useState('');
    const [alamat, setAlamat] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleModalOK = () => {
        toggleModal(); // Hide the modal
        navigation.navigate("AdminTabs", { refresh: true });
    };

    const toggleAlert = (message) => {
        setShowAlert(!showAlert);
        setAlertMessage(message);
    };

    useEffect(() => {
        const fetchData = async () => {
            const hospitals = await getHospital();
        };

        const unsubscribe = navigation.addListener("focus", fetchData);

        return () => {
            unsubscribe();
        };
    }, [navigation]);


    const onAddHospital = async () => {
        if (namaRs && alamat && telepon) {
            const data = {
                namaRs: namaRs,
                alamat: alamat,
                telepon: telepon,
            };

            console.log(data);
            try {
                await addHospital(data);
                toggleModal(); // Show the modal after saving the data/ Set the state to show the modal
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
        <>
            <Box bgColor={"white"} p={2}>
                <Header title={"Kembali"} withBack={true} />
                <Button onPress={() => navigation.navigate("admin-data-hospital")}
                    alignSelf="flex-end"
                    bgColor="info.500"
                    borderRadius="full"
                    w={"100"} h={"10"} mr={10}
                    mt={-10}><Text bold color={"white"}>Data RS</Text>
                </Button>
            </Box>

            <SafeAreaView>
                <ScrollView h={"full"}>
                    <StatusBar barStyle="dark-content" />

                    <Box bgColor={"blueGray.100"}>

                        <Box alignSelf={"flex-end"} w={"container"} mr={-5} mt={0} h={"container"}>
                            <Box alignSelf="center" mb={1} mt={8}>
                                <Image alt="4" source={require("../assets/logo1.png")}
                                    w={200} h={100} />
                            </Box>
                        </Box>

                        <Box>
                            <Heading fontSize={"3xl"} ml={"8"} mt={-11} color={"info.400"} alignSelf={"flex-start"}>
                                Rumah Sakit
                            </Heading>
                        </Box>

                        <Box mt={"1"} alignSelf={"flex-start"} ml={8} >
                            <Heading fontSize={"2xl"} color={"blue.300"} fontWeight={"light"} >
                                Silahkan Masukan Data Baru
                            </Heading>
                        </Box>

                        <Box mt={"5"}>
                            <Image source={require("../assets/RS.jpeg")} borderRadius={20} resizeMode="cover" alt="8"
                                opacity={"20"} alignSelf={"center"} h={450} w={350} />

                            <Box mt={-450} alignSelf={"center"} h={450} w={350}>
                                <VStack space={4} mt="0">

                                    <Input alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"}
                                        bgColor={"info.100"} mt={7} h={"12%"} placeholder="Nama Rumah Sakit" value={namaRs} onChangeText={(namaRs) => setNamaRs(namaRs)} />

                                    <Input alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"}
                                        bgColor={"info.100"} mt={5} h={"12%"} placeholder="No Telepon Rumah Sakit" value={telepon} onChangeText={(telepon) => setTelepon(telepon)} />

                                    <Input alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"}
                                        bgColor={"info.100"} mt={5} h={"28%"} placeholder="Alamat Rumah Sakit" value={alamat} onChangeText={(alamat) => setAlamat(alamat)} />

                                    <Button alignSelf={"center"} bgColor={"white"} w={300} borderColor={"indigo.300"} borderWidth={"2"} borderRadius={15} fontSize={"xl"}
                                        mt={5} h={"15%"} onPress={() => { onAddHospital(); }} >
                                        <Text color={"blue.400"} fontWeight={"semibold"} fontSize={"xl"}>Tambahkan</Text>
                                    </Button>
                                </VStack>
                            </Box>
                        </Box>

                        <Box mt={5}>
                            <Text alignSelf={"center"} fontSize={"md"} ml={0}>
                                Cek kembali
                                <Text color={"red.500"} fontWeight={"bold"}> Data </Text>
                                yang akan di tambahkan!
                            </Text>
                        </Box>

                        <Modal isOpen={isModalVisible} onClose={toggleModal}>
                            <Box p={5} bgColor={"white"} borderRadius={10}>
                                <Text fontSize={20}>Data Berhasil Ditambahkan</Text>
                                <Button mt={4} onPress={handleModalOK}>
                                    <Text fontSize={18} color={"white"} bold>
                                        Tutup
                                    </Text>
                                </Button>
                            </Box>
                        </Modal>
                    </Box>
                </ScrollView>
            </SafeAreaView>
        </>

    );
}

export default AdminHospital;


