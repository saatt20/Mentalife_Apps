import { Button, Box, VStack, Input, Center, FormControl, Select, Image, Heading, Pressable, StatusBar, ScrollView, Text, Alert } from "native-base";
import React, { useState, useEffect } from "react";
import { Header } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal } from "native-base";
import { addHospital, getHospital } from "../src/actions/AuthAction";
<<<<<<< HEAD
import axios from 'axios';
=======
import axios from "axios";
>>>>>>> f1460fbce3521ca8368393b6ed5d489b847e666a

const AdminHospital = ({ navigation }) => {
    const [namaRs, setNamaRs] = useState('');
    const [telepon, setTelepon] = useState('');
    const [alamat, setAlamat] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [selectProvinsi, setSelectProvinsi] = useState('');
<<<<<<< HEAD
    const [cityList, setCityList] = useState([]);
    const [provinceList, setProvinceList] = useState([]);
=======
    const [provinceList, setProvinceList] = useState([]);

>>>>>>> f1460fbce3521ca8368393b6ed5d489b847e666a

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

<<<<<<< HEAD
    useEffect(() => {
        // Ambil data provinsi dari API
        axios.get('https://wilayah.id/api/provinces.json')
            .then(response => {
                setProvinceList(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching province data:', error);
            });
    }, []);

    useEffect(() => {
        // Ambil data kota dari API berdasarkan kode provinsi
        if (selectProvinsi) {
            const provinceCode = provinceList.find((province) => province.name === selectProvinsi)?.code;

            if (provinceCode) {
                axios.get(`https://wilayah.id/api/regencies/${provinceCode}.json`)
                    .then(response => {
                        setCityList(response.data.data);
                    })
                    .catch(error => {
                        console.error('Error fetching city data:', error);
                    });
            }
        }
    }, [selectProvinsi]);

=======
    // const fetchProvinces = async () => {
    //     try {
    //         const response = await fetch(
    //             "https://alamat.thecloudalert.com/api/provinsi/get/"
    //         );
    //         if (response.ok) {
    //             const data = await response.json();
    //             setProvinces(data);
    //         } else {
    //             throw new Error("Gagal mengambil data provinsi");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         // Handle error, bisa menampilkan pesan kepada pengguna
    //     }
    // };
    useEffect(() => {
        // Ambil data provinsi dari API
        axios.get('https://wilayah.id/api/provinces.json')
            .then(response => {
                setProvinceList(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching province data:', error);
            });
    }, []);


    // useEffect(() => {
    //     fetchProvinces(); // Moved fetchProvinces into a separate useEffect
    // }, []); // Run only once when the component mounts

    const handleProvinceChange = (provinceName) => {
        setSelectProvinsi(provinceName);
    };


>>>>>>> f1460fbce3521ca8368393b6ed5d489b847e666a
    const onAddHospital = async () => {
        if (namaRs && alamat && telepon && selectProvinsi) {
            const data = {
                namaRs: namaRs,
                alamat: alamat,
                telepon: telepon,
                provinceName: selectProvinsi, // Ambil ID provinsi yang dipilih
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

            <ScrollView>
                <StatusBar barStyle="dark-content" />

                <Box bgColor={"blueGray.100"}>

                    <Box alignSelf={"flex-end"} w={"container"} mr={-5} mt={0} h={"container"}>
                        <Box alignSelf="center" mb={1} mt={3}>
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
                        <Image source={require("../assets/RS.jpeg")} borderTopRadius={20} resizeMode="cover" alt="8"
                            opacity={"20"} alignSelf={"center"} h={500} w={350} />

<<<<<<< HEAD
                            <Box mt={-450} alignSelf={"center"} h={450} w={350}>
                                <VStack space={2} mt="0">
                                    <FormControl>
                                        <Input alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"}
                                            bgColor={"info.100"} mt={7} h={"12%"} placeholder="Nama Rumah Sakit" value={namaRs} onChangeText={(namaRs) => setNamaRs(namaRs)} />
=======
                        <Box mt={-450} alignSelf={"center"} h={450} w={350}>
                            <VStack space={1} mt="0">
                                <FormControl>
                                    <Input alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"}
                                        bgColor={"info.100"} mt={7} h={"12%"} placeholder="Nama Rumah Sakit" value={namaRs} onChangeText={(namaRs) => setNamaRs(namaRs)} />
>>>>>>> f1460fbce3521ca8368393b6ed5d489b847e666a

                                        <Input alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"}
                                            bgColor={"info.100"} mt={5} h={"12%"} placeholder="No Telepon Rumah Sakit" value={telepon} onChangeText={(telepon) => setTelepon(telepon)} keyboardType="numeric" />

                                        <Input alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"}
                                            bgColor={"info.100"} mt={5} h={"20%"} placeholder="Alamat Rumah Sakit" value={alamat} onChangeText={(alamat) => setAlamat(alamat)} />

<<<<<<< HEAD
                                        <Select
                                            selectedValue={selectProvinsi}
                                            alignSelf={"center"} borderColor={"blue.200"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"}
                                            bgColor={"info.100"} mt={5} h={"50"} placeholder="Pilih Provinsi"
                                            onValueChange={(itemValue) => setSelectProvinsi(itemValue)}
                                        >
                                            {provinceList.map((province, index) => (
                                                <Select.Item key={index} label={province.name} value={province.name} />
                                            ))}
                                        </Select>


                                        <Button alignSelf={"center"} bgColor={"white"} w={300} borderColor={"indigo.300"} borderWidth={"2"} borderRadius={15} fontSize={"xl"}
                                            mt={5} h={"15%"} onPress={() => { onAddHospital(); }} >
                                            <Text color={"blue.400"} fontWeight={"semibold"} fontSize={"xl"}>Tambahkan</Text>
                                        </Button>
                                    </FormControl>
                                </VStack>
                            </Box>
                        </Box>

                        <Box mt={5} alignSelf={"center"} >
                            <Text fontSize={"md"}>
                            Cek kembali Data
                            </Text>
                            <Text color={"red.500"} fontWeight={"bold"} ml={-4}> 
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

                        <Box h={150}/>
=======
                                    <Select
                                        selectedValue={selectProvinsi}
                                        
                                        borderColor={"blue.200"}
                                        placeholder="Pilih Provinsi"
                                        onValueChange={(itemValue) => setSelectProvinsi(itemValue)}
                                        alignSelf={"center"} w={300} borderWidth={"2"} borderRadius={15} fontSize={"md"}
                                        bgColor={"info.100"} mt={5} h={"30%"} mb={-25}
                                    >
                                        {provinceList.map((province, index) => (
                                            <Select.Item key={index} label={province.name} value={province.name} />
                                        ))}
                                    </Select>

                                    <Button alignSelf={"center"} bgColor={"white"} w={300} borderColor={"indigo.300"} borderWidth={"2"} borderRadius={15} fontSize={"xl"}
                                        h={"10%"} onPress={() => { onAddHospital(); }} mt={-5}>
                                        <Text color={"blue.400"} fontWeight={"semibold"} fontSize={"xl"}mt={-1}>Tambahkan</Text>
                                    </Button>
                                </FormControl>
                            </VStack>

                            <Box mt={-5}>
                                <Text alignSelf={"center"} fontSize={"md"} ml={0}>
                                    Cek kembali
                                    <Text color={"red.500"} fontWeight={"bold"}> Data </Text>
                                    yang akan di tambahkan!
                                </Text>
                            </Box>
                        </Box>
>>>>>>> f1460fbce3521ca8368393b6ed5d489b847e666a
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
        </>
    );
}

export default AdminHospital;


